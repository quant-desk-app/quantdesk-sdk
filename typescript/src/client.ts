/**
 * QuantDesk Protocol Client
 */
import { BorshAccountsCoder } from '@coral-xyz/anchor'
import IDL from './idl.json'

import axios, { AxiosInstance } from 'axios'
import { Connection } from '@solana/web3.js'
import { WalletAdapter } from '@solana/wallet-adapter-base'
import { 
  Market, 
  Order, 
  Position, 
  PortfolioSummary, 
  RiskMetrics,
  CollateralAccount,
  LiquidityAuction,
  ApiResponse
} from './types'

export class QuantDeskClient {
  private api: AxiosInstance
  private connection: Connection
  private wallet?: WalletAdapter
  private coder = new BorshAccountsCoder(IDL as any)

  constructor(
    apiUrl: string,
    rpcUrl: string,
    wallet?: WalletAdapter | undefined
  ) {
    this.api = axios.create({
      baseURL: apiUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.connection = new Connection(rpcUrl, 'confirmed')
    this.wallet = wallet
  }

  // Market Data
  async getMarkets(): Promise<Market[]> {
    const response = await this.api.get<ApiResponse<Market[]>>('/api/markets')
    return response.data.data || []
  }

  async getMarket(symbol: string): Promise<Market> {
    const response = await this.api.get<ApiResponse<Market>>(`/api/markets/${symbol}`)
    if (!response.data.data) {
      throw new Error(`Market ${symbol} not found`)
    }
    return response.data.data
  }

  async getMarketPrice(symbol: string): Promise<number> {
    const response = await this.api.get<ApiResponse<{ price: number }>>(`/api/markets/${symbol}/price`)
    if (!response.data.data) {
      throw new Error(`Price for ${symbol} not available`)
    }
    return response.data.data.price
  }

  // Trading
  /** @deprecated Use V2 instructions for zero-copy support */
  async placeOrder(order: Partial<Order>): Promise<Order> {
    const response = await this.api.post<ApiResponse<Order>>('/api/orders/place', order)
    if (!response.data.data) {
      throw new Error('Failed to place order')
    }
    return response.data.data
  }

  async getOrders(symbol?: string): Promise<Order[]> {
    const params = symbol ? { symbol } : {}
    const response = await this.api.get<ApiResponse<Order[]>>('/api/orders', { params })
    return response.data.data || []
  }

  async getOrder(id: string): Promise<Order> {
    const response = await this.api.get<ApiResponse<Order>>(`/api/orders/${id}`)
    if (!response.data.data) {
      throw new Error(`Order ${id} not found`)
    }
    return response.data.data
  }

  async cancelOrder(id: string): Promise<void> {
    await this.api.delete(`/api/orders/${id}`)
  }

  // Positions
  /** @deprecated Use PortfolioAccount for unified positions */
  async getPositions(): Promise<Position[]> {
    const response = await this.api.get<ApiResponse<Position[]>>('/api/positions')
    return response.data.data || []
  }

  async getPosition(id: string): Promise<Position> {
    const response = await this.api.get<ApiResponse<Position>>(`/api/positions/${id}`)
    if (!response.data.data) {
      throw new Error(`Position ${id} not found`)
    }
    return response.data.data
  }

  // Portfolio
  async getPortfolioSummary(): Promise<PortfolioSummary> {
    const response = await this.api.get<ApiResponse<PortfolioSummary>>('/api/portfolio/summary')
    if (!response.data.data) {
      throw new Error('Failed to get portfolio summary')
    }
    return response.data.data
  }

  async getPortfolioAnalytics(): Promise<any> {
    const response = await this.api.get<ApiResponse<any>>('/api/portfolio/analytics')
    return response.data.data || {}
  }

  // Risk Management
  async getRiskMetrics(): Promise<RiskMetrics> {
    const response = await this.api.get<ApiResponse<RiskMetrics>>('/api/risk/metrics')
    if (!response.data.data) {
      throw new Error('Failed to get risk metrics')
    }
    return response.data.data
  }

  async getRiskAlerts(): Promise<any[]> {
    const response = await this.api.get<ApiResponse<any[]>>('/api/risk/alerts')
    return response.data.data || []
  }

  // Cross-Collateral
  async getCollateralAccounts(): Promise<CollateralAccount[]> {
    const response = await this.api.get<ApiResponse<CollateralAccount[]>>('/api/collateral/accounts')
    return response.data.data || []
  }

  async addCollateral(accountId: string, symbol: string, amount: number): Promise<void> {
    await this.api.post(`/api/collateral/accounts/${accountId}/add`, {
      symbol,
      amount
    })
  }

  // JIT Liquidity
  async getLiquidityAuctions(): Promise<LiquidityAuction[]> {
    const response = await this.api.get<ApiResponse<LiquidityAuction[]>>('/api/liquidity/auctions')
    return response.data.data || []
  }

  async createLiquidityAuction(auction: Partial<LiquidityAuction>): Promise<LiquidityAuction> {
    const response = await this.api.post<ApiResponse<LiquidityAuction>>('/api/liquidity/auctions', auction)
    if (!response.data.data) {
      throw new Error('Failed to create liquidity auction')
    }
    return response.data.data
  }

  // V2 Zero-Copy Support
  decodePortfolioAccount(buffer: Buffer): any {
    try {
      return this.coder.decode('PortfolioAccount', buffer)
    } catch (e) {
      throw new Error('Failed to decode PortfolioAccount: ' + e)
    }
  }

  decodeMarketV2(buffer: Buffer): any {
    try {
      return this.coder.decode('MarketV2', buffer)
    } catch (e) {
      throw new Error('Failed to decode MarketV2: ' + e)
    }
  }

  // Utility methods
  setWallet(wallet: WalletAdapter): void {
    this.wallet = wallet
  }

  getConnection(): Connection {
    return this.connection
  }

  getWallet(): WalletAdapter | undefined {
    return this.wallet
  }
}

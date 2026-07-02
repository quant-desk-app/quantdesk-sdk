# Devnet Testing Examples

This directory contains working examples for testing QuantDesk's Solana devnet integration.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run all examples
pnpm run test-all

# Run specific examples
pnpm run basic-service-test
pnpm run wallet-integration
pnpm run api-integration
```

All HTTP examples read the gateway origin from the `QD_API` environment variable:

```bash
export QD_API=https://api.quantdesk.app
```

## 📁 Examples

### 1. Basic Service Testing (`basic-service-test.js`)
Tests the health of the QuantDesk gateway.

```javascript
const QD_API = process.env.QD_API;

const services = [
  { name: 'Gateway health', url: `${QD_API}/health` },
  { name: 'API health', url: `${QD_API}/api/health` }
];

async function testServices() {
  for (const service of services) {
    try {
      const response = await fetch(service.url);
      const data = await response.json();
      console.log(`✅ ${service.name}: ${data.status || 'healthy'}`);
    } catch (error) {
      console.log(`❌ ${service.name}: ${error.message}`);
    }
  }
}
```

### 2. Wallet Integration (`wallet-integration.js`)
**Devnet script only** — generates an ephemeral keypair and requests a devnet airdrop for protocol testing.

> **Production wallet auth:** The QuantDesk trading terminal uses **[Privy](https://docs.privy.io/)** — connect an external Solana wallet, email, or Telegram MPC from the in-app auth modal. That flow is **not** what this script demonstrates; it exists for automated devnet checks only.

```javascript
import { Connection, Keypair } from '@solana/web3.js';

async function testWalletIntegration() {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  const wallet = Keypair.generate();

  try {
    // Fund wallet with devnet SOL
    const signature = await connection.requestAirdrop(wallet.publicKey, 2 * 1e9);
    await connection.confirmTransaction(signature);

    // Check balance
    const balance = await connection.getBalance(wallet.publicKey);
    console.log(`✅ Wallet funded: ${balance / 1e9} SOL`);

    return wallet;
  } catch (error) {
    console.error('❌ Wallet funding failed:', error);
    throw error;
  }
}
```

### 3. Program Interaction
Tests interaction with the deployed QuantDesk program.

```javascript
import { Connection, PublicKey } from '@solana/web3.js';

async function testQuantDeskProgram() {
  const connection = new Connection('https://api.devnet.solana.com');
  const programId = new PublicKey('C2T3UnvGdHwEkspXJG7JyAhwo6VKQEKjN6eCq69guYSw');

  try {
    // Check if program exists
    const accountInfo = await connection.getAccountInfo(programId);

    if (!accountInfo) {
      throw new Error('QuantDesk program not found on devnet');
    }

    console.log('✅ QuantDesk Program Status:', {
      executable: accountInfo.executable,
      dataLength: accountInfo.data.length,
      balance: `${accountInfo.lamports / 1e9} SOL`,
      owner: accountInfo.owner.toString()
    });

    return accountInfo;
  } catch (error) {
    console.error('❌ Program check failed:', error);
    throw error;
  }
}
```

### 4. Real-Time Data Testing
Tests fetching real-time market data from the gateway.

```javascript
const QD_API = process.env.QD_API;

async function testRealTimeData() {
  const endpoints = [
    { name: 'Latest Prices', url: `${QD_API}/api/prices/latest` },
    { name: 'Whale Transactions', url: `${QD_API}/api/whales/recent?limit=5` },
    { name: 'Market Summary', url: `${QD_API}/api/market/summary` },
    { name: 'Wallet Balance', url: `${QD_API}/api/wallet/balance` }
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.url);
      const data = await response.json();

      console.log(`✅ ${endpoint.name}:`, {
        success: data.success,
        dataKeys: Object.keys(data.data || {}),
        timestamp: data.data?.timestamp || data.timestamp
      });
    } catch (error) {
      console.log(`❌ ${endpoint.name}: ${error.message}`);
    }
  }
}
```

## 🧪 Integration Testing

A comprehensive test validates all components working together.

```javascript
import { describe, it, expect, beforeAll } from 'vitest';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';

const QD_API = process.env.QD_API;

describe('QuantDesk Devnet Integration', () => {
  let connection: Connection;
  let testWallet: Keypair;

  beforeAll(async () => {
    connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    testWallet = Keypair.generate();

    // Fund test wallet
    try {
      const signature = await connection.requestAirdrop(testWallet.publicKey, 2 * 1e9);
      await connection.confirmTransaction(signature);
      console.log('✅ Test wallet funded');
    } catch (error) {
      console.warn('⚠️ Could not fund test wallet:', error);
    }
  }, 30000);

  it('should reach the gateway', async () => {
    const response = await fetch(`${QD_API}/health`);
    expect(response.ok).toBe(true);
  });

  it('should interact with QuantDesk program', async () => {
    const programId = new PublicKey('C2T3UnvGdHwEkspXJG7JyAhwo6VKQEKjN6eCq69guYSw');
    const accountInfo = await connection.getAccountInfo(programId);

    expect(accountInfo).toBeDefined();
    expect(accountInfo!.executable).toBe(true);
    expect(accountInfo!.owner.toString()).toBe('BPFLoaderUpgradeab1e11111111111111111111111');
  });

  it('should fetch real-time data', async () => {
    const response = await fetch(`${QD_API}/api/prices/latest`);
    const data = await response.json();

    expect(data.success).toBe(true);
    expect(data.data.prices).toHaveProperty('SOL');
    expect(data.data.prices).toHaveProperty('BTC');
    expect(data.data.prices).toHaveProperty('ETH');
  });
});
```

## 🔧 Configuration

### Environment Variables

```bash
# .env file
SOLANA_RPC_URL=https://api.devnet.solana.com
QUANTDESK_PROGRAM_ID=C2T3UnvGdHwEkspXJG7JyAhwo6VKQEKjN6eCq69guYSw
QD_API=https://api.quantdesk.app
```

## 📊 Expected Output

### Successful Service Test
```
✅ Gateway health: healthy
✅ API health: healthy
```

### Successful Wallet Integration
```
✅ Wallet funded: 2.0000 SOL
```

### Successful Program Interaction
```
✅ QuantDesk Program Status: {
  executable: true,
  dataLength: 36,
  balance: '0.00114144 SOL',
  owner: 'BPFLoaderUpgradeab1e11111111111111111111111'
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Gateway unreachable**
   - Confirm `QD_API` points at a reachable gateway origin.

2. **Wallet funding fails**
   ```bash
   # Use Solana faucet
   solana airdrop 2 --url https://api.devnet.solana.com
   ```

3. **Program not found**
   - Ensure you're connected to devnet
   - Check program ID is correct: `C2T3UnvGdHwEkspXJG7JyAhwo6VKQEKjN6eCq69guYSw`

## 📚 Additional Resources

- [Solana Devnet Documentation](https://docs.solana.com/developing/test-validator)
- [QuantDesk Documentation](https://docs.quantdesk.app)
- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)

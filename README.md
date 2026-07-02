# QuantDesk SDK & Examples

The official developer kit for interacting with the QuantDesk high-performance perpetual trading protocol.

## Features
- **Low-Latency Order Placement**: Full support for Solana synthetic perp trade execution.
- **Real-Time Data Streams**: WebSocket wrappers for market pricing, orderbook depths, and account updates.
- **Quant Execution Examples**: Sample code for market-making, algorithmic arbitrage, and risk monitoring.

## Installation
```bash
pnpm add @quantdesk/sdk
```

## Structure
- `idl/`: On-chain program interface (Anchor IDL) for the QuantDesk perpetuals program.
- `typescript/`: Node.js/TypeScript SDK core (`@quantdesk/sdk`).
- `examples/`: Code samples for API integration, trading bot setup, and on-chain account reading.
- `scripts/`: Local environment setup helpers.

## License

MIT — see `typescript/package.json`.
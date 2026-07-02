# QuantDesk Examples

This directory contains working code examples for integrating with QuantDesk's public APIs and testing interfaces.

## 📁 Directory Structure

```
examples/
├── devnet-testing/          # Solana devnet testing examples
├── api-integration/         # REST gateway integration examples
├── typescript/              # Typed order-flow examples
├── ai-integration/          # Agent context integration examples
└── README.md               # This file
```

Standalone starter files also live at the root of `examples/`: `basic-trading-demo.js`, `api-integration-example.ts`, and `smart-contract-interactions.ts`.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- **Trading in the app:** a Privy-managed session (wallet, email, or Telegram MPC) — see [Start trading in 5 minutes](https://docs.quantdesk.app/docs/getting-started/start-trading-in-5-minutes)
- **Running these scripts:** a reachable QuantDesk gateway (`QD_API`); devnet examples use ephemeral keypairs for protocol testing, not Privy

### Installation
```bash
# Install dependencies for examples
cd examples
pnpm install

# Run examples
pnpm run devnet-testing
pnpm run api-integration
pnpm run wallet-integration
```

## 📚 Available Examples

### 1. Devnet Testing Examples (`devnet-testing/`)
- Basic gateway health testing
- Devnet keypair + airdrop checks (`wallet-integration.js`) — **not** the in-app Privy wallet flow
- QuantDesk program interaction
- Real-time data fetching via `$QD_API`

### 2. API Integration Examples (`api-integration/`)
- Data ingestion API usage (`data-ingestion-examples.js`)
- Service health monitoring
- Market data retrieval

### 3. TypeScript Examples (`typescript/`)
- Basic trading flow (`basic-trading.ts`)
- Advanced orders (`advanced-orders.ts`)

### 4. AI Integration Examples (`ai-integration/`)
- Portfolio analysis (`ai-portfolio-analysis.ts`)
- Sentiment analysis (`ai-sentiment-analysis.ts`)

## 🔧 Running Examples

### Service Health Testing
```bash
cd examples/devnet-testing
node basic-service-test.js
```

### API Integration
```bash
cd examples/api-integration
node data-ingestion-examples.js
```

### Wallet Integration
```bash
cd examples/devnet-testing
node wallet-integration.js
```

## 📖 Example Documentation

Each example directory contains:
- **README.md**: Detailed explanation of the example
- **Working code**: Copy-paste ready examples
- **Configuration**: Environment setup instructions

## 🤝 Contributing Examples

We welcome new examples! Please:
1. Follow the existing directory structure
2. Include comprehensive documentation
3. Add tests for your examples
4. Ensure examples work out-of-the-box

See the [contributing guide](https://docs.quantdesk.app/docs/community/contributing) for code-quality rules (linting, secret scanning).

## 📄 License

Examples are provided under the MIT License, the same as the main project.

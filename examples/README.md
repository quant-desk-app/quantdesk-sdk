# QuantDesk Examples

Last Updated: 2025-10-25

This directory contains working code examples for integrating with QuantDesk's public APIs and testing interfaces.

## 📁 Directory Structure

```
examples/
├── devnet-testing/          # Solana devnet testing examples
├── api-integration/         # API integration examples
├── wallet-integration/      # Wallet connection examples
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Solana wallet
- QuantDesk services running locally

### Installation
```bash
# Install dependencies for examples
cd examples
npm install

# Run examples
npm run devnet-testing
npm run api-integration
npm run wallet-integration
```

## 📚 Available Examples

### 1. Devnet Testing Examples (`devnet-testing/`)
- Basic service health testing
- Wallet integration and funding
- QuantDesk program interaction
- Real-time data fetching

### 2. API Integration Examples (`api-integration/`)
- Data ingestion API usage
- Service health monitoring
- Market data retrieval
- Whale transaction monitoring

### 3. Wallet Integration Examples (`wallet-integration/`)
- Solana wallet connection
- Transaction signing
- Balance checking
- Program interaction

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
cd examples/wallet-integration
node wallet-connection.js
```

## 📖 Example Documentation

Each example directory contains:
- **README.md**: Detailed explanation of the example
- **Working code**: Copy-paste ready examples
- **Test files**: Integration tests for validation
- **Configuration**: Environment setup instructions

## 🤝 Contributing Examples

We welcome new examples! Please:
1. Follow the existing directory structure
2. Include comprehensive documentation
3. Add tests for your examples
4. Ensure examples work out-of-the-box

## 📄 License

Examples are provided under the same Apache License 2.0 as the main project.
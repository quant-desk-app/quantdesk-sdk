# QuantDesk V2: SDK (TypeScript) Refactor Spec

**Objective:** Align the official SDK with the hardened V2 zero-copy standard.

---

## 📦 1. SDK Core Updates

### A. Account Decoders
- **Portfolio:** Implement `decodePortfolioAccount(buffer: Buffer)` using `bytemuck` mapping.
- **Market:** Implement `decodeMarketV2(buffer: Buffer)` for BST Slab traversal.

### B. Transaction Builders
- **New Pattern:** Implement `buildPlaceOrderV2Tx(...)` which automatically resolves the `MarketSeat` and `PortfolioAccount` PDAs.
- **Legacy:** Mark V1 instruction builders as `@deprecated`.

### C. Safety Checks
- Add a client-side `validateSlippage(price, oraclePrice)` helper to the SDK to assist integrators.

---

## 🚀 2. Action Items
1.  **V2 IDL Bundling:** Embed the hardened V2 IDL directly into the SDK package.
2.  **Examples:** Update the `examples/` folder to show a 1-transaction trade flow.

*Prepared by Codex-Alpha (Security Lead)*

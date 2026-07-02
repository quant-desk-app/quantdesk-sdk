# Agent Context Integration Examples

This directory contains examples for feeding QuantDesk market and portfolio data into your own agent tooling.

## Examples

| File | Purpose |
| --- | --- |
| `ai-portfolio-analysis.ts` | Portfolio analysis and recommendations from gateway data |
| `ai-sentiment-analysis.ts` | Market sentiment analysis using public data feeds |

## Quick Start

```bash
export QD_API=https://api.quantdesk.app
```

```typescript
// Fetch portfolio context from the gateway, then pass to your agent
const response = await fetch(`${process.env.QD_API}/api/v2/portfolio`, {
  headers: { Authorization: `Bearer ${process.env.QD_TOKEN}` }
});
const portfolio = await response.json();
```

## Documentation

- [QuantDesk Documentation](https://docs.quantdesk.app)
- [Developer quickstart](https://docs.quantdesk.app/docs/developers/quickstart)
- [Contributing examples](https://docs.quantdesk.app/docs/community/contributing)

## License

MIT — same as the main project.

# Osmar Morales · Portfolio

**I build AI-native teams.**

I create systems and processes that automate complex work and scale delivery. This portfolio connects financial automation, data platforms and enterprise AI through interactive case studies, career evidence and a public profile that people and agents can read.

[Live portfolio](https://osmarmorales.io/) · [AI platform showcase](https://github.com/osmarmorales1/ai-platform-showcase) · [LinkedIn](https://www.linkedin.com/in/osmarmorales/)

This is the **portable public source edition** of the September 2026 portfolio. The live production build uses Vinext and Vercel; this edition builds the same public page and interactions with standalone Vite and ordinary public dependencies. Its cloud-agent backend is deliberately disconnected by default.

## Run it

Node.js 24 or newer and npm are required. All dependencies come from the public npm registry.

```sh
npm ci
npm run export:public
npm run dev
```

Open the local URL printed by Vite. To build and inspect the production version:

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

`dist/` contains prerendered HTML, interactive React, local fonts, approved public images, the résumé, and JSON profile data. The page can be read before JavaScript runs.

## What is public here

- React/TypeScript components, styles, and the content used on the portfolio.
- The read-only public profile API, JSON-LD, OpenAPI description, and `llms.txt`.
- Browser-side WebMCP tool registration with public evidence and a capacity calculation.
- Generic static hosting configuration and the optional guest-service interface.
- [Architecture](docs/architecture.md), [deployment](docs/deployment.md), and [asset attribution](THIRD_PARTY_NOTICES.md).

The separate agent backend, community signers, subscription integrations, credentials, infrastructure accounts, employer code, and internal records are not part of this repository. This frontend builds without any of them.

## Cloud agents and the native community

By default, the cloud-agent buttons explain that the live lab is hosted separately and offer a link to it. Building or previewing this repository never starts a session or consumes the portfolio’s model allowance.

A deployer operating a compatible **own backend** can explicitly set the public browser setting `VITE_PUBLIC_AGENT_ORIGIN`. See [the interface contract](docs/guest-interface.md). This value is an HTTPS origin, not a secret or model API key. Browser-delivered environment variables are public.

The Buzz community link points to the live portfolio, which provides the current invitation and official downloads. Expiring invitation tokens and member keys are not embedded in this source release.

## Professional evidence

Enterprise outcomes are candidate-reported career evidence, confirmed September 2026. **3× delivery pace with the same resources** and **500+ total users** describe Agent Factory; **1k+ repositories** and **500+ pipelines** describe a separate MLOps modernization. These outcomes do not measure this portfolio or Elygent, the AI platform company I founded.

Elygent connects agents, reusable skills and shared knowledge through APIs, CLIs and MCP. I built an **Agentic Slack experience on Buzz** for human-agent communication and collaboration, with **Paperclip as the orchestration backend**. Cybersecurity work includes Numbat monitoring, scoped access and isolated execution. The public lab demonstrates cloud agents and computer use; shared local-model computing, digital twins and AI ontology are exploration areas.

Interactive capacity calculations are illustrative scenarios, not measured production performance. Product screenshots show identified interface states; the live lab is the place to inspect current behavior.

## Rights

This repository is published for inspection and local evaluation. No general open-source license is granted for original work in this release. Personal photographs, résumé content, and original visual assets remain the property of their respective owners. Third-party code, fonts, icons, and marks retain their own licenses and rights; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Public source access does not imply an endorsement by an employer or upstream project.

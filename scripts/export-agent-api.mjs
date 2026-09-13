import { mkdir, writeFile } from 'node:fs/promises';
import {
  machineProfile,
  profileStructuredData,
} from '../lib/machine-profile.ts';
const publicRoot = new URL('../public/', import.meta.url);
await mkdir(new URL('agent/', publicRoot), { recursive: true });
await mkdir(new URL('.well-known/', publicRoot), { recursive: true });
const json = (path, data) =>
  writeFile(new URL(path, publicRoot), JSON.stringify(data, null, 2) + '\n');
await json('agent/profile.json', machineProfile);
await json('agent/projects.json', {
  schemaVersion: '1.0',
  updatedAt: machineProfile.updatedAt,
  projects: machineProfile.projects,
  evidenceBoundaries: machineProfile.evidenceBoundaries,
});
await json('agent/experience.json', {
  schemaVersion: '1.0',
  updatedAt: machineProfile.updatedAt,
  experience: machineProfile.experience,
  milestones: machineProfile.milestones,
  evidenceBoundaries: machineProfile.evidenceBoundaries,
});
await json('agent/profile-page.jsonld', profileStructuredData);
await json('.well-known/portfolio.json', {
  name: 'Osmar Morales public portfolio',
  version: '1.0',
  access: 'public, read-only',
  documentation: 'https://osmarmorales.io/agents.html',
  ...machineProfile.interfaces,
});
const paths = Object.fromEntries(
  [
    [
      '/api/portfolio',
      'getPortfolio',
      'Read the complete public profile',
      'Profile',
    ],
    [
      '/api/portfolio/projects',
      'getProjects',
      'Read public project ownership and outcomes',
      'Projects',
    ],
    [
      '/api/portfolio/experience',
      'getExperience',
      'Read career dates and separate AI milestones',
      'Experience',
    ],
  ].map(([path, operationId, summary, schema]) => [
    path,
    {
      get: {
        operationId,
        summary,
        security: [],
        responses: {
          200: {
            description:
              'Public record with provenance and evidence boundaries.',
            content: {
              'application/json': {
                schema: { $ref: `#/components/schemas/${schema}` },
              },
            },
          },
        },
      },
    },
  ]),
);
await json('openapi.json', {
  openapi: '3.1.0',
  info: {
    title: 'Osmar Morales — Public Portfolio API',
    version: '1.0.0',
    description:
      'Public read-only career evidence. No authentication, model calls, private data or write operations. Dates and evidence boundaries are included in the responses.',
  },
  servers: [{ url: 'https://osmarmorales.io' }],
  paths,
  components: {
    schemas: {
      Profile: {
        type: 'object',
        required: [
          'schemaVersion',
          'updatedAt',
          'person',
          'experience',
          'projects',
          'outcomes',
          'evidenceBoundaries',
        ],
        properties: {
          schemaVersion: { type: 'string' },
          updatedAt: { type: 'string', format: 'date' },
          person: { type: 'object' },
          experience: { type: 'array', items: { type: 'object' } },
          projects: { type: 'array', items: { type: 'object' } },
          outcomes: { type: 'array', items: { type: 'object' } },
          evidenceBoundaries: { type: 'array', items: { type: 'string' } },
        },
      },
      Projects: {
        type: 'object',
        required: ['projects'],
        properties: { projects: { type: 'array', items: { type: 'object' } } },
      },
      Experience: {
        type: 'object',
        required: ['experience'],
        properties: {
          experience: { type: 'array', items: { type: 'object' } },
        },
      },
    },
  },
});
await writeFile(
  new URL('llms.txt', publicRoot),
  `# Osmar Morales\n\n> I build AI-native teams and agent platforms that scale productivity.\n\nPublic professional evidence, current September 2026. Career claims are candidate-provided. Elygent is an independent project, not the subject of this personal portfolio.\n\n## Structured interfaces\n- [Complete profile](https://osmarmorales.io/api/portfolio): identity, career, ownership, outcomes, stack and provenance.\n- [Projects](https://osmarmorales.io/api/portfolio/projects): enterprise and independent work, clearly distinguished.\n- [Experience](https://osmarmorales.io/api/portfolio/experience): formal dates and separate initiative milestones.\n- [OpenAPI](https://osmarmorales.io/openapi.json): read-only API contract.\n- [Documentation](https://osmarmorales.io/agents.html)\n\n## Human-readable evidence\n- [Resume](https://osmarmorales.io/Osmar_Morales_Resume.pdf)\n- [Public evidence](https://osmarmorales.io/portfolio-evidence.txt)\n- [LinkedIn](https://www.linkedin.com/in/osmarmorales/)\n- [GitHub](https://github.com/osmarmorales1)\n\n## Evidence boundaries\n${machineProfile.evidenceBoundaries.map((value) => '- ' + value).join('\n')}\n\n## Browser tools\nWebMCP is exposed through document.modelContext when supported: portfolio_get_profile, portfolio_get_evidence, portfolio_estimate_capacity. Capacity results are hypothetical lower bounds. The native guest sandbox is separate, browser-session scoped and resource limited; the API above does not provide private tools or model credentials.\n`,
);
await writeFile(
  new URL('agents.html', publicRoot),
  `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Agent interface · Osmar Morales</title><style>:root{color-scheme:light;font:16px/1.7 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#1a2d3a;background:#f8fbfd}body{max-width:840px;margin:0 auto;padding:50px 25px}a{color:#287091}header{display:flex;justify-content:space-between;margin-bottom:80px}h1{font-size:clamp(32px,5vw,52px);font-weight:450;line-height:1.12;letter-spacing:-.04em}p{color:#586f7e}section{margin:44px 0;border-top:1px solid #dce7ed;padding-top:24px}code,pre{font:14px/1.6 ui-monospace,monospace}pre{padding:22px;border:1px solid #dce7ed;border-radius:12px;background:white;overflow:auto}li{margin:9px 0}small{color:#718692}</style><header><a href="/">Osmar Morales</a><a href="/openapi.json">OpenAPI ↗</a></header><main><small>PUBLIC · READ-ONLY · NO AUTHENTICATION</small><h1>A human story.<br>An agent-readable record.</h1><p>Read my experience, project ownership and outcomes as structured data. The same evidence powers the website and browser tools.</p><section><h2>Read the profile</h2><pre>curl https://osmarmorales.io/api/portfolio</pre><ul><li><a href="/api/portfolio">GET /api/portfolio</a> — complete public profile</li><li><a href="/api/portfolio/projects">GET /api/portfolio/projects</a> — ownership, decisions and outcomes</li><li><a href="/api/portfolio/experience">GET /api/portfolio/experience</a> — formal dates and initiative milestones</li></ul></section><section><h2>Discover and inspect</h2><p><a href="/openapi.json">OpenAPI 3.1</a> · <a href="/llms.txt">llms.txt</a> · <a href="/.well-known/portfolio.json">Discovery document</a> · <a href="/agent/profile-page.jsonld">ProfilePage JSON-LD</a></p><p>Responses include a schema version, observation date and evidence boundaries. Career metrics are candidate-provided. The API makes no writes, invokes no models and reveals no private accounts.</p></section><section><h2>Use the browser tools</h2><p>Where WebMCP is supported, the page exposes <code>portfolio_get_profile</code>, <code>portfolio_get_evidence</code> and <code>portfolio_estimate_capacity</code>. The calculator is a design exercise, not observed infrastructure performance.</p><p>The separate <a href="/#lab">guest lab</a> offers an interactive, temporary native agent session.</p></section><p><a href="/Osmar_Morales_Resume.pdf">Download the resume ↗</a></p></main></html>`,
);
console.log(
  'Exported public profile API, OpenAPI, JSON-LD, discovery and agent documentation.',
);

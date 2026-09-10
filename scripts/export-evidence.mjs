import { writeFile } from 'node:fs/promises';
import { visaPlatform, visaPlatformEvidence } from '../lib/visa-platform.ts';
import {
  profile,
  cases,
  publicEvidence,
  expandedCareerEvidence,
} from '../lib/portfolio-data.ts';
import {
  infrastructureEvidence,
  aiFactoryApproach,
  sharedComputeAgenda,
} from '../lib/infrastructure-data.ts';
const records = [
  {
    id: 'languages',
    title: 'Languages',
    text: profile.languages.join('; '),
    source:
      'Candidate correction, September 10, 2026. Portuguese is beginner level; no CEFR rating was supplied.',
  },
  {
    id: 'visa-ai-native-transformation',
    title: 'Agent Factory transformation and corrected role dates',
    text: visaPlatformEvidence,
    source: visaPlatform.source,
  },
  ...visaPlatform.capabilities.map((item) => ({
    id: `visa-${item.id}`,
    title: item.title,
    text: item.text,
    source: visaPlatform.source,
  })),
  {
    id: 'infra-private-cloud',
    title: 'Visa private-cloud application delivery',
    text: infrastructureEvidence,
    source:
      'Candidate statement and private contextual photographs supplied 2026-09-10; photographs are not public assets.',
  },
  {
    id: 'ai-factory-approach',
    title: 'AI factory and shared compute approach',
    text:
      aiFactoryApproach +
      ' ' +
      sharedComputeAgenda +
      ' Elygent Buzz deployment source includes PostgreSQL and Redis. Scoped GBrain recall supplies provenance-bearing knowledge to agents. Knowledge graphs are a design focus; no deployed GraphRAG engine is asserted.',
    source:
      'Candidate platform approach; NVIDIA and official Buzz research plus local Elygent source review, 2026-09-10.',
  },
  {
    id: 'agent-factory',
    title: 'Visa Agent Factory',
    text: cases[0].ownership + ' ' + cases[0].outcome + ' ' + cases[0].note,
    source:
      'Candidate confirmed adoption on 2026-09-09 and described AI-native transformation, 3× delivery pace, AI Loop, V Agent and VCA Brain on 2026-09-10.',
  },
  {
    id: 'mlops',
    title: 'Visa MLOps modernization',
    text:
      cases[1].ownership +
      ' ' +
      cases[1].outcome +
      ' Benchmarking turnaround moved from 1–3 days to 1–3 hours.',
    source:
      'Candidate-provided career record; migration counts updated by Osmar to 1k+ repositories and 500+ pipelines on 2026-09-09.',
  },
  {
    id: 'elygent',
    title: 'Elygent — company founded by Osmar',
    text:
      cases[2].ownership +
      ' ' +
      cases[2].outcome +
      ' The platform combines OpenClaw for conversation/runtime UX, Paperclip for accountable work, Hermes for selected persistent workers, GBrain for curated knowledge, GStack for the separate Software Factory delivery method, and Buzz for collaboration. Elygent owns identity, policy, capability routing and evidence. It uses model-agnostic integration, choosing existing components for their strengths.',
    source:
      'On 2026-09-10, Osmar confirmed that Elygent is a company he founded. This is the confirmation date, not the founding date. Product capabilities are supported by the reviewed platform and public deployments; no founding date or commercial traction metrics were supplied.',
  },
  {
    id: 'career',
    title: 'Career progression',
    text: expandedCareerEvidence,
    source: 'Candidate-provided career record.',
  },
  {
    id: 'education',
    title: 'Education',
    text: profile.education,
    source: 'Candidate-provided career record.',
  },
  {
    id: 'approach',
    title: 'Frontier learning and team enablement',
    text: profile.thesis + ' ' + profile.approach,
    source: 'Candidate positioning updated 2026-09-10.',
  },
  {
    id: 'limits',
    title: 'Evidence boundaries',
    text: 'GPU-fleet ownership, RFPs, facilities and infrastructure budgets are unverified here. No engineering degree is claimed. 500+ is total users, not DAU or concurrency. Elygent is an independent AI platform company founded by Osmar; do not transfer Visa outcomes to it or invent its founding date, revenue, headcount or customer metrics. The website capacity lab is hypothetical, not measured production performance.',
    source: 'Scope assessment from supplied evidence, 2026-09-09.',
  },
];
await writeFile(
  new URL('../public/portfolio-evidence.txt', import.meta.url),
  publicEvidence + '\n' + expandedCareerEvidence + '\n',
);
await writeFile(
  new URL('../public/portfolio-evidence.json', import.meta.url),
  JSON.stringify(
    { version: '2026-09-10-v17', records, limits: records.at(-1).text },
    null,
    2,
  ) + '\n',
);
console.log('Exported public-only evidence corpus.');

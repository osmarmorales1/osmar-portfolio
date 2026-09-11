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
    id: 'digital-twins-ontology-research',
    title: 'Digital twins and AI ontology: research interest',
    text: 'Osmar is interested in digital twins and AI ontology in the sense of an operational business model connecting data, entities, relationships and actions for AI workflows. He referenced Palantir’s Ontology framing as conceptual inspiration. This belongs to the Elygent research agenda; he has not supplied evidence of a deployed digital twin, Palantir implementation, synchronized operational model or a measured outcome from this work. Do not turn keyword interest into professional implementation experience or relabel the existing public career assistant as a verified digital twin.',
    source:
      'User clarification, September 10, 2026 (America/New_York). Concept checked against Palantir Ontology overview: https://www.palantir.com/docs/foundry/ontology/overview .',
  },
  {
    id: 'systems-builder-career',
    title: 'Systems and process creation across the career',
    text: 'Osmar positions his career as creating systems and processes that automate complex work and scale delivery. At FedEx as Data Scientist, he led end-to-end BI platform delivery and rebuilt executive financial-close reporting. At TracFone, he rebuilt ETL and revenue-recognition reporting, and created analytical models that reduced analysis time by two-thirds. In his earlier FedEx automation role, he designed a reconciliation application that reduced processing time 70% across Latin America and the Caribbean, and automated and standardized financial reporting. At Davis Quality, he modernized accounting systems and built digital data infrastructure for financial visibility and business planning. These earlier systems complement later self-service analytics, MLOps, Agent Factory and Elygent work; do not label the earlier roles generative AI or attribute later technology stacks to them.',
    source:
      'Candidate-supplied career photos 3568-3570, visually reviewed; source facts recorded in the private career-evidence review. Systems-and-processes positioning explicitly requested by Osmar on September 10, 2026. Outcomes are candidate-reported, not independently employer-verified.',
  },
  {
    id: 'harness-model-portability',
    title: 'Agent harnesses, API/CLI integration and model portability',
    text: 'Elygent provides provider-neutral API/MCP tool contracts and CLI/terminal integration across configured Claude Code, Codex, Hermes and other harnesses. Dated onboarding and runtime-acceptance records establish shared tools/knowledge and actual native Codex sandboxed execution. LLM-agnostic and harness-agnostic describe this architecture and adapter approach, not universal zero-configuration switching, equal model quality, or identical state formats across every runtime. The candidate’s Visa materials also describe frontier/open-weight model routing by work class. Open-source agent infrastructure and open-weight models are different layers; no unspecified model license, model-weight training, or deployed local inference pool should be invented.',
    source:
      'Reviewed Elygent gateway/onboarding source and September 8 runtime acceptance; candidate career evidence. Terminology cross-checked with creator transcripts and official engineering documentation on September 10, 2026.',
  },
  {
    id: 'compute-delivery-scope',
    title: 'Distributed computing, shared compute and CI/CD scope',
    text: 'Osmar’s demonstrated distributed computing scope is agent workload execution across local, remote, cloud/VPS and on-premises environments; it does not establish tensor-parallel model inference or distributed GPU training. Shared computing for community access to locally hosted open-weight models remains research/planned; the live Buzz demo uses xAI-hosted Grok. CI/CD experience is supported for GitHub, Jenkins and Azure DevOps. GitHub Actions and GitHub Agentic Workflows are covered in current research, but personal implementation is unconfirmed. No Actions workflows were found in the reviewed owner repositories; upstream Buzz workflow files are not evidence of Osmar’s implementation. Do not present research topics as delivered capabilities.',
    source:
      'Candidate-described workload distribution; verified local/VPS platform source; current shared-compute roadmap; scoped owner-repository workflow audit and creator/GitHub documentation review on September 10, 2026. Direct GitHub Actions experience confirmation is pending.',
  },
  {
    id: 'technical-keyword-scope',
    title: 'Airflow, feature platforms, Linux VPS and computer use',
    text: 'Apache Airflow appears in Osmar’s supplied career technology tags; a specific Airflow deployment outcome was not supplied. His MLOps ownership includes feature-store infrastructure using Feast, model registry using MLflow, pipelines and data quality. The phrase feature engineering platforms describes this platform scope; do not invent specific model features, transformation algorithms or performance gains. Elygent and the public agent lab run on Linux VPS infrastructure with isolated containers. Public computer use means browser automation in the isolated demo environment, not unrestricted access to a visitor’s desktop. VPS means virtual private server; Windows VDI is a separate virtual-desktop execution example from Visa work. LLMOps summarizes established model routing, evaluations, tracing/observability and controls; it does not establish fine-tuning or ownership of model weights.',
    source:
      'Candidate-supplied technology tags and photo evidence, reviewed September 2026; implemented Elygent/public-lab source and deployments. Keyword wording reviewed against current official employer postings on 2026-09-10. Feature-transformation detail remains unconfirmed.',
  },
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
    { version: '2026-09-10-v21', records, limits: records.at(-1).text },
    null,
    2,
  ) + '\n',
);
console.log('Exported public-only evidence corpus.');

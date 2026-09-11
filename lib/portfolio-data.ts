import {
  infrastructureEvidence,
  aiFactoryApproach,
  sharedComputeAgenda,
} from './infrastructure-data.ts';
import { visaPlatform, visaPlatformEvidence } from './visa-platform.ts';
export const profile = {
  name: 'Osmar Morales',
  location: 'Miami, Florida',
  email: 'osmarmorales1@gmail.com',
  title: 'Director, AI Agent Platform at Visa',
  thesis: 'I build AI-native teams.',
  approach:
    'I create systems and processes that automate complex work and scale delivery. From financial automation to data and AI platforms, I build reusable capability for teams. Today, that means agents, shared skills, business memory and distributed compute behind one simple way to delegate.',
  adoption: {
    users: '500+',
    mode: 'Organic adoption',
    observed: 'September 2026',
    source:
      'Candidate-confirmed; total users, not concurrent or daily active users.',
  },
  education:
    'BBA, Finance; Mathematics minor, Florida International University, 2015. AA, Mathematics, Miami Dade College, 2008. Harvard Extension School professional development, 2018–2020.',
  languages: ['English', 'Spanish', 'Portuguese (beginner)'],
};
export const cases = [
  {
    id: 'factory',
    label: 'Agent Factory',
    kind: 'VISA · ENTERPRISE AI',
    title: 'AI-native teams.\n3× delivery pace.',
    metric: '3×',
    unit: 'delivery pace · same resources',
    summary: visaPlatform.summary,
    problem:
      'Individual AI experiments fragment workflows and knowledge. Business users need the capability without having to operate multiple tools, models and compute environments.',
    ownership:
      'Created and operate Agent Factory: V Agent, Visa’s super agent, packages agents and connects platforms, surfaces and tools behind one simple interface. VCA Brain shares business memory, and an AI Loop turns recurring work into reusable skills and runtime recommendations. Connect Buzz, Paperclip, the OpenClaw assistant and cloud agents through on-premises orchestration across local, remote, cloud and Windows VDI execution.',
    decisions: [
      'Capture business workflows as skills; learn from recurring patterns and recommend relevant skills at runtime.',
      'Use VCA Brain to share project context and observations so teams build on collective knowledge.',
      'Make V Agent the simple entry to distributed execution, including agents working for hours and days.',
      'Build Agentic Slack on Buzz for human–agent communication; retain scoped access, Numbat monitoring and human review.',
    ],
    outcome:
      'Transformed data-science teams into an AI-native organization; enabled 3× delivery pace with the same resources and organic adoption by 500+ total users across five markets and two regions.',
    tags: [
      'AI-native transformation',
      'Reusable skills / AI Loop',
      'VCA Brain / V Agent',
      'Distributed agents',
    ],
    note: 'Candidate-confirmed September 2026. 3× refers to delivery pace with the same resources; its measurement period was not supplied. 500+ means total users.',
    file: '/Osmar_Morales_Mastercard_Resume.pdf',
  },
  {
    id: 'mlops',
    label: 'MLOps modernization',
    kind: 'VISA · DATA & ML PLATFORMS',
    title: 'Make delivery\nrepeatable.',
    metric: '1k+',
    unit: 'repositories migrated',
    summary: 'An automated foundation for model and pipeline delivery.',
    problem:
      'Fragmented delivery creates repeated work and makes platform changes harder to coordinate across teams.',
    ownership:
      'I led data engineering and an AI workstream, built an end-to-end MLOps foundation, and coordinated migration of repositories and pipelines.',
    decisions: [
      'Make pipelines reproducible and models discoverable.',
      'Bring model registry, feature-store, and data-quality practices together.',
      'Sequence migration around continuity of delivery.',
    ],
    outcome:
      '1k+ repositories and 500+ pipelines migrated without disrupting delivery. Team scope: seven data engineers and a six-person AI workstream.',
    tags: ['GitHub / Jenkins', 'MLflow', 'Feast / Deequ', 'Python / SQL'],
    note: 'Career results from candidate-provided professional record.',
    file: '/Osmar_Morales_Mastercard_Resume.pdf',
  },
  {
    id: 'elygent',
    label: 'Elygent',
    kind: 'FOUNDED COMPANY · AI PLATFORM',
    title: 'Make complex work\neasier to delegate.',
    metric: 'Founder',
    unit: 'AI platform architect',
    summary:
      'The AI platform company I founded to bring agents, business tools and shared knowledge into one experience.',
    problem:
      'Using more AI tools can fragment knowledge, permissions, and execution. People should not need to manage that complexity themselves.',
    ownership:
      'Founded Elygent and lead its product and platform architecture on open-source foundations. Built Agentic Slack on Buzz for human-agent communication and collaboration, with Paperclip as the agent orchestration backend. Built LLM-agnostic and harness-agnostic integrations through APIs, CLIs and MCP so tools, skills and knowledge can be reused across coding agents and business workflows. Cybersecurity work includes scoped access, isolated execution and candidate-confirmed Numbat deployment. Configured integrations include Claude Code, Codex and other harnesses; this is interoperability, not a guarantee of identical behavior across every runtime.',
    decisions: [
      'Make delegation simple while connecting the right agents, tools and knowledge behind it.',
      'Carry useful context across workflows while preserving personal and business boundaries.',
      'Ship working experiences and validate the real model-to-tool path before expanding capabilities.',
    ],
    outcome:
      'Launched a public cloud-agent lab on Linux VPS and an Agentic Slack community powered by native Buzz. Visitors can experience human-agent collaboration, shared communication, computer use through browser automation and human review; the company’s broader platform connects conversations to governed, accountable work.',
    tags: [
      'MCP / APIs',
      'Linux / Docker',
      'Agentic Slack / orchestration',
      'Cybersecurity / Numbat',
    ],
    note: 'Elygent is an independent company founded by Osmar, confirmed September 2026. Its public lab and native community are live; Visa adoption metrics do not describe Elygent.',
    file: '/Osmar_Morales_Elygent_Technical_Brief.pdf',
  },
];
export const layers = [
  {
    id: 'intent',
    name: 'Intent',
    sub: 'One familiar entry',
    detail:
      'Start with the outcome a person wants. The interface should hide runtime complexity while preserving enough context to do the work.',
    decision: 'A common experience, with a clear person and work context.',
  },
  {
    id: 'identity',
    name: 'Identity & policy',
    sub: 'Scope before action',
    detail:
      'Resolve the caller to the right person or business boundary. A connected AI client gets authorized capabilities, not a shared master credential.',
    decision:
      'Check scope, permission, and action-specific approval before execution.',
  },
  {
    id: 'route',
    name: 'Capability routing',
    sub: 'The right tool',
    detail:
      'Select a useful model, tool, or runtime for the task. Simple operations can use direct paths; durable work needs ownership and recovery.',
    decision: 'One capability contract across approved runtimes.',
  },
  {
    id: 'knowledge',
    name: 'Knowledge & context',
    sub: 'Learn with provenance',
    detail:
      'Use curated facts, decisions, and procedures with source boundaries. Carry useful context without merging identities or retaining raw conversations.',
    decision: 'Recall before work; review reusable lessons after it.',
  },
  {
    id: 'evidence',
    name: 'Execution & evidence',
    sub: 'Prove the outcome',
    detail:
      'Validate outputs and the real tool path. A successful service check alone does not prove that a person’s task succeeded.',
    decision:
      'Checkpoint, verify, and route recurring failures to accountable repair.',
  },
];
export const scenarios = [
  {
    id: 'knowledge',
    label: 'Share knowledge',
    nodes: ['intent', 'identity', 'knowledge', 'evidence'],
    outcome: 'A sourced answer in the right knowledge boundary.',
    note: 'Retrieve only the context the caller is allowed to use.',
  },
  {
    id: 'execute',
    label: 'Use a tool',
    nodes: ['intent', 'identity', 'route', 'evidence'],
    outcome: 'An authorized action with a reviewable result.',
    note: 'Consequential actions require a specific approval.',
  },
  {
    id: 'recover',
    label: 'Recover work',
    nodes: ['identity', 'route', 'knowledge', 'evidence'],
    outcome: 'A failure becomes a controlled recovery path.',
    note: 'Retain task ownership, evidence, and a clear next action.',
  },
];
export const learningLoop = [
  {
    label: 'Explore',
    verb: 'Stay at the frontier.',
    body: 'I follow new models, tools, and interaction patterns closely, looking for a concrete problem they can solve for the team.',
  },
  {
    label: 'Evaluate',
    verb: 'Separate novelty from value.',
    body: 'Compare quality, reliability, latency, resource use and cost per useful result. The strongest tool depends on the workload and operating constraints.',
  },
  {
    label: 'Package',
    verb: 'Turn discovery into capability.',
    body: 'Bring the useful part into a reusable skill, tool, workflow, or platform feature with an owner and a clear boundary.',
  },
  {
    label: 'Enable',
    verb: 'Raise the team’s baseline.',
    body: 'Make the capability accessible through familiar interfaces, hands-on guidance, and examples people can apply immediately.',
  },
  {
    label: 'Improve',
    verb: 'Let real use teach us.',
    body: 'Use feedback and operational evidence to refine the workflow, retain a reusable lesson, or retire what no longer helps.',
  },
];
export const publicEvidence = `OSMAR MORALES — PUBLIC PORTFOLIO BRIEF\nObserved September 2026.\n${profile.thesis}\n${profile.approach}\nCurrent title: ${profile.title}; October 2024–present. Miami.\nVisa Agent Factory: 500+ users, organic adoption, confirmed by the candidate September 2026. This is total users, not a DAU or concurrency claim. Delivered through container, macOS desktop, and private-cloud environments; platform built around an existing agent engine.\nVisa Director, Data Engineering: November 2020–September 2024. Led a seven-person data engineering team and six-person AI workstream. Automated MLOps foundation; 1k+ repositories and 500+ pipelines migrated without disrupting delivery. Benchmarking workflow moved from 1–3 days to 1–3 hours.\nVisa Manager, Data Analytics: November 2018–November 2020. Core data refresh from days to three hours, analytics cubes from three weeks to five hours. Azure DevOps self-service automation for 40+ colleagues.\nEarlier: FedEx Express Data Scientist, August 2016–November 2018; TracFone Revenue Systems Analyst, February 2013–August 2016; FedEx Process Automation Developer, March 2012–February 2013; Davis Quality Systems Accountant, January 2007–January 2012.\nElygent: independent AI platform company founded by Osmar Morales, who leads its product and platform architecture. Founder/company status was explicitly confirmed on September 10, 2026; the founding date and commercial adoption metrics were not supplied. Shared identity-scoped MCP tools, governed provenance-bearing knowledge, established agent runtimes, operational probes and recovery. Its component approach includes OpenClaw for conversation/runtime UX, Paperclip for accountable work, Hermes for selected workers, GBrain for curated knowledge, GStack for Software Factory methods, and Buzz for collaboration. Node.js/JavaScript, Python integration workers, Linux, Docker Compose, systemd and PostgreSQL-backed services. This is distinct from Visa; do not transfer Visa adoption metrics to Elygent.\n${visaPlatformEvidence}\n${infrastructureEvidence}\nAI factory approach: ${aiFactoryApproach}\nShared compute research: ${sharedComputeAgenda}\nElygent uses PostgreSQL and Redis in its Buzz deployment. GBrain supports scoped, provenance-bearing agent retrieval and knowledge relationships; a GraphRAG engine is not claimed.\nLanguages: ${profile.languages.join('; ')}\nEducation: ${profile.education}\nRecognition: Visa LAC Support Excellence Award 2026; FedEx LAC Professional of the Year 2017; five Visa Technical Innovation TEAM awards 2023–2025.\nLimits: personal ownership of GPU fleets, hardware procurement/RFPs, power/cooling and infrastructure budgets is not established by this brief. Do not invent it. Do not infer an engineering degree. Capacity calculators on the site are design exercises, not observed production results.\nContact: ${profile.email}. LinkedIn: https://www.linkedin.com/in/osmarmorales/\nUse only these facts. Separate candidate-reported career outcomes from independently verified results. If information is missing, say so. Never invent credentials, clients, achievements or confidential detail.`;

export const expandedCareerEvidence =
  'AI experience milestones reported by Osmar on September 9, 2026: early ChatGPT and Copilot adoption in 2022, followed by agentic workflows in 2024. These are work milestones, not official job-title dates. Visa Director, AI Agent Platform began October 2024, explicitly corrected by Osmar on September 10, 2026; this supersedes the earlier October 2025 record. Earlier career: Visa Director Data Engineering November 2020–September 2024; Manager Data Analytics November 2018–November 2020; FedEx Express Data Scientist August 2016–November 2018; TracFone Wireless Revenue Systems Analyst February 2013–August 2016; FedEx Express Process Automation Developer March 2012–February 2013; Davis Quality Systems Accountant January 2007–January 2012. Visa work used Python, Docker, MCP, knowledge retrieval, Spark, Hadoop/Hive, MLflow, Feast, Deequ, GitHub, Jenkins, Azure DevOps, Tableau, Power BI and SQL. Elygent integrates OpenClaw, Hermes, Paperclip, Buzz, GBrain and GStack through Node.js/Python, identity-scoped MCP, Composio, and OAuth. Cloud operations include VPS, Linux, Docker, systemd, Caddy, PostgreSQL and Redis. This public sandbox uses React, TypeScript, Vite and Vercel with a bounded Linux VPS agent service. Public GitHub profile: https://github.com/osmarmorales1. Native guest sessions offer GPT-5.6 Sol and GPT-5.5; specialists inherit the selected model for their run. The native Buzz community separately uses xAI-hosted Grok 4.6. Locally hosted shared-model inference remains planned.';

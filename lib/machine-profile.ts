import { profile, cases, learningLoop } from './portfolio-data.ts';
import { visaPlatform } from './visa-platform.ts';
import {
  privateCloudPillars,
  infrastructureEvidence,
  aiFactoryApproach,
  sharedComputeAgenda,
} from './infrastructure-data.ts';

// Native community details verified September 10, 2026. Invite review: October 10.
export const buzzCommunity = {
  downloadUrl: 'https://github.com/block/buzz/releases/latest',
  iphoneUrl:
    'https://apps.apple.com/us/app/buzz-chat-with-your-hive/id6779728271',
  androidUrl:
    'https://play.google.com/store/apps/details?id=xyz.block.buzz.mobile',
  inviteUrl:
    'https://osmarmorales.io/#community',
  channels: ['00-welcome', '01-platform-lab', '02-shared-compute'],
  agents: ['Platform Analyst', 'Review Lead'],
};

export const publicCareer = [
  {
    employer: 'Visa',
    title: 'Director, AI Agent Platform',
    start: '2024-10',
    end: null,
    summary:
      'Tripled delivery pace with the same resources through an AI enablement platform, serving 500+ total users. Led 15+ people and hundreds of deployed and concurrently running agents.',
  },
  {
    employer: 'Visa',
    title: 'Director, Data Engineering',
    start: '2020-11',
    end: '2024-09',
    summary:
      'Accelerated model preparation and client analytics: feature-store creation from one week to 12 hours and benchmarking from days to hours. Preserved delivery while migrating 1k+ repositories and 500+ pipelines.',
  },
  {
    employer: 'Visa',
    title: 'Manager, Data Analytics',
    start: '2018-11',
    end: '2020-11',
    summary:
      'Cut analytics-cube preparation from three weeks to five hours and data refresh from days to three hours; enabled 40+ colleagues through Azure DevOps self-service automation.',
  },
  {
    employer: 'FedEx Express',
    title: 'Data Scientist',
    start: '2016-08',
    end: '2018-11',
    summary:
      'Built executive reporting and BI platforms that gave leaders financial visibility across a $1.5B business.',
  },
  {
    employer: 'TracFone Wireless',
    title: 'Revenue Systems Analyst',
    start: '2013-02',
    end: '2016-08',
    summary:
      'Cut revenue analysis time by two-thirds with analytical models and rebuilt ETL for a 25M-subscriber business.',
  },
  {
    employer: 'FedEx Express',
    title: 'Process Automation Developer',
    start: '2012-03',
    end: '2013-02',
    summary:
      'Cut reconciliation time 70% with custom software and standardized reporting across Latin America and the Caribbean.',
  },
  {
    employer: 'Davis Quality',
    title: 'Systems Accountant',
    start: '2007-01',
    end: '2012-01',
    summary:
      'Built accounting and data systems that improved financial visibility and planning.',
  },
  {
    employer: 'Elygent',
    title: 'Founder & AI Platform Architect',
    start: '2025-10',
    end: null,
    summary:
      'Uses Elygent, the company he founded, as an independent AI lab to deepen hands-on expertise through working experiments in agent collaboration, orchestration and controlled computer use.',
  },
];

export const publicStack = [
  {
    context: 'AI and platform engineering',
    themes: [
      'AI-native team enablement',
      'Agentic Slack and human-agent communication',
      'AI governance and agent cybersecurity',
      'AI orchestration platforms and reusable workflows',
      'Agentic AI and LLMOps',
      'Shared context and collective learning',
      'Public cloud, private cloud and on-premises delivery',
      'MLOps',
      'API and CLI integration',
      'Frontier and open-weight model routing',
      'Governed tools',
      'Data storytelling',
    ],
    technologies: [
      'Python',
      'SQL',
      'Kubernetes',
      'Virtual machines',
      'Storage services',
      'Load balancing and DNS',
      'Agent evaluation and tracing',
      'Agent security monitoring (Numbat)',
      'Docker',
      'MCP',
      'A2A',
      'LangChain ecosystem',
      'RAG',
      'Spark',
      'Apache Airflow',
      'Feature engineering platforms',
      'Feature stores',
      'MLflow',
      'Feast',
      'Deequ',
      'GitHub',
      'Jenkins',
      'Azure DevOps',
      'Tableau',
      'Power BI',
    ],
    evidence:
      'Candidate-provided professional record, private-cloud service context and broader cloud/on-premises scope confirmed September 10, 2026',
  },
  {
    context: 'Independent AI research — Elygent',
    themes: [
      'Cloud agents',
      'Computer use and browser automation',
      'LLM-agnostic and harness-agnostic architecture',
      'Open-source agent infrastructure',
      'Distributed agent execution',
      'Agentic Slack and human-agent collaboration',
      'AI orchestration platforms',
      'AI governance, secure communication and cybersecurity',
      'Shared knowledge',
      'Model-agnostic integration',
    ],
    technologies: [
      'OpenClaw',
      'Claude Code',
      'Codex',
      'APIs and CLIs',
      'Terminal workflows',
      'Hermes',
      'AI orchestration (Paperclip)',
      'Human-agent collaboration (Buzz)',
      'Agent security monitoring (Numbat)',
      'Shared knowledge and retrieval (GBrain)',
      'Software delivery methods (GStack)',
      'Node.js',
      'Linux VPS',
      'Python',
      'MCP',
      'Composio',
      'OAuth',
      'PostgreSQL',
      'Redis',
      'Agent-guided retrieval',
      'Linux',
      'Docker',
      'systemd',
      'Caddy',
    ],
    evidence:
      'Founder-led Elygent platform; reviewed API/CLI/harness integrations and public demonstrations. Numbat deployment at Visa and Elygent is candidate-confirmed; enforcement mode and coverage were not supplied.',
  },
  {
    context: 'This public portfolio',
    themes: [
      'Native guest agents',
      'Visible specialist handoffs',
      'Agent-readable interfaces',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Vercel',
      'Linux VPS',
      'OpenClaw',
      'JSON-LD',
      'OpenAPI',
      'WebMCP',
    ],
    evidence:
      'Implemented public demonstration; bounded and separate from private accounts',
  },
];

export const machineProfile = {
  schemaVersion: '1.0',
  updatedAt: '2026-09-12',
  canonicalUrl: 'https://osmarmorales.io/',
  person: {
    name: profile.name,
    headline: profile.thesis,
    currentTitle: profile.title,
    image: 'https://osmarmorales.io/v8/osmar-morales.png',
    location: profile.location,
    contact: {
      email: profile.email,
      linkedin: 'https://www.linkedin.com/in/osmarmorales/',
      github: 'https://github.com/osmarmorales1',
      publicShowcase: 'https://github.com/osmarmorales1/ai-platform-showcase',
    },
    education: profile.education,
    languages: profile.languages,
  },
  story:
    'Osmar creates systems and processes that automate complex work and scale delivery. His career spans financial automation, business intelligence, data platforms and enterprise AI. Today, he builds AI-native teams through agents, reusable skills, shared knowledge and distributed execution. He founded Elygent, an independent AI platform company, and leads its product and platform architecture.',
  aspirations: ['Principal AI Platform Engineer', 'Senior Director', 'VP'],
  experience: publicCareer,
  milestones: [
    {
      year: 2022,
      subject: 'Early ChatGPT and Copilot adoption',
      provenance:
        'Candidate reported; initiative milestone, not a job-title date',
    },
    {
      year: 2024,
      subject: 'Agentic workflows',
      provenance:
        'Candidate reported; initiative milestone, not a job-title date',
    },
  ],
  outcomes: [
    {
      initiative: 'Visa AI enablement platform',
      metric: 'delivery pace multiplier',
      display: visaPlatform.delivery.display,
      qualifier: 'Same resources; candidate-reported delivery pace',
      provenance: visaPlatform.delivery.provenance,
    },
    {
      initiative: 'Visa AI enablement platform',
      metric: 'total users',
      lowerBound: 500,
      display: '500+',
      qualifier: 'Organic adoption; not DAU or concurrency',
      provenance: 'Candidate-confirmed September 2026',
    },
    {
      initiative: 'Visa MLOps modernization',
      metric: 'repositories migrated',
      lowerBound: 1000,
      display: '1k+',
      provenance: 'Candidate-confirmed September 2026',
    },
    {
      initiative: 'Visa MLOps modernization',
      metric: 'pipelines migrated',
      lowerBound: 500,
      display: '500+',
      provenance: 'Candidate-confirmed September 2026',
    },
  ],
  projects: cases.map((item) => ({
    id: item.id,
    name: item.label,
    context: item.kind,
    ownership: item.ownership,
    decisions: item.decisions,
    outcome: item.outcome,
    stage: item.note,
    evidenceUrl: `https://osmarmorales.io${item.file}`,
  })),
  stack: publicStack,
  infrastructure: {
    pillars: privateCloudPillars,
    provenance: infrastructureEvidence,
  },
  aiFactoryApproach,
  visaAgentFactory: visaPlatform,
  approach: learningLoop,
  frontierAgenda: [
    { topic: 'AI factories and shared compute', status: sharedComputeAgenda },
    {
      topic: 'Digital twins and AI ontology',
      status:
        'Exploring how business entities, relationships and actions can provide shared context for AI workflows. This is a research interest; a deployed digital twin or Palantir implementation is not claimed.',
    },
    {
      topic: 'Knowledge graphs and agentic RAG',
      status:
        'Knowledge relationships and scoped agent-guided retrieval are part of the platform approach. A deployed GraphRAG engine or quality benchmark is not claimed.',
    },
    {
      topic: 'Cloud agents and human-agent collaboration',
      status: 'Working independent platform and bounded public demonstration',
    },
    {
      topic: 'Computer use and agentic commerce',
      status:
        'Experimental public lab; no payment-network integration or production commerce claim',
    },
    {
      topic: 'Agent-quality evaluation',
      status:
        'Continued evaluation work; integration/security checks are not a statistical quality benchmark',
    },
  ],
  evidenceBoundaries: [
    'Use Second Brain for shared business knowledge and plain-language names for internal initiatives. Retain V Agent (Visa super agent) as the named orchestration layer across connected Visa systems. Do not imply coverage of every Visa system.',
    'Lead with business value and recognizable capabilities: Agentic Slack and human-agent collaboration, AI orchestration platforms, and AI governance and cybersecurity. Use niche implementation names for technical detail and accurate upstream attribution, not as substitutes for explaining the work.',
    'Elygent is the company Osmar founded in October 2025 and uses as an independent AI lab. Present it as hands-on experimentation and skills development, secondary to his professional career. Do not infer commercial focus, full-time startup commitments, or employment availability.',
    'Career outcomes are candidate-provided, not an independent employer audit.',
    'Role dates corrected directly by Osmar on September 10, 2026: current role October 2024; previous Director role ends September 2024. These supersede the earlier dates.',
    '3× describes reported delivery pace with the same resources; no measurement period or standardized benchmark was provided. continuous learning loop improvement refers to skills and shared knowledge, not model-weight training.',
    'Elygent is an independent AI platform company founded by Osmar in October 2025. Revenue, headcount and commercial adoption metrics were not supplied; Visa adoption figures do not apply to it.',
    'Private-cloud evidence supports service use and application delivery, not ownership of every catalog service. Shared community compute remains exploration.',
    'The supplied record does not establish GPU-fleet, facilities, RFP or infrastructure-budget ownership.',
    'Education is Finance with a Mathematics minor; no engineering degree is claimed.',
    'Capacity controls are hypothetical design exercises, not production telemetry.',
    'The public sandbox cannot access private accounts, gateways, knowledge or payment credentials.',
  ],
  interfaces: {
    guestLab: 'https://osmarmorales.io/#lab',
    guestComputer: 'https://agent.osmarmorales.io/guest/computer/',
    guestCommunity: 'https://osmarmorales.io/#community',
    communityClient: 'Agentic Slack community via the native Buzz application',
    communityDownload: buzzCommunity.downloadUrl,
    communityIphone: buzzCommunity.iphoneUrl,
    communityAndroid: buzzCommunity.androidUrl,
    communityInvite: buzzCommunity.inviteUrl,
    communityChannels: 3,
    communityAgents: 2,
    communityChannelNames: buzzCommunity.channels,
    communityAgentNames: buzzCommunity.agents,
    communityVisibility:
      'Public demo community; participant posts are visible to all participants',
    communityInference:
      'Grok 4.6 in xAI cloud; local open-weight shared compute is planned',
    profile: 'https://osmarmorales.io/api/portfolio',
    projects: 'https://osmarmorales.io/api/portfolio/projects',
    experience: 'https://osmarmorales.io/api/portfolio/experience',
    openapi: 'https://osmarmorales.io/openapi.json',
    llms: 'https://osmarmorales.io/llms.txt',
    browserTools: [
      'portfolio_get_profile',
      'portfolio_get_evidence',
      'portfolio_estimate_capacity',
    ],
  },
};

export const profileStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateModified: machineProfile.updatedAt,
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://osmarmorales.io/#osmar',
    name: profile.name,
    image: machineProfile.person.image,
    url: machineProfile.canonicalUrl,
    jobTitle: profile.title,
    description: machineProfile.story,
    worksFor: { '@type': 'Organization', name: 'Visa' },
    sameAs: [
      machineProfile.person.contact.linkedin,
      machineProfile.person.contact.github,
    ],
    knowsAbout: [
      'AI platforms',
      'Private cloud',
      'AI factory architecture',
      'Kubernetes and container workloads',
      'Data engineering',
      'MLOps',
      'AI orchestration platforms',
      'AI governance',
      'Agent cybersecurity',
      'Technical leadership',
      'Agentic Slack',
      'Human-agent collaboration',
    ],
  },
};

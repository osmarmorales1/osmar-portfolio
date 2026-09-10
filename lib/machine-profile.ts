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
      'Created Agent Factory, V Agent and VCA Brain; enabled AI-native data-science teams, 3× delivery pace with the same resources, and 500+ total users.',
  },
  {
    employer: 'Visa',
    title: 'Director, Data Engineering',
    start: '2020-11',
    end: '2024-09',
    summary:
      'Data engineering and AI workstream leadership; MLOps modernization across 1k+ repositories and 500+ pipelines.',
  },
  {
    employer: 'Visa',
    title: 'Manager, Data Analytics',
    start: '2018-11',
    end: '2020-11',
    summary:
      'Self-service analytics, data foundations and automation for 40+ colleagues.',
  },
  {
    employer: 'FedEx Express',
    title: 'Data Scientist',
    start: '2016-08',
    end: '2018-11',
    summary:
      'Executive finance reporting, dashboards and distributed BI delivery.',
  },
  {
    employer: 'TracFone Wireless',
    title: 'Revenue Systems Analyst',
    start: '2013-02',
    end: '2016-08',
    summary: 'Revenue systems, ETL and decision support.',
  },
  {
    employer: 'FedEx Express',
    title: 'Process Automation Developer',
    start: '2012-03',
    end: '2013-02',
    summary: 'Financial reporting and reconciliation automation.',
  },
  {
    employer: 'Davis Quality',
    title: 'Systems Accountant',
    start: '2007-01',
    end: '2012-01',
    summary: 'Accounting systems and financial visibility.',
  },
];

export const publicStack = [
  {
    context: 'AI and platform engineering',
    themes: [
      'AI-native team enablement',
      'Agent orchestration and reusable workflows',
      'Shared context and collective learning',
      'Public cloud, private cloud and on-premises delivery',
      'MLOps',
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
      'Docker',
      'MCP',
      'RAG',
      'Spark',
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
    context: 'Elygent — founder and AI platform architect',
    themes: [
      'Cloud agents',
      'Human-agent collaboration',
      'Shared knowledge',
      'Model-agnostic integration',
    ],
    technologies: [
      'OpenClaw',
      'Hermes',
      'Paperclip',
      'Buzz',
      'GBrain',
      'GStack',
      'Node.js',
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
    evidence: 'Independent development pilot and reviewed implementation',
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
  updatedAt: '2026-09-10',
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
    'Osmar creates AI-native teams and agent platforms that scale productivity and efficiency. His work connects reusable workflows, shared knowledge and distributed execution behind interfaces people can use. Professional case studies demonstrate team transformation, adoption and measurable delivery results. He founded Elygent, an independent AI platform company, and leads its product and platform architecture.',
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
      initiative: 'Visa Agent Factory',
      metric: 'delivery pace multiplier',
      display: visaPlatform.delivery.display,
      qualifier: 'Same resources; candidate-reported delivery pace',
      provenance: visaPlatform.delivery.provenance,
    },
    {
      initiative: 'Visa Agent Factory',
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
    'Career outcomes are candidate-provided, not an independent employer audit.',
    'Role dates corrected directly by Osmar on September 10, 2026: current role October 2024; previous Director role ends September 2024. These supersede the earlier dates.',
    '3× describes reported delivery pace with the same resources; no measurement period or standardized benchmark was provided. AI Loop improvement refers to skills and shared knowledge, not model-weight training.',
    'Elygent is an independent AI platform company founded by Osmar. Its founding date, revenue, headcount and commercial adoption metrics were not supplied; Visa adoption figures do not apply to it.',
    'Private-cloud evidence supports service use and application delivery, not ownership of every catalog service. Shared Buzz compute remains exploration.',
    'The supplied record does not establish GPU-fleet, facilities, RFP or infrastructure-budget ownership.',
    'Education is Finance with a Mathematics minor; no engineering degree is claimed.',
    'Capacity controls are hypothetical design exercises, not production telemetry.',
    'The public sandbox cannot access private accounts, gateways, knowledge or payment credentials.',
  ],
  interfaces: {
    guestLab: 'https://osmarmorales.io/#lab',
    guestComputer: 'https://agent.osmarmorales.io/guest/computer/',
    guestCommunity: 'https://osmarmorales.io/#community',
    communityClient: 'Native Buzz desktop application',
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
      'Agent orchestration',
      'Technical leadership',
      'Human-agent collaboration',
    ],
  },
};

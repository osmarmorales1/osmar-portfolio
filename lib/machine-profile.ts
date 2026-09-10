import { profile, cases, learningLoop } from './portfolio-data.ts';
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
    start: '2025-10',
    end: null,
    summary:
      'Platform architecture, governed capabilities and organic adoption across 500+ total users.',
  },
  {
    employer: 'Visa',
    title: 'Director, Data Engineering',
    start: '2020-11',
    end: '2025-09',
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
    context: 'Enterprise experience',
    themes: [
      'AI platform enablement',
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
      'Day-2 operations',
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
    context: 'Independent Elygent platform',
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
    headline: 'I bring teams to the AI frontier.',
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
    languages: ['English', 'Spanish'],
  },
  story:
    'From finance and executive analytics to data engineering and AI platforms. Osmar connects enterprise AI, public/private cloud and on-premises foundations, technical judgment and frontier learning so entire teams can use new capabilities. Elygent is one independent project demonstrating that approach.',
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
    'Elygent is an independent development pilot; Visa adoption figures do not apply to it.',
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

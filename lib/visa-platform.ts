// Candidate-confirmed public career narrative, September 10, 2026.
// These describe Visa work; the independent public lab has different capabilities.
export const visaPlatform = {
  source:
    'Direct candidate corrections and platform description, September 2026. Current role starts October 2024; latest adoption scope is five regions and multiple teams at Visa. This supersedes earlier role-date and geography wording.',
  roleStart: '2024-10',
  previousRoleEnd: '2024-09',
  summary:
    'Created Agent Factory to transform data-science teams into an AI-native organization, standardizing business workflows and enabling 3× delivery pace with the same resources. Built locally and adopted globally by 500+ total users across five regions and multiple teams at Visa.',
  delivery: {
    display: '3×',
    measure: 'delivery pace',
    resources: 'same resources',
    provenance:
      'Candidate-reported September 10, 2026; baseline, measurement period and workload mix not supplied. Do not convert this into a revenue, cost-saving, throughput or benchmark claim.',
  },
  capabilities: [
    {
      id: 'skills-loop',
      title: 'AI Loop and reusable skills',
      text: 'Converted business workflows into reusable agent skills. The AI Loop learns recurring user patterns, creates and improves skills from collective knowledge, and recommends them at runtime to increase reuse, standardization and adoption. Platform capability grows through shared skills and knowledge; this does not establish model-weight training or unrestricted self-modifying production code.',
    },
    {
      id: 'v-agent',
      title: 'V Agent: one way to delegate',
      text: 'Built V Agent, Visa’s super agent; V stands for Visa. It packages agents and connects deployed platforms, surfaces and tools through one simplification layer. It orchestrates across Buzz, Paperclip, cloud agents and OpenClaw assistant instances, giving business users one simple way to delegate without managing the underlying systems. This definition was explicitly corrected by Osmar on September 10, 2026.',
    },
    {
      id: 'vca-brain',
      title: 'VCA Brain: shared business memory',
      text: 'Created VCA Brain to share project context, observations and collective knowledge across people using Agent Factory. Teams and agents can discover prior work, understand what colleagues are working on and reuse learning instead of starting from zero. VCA Brain is Visa work; do not equate it with the independent Elygent GBrain deployment or imply public access to Visa knowledge.',
    },
    {
      id: 'distributed-compute',
      title: 'Local, remote and cloud execution',
      text: 'Centralized orchestration on premises while connecting local, remote and cloud compute. Users can delegate agentic work to Windows VDIs, local or remote machines, and cloud agents. This is orchestration and application-delivery work across enterprise compute, not evidence of owning GPU fleets, datacenter facilities or hardware procurement.',
    },
    {
      id: 'buzz-collaboration',
      title: 'Agentic Slack: human–agent communication',
      text: 'Built and deployed an Agentic Slack experience on Buzz for human-agent communication and collaboration, connecting shared channels to delegated desktop and cloud work. Paperclip serves as an agent orchestration backend. Agentic Slack is a descriptive analogy; the integration is Osmar’s work, while Buzz, Paperclip and Slack retain their own authorship and ownership. The Visa deployment is distinct from the native Buzz public demonstration.',
    },
    {
      id: 'long-running',
      title: 'Agents that work for hours and days',
      text: 'Set up and operationalized long-running agents that execute for hours and days toward business objectives, with checkpointed state, isolated contexts, scoped access, independent validation and human review. Osmar confirms deploying Perplexity Numbat at Visa and Elygent for agent cybersecurity visibility. Numbat monitoring is an additional control, not a guarantee of complete threat prevention or uninterrupted execution. Specific enforcement configuration, detection coverage and performance metrics were not supplied.',
    },
  ],
};

export const visaPlatformEvidence = [
  visaPlatform.summary,
  `Corrected role dates: Director, AI Agent Platform, October 2024 to present; Director, Data Engineering, November 2020 to September 2024. ${visaPlatform.source}`,
  `Delivery result: ${visaPlatform.delivery.provenance}`,
  ...visaPlatform.capabilities.map((item) => `${item.title}: ${item.text}`),
].join('\n');

// Candidate-confirmed public career narrative, September 10, 2026.
// These describe Visa work; the independent public lab has different capabilities.
export const visaPlatform = {
  source:
    'Direct candidate corrections and platform description, September 2026. Current role starts October 2024; latest adoption scope is five regions and multiple teams at Visa. This supersedes earlier role-date and geography wording.',
  roleStart: '2024-10',
  previousRoleEnd: '2024-09',
  leadership:
    'Led 15+ people and orchestrated hundreds of agents, both deployed and running concurrently. Candidate-confirmed September 12, 2026; no exact concurrency peak, duration or reporting-line breakdown was supplied. This is separate from the earlier seven-person data engineering team and six-person AI workstream.',
  summary:
    'Created an AI enablement platform to transform data-science teams into an AI-native organization, standardizing business workflows and enabling 3× delivery pace with the same resources. Built locally and adopted globally by 500+ total users across five regions and multiple teams at Visa.',
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
      title: 'Continuous learning and reusable skills',
      text: 'Converted business workflows into reusable agent skills. The continuous learning loop identifies recurring user patterns, creates and improves skills from collective knowledge, and recommends them at runtime to increase reuse, standardization and adoption. Platform capability grows through shared skills and knowledge; this does not establish model-weight training or unrestricted self-modifying production code.',
    },
    {
      id: 'v-agent',
      title: 'V Agent (Visa super agent)',
      text: 'Built V Agent (Visa super agent), an orchestration and simplification layer connecting agents, platforms, tools and enterprise systems. It gives business users one way to delegate across connected Visa environments without managing the underlying systems. It connects human-agent collaboration, the AI orchestration backend, cloud agents and assistant instances, implemented across Buzz, Paperclip and OpenClaw. This definition was explicitly corrected by Osmar on September 10, 2026.',
    },
    {
      id: 'second-brain',
      title: 'Second Brain: shared business knowledge',
      text: 'Created a shared Second Brain so teams and agents can reuse project context, observations and collective business knowledge. Teams and agents can discover prior work, understand what colleagues are working on and reuse learning instead of starting from zero. This shared knowledge system is Visa work; do not equate it with the independent Elygent knowledge system or imply public access to Visa knowledge.',
    },
    {
      id: 'distributed-compute',
      title: 'Local, remote and cloud execution',
      text: 'Centralized orchestration on premises while connecting local, remote and cloud compute. Users can delegate agentic work to Windows VDIs, local or remote machines, and cloud agents. This is orchestration and application-delivery work across enterprise compute, not evidence of owning GPU fleets, datacenter facilities or hardware procurement.',
    },
    {
      id: 'buzz-collaboration',
      title: 'Agentic Slack: human–agent communication',
      text: 'Built and deployed an Agentic Slack communication layer where people and agents share context and delegate desktop and cloud work. An AI orchestration backend turns shared-channel conversations into accountable execution. Implementation uses Buzz for collaboration and Paperclip for orchestration. Agentic Slack is a descriptive analogy; the system design, integration and deployment are Osmar’s work, while Buzz, Paperclip and Slack retain their own authorship and ownership. The Visa deployment is distinct from the public demonstration.',
    },
    {
      id: 'long-running',
      title: 'AI governance and cybersecurity for long-running agents',
      text: 'Operationalized agents that work for hours and days toward business objectives, with AI governance and cybersecurity controls: checkpointed state, isolated contexts, scoped access, independent validation, human review and security monitoring. Osmar confirms deploying Perplexity Numbat at Visa and Elygent for agent-activity visibility. Monitoring is an additional control, not a guarantee of complete threat prevention or uninterrupted execution. Specific enforcement configuration, detection coverage and performance metrics were not supplied.',
    },
  ],
};

export const visaPlatformEvidence = [
  visaPlatform.summary,
  `Leadership scope: ${visaPlatform.leadership}`,
  `Corrected role dates: Director, AI Agent Platform, October 2024 to present; Director, Data Engineering, November 2020 to September 2024. ${visaPlatform.source}`,
  `Delivery result: ${visaPlatform.delivery.provenance}`,
  ...visaPlatform.capabilities.map((item) => `${item.title}: ${item.text}`),
].join('\n');

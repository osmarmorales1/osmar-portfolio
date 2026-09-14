// Candidate-confirmed public career narrative, September 10, 2026.
// These describe Visa work; the independent public lab has different capabilities.
export const visaPlatform = {
  source:
    'Direct candidate corrections and platform description, September 2026. Current role starts October 2024; latest adoption scope is five regions and multiple teams at Visa. This supersedes earlier role-date and geography wording.',
  roleStart: '2024-10',
  previousRoleEnd: '2024-09',
  leadership:
    'Led 9 people; hundreds of agents deployed and running concurrently. This is the latest candidate-requested leadership wording, September 12, 2026. Data Engineering leadership covered 7 engineers, with remote colleagues in Mexico and India. Preserve the past-tense leadership claim; do not infer a current direct-report count, an exact concurrency peak or country-by-country headcounts.',
  summary:
    'Built Agent Factory as the shared AI foundation that put agents beside data-science teams, enabling 3× delivery pace with the same resources through reusable automation and shared knowledge. Built locally and adopted globally by 500+ total users across five regions and multiple teams at Visa.',
  delivery: {
    display: '3×',
    measure: 'delivery pace',
    resources: 'same resources',
    provenance:
      'Candidate-reported September 10, 2026; baseline, measurement period and workload mix not supplied. Do not convert this into a revenue, cost-saving, throughput or benchmark claim.',
  },
  capabilities: [
    {
      id: 'operating-model',
      title: 'From reusable skills to accountable delivery',
      text: 'Osmar’s operating approach is to capture know-how as reusable skills, assign each skill an agent owner with a trigger, inputs and a measurable outcome, then orchestrate handoffs and exception handling across the workflow. Skillify, Agentify and Operate name these stages. Skills may be learned from completed work or contributed by teammates. The supplied September 2026 slide illustrates possible data-science roles; it is not evidence that the entire pictured team structure is deployed.',
    },
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
      title: 'Shared compute and self-hosted open models',
      text: 'Enabled shared access to self-hosted open models and compute through on-premises orchestration, connecting local, remote and cloud environments. Teams and agents can reuse model access and delegate execution without managing the underlying complexity. The candidate confirms self-hosted model deployment and names Kimi and GLM as model-family examples across the broader work discussed. Users can also delegate agentic work to Windows VDIs, local or remote machines, and cloud agents. This is orchestration and application-delivery work across enterprise compute, not evidence of owning GPU fleets, datacenter facilities or hardware procurement.',
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

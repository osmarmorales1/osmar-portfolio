export const privateCloudPillars = [
  {
    id: 'compute',
    name: 'Compute',
    short: 'Containers + VMs',
    title: 'Choose the environment for the workload.',
    technologies: ['Kubernetes', 'Docker', 'Virtual machines'],
    description:
      'I match application and AI workloads to public cloud, private cloud and on-premises environments. At Visa, this includes self-service containers, namespaces and VMs.',
    consideration: 'Isolation, workload fit and capacity.',
  },
  {
    id: 'data',
    name: 'Data',
    short: 'Storage + databases',
    title: 'Give the workload a dependable data foundation.',
    technologies: [
      'Relational databases',
      'NAS / file',
      'Object / block storage',
    ],
    description:
      'Connect database and storage services to the needs of the application—from durable records to the data behind AI workflows.',
    consideration: 'Access, durability and the right storage pattern.',
  },
  {
    id: 'network',
    name: 'Networking',
    short: 'Traffic + access',
    title: 'Make the service reachable—and controlled.',
    technologies: ['Load balancing', 'DNS', 'Access controls'],
    description:
      'Work across network services and application boundaries so platforms can be reached, integrated and operated within enterprise controls.',
    consideration: 'Availability, routing and governed access.',
  },
  {
    id: 'operate',
    name: 'Operations',
    short: 'Operate + improve',
    title: 'Plan for the work after deployment.',
    technologies: ['Observability', 'Recovery', 'Continuous improvement'],
    description:
      'Make execution observable, recover from failures, and use feedback to improve reliability as the platform grows.',
    consideration: 'Reliability, recovery and lifecycle decisions.',
  },
] as const;

export const infrastructureEvidence =
  'Osmar confirms experience across public cloud, private cloud and on-premises infrastructure, choosing platforms and providers to fit the workload. Scope clarified directly on September 10, 2026. His Visa private-cloud example includes Kubernetes/container and VM services, storage, networking, relational databases and Day-2 operations. New contextual photos supplied September 10, 2026. This supports service-use and application-delivery context; it does not establish ownership of every catalog service, GPU fleets, facilities or procurement.';
export const aiFactoryApproach =
  'An AI factory is infrastructure purpose-built to produce intelligence, integrating compute and AI software for training and inference. Osmar uses the term for the transition from general data-center capacity to AI compute that serves the business. His stated contribution is the orchestration and application layer: connecting on-premises, local, remote and cloud execution to agents, reusable workflows and shared business knowledge. His AI enablement platform is the orchestration and application layer, not a claim of ownership of an entire physical AI factory. GPU-fleet, facilities, power/cooling and procurement ownership are not established.';
export const sharedComputeAgenda =
  'Shared compute and self-hosted open models are part of Osmar’s described work at Visa and in his independent Elygent lab. He confirmed having deployed self-hosted models on September 12, 2026, after naming Kimi and GLM as examples. Shared inference gives teams and agents reusable access to hosted models and control over deployment. Exact model versions, deployment-by-employer details, serving frameworks, GPU topology, concurrency and measured cost savings were not supplied. The public community currently uses xAI-hosted Grok; separate self-hosted deployment experience does not establish a public local-model pool. This confirmation supersedes earlier evaluation-only wording for the broader self-hosting experience. Digital twins and AI ontology remain exploratory.';

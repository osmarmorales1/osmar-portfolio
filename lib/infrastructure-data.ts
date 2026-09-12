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
  'Community-shared compute means hosting an open-weight model on contributed hardware and making inference available to authorized community members through Buzz. This is Osmar’s target for his community. Open-source agent software and locally hosted model weights are separate layers. A Grok-backed cloud demo must be labeled Grok; it is not evidence of self-hosted GLM, Kimi or another local model. A deployed Elygent local compute pool has not been established.';

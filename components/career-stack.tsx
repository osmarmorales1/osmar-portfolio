'use client';
import { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Database,
  ChartNoAxesCombined,
  Network,
  Server,
  Workflow,
  Plus,
} from 'lucide-react';
import MotionHeading from './motion-heading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const career = [
  [
    '2024 — NOW',
    'Visa',
    'Director, AI Agent Platform',
    'Created Agent Factory. AI-native teams delivering at 3× the pace with the same resources.',
  ],
  [
    '2020 — 2024',
    'Visa',
    'Director, Data Engineering',
    'Cut benchmarking from days to hours. Preserved delivery through a 1k+ repository migration.',
  ],
  [
    '2018 — 2020',
    'Visa',
    'Manager, Data Analytics',
    'Cut analytics preparation from three weeks to five hours. Enabled 40+ colleagues through self-service automation.',
  ],
  [
    '2016 — 2018',
    'FedEx Express',
    'Data Scientist',
    'Built executive reporting and BI platforms that gave leaders financial visibility across a $1.5B business.',
  ],
  [
    '2013 — 2016',
    'TracFone Wireless',
    'Revenue Systems Analyst',
    'Cut revenue analysis time by two-thirds with analytical models and rebuilt ETL for a 25M-subscriber business.',
  ],
  [
    '2012 — 2013',
    'FedEx Express',
    'Process Automation Developer',
    'Cut reconciliation time 70% with custom software and standardized reporting across Latin America and the Caribbean.',
  ],
  [
    '2007 — 2012',
    'Davis Quality',
    'Systems Accountant',
    'Built accounting and data systems that improved financial visibility and planning.',
  ],
];
const groups = {
  visa: [
    [
      'Agentic AI & harnesses',
      'Claude Code · Codex · LangChain ecosystem · APIs · CLIs · MCP · A2A · Computer use',
      Network,
    ],
    [
      'Models & context',
      'LLM-agnostic · Harness-agnostic · Open-weight routing · RAG · Shared memory',
      Database,
    ],
    [
      'Distributed computing',
      'Linux VPS · Docker · Kubernetes · Local, remote & cloud agent execution',
      Server,
    ],
    [
      'Data engineering & MLOps',
      'Apache Airflow · Spark · Feature engineering platforms · Feature stores · LLMOps',
      Workflow,
    ],
    [
      'CI/CD & cybersecurity',
      'GitHub · Jenkins · Azure DevOps · Security monitoring · Scoped access',
      Code2,
    ],
  ],
  elygent: [
    [
      'Human–agent collaboration',
      'Agentic Slack · AI orchestration · Long-running agents · Human review',
      Network,
    ],
    [
      'Knowledge & methods',
      'Shared memory · Agentic retrieval · Reusable skills · Knowledge provenance',
      Database,
    ],
    [
      'Connected capabilities',
      'Node.js · Python · APIs · CLIs · MCP · OAuth',
      Workflow,
    ],
    [
      'Cloud operations',
      'VPS · Linux · Docker · PostgreSQL · Redis · systemd · Caddy',
      Server,
    ],
  ],
  sandbox: [
    ['Experience', 'React · TypeScript · Vite · Accessible UI', Code2],
    ['Edge & hosting', 'Vercel · Custom domain · HTTPS', Network],
    [
      'Agent execution',
      'Agent runtimes · Browser automation · Linux containers · Node.js',
      Server,
    ],
    [
      'Agent-ready interfaces',
      'OpenAPI · JSON-LD · WebMCP · Tool traces',
      ChartNoAxesCombined,
    ],
  ],
} as const;
export default function CareerStack() {
  const [all, setAll] = useState(false);
  return (
    <section className="career-stack page-width" id="experience">
      <div className="section-heading">
        <div>
          <p className="micro">EXPERIENCE, CONNECTED</p>
          <MotionHeading>
            I lead the platform.
            <br />
            <em>I build with the team.</em>
          </MotionHeading>
        </div>
        <a
          className="text-link"
          href="/Osmar_Morales_Mastercard_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          The full resume <ArrowUpRight size={15} />
        </a>
      </div>
      <Tabs defaultValue="journey">
        <TabsList
          className="career-main-tabs"
          aria-label="Career and technical experience"
        >
          <TabsTrigger value="journey">Career journey</TabsTrigger>
          <TabsTrigger value="stack">Technical stack</TabsTrigger>
        </TabsList>
        <TabsContent value="journey">
          <div className="ai-milestones">
            <div>
              <span>2022</span>
              <strong>AI-assisted work</strong>
              <p>Early exploration of ChatGPT and Copilot.</p>
            </div>
            <div>
              <span>2024</span>
              <strong>Agentic workflows</strong>
              <p>From assistance to coordinated execution.</p>
            </div>
            <div>
              <span>Today</span>
              <strong>Shared capability</strong>
              <p>Agent platforms, team enablement, and Elygent.</p>
            </div>
          </div>
          <p className="milestone-note">
            AI adoption milestones, as reported by Osmar; distinct from formal
            role dates below.
          </p>
          <div className="career-timeline">
            {career
              .slice(0, all ? career.length : 4)
              .map(([dates, company, title, text]) => (
                <article key={title}>
                  <span className="timeline-date">{dates}</span>
                  <span className="timeline-company">{company}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
          </div>
          <button
            className="text-link history-toggle"
            aria-expanded={all}
            onClick={() => setAll(!all)}
          >
            {all ? 'Show recent experience' : 'Earlier chapters · 2007–2016'}
            <Plus
              size={14}
              style={{ transform: all ? 'rotate(45deg)' : 'none' }}
            />
          </button>
        </TabsContent>
        <TabsContent value="stack">
          <Tabs defaultValue="visa">
            <div className="stack-suite-heading">
              <p>
                Tools chosen for the work.
                <br />
                <strong>Experience connected to outcomes.</strong>
              </p>
              <TabsList aria-label="Technology context">
                <TabsTrigger value="visa">AI engineering</TabsTrigger>
                <TabsTrigger value="elygent">Elygent</TabsTrigger>
                <TabsTrigger value="sandbox">This sandbox</TabsTrigger>
              </TabsList>
            </div>
            {Object.entries(groups).map(([name, items]) => (
              <TabsContent key={name} value={name}>
                <div className="technology-grid">
                  {items.map(([label, tools, Icon]) => (
                    <article key={label}>
                      <Icon size={24} />
                      <div>
                        <h3>{label}</h3>
                        <p>{tools}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="stack-context">
                  {name === 'visa'
                    ? 'Capabilities used across enterprise and founder-led AI platform work.'
                    : name === 'elygent'
                      ? 'Independent Elygent integration work. Exploring digital twins and AI ontology for business workflows.'
                      : 'The portfolio you are using: a Vercel interface connected to a bounded agent service on a Linux VPS.'}
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </section>
  );
}

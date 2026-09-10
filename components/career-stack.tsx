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
    'Led data engineering and an AI workstream. Built MLOps foundations and coordinated cross-market delivery.',
  ],
  [
    '2018 — 2020',
    'Visa',
    'Manager, Data Analytics',
    'Self-service analytics, faster data foundations, and automation for 40+ colleagues.',
  ],
  [
    '2016 — 2018',
    'FedEx Express',
    'Data Scientist',
    'Executive finance reporting, mobile dashboards, and distributed BI delivery.',
  ],
  [
    '2013 — 2016',
    'TracFone Wireless',
    'Revenue Systems Analyst',
    'Revenue systems, ETL, and decision support.',
  ],
  [
    '2012 — 2013',
    'FedEx Express',
    'Process Automation Developer',
    'Financial reporting and reconciliation automation.',
  ],
  [
    '2007 — 2012',
    'Davis Quality',
    'Systems Accountant',
    'Accounting systems and financial visibility.',
  ],
];
const groups = {
  visa: [
    [
      'Agent platforms',
      'Python · Docker · MCP · APIs · RAG · Model routing',
      Network,
    ],
    [
      'Data & MLOps',
      'Spark · Hadoop / Hive · MLflow · Feast · Deequ',
      Database,
    ],
    [
      'Cloud and on-premises delivery',
      'Kubernetes · Containers · VMs · Storage · Load balancing · DNS',
      Server,
    ],
    [
      'Delivery & operations',
      'GitHub · Jenkins · Azure DevOps · Unix · Day 2',
      Workflow,
    ],
    [
      'Decision experiences',
      'Tableau · Power BI · Python · SQL',
      ChartNoAxesCombined,
    ],
  ],
  elygent: [
    [
      'Cloud agents & multiplayer',
      'OpenClaw · Hermes · Paperclip · Buzz',
      Network,
    ],
    [
      'Knowledge & methods',
      'GBrain · Agentic retrieval · Relationships · GStack',
      Database,
    ],
    [
      'Connected capabilities',
      'Node.js · Python · MCP · Composio · OAuth',
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
      'OpenClaw · Chromium · Linux containers · Node.js',
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
                <TabsTrigger value="visa">Visa</TabsTrigger>
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
                    ? 'Enterprise platform work across public cloud, private cloud and on-premises infrastructure, grouped by responsibility.'
                    : name === 'elygent'
                      ? 'The independent Elygent integration stack. Upstream projects retain their own authorship.'
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

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
    'Built Azure DevOps self-service automation for 40+ colleagues and modernized analytics foundations.',
  ],
  [
    '2016 — 2018',
    'FedEx Express',
    'Data Scientist',
    'Built BI platforms and executive financial-close reporting to support leadership decisions.',
  ],
  [
    '2013 — 2016',
    'TracFone Wireless',
    'Revenue Systems Analyst',
    'Rebuilt revenue ETL and reporting. Created analytical models that cut analysis time by two-thirds.',
  ],
  [
    '2012 — 2013',
    'FedEx Express',
    'Process Automation Developer',
    'Built reconciliation software and standardized reporting, cutting reconciliation time 70%.',
  ],
  [
    '2007 — 2012',
    'Davis Quality',
    'Systems Accountant',
    'Built digital data infrastructure and modernized accounting systems for financial planning.',
  ],
];
const groups = {
  visa: [
    [
      'Agentic AI & harnesses',
      'Claude Code · Codex · APIs · CLIs · MCP · Terminal workflows · Computer use',
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
      'CI/CD & validation',
      'GitHub · Jenkins · Azure DevOps · Automated tests · Evaluations',
      Code2,
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

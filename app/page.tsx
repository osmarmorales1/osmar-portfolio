'use client';
/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- This site ships as standalone Vite HTML; native images and static-file links are intentional. */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- The horizontal gallery must be keyboard-focusable for native arrow-key scrolling. */
import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Compass,
  Database,
  Download,
  Feather,
  Globe,
  Layers3,
  Menu,
  Network,
  Server,
  Sparkles,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import NativeGuestWorkspace from '@/components/native-guest-workspace';
import AppShowcase from '@/components/app-showcase';
import HeroFilm from '@/components/hero-film';
import LeadershipMethod from '@/components/leadership-method';
import MotionHeading from '@/components/motion-heading';
import EvidenceDashboard from '@/components/evidence-dashboard';
import CareerStack from '@/components/career-stack';
import FrontierLab from '@/components/frontier-lab';
import CapabilityCard from '@/components/capability-card';
import { cases } from '@/lib/portfolio-data';
import { registerPortfolioTools } from '@/lib/portfolio-webmcp';
import { buzzCommunity, profileStructuredData } from '@/lib/machine-profile';
const teamPrompt =
  'Create an executive brief about Osmar’s platform leadership. Have two specialists review public career evidence and platform decisions, then bring their findings together for an AI platform hiring team.';
const apps = [
  {
    name: 'MLflow',
    icon: Activity,
    color: '#67a397',
    role: 'MLOps foundations',
    detail: 'Model management in the supplied Visa work record.',
  },
  {
    name: 'Buzz',
    icon: Users,
    color: '#aa911a',
    role: 'Team collaboration',
    detail: 'Shared channels for people, agents, and the work they produce.',
  },
  {
    name: 'Paperclip',
    icon: Workflow,
    color: '#677cc2',
    role: 'Accountable work',
    detail: 'Goals, ownership, handoffs, and a path to a delivered result.',
  },
  {
    name: 'Hermes',
    icon: Feather,
    color: '#7099bf',
    role: 'Specialist workers',
    detail: 'Focused execution and useful methods carried forward.',
  },
  {
    name: 'Codex',
    icon: Code2,
    color: '#6366f1',
    role: 'Agentic engineering',
    detail: 'Building, reviewing, and validating software with a coding agent.',
  },
  {
    name: 'Grok Bot',
    icon: Users,
    color: '#9159fe',
    role: 'Cloud agents',
    detail: 'Exploring persistent AI teammates with their own cloud computer.',
  },
  {
    name: 'MCP',
    icon: Network,
    color: '#63867f',
    role: 'Connected tools',
    detail: 'A common interface for approved capabilities.',
  },
  {
    name: 'Python',
    icon: Code2,
    color: '#ac9b5e',
    role: 'Data & automation',
    detail: 'Practical data, automation, and integration work.',
  },
  {
    name: 'Vercel',
    icon: Globe,
    color: '#404847',
    role: 'The web experience',
    detail: 'The public portfolio interface, deployed at osmarmorales.io.',
  },
  {
    name: 'Linux VPS',
    icon: Server,
    color: '#78918a',
    role: 'Cloud execution',
    detail: 'The bounded agent service behind the portfolio.',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    color: '#7293b5',
    role: 'Data foundations',
    detail: 'A building block in the independent Elygent integration stack.',
  },
  {
    name: 'GitHub',
    icon: Code2,
    color: '#666b6c',
    role: 'Delivery workflow',
    detail: 'Repositories, change review, and software delivery.',
  },
  {
    name: 'Docker',
    icon: Layers3,
    color: '#6a9bc2',
    role: 'Portable environments',
    detail: 'Packaged services and repeatable deployment.',
  },
  {
    name: 'Claude',
    icon: Sparkles,
    color: '#d97757',
    role: 'Coding & reasoning',
    detail: 'Claude Code for engineering workflows, reusable skills, and tool use.',
  },
  {
    name: 'Redis',
    icon: Database,
    color: '#397d9f',
    role: 'Application infrastructure',
    detail:
      'Redis and PostgreSQL support the independent Buzz deployment in Elygent.',
  },
  {
    name: 'OpenClaw',
    icon: Compass,
    color: '#e96952',
    role: 'Conversation & runtime',
    detail: 'A familiar way to begin work with an AI assistant.',
  },
  {
    name: 'Kubernetes',
    icon: Layers3,
    color: '#397d9f',
    role: 'Private-cloud workloads',
    detail:
      'Container and namespace services for enterprise application delivery.',
  },
  {
    name: 'WebMCP',
    icon: Globe,
    color: '#397d9f',
    role: 'An interface for agents',
    detail:
      'This page exposes public profile and capacity tools to compatible browser agents.',
  },
];
const brandIcons: Record<string, string> = {
  OpenClaw: 'openclaw-static.png',
  Hermes: 'hermes.png',
  Buzz: 'buzz.png',
  Paperclip: 'paperclip-light.svg',
  Codex: 'codex.png',
  'Grok Bot': 'grok-bot.svg',
  Docker: 'docker.svg',
  Python: 'python.svg',
  Claude: 'claude.svg',
  GitHub: 'github.svg',
  Vercel: 'vercel.svg',
  PostgreSQL: 'postgresql.svg',
  Jenkins: 'jenkins.svg',
  MLflow: 'mlflow.svg',
  Redis: 'redis.svg',
  Kubernetes: 'kubernetes.svg',
};
const productScreens = [
  {
    id: 'elygent',
    name: 'Elygent',
    task: 'Bring in specialists. Show me the result.',
    title: 'Make collaboration visible.',
    description: 'A working view of agents, evidence, and a completed brief.',
    image: null,
    source: null,
  },
  {
    id: 'buzz',
    name: 'Buzz',
    task: 'Work together, in the same conversation.',
    title: 'Give the team a shared space.',
    description: 'Our native community, with shared channels and cloud agents.',
    image: '/v10/buzz-community.jpg',
    source: buzzCommunity.inviteUrl,
  },
  {
    id: 'paperclip',
    name: 'Paperclip',
    task: 'Turn the goal into accountable work.',
    title: 'Keep ownership in the picture.',
    description: 'Goals, assignments, and handoffs in the actual app.',
    image: '/v5/paperclip-light-app.png',
    source: 'https://github.com/paperclipai/paperclip',
  },
];
export default function Home() {
  const [workspace, setWorkspace] = useState(false),
    [prompt, setPrompt] = useState(''),
    [workspaceView, setWorkspaceView] = useState<'agent' | 'computer'>('agent'),
    [launch, setLaunch] = useState(0),
    [mobileNav, setMobileNav] = useState(false),
    [pinned, setPinned] = useState(false),
    [selectedApp, setSelectedApp] = useState(() =>
      apps.findIndex((app) => app.name === 'OpenClaw'),
    ),
    [gallery, setGallery] = useState<string | null>(null),
    [project, setProject] = useState<string | null>(null);
  const selected = cases.find((c) => c.id === project);
  const galleryItem = productScreens.find((p) => p.id === gallery);
  useEffect(() => registerPortfolioTools(), []);
  function openEly(message = '', view: 'agent' | 'computer' = 'agent') {
    setPrompt(message);
    setWorkspaceView(view);
    setLaunch((v) => v + 1);
    setWorkspace(true);
    setMobileNav(false);
  }
  useEffect(() => {
    const scroll = () => setPinned(window.scrollY > 450);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openEly('');
      }
      if (e.key === 'Escape') setMobileNav(false);
    };
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('keydown', key);
    };
  }, []);
  return (
    <div className="aside-portfolio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`aside-nav ${pinned ? 'pinned' : ''}`}>
        <a href="#main" className="osmar-logo" aria-label="Osmar Morales home">
          <span>
            <Sparkles size={22} />
          </span>
          Osmar
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#platform">Approach</a>
          <a href="#experience">Experience</a>
          <a
            href="https://github.com/osmarmorales1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={11} />
          </a>
        </nav>
        <Button
          variant="ghost"
          className="aside-menu-button"
          aria-label={mobileNav ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileNav(!mobileNav)}
        >
          {mobileNav ? <X size={23} /> : <Menu size={23} />}
        </Button>
      </header>
      <Dialog open={mobileNav} onOpenChange={setMobileNav}>
        <DialogContent
          className="aside-mobile-menu translate-x-0 translate-y-0"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Navigation</DialogTitle>
          <DialogDescription className="sr-only">
            Explore Osmar’s work, platform, experience, and contact details.
          </DialogDescription>
          <div className="mobile-menu-heading">
            <span className="osmar-logo">
              <span>
                <Sparkles size={22} />
              </span>
              Osmar
            </span>
            <Button
              variant="ghost"
              aria-label="Close menu"
              onClick={() => setMobileNav(false)}
            >
              <X size={23} />
            </Button>
          </div>
          <nav aria-label="Mobile navigation">
            {[
              ['Work', '#work'],
              ['Approach', '#platform'],
              ['Experience', '#experience'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileNav(false)}>
                {label}
                <ArrowUpRight size={20} />
              </a>
            ))}
            <a
              href="https://github.com/osmarmorales1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={20} />
            </a>
          </nav>
          <a
            className="black-pill"
            href="/Osmar_Morales_Mastercard_Resume.pdf"
            download
          >
            <Download size={16} />
            Download resume
          </a>
        </DialogContent>
      </Dialog>
      <main id="main">
        <section className="aside-hero">
          <div className="aside-hero-copy">
            <a className="identity-pill" href="#experience">
              <span className="hero-portrait">
                <img
                  src="/v8/osmar-morales.png"
                  alt=""
                  width="1254"
                  height="1254"
                />
              </span>
              <span className="hero-identity-text">
                <strong>Osmar Morales</strong>
                <span>AI platform leader</span>
              </span>
              <ChevronDown size={13} />
            </a>
            <h1>
              I build
              <br />
              AI-native teams.
            </h1>
            <p className="hero-lead">
              Systems that automate work. Teams that scale delivery.
            </p>
            <div className="hero-actions">
              <a
                className="black-pill"
                href="/Osmar_Morales_Mastercard_Resume.pdf"
                download
              >
                <Download size={17} />
                <span>Download resume</span>
              </a>
            </div>
          </div>
          <div className="hero-app-stage">
            <HeroFilm />
          </div>
        </section>
        <div className="aside-content-shell">
          <section className="editorial-intro" id="elygent">
            <a href="#experience">
              Meet Osmar <ChevronDown size={14} />
            </a>
            <div>
              <p>
                <strong>I create systems and processes.</strong> From financial
                automation to AI platforms, I build reusable ways for teams to
                work.
              </p>
              <p>
                <strong>Built for people to use.</strong> One simple way to
                delegate work. Elygent is the AI platform company I founded.
              </p>
              <button
                className="black-pill intro-cloud-action"
                onClick={() => openEly()}
              >
                Try cloud agent <ArrowUpRight size={16} />
              </button>
            </div>
          </section>
          <EvidenceDashboard onInspect={setProject} />
          <section className="aside-capabilities" id="platform">
            <div className="aside-section-heading">
              <a className="section-kicker" href="#app-windows">
                My AI factory approach <ChevronDown size={13} />
              </a>
              <MotionHeading effect="reveal">
                The AI factory starts
                <br />
                <em>below the interface.</em>
              </MotionHeading>
            </div>
            <div className="app-icon-stage">
              <fieldset
                className="app-icon-field"
                aria-label="Explore the connected stack"
              >
                {apps.map((app, i) => (
                  <button
                    key={app.name}
                    className={i === selectedApp ? 'selected' : ''}
                    onClick={() => setSelectedApp(i)}
                    aria-pressed={i === selectedApp}
                    aria-label={`${app.name}: ${app.role}`}
                  >
                    {brandIcons[app.name] ? (
                      <img
                        className="app-brand-icon"
                        src={`/v5/icons/${brandIcons[app.name]}`}
                        alt=""
                        width="32"
                        height="32"
                        loading="eager"
                      />
                    ) : (
                      <app.icon size={32} style={{ color: app.color }} />
                    )}
                    <span>{app.name}</span>
                  </button>
                ))}
              </fieldset>
            </div>
            <div className="app-selection" aria-live="polite">
              <strong>{apps[selectedApp].name}</strong>
              <span>{apps[selectedApp].detail}</span>
            </div>
            <p className="centered-copy">
              Compute, knowledge, tools, and people.
              <br /> I connect the layers so the whole team can put AI to work.
            </p>
            <section
              className="aside-product-row"
              id="app-windows"
              aria-label="Application gallery; swipe to explore"
              tabIndex={0}
            >
              {productScreens.map((p) => (
                <CapabilityCard
                  key={p.id}
                  item={p}
                  onOpen={() => setGallery(p.id)}
                />
              ))}
            </section>
            <div className="gallery-hint">
              <span>Open a window to explore the details</span>
              <span>
                Swipe to explore <ArrowRight size={13} />
              </span>
            </div>
          </section>
          <LeadershipMethod />
          <CareerStack />
          <FrontierLab
            onLaunch={openEly}
            teamPrompt={teamPrompt}
            communityInviteUrl={buzzCommunity.inviteUrl}
            communityDownloadUrl={buzzCommunity.downloadUrl}
            communityIphoneUrl={buzzCommunity.iphoneUrl}
            communityAndroidUrl={buzzCommunity.androidUrl}
            communityChannels={buzzCommunity.channels}
            communityAgents={buzzCommunity.agents}
          />
        </div>
        <section className="aside-closing" id="contact">
          <div>
            <MotionHeading>
              Let’s move your
              <br />
              <em>team forward.</em>
            </MotionHeading>
            <a className="black-pill" href="mailto:osmarmorales1@gmail.com">
              Get in touch <ArrowUpRight size={15} />
            </a>
            <a
              className="closing-resume"
              href="/Osmar_Morales_Mastercard_Resume.pdf"
              download
            >
              Download resume <Download size={14} />
            </a>
          </div>
        </section>
      </main>
      <footer className="aside-footer">
        <div>
          <a className="osmar-logo" href="#main">
            <span>
              <Sparkles size={22} />
            </span>
            Osmar
          </a>
          <p>
            AI platform leadership.
            <br />
            Enterprise experience.
            <br />A builder’s attention to detail.
          </p>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="#work">Selected work</a>
          <a href="#platform">My approach to platforms</a>
          <a href="#experience">Experience</a>
        </div>
        <div>
          <strong>Connect</strong>
          <a
            href="https://www.linkedin.com/in/osmarmorales/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/osmarmorales1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://elygent.ai" target="_blank" rel="noreferrer">
            Elygent.ai
          </a>
        </div>
        <div>
          <strong>Resources</strong>
          <a href="/Osmar_Morales_Mastercard_Resume.pdf">Resume</a>
          <a href="/portfolio-evidence.txt">Public evidence</a>
          <a href="/agents.html">Agent API</a>
          <a href="/llms.txt">llms.txt</a>
          <button onClick={() => setGallery('credits')}>Product credits</button>
        </div>
        <div className="aside-footer-bottom">
          <span>Osmar Morales · Miami, Florida</span>
          <span>Always building. Always learning.</span>
        </div>
      </footer>
      <NativeGuestWorkspace
        key={`native-${launch}`}
        open={workspace}
        onOpenChange={setWorkspace}
        initialPrompt={prompt}
        initialView={workspaceView}
        launchId={launch}
      />
      <Dialog
        open={!!gallery}
        onOpenChange={(v) => {
          if (!v) setGallery(null);
        }}
      >
        <DialogContent className="app-gallery-dialog">
          <DialogTitle>
            {gallery === 'credits'
              ? 'Product references'
              : galleryItem?.name || 'Elygent'}
          </DialogTitle>
          <DialogDescription>
            {gallery === 'credits'
              ? 'Public app examples and our own guest workspace. Elygent dashboards use a recorded public sandbox run.'
              : galleryItem?.description ||
                'A recorded public example. Start a live task to create your own result.'}
          </DialogDescription>
          {gallery === 'credits' ? (
            <div className="product-credits">
              <p>
                OpenClaw: the native app in an isolated Elygent guest workspace.
                MIT. <a href="/products/openclaw-LICENSE.txt">License</a>
              </p>
              <p>
                Buzz: Block / Buzz. Our native community, captured September 10,
                2026. Apache-2.0.{' '}
                <a href="/products/buzz-LICENSE.txt">License</a>
              </p>
              <p>
                Paperclip: Paperclip UI with official public example data. MIT.{' '}
                <a href="/products/paperclip-LICENSE.txt">License</a>
              </p>
              <p>
                Hermes: Nous Research / Hermes Agent. MIT.{' '}
                <a href="/products/hermes-LICENSE.txt">License</a>
              </p>
              <p>
                Application marks identify their respective projects.{' '}
                <a
                  href="/v5/icons/sources.json"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sources and license notices
                </a>
                .
              </p>
              <p>
                Jenkins artwork:{' '}
                <a
                  href="https://www.jenkins.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jenkins project
                </a>
                , <a href="/v5/icons/jenkins-logo-NOTICE.txt">CC BY-SA 3.0</a>.
                Python, Docker, and PostgreSQL use their official artwork;{' '}
                <a href="/v5/icons/sources.json">sources and usage notices</a>.
              </p>
              <p>
                Elygent: interactive application previews built for this
                portfolio, with recorded public run evidence. No private
                workspaces are pictured.
              </p>
            </div>
          ) : galleryItem?.image ? (
            <img
              src={galleryItem.image}
              alt={`${galleryItem.name} application view`}
              width="1440"
              height="900"
            />
          ) : (
            <div className="expanded-app">
              <AppShowcase
                initialView={
                  gallery === 'workboard'
                    ? 'workboard'
                    : gallery === 'brief'
                      ? 'brief'
                      : 'overview'
                }
                onLaunch={() => {
                  setGallery(null);
                  openEly();
                }}
              />
            </div>
          )}
          {galleryItem?.source && (
            <a
              className="editorial-link"
              href={galleryItem.source}
              target="_blank"
              rel="noreferrer"
            >
              {galleryItem.id === 'buzz'
                ? 'Join the native community'
                : 'Explore the upstream project'}{' '}
              <ArrowUpRight size={13} />
            </a>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!project}
        onOpenChange={(v) => {
          if (!v) setProject(null);
        }}
      >
        <DialogContent className="project-dialog">
          {selected && (
            <>
              <p className="micro">{selected.kind}</p>
              <DialogTitle>{selected.label}</DialogTitle>
              <DialogDescription>{selected.summary}</DialogDescription>
              <div className="project-impact">
                <strong>{selected.metric}</strong>
                <span>{selected.unit}</span>
              </div>
              <h3>What I owned</h3>
              <p>{selected.ownership}</p>
              <h3>What changed</h3>
              <p>{selected.outcome}</p>
              <small>{selected.note}</small>
              <button
                className="black-pill"
                onClick={() => {
                  setProject(null);
                  openEly(
                    `Inspect ${selected.label} and explain Osmar’s role and decisions.`,
                  );
                }}
              >
                Ask the cloud agent <ArrowUpRight size={14} />
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

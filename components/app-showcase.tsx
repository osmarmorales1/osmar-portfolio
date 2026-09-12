'use client';
/* eslint-disable jsx-a11y/prefer-tag-over-role -- Inline SVG charts need image and interactive point roles; HTML images cannot replace these elements. */
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  FileText,
  Folder,
  Home,
  LayoutDashboard,
  ListTodo,
  Maximize2,
  MoreHorizontal,
  Network,
  PanelLeft,
  Pause,
  Play,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { showcaseRun as run } from '@/lib/showcase-run';
export type AppView = 'overview' | 'workboard' | 'evidence' | 'brief';
const views = [
  { id: 'overview', title: 'Team overview', icon: LayoutDashboard },
  { id: 'workboard', title: 'Workboard', icon: ListTodo },
  { id: 'evidence', title: 'Shared knowledge', icon: BrainCircuit },
  { id: 'brief', title: 'Outputs', icon: FileText },
] as const;
const records = [
  {
    id: 'agent-factory',
    title: 'Visa · AI enablement platform',
    tag: 'PLATFORM',
    text: '500+ total users. Organic growth. Governed tools, reusable skills, model routing, and human review.',
    note: 'Candidate-confirmed · September 2026',
  },
  {
    id: 'career',
    title: 'Osmar Morales',
    tag: 'CAREER',
    text: 'Director, AI Agent Platform at Visa. Previously Director, Data Engineering and Manager, Data Analytics.',
    note: 'Supplied career record',
  },
  {
    id: 'elygent',
    title: 'Elygent.ai',
    tag: 'INDEPENDENT',
    text: 'An AI platform for agentic team collaboration. People, agents, knowledge, and tools in one connected experience.',
    note: 'Independent development pilot',
  },
];
export default function AppShowcase({
  initialView = 'overview',
  onLaunch,
  compact = false,
  identityLabel = 'Elygent',
  storyTime,
}: {
  initialView?: AppView;
  onLaunch: () => void;
  compact?: boolean;
  identityLabel?: string;
  storyTime?: number;
}) {
  const [view, setView] = useState<AppView>(initialView),
    [member, setMember] = useState(0),
    [point, setPoint] = useState(2);
  const [playing, setPlaying] = useState(false),
    [replayTime, setPlayhead] = useState(run.durationMs);
  const playhead = storyTime ?? replayTime;
  const replayStart = useRef(0);
  const replayOffset = useRef(run.durationMs);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      const ms = Math.min(
        run.durationMs,
        performance.now() - replayStart.current,
      );
      replayOffset.current = ms;
      setPlayhead(ms);
      if (ms >= run.durationMs) setPlaying(false);
    }, 100);
    return () => clearInterval(timer);
  }, [playing]);
  function changeView(value: AppView) {
    setPlaying(false);
    setView(value);
  }
  function toggleReplay() {
    if (!playing) {
      const from =
        replayOffset.current >= run.durationMs ? 0 : replayOffset.current;
      replayOffset.current = from;
      replayStart.current = performance.now() - from;
      setPlayhead(from);
    }
    setPlaying((value) => !value);
  }
  const graphEvents = run.events.filter((e) =>
    ['tool_result', 'handoff', 'agent_completed'].includes(e.type),
  );
  const coords = (id: string) => {
    let count = 0;
    let d = 'M42 161';
    graphEvents
      .filter((e) => e.agent === id && e.ms <= playhead)
      .forEach((e) => {
        count++;
        d += ` H${42 + (e.ms / run.durationMs) * 676} V${161 - count * 24}`;
      });
    return d + ` H${42 + (playhead / run.durationMs) * 676}`;
  };
  return (
    <div
      className={`software-window ${compact ? 'compact-app' : ''}`}
      aria-label="Elygent application preview from a recorded public run"
    >
      <aside className="software-sidebar">
        <div className="traffic">
          <i />
          <i />
          <i />
          <PanelLeft size={13} />
        </div>
        <div className="software-identity">
          <span>
            <Sparkles size={18} />
          </span>
          <strong>{identityLabel}</strong>
          <ChevronDown size={11} />
          <button onClick={onLaunch} aria-label="Start a new live task">
            <Plus size={15} />
          </button>
        </div>
        <div className="software-nav">
          <button onClick={onLaunch}>
            <Home size={15} /> Home
          </button>
          {views.map((v) => (
            <button
              className={view === v.id ? 'active' : ''}
              key={v.id}
              onClick={() => changeView(v.id)}
              aria-pressed={view === v.id}
            >
              <v.icon size={15} />
              {v.title}
              {v.id === 'brief' && <small>1</small>}
            </button>
          ))}
        </div>
        <span className="software-section-label">
          THE TEAM <ChevronDown size={10} />
        </span>
        <div className="software-members">
          {run.members.map((m, i) => (
            <button
              key={m.id}
              onClick={() => {
                setMember(i);
                changeView('workboard');
              }}
            >
              <span style={{ background: m.color }}>{m.role.slice(0, 1)}</span>
              {m.name}
              <i />
            </button>
          ))}
        </div>
        <span className="software-section-label">
          CONNECTED TOOLS <ChevronDown size={10} />
        </span>
        <div className="software-links">
          <button onClick={() => changeView('evidence')}>
            <BrainCircuit size={14} /> Public knowledge
          </button>
          <button onClick={() => changeView('evidence')}>
            <Search size={14} /> Project inspector
          </button>
          <button onClick={() => changeView('brief')}>
            <FileCheck2 size={14} /> Brief builder
          </button>
        </div>
        <div className="software-profile">
          <span>om</span>
          <div>
            <strong>Osmar Morales</strong>
            <small>Personal workspace</small>
          </div>
          <Settings size={13} />
        </div>
      </aside>
      <div className="software-main">
        <div className="software-browserbar">
          <Folder size={13} />
          <span>workspace</span>
          <ChevronRight size={11} />
          <strong>{views.find((v) => v.id === view)?.title}</strong>
          <div />
          <span className="recorded-badge">Recorded run</span>
          <button onClick={onLaunch} aria-label="Open live Elygent workspace">
            <Maximize2 size={13} />
          </button>
          <MoreHorizontal size={16} />
        </div>
        <div className="software-content">
          <div className="software-page-heading">
            <div>
              <p>
                <span />{' '}
                {identityLabel === 'Elygent'
                  ? 'ELYGENT / PUBLIC SANDBOX'
                  : 'OSMAR / PLATFORM LEADERSHIP'}
              </p>
              <h3>
                {view === 'overview'
                  ? 'One task. A team behind it.'
                  : view === 'workboard'
                    ? 'The work moves together.'
                    : view === 'evidence'
                      ? 'Context, with a source.'
                      : 'A result you can take with you.'}
              </h3>
              <span>
                {view === 'overview'
                  ? 'Explore a completed run. Start your own when you’re ready.'
                  : view === 'workboard'
                    ? 'Research and strategy run in parallel. Synthesis follows.'
                    : view === 'evidence'
                      ? 'The same approved records, shared across the team.'
                      : 'The executive editor brings the evidence together.'}
              </span>
            </div>
            <button className="app-run-button" onClick={onLaunch}>
              <Play size={12} /> Run your own
            </button>
          </div>
          {view === 'overview' && (
            <>
              <div className="software-metrics">
                {[
                  ['Agents', run.metrics.agents, Users],
                  ['Tool calls', run.metrics.tools, Network],
                  ['Sources', run.metrics.sources, BrainCircuit],
                  ['Brief delivered', run.metrics.briefs, FileCheck2],
                ].map(([label, value, Icon], i) => {
                  const I = Icon as typeof Users;
                  return (
                    <button
                      key={String(label)}
                      onClick={() =>
                        setView(
                          i === 0
                            ? 'workboard'
                            : i === 3
                              ? 'brief'
                              : 'evidence',
                        )
                      }
                    >
                      <span>
                        <I size={12} />
                        {String(label)}
                      </span>
                      <strong>
                        {storyTime === undefined
                          ? String(value)
                          : i === 0
                            ? run.members.filter((m) => m.start <= playhead)
                                .length
                            : i === 1
                              ? run.events.filter(
                                  (e) =>
                                    e.type === 'tool_result' &&
                                    e.ms <= playhead,
                                ).length
                              : i === 2
                                ? playhead >= 6674
                                  ? 3
                                  : 0
                                : playhead >= run.durationMs
                                  ? 1
                                  : 0}
                        <small>
                          {i === 3 && playhead >= run.durationMs ? (
                            <Check size={15} />
                          ) : null}
                        </small>
                      </strong>
                      <p>
                        {
                          [
                            'Two parallel specialists',
                            'Public tools only',
                            'Cited in the result',
                            playhead >= run.durationMs
                              ? 'Ready for review'
                              : 'Awaiting synthesis',
                          ][i]
                        }
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="software-chart">
                <div className="software-chart-heading">
                  <div>
                    <strong>Collaboration, in motion.</strong>
                    <p>Completed actions across one recorded task</p>
                  </div>
                  <div className="software-legend">
                    {storyTime === undefined && (
                      <button
                        className="replay-control"
                        onClick={toggleReplay}
                        aria-label={
                          playing
                            ? 'Pause recorded run replay'
                            : 'Replay recorded run'
                        }
                      >
                        {playing ? <Pause size={10} /> : <Play size={10} />}{' '}
                        {playing ? 'Pause' : 'Replay'}
                      </button>
                    )}
                    {run.members.map((m) => (
                      <span key={m.id}>
                        <i style={{ background: m.color }} />
                        {m.role}
                      </span>
                    ))}
                  </div>
                </div>
                <svg
                  viewBox="0 0 744 191"
                  role="img"
                  aria-label="Actual completed actions from a recorded 20.48-second run. Research and strategy operate in parallel, then the editor completes."
                >
                  {playhead < run.durationMs && (
                    <line
                      x1={42 + (playhead / run.durationMs) * 676}
                      y1="25"
                      x2={42 + (playhead / run.durationMs) * 676}
                      y2="161"
                      stroke="#79a18c"
                      strokeDasharray="3 3"
                    />
                  )}
                  <g className="software-grid">
                    <path d="M42 41H718M42 89H718M42 137H718M42 161H718" />
                    <path d="M42 25V161M210 25V161M378 25V161M546 25V161M718 25V161" />
                  </g>
                  <g className="software-axis">
                    <text x="17" y="44">
                      5
                    </text>
                    <text x="17" y="93">
                      3
                    </text>
                    <text x="17" y="165">
                      0
                    </text>
                    <text x="42" y="182">
                      0s
                    </text>
                    <text x="204" y="182">
                      5s
                    </text>
                    <text x="369" y="182">
                      10s
                    </text>
                    <text x="538" y="182">
                      15s
                    </text>
                    <text x="690" y="182">
                      20.5s
                    </text>
                  </g>
                  {run.members.map((m) => (
                    <path
                      key={m.id}
                      d={coords(m.id)}
                      fill="none"
                      stroke={m.color}
                      strokeWidth="2"
                    />
                  ))}
                  {graphEvents.map((e, i) => {
                    if (e.ms > playhead) return null;
                    const n = graphEvents
                      .slice(0, i + 1)
                      .filter((p) => p.agent === e.agent).length;
                    return (
                      <circle
                        key={i}
                        className="software-chart-point"
                        cx={42 + (e.ms / run.durationMs) * 676}
                        cy={161 - n * 24}
                        r={point === i ? 4 : 2.8}
                        fill={run.members.find((m) => m.id === e.agent)?.color}
                        tabIndex={0}
                        role="button"
                        aria-label={`${e.agent} ${e.type.replaceAll('_', ' ')} at ${(e.ms / 1000).toFixed(1)} seconds`}
                        onFocus={() => setPoint(i)}
                        onMouseEnter={() => setPoint(i)}
                        onClick={() => setPoint(i)}
                        onKeyDown={(ev) => {
                          if (ev.key === 'Enter') setPoint(i);
                        }}
                      />
                    );
                  })}
                </svg>
                <div className="software-chart-foot">
                  <span>
                    {playhead < run.durationMs
                      ? `Recorded timeline · ${(playhead / 1000).toFixed(1)}s`
                      : `${graphEvents[point].agent} · ${graphEvents[point].type.replaceAll('_', ' ')} · ${(graphEvents[point].ms / 1000).toFixed(1)}s`}
                  </span>
                  <span>5 model decisions · 2 handoffs</span>
                </div>
              </div>
              {storyTime !== undefined && playhead < run.durationMs ? (
                <div className="story-event-log">
                  <strong>Recorded activity</strong>
                  {run.events
                    .filter((event) => event.ms <= playhead)
                    .slice(-3)
                    .map((event, index) => (
                      <div key={`${event.agent}-${event.type}-${index}`}>
                        <span />
                        {
                          run.members.find(
                            (person) => person.id === event.agent,
                          )?.name
                        }
                        <small>
                          {event.type === 'tool_result'
                            ? `used ${event.tool}`
                            : event.type.replaceAll('_', ' ')}
                        </small>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="software-bottom-grid">
                  <div className="software-agent-table">
                    <strong>Contributions</strong>
                    {run.members.map((m, i) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          setMember(i);
                          changeView('workboard');
                        }}
                      >
                        <span
                          className="letter-avatar"
                          style={{ color: m.color, background: m.color + '14' }}
                        >
                          {m.role[0]}
                        </span>
                        <span>
                          {m.name}
                          <small>
                            {m.calls
                              ? `${m.calls} tool calls`
                              : 'Synthesized the evidence'}
                          </small>
                        </span>
                        <CheckCheck size={14} />
                      </button>
                    ))}
                  </div>
                  <button
                    className="software-deliverable"
                    onClick={() => changeView('brief')}
                  >
                    <span className="document-glyph">
                      <FileText size={26} />
                    </span>
                    <small>DELIVERED</small>
                    <strong>Executive brief</strong>
                    <p>
                      Platform leadership.
                      <br />
                      Evidence included.
                    </p>
                    <span>
                      Open brief <ArrowUpRight size={12} />
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
          {view === 'workboard' && (
            <>
              <div className="workboard-columns">
                {run.members.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => setMember(i)}
                    className={member === i ? 'selected' : ''}
                  >
                    <span className="workboard-column-title">
                      <i style={{ background: m.color }} />
                      {m.role}
                      <small>1</small>
                    </span>
                    <div>
                      {playhead >= m.end ? (
                        <Check size={13} />
                      ) : (
                        <span className="agent-progress-dot" />
                      )}
                      <span>
                        {playhead >= m.end
                          ? 'Complete'
                          : playhead >= m.start
                            ? 'Reviewing evidence'
                            : 'Awaiting handoff'}
                      </span>
                      <h4>{m.task}</h4>
                      <p>
                        {playhead >= m.end
                          ? m.result
                          : playhead >= m.start
                            ? 'Reading the public record in an independent context.'
                            : 'The editor receives both specialist findings.'}
                      </p>
                      <small>
                        {(m.start / 1000).toFixed(1)}s →{' '}
                        {(m.end / 1000).toFixed(1)}s
                      </small>
                    </div>
                    <span className="workboard-owner">
                      <span style={{ background: m.color }}>{m.role[0]}</span>
                      {m.name}
                    </span>
                  </button>
                ))}
              </div>
              <div className="workboard-detail">
                <span className="micro">SELECTED CONTRIBUTION</span>
                <h4>{run.members[member].name}</h4>
                <p>
                  {playhead >= run.members[member].end
                    ? run.members[member].result
                    : run.members[member].task}
                </p>
                <div>
                  <ShieldCheck size={14} /> Public evidence only <span>→</span>{' '}
                  {playhead < run.members[member].end
                    ? 'Independent task context'
                    : member === 2
                      ? 'Delivered for human review'
                      : 'Handed to the executive editor'}
                </div>
              </div>
              <div className="software-timeline">
                <strong>Parallel work. One result.</strong>
                {run.members.map((m) => (
                  <div key={m.id}>
                    <span>{m.role}</span>
                    <div>
                      <i
                        style={{
                          marginLeft: `${(m.start / run.durationMs) * 100}%`,
                          width: `${(Math.max(0, Math.min(playhead, m.end) - m.start) / run.durationMs) * 100}%`,
                          background: m.color,
                        }}
                      />
                    </div>
                    <small>{((m.end - m.start) / 1000).toFixed(1)}s</small>
                  </div>
                ))}
              </div>
            </>
          )}
          {view === 'evidence' && (
            <div className="knowledge-window">
              <div className="knowledge-search">
                <Search size={16} />
                <span>Search public knowledge…</span>
                <small>⌘ K</small>
              </div>
              <div className="knowledge-view-title">
                <strong>Shared with this team</strong>
                <span>3 records</span>
              </div>
              {records.map((r) => (
                <article key={r.id}>
                  <div>
                    <span className="knowledge-file">
                      <FileText size={19} />
                    </span>
                    <div>
                      <h4>{r.title}</h4>
                      <span>{r.note}</span>
                    </div>
                    <small>{r.tag}</small>
                  </div>
                  <p>{r.text}</p>
                  <a
                    href="/portfolio-evidence.txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source <ArrowUpRight size={11} />
                  </a>
                </article>
              ))}
              <p className="knowledge-boundary">
                <ShieldCheck size={13} /> Approved public evidence. Private
                knowledge stays separate.
              </p>
            </div>
          )}
          {view === 'brief' && (
            <div className="brief-window">
              <div>
                <FileCheck2 size={23} />
                <span>COMPLETED · EXECUTIVE EDITOR</span>
              </div>
              <h4>A platform leadership brief.</h4>
              <p>{run.answer}</p>
              <div className="brief-source-chips">
                {run.sources.map((s) => (
                  <span key={s}>
                    <FileText size={10} />
                    {s.replaceAll('-', ' ')}
                  </span>
                ))}
              </div>
              <div className="brief-callout">
                <Users size={16} />
                <p>
                  Prepared with contributions from the evidence researcher and
                  platform strategist.
                </p>
              </div>
              <button onClick={onLaunch}>
                Create a fresh brief <ArrowRight size={14} />
              </button>
              <small>
                This is a recorded public example. New tasks generate their own
                results.
              </small>
            </div>
          )}
        </div>
        <div className="software-statusbar">
          <span>
            <ShieldCheck size={10} /> Public sandbox
          </span>
          <span>Recorded September 9, 2026 · source-backed example</span>
          <button onClick={onLaunch}>
            Open live workspace <ArrowUpRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}

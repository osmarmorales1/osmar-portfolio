'use client';
/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- Static Vite deployment uses native image assets and public-file links. */
import {
  ArrowUpRight,
  Braces,
  Monitor,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import MotionHeading from './motion-heading';

export const commercePrompt =
  'Compare the options for [this laptop stand](https://www.amazon.com/dp/B07P54RSPY). Pick the best option under $50, add one to the cart, and ask me to review it before checkout.';

export default function FrontierLab({
  onLaunch,
  teamPrompt,
  communityInviteUrl,
  communityDownloadUrl,
  communityIphoneUrl,
  communityAndroidUrl,
  communityChannels,
  communityAgents,
}: {
  onLaunch: (prompt?: string, view?: 'agent' | 'computer') => void;
  teamPrompt: string;
  communityInviteUrl: string | null;
  communityDownloadUrl: string;
  communityIphoneUrl: string;
  communityAndroidUrl: string;
  communityChannels: readonly string[];
  communityAgents: readonly string[];
}) {
  return (
    <section className="frontier-lab" id="lab">
      <div className="aside-section-heading">
        <span className="section-kicker">My frontier lab</span>
        <MotionHeading effect="reveal">
          Don’t just read about it.
          <br />
          <em>Work with it.</em>
        </MotionHeading>
        <p>A small, working window into the platforms I build.</p>
      </div>
      <div className="lab-experiences">
        <article>
          <div className="lab-visual lab-browser lab-team" aria-hidden="true">
            <span className="lab-task-bubble">Build a brief about Osmar.</span>
            <div className="lab-browser-frame">
              <div>
                <i />
                <i />
                <i />
                <span>
                  <Sparkles size={11} /> Cloud agent · Osmar’s workspace
                </span>
              </div>
              <img
                src="/v6/openclaw-guest.jpg"
                alt=""
                loading="lazy"
                width="1280"
                height="720"
              />
            </div>
            <small>Independent contexts · Shared evidence</small>
          </div>
          <span className="lab-label">CLOUD AGENTS · COLLABORATION</span>
          <h3>Meet the team behind the task.</h3>
          <p>
            Ask the cloud agent to bring in specialists. Follow the handoffs,
            inspect the tools, and review their findings.
          </p>
          <button
            className="lab-primary-action"
            onClick={() => onLaunch(teamPrompt)}
          >
            Create a career brief <ArrowUpRight size={15} />
          </button>
        </article>
        <article>
          <div className="lab-visual computer-preview" aria-hidden="true">
            <div className="computer-preview-window">
              <div className="computer-preview-bar">
                <span className="computer-preview-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  <Monitor size={12} /> Elygent computer
                </span>
                <span>View only</span>
              </div>
              <div className="computer-preview-address">
                <Search size={12} />
                <span>One browser. A task you can follow.</span>
              </div>
              <div className="computer-preview-viewport">
                <Monitor size={34} strokeWidth={1.2} />
                <strong>Watch the work happen.</strong>
                <span>The browser appears when you launch.</span>
                <div>
                  <span>Compare</span>
                  <span>Prepare</span>
                  <span>Review</span>
                </div>
              </div>
            </div>
          </div>
          <span className="lab-label">LIVE ELYGENT COMPUTER</span>
          <h3>Give it a task. Watch it work.</h3>
          <p>
            Watch the agent inspect an Amazon product, compare options, and
            prepare a cart for your approval. Follow the browser beside the
            conversation.
          </p>
          <button
            className="lab-primary-action"
            onClick={() => onLaunch(commercePrompt, 'computer')}
          >
            Open live computer <ArrowUpRight size={15} />
          </button>
          <p className="computer-verification-note">
            Amazon may require human verification.
          </p>
        </article>
      </div>
      <div
        className="shared-compute-agenda community-agenda native-community"
        id="community"
      >
        <span>THE BUZZ COMMUNITY</span>
        <h3>Join the conversation.</h3>
        <p>
          Install Buzz on your phone or desktop, then join the community. Work
          with people and agents in shared channels, with a place for the work
          to continue.
        </p>
        <div className="native-community-preview">
          <div className="native-community-mark">
            <Users size={25} />
            <strong>Osmar’s community</strong>
            <span>Native Buzz workspace</span>
          </div>
          <div className="native-community-counts">
            <span>
              <strong>{communityChannels.length}</strong> shared channels
            </span>
            <span>
              <strong>{communityAgents.length}</strong> community agents
            </span>
          </div>
          <div className="native-community-directory">
            <div>
              <strong>Channels</strong>
              <ul>
                {communityChannels.map((channel) => (
                  <li key={channel}>#{channel}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Agents</strong>
              <ul>
                {communityAgents.map((agent) => (
                  <li key={agent}>
                    <Sparkles size={11} />
                    {agent}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            <ShieldCheck size={14} />
            This is a public demo community. Posts are visible to its
            participants.
          </p>
        </div>
        <div className="native-community-actions">
          <div className="native-community-downloads">
            <span>1. Install Buzz</span>
            <div>
              <a href={communityIphoneUrl} target="_blank" rel="noreferrer">
                iPhone
              </a>
              <a href={communityAndroidUrl} target="_blank" rel="noreferrer">
                Android
              </a>
              <a href={communityDownloadUrl} target="_blank" rel="noreferrer">
                Desktop
              </a>
            </div>
          </div>
          {communityInviteUrl ? (
            <a
              className="black-pill native-community-join"
              href={communityInviteUrl}
              target="_blank"
              rel="noreferrer"
            >
              2. Join the community <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="native-community-invite-note">
              The community invite will appear here when it is ready.
            </span>
          )}
        </div>
        <p className="community-roadmap">
          The goal: run open-weight models on my own hardware and share
          inference with my community. That local model pool is still a separate
          step.
        </p>
        <a
          href="https://github.com/block/buzz/blob/main/VISION_MESH.md"
          target="_blank"
          rel="noreferrer"
        >
          How shared compute fits <ArrowUpRight size={14} />
        </a>
      </div>
      <p className="lab-scope">
        The cloud agent uses an isolated guest session. The computer prepares
        work for review and stops before checkout. Buzz participation happens in
        the native app.
      </p>
      <div className="agent-readable">
        <Braces size={29} />
        <div>
          <h3>Made for people. Readable by agents.</h3>
          <p>
            My experience, projects, and evidence—available as structured,
            public data.
          </p>
        </div>
        <a href="/agents.html">
          Explore the API <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

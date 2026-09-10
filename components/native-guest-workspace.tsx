'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  LoaderCircle,
  LogOut,
  MessageSquare,
  Monitor,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button, buttonVariants } from '@/components/ui/button';


// Home exposes realtime Talk before the visitor sends a message.
// The native New session action remains available inside the workspace.
import { guestOrigin, hostedPortfolio } from '@/lib/deployment-config';

const GUEST_ORIGIN = guestOrigin ?? '';
const GUEST_URL = `${GUEST_ORIGIN}/guest/chat/ely`;
const COMPUTER_URL = `${GUEST_ORIGIN}/guest/computer/`;

// Validate only the explicitly supported public guest route shape.
export function guestChatPath(value: unknown): string | null {
  if (
    typeof value !== 'string' ||
    value.length > 2048 ||
    !/^\/guest\/chat\/ely(?:\/[A-Za-z0-9_~.:%-]+)*\/?$/.test(value)
  )
    return null;
  try {
    const decoded = decodeURIComponent(value);
    if (
      /[\\%?#]/.test(decoded) ||
      Array.from(decoded).some((char) => char.charCodeAt(0) <= 0x20) ||
      /%(?:2f|5c)/i.test(value) ||
      decoded.split('/').some((part) => part === '.' || part === '..')
    )
      return null;
    return value;
  } catch {
    return null;
  }
}

function ConnectedGuestWorkspace({
  open,
  onOpenChange,
  initialPrompt,
  initialView = 'agent',
  launchId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPrompt: string;
  initialView?: 'agent' | 'computer';
  launchId: number;
}) {
  const [reload, setReload] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ending, setEnding] = useState(false);
  const [endError, setEndError] = useState(false);
  const [computerLoaded, setComputerLoaded] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [taskStart, setTaskStart] = useState<'idle' | 'starting' | 'sent' | 'manual'>('idle');
  const startRequested = useRef(false);
  const [selectedPane, setSelectedPane] = useState<'agent' | 'computer'>(
    initialView,
  );
  const [mobile, setMobile] = useState(false);
  const computerMode = initialView === 'computer';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [guestUrl, setGuestUrl] = useState(() =>
    initialPrompt
      ? `${GUEST_URL}?draft=${encodeURIComponent(initialPrompt)}`
      : GUEST_URL,
  );
  const [activePath, setActivePath] = useState<string | null>(null);
  useEffect(() => {
    const breakpoint = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(breakpoint.matches);
    update();
    breakpoint.addEventListener('change', update);
    return () => breakpoint.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    function receiveRoute(event: MessageEvent) {
      if (
        event.origin !== GUEST_ORIGIN ||
        !iframeRef.current ||
        event.source !== iframeRef.current.contentWindow ||
        !event.data ||
        typeof event.data !== 'object'
      )
        return;
      if(event.data.type==='portfolio:task-submitted'&&event.data.id===String(launchId)){
        setTaskStart(event.data.ok===true?'sent':'manual');
        return;
      }
      if(event.data.type!=='portfolio:guest-route')return;
      if (event.data.path === null) {
        setActivePath(null);
        setSessionReady(true);
      } else {
        const path = guestChatPath(event.data.path);
        if (path) {
          setActivePath(path);
          setSessionReady(true);
        }
      }
    }
    window.addEventListener('message', receiveRoute);
    return () => window.removeEventListener('message', receiveRoute);
  }, [open, launchId]);
  useEffect(()=>{
    if(!open||!sessionReady||!computerMode||!initialPrompt||startRequested.current)return;
    startRequested.current=true;
    setTaskStart('starting');
    iframeRef.current?.contentWindow?.postMessage({type:'portfolio:submit-draft',id:String(launchId),prompt:initialPrompt},GUEST_ORIGIN);
    const timer=setTimeout(()=>setTaskStart(value=>value==='starting'?'manual':value),35000);
    return()=>clearTimeout(timer);
  },[open,sessionReady,computerMode,initialPrompt,launchId]);
  async function endSession() {
    setEnding(true);
    setEndError(false);
    try {
      const response = await fetch(`${GUEST_ORIGIN}/guest/end`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
        signal: AbortSignal.timeout(12000),
      });
      if (response.status !== 401) {
        const result: unknown = await response.json();
        if (
          !response.ok ||
          !result ||
          typeof result !== 'object' ||
          !('ended' in result) ||
          result.ended !== true
        )
          throw new Error('Session not ended');
      }
      onOpenChange(false);
    } catch {
      setEndError(true);
    } finally {
      setEnding(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`native-guest-window native-guest-v10 ${computerMode ? 'native-computer-workspace' : ''} translate-x-0 translate-y-0`}
        showCloseButton={false}
      >
        <header className="native-guest-header">
          <span className="native-guest-mark">
            <Sparkles size={23} strokeWidth={1.4} />
          </span>
          <div>
            <DialogTitle>Cloud agent</DialogTitle>
            <DialogDescription>Osmar’s AI workspace</DialogDescription>
          </div>
          <span className="native-guest-label">
            {computerMode
              ? 'Live computer · view only'
              : 'Your own guest session'}
          </span>
          <div className="native-guest-actions">
            {activePath && (
              <a
                href={GUEST_ORIGIN + activePath}
                target="_blank"
                rel="noreferrer"
                aria-label="Open this conversation in a full window"
                title="Open this conversation in a full window"
              >
                <span>Open full window</span> <ArrowUpRight size={16} />
              </a>
            )}
            <Button
              variant="ghost"
              aria-label="End guest session"
              title="End guest session"
              disabled={ending}
              onClick={() => void endSession()}
            >
              {ending ? <LoaderCircle size={16} /> : <LogOut size={16} />}
            </Button>
            <Button
              variant="ghost"
              aria-label="Reload guest workspace"
              disabled={!activePath || ending}
              onClick={() => {
                if (!activePath) return;
                setLoaded(false);
                setGuestUrl(GUEST_ORIGIN + activePath);
                setActivePath(null);
                setReload((v) => v + 1);
              }}
            >
              <RotateCcw size={16} />
            </Button>
            <Button
              variant="ghost"
              aria-label="Return to resume"
              onClick={() => onOpenChange(false)}
            >
              <X size={19} />
            </Button>
          </div>
        </header>
        {endError && (
          <p className="native-guest-error" role="alert">
            The session could not be ended. Please try again.
          </p>
        )}
        {computerMode && (
          <output className="native-computer-task-status">
            {taskStart==='sent'?'Example sent. Watch the computer or open Agent to follow the task.':taskStart==='manual'?'Open Agent to review and send the example task.':'Preparing your computer and starting the example…'}
          </output>
        )}
        {computerMode && (
          <fieldset
            className="native-computer-tabs"
            aria-label="Workspace view"
          >
            <button
              aria-pressed={selectedPane === 'computer'}
              onClick={() => setSelectedPane('computer')}
            >
              <Monitor size={15} />
              Computer
            </button>
            <button
              aria-pressed={selectedPane === 'agent'}
              onClick={() => setSelectedPane('agent')}
            >
              <MessageSquare size={15} />
              Agent
            </button>
          </fieldset>
        )}
        <div
          className={`native-workspace-panes ${computerMode ? 'with-computer' : ''}`}
        >
          <section
            className="native-agent-pane"
            aria-label="Agent conversation"
            hidden={computerMode && mobile && selectedPane !== 'agent'}
          >
            {computerMode && (
              <div className="native-pane-heading">
                <MessageSquare size={13} />
                <span>Agent</span>
              </div>
            )}
            <div className="native-guest-frame">
              {!loaded && (
                <output className="native-guest-loading">
                  <LoaderCircle size={20} />
                  <span>Opening your cloud agent…</span>
                </output>
              )}
              {open && (
                <iframe
                  ref={iframeRef}
                  key={`${launchId}-${reload}`}
                  title="Cloud agent conversation"
                  src={guestUrl}
                  onLoad={() => {
                    setLoaded(true);
                    iframeRef.current?.contentWindow?.postMessage(
                      { type: 'portfolio:route-request' },
                      GUEST_ORIGIN,
                    );
                  }}
                  referrerPolicy="no-referrer"
                  allow="autoplay; clipboard-write; microphone"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"
                />
              )}
            </div>
          </section>
          {computerMode && (
            <section
              className="native-computer-pane"
              aria-label="Live computer, view only"
              hidden={mobile && selectedPane !== 'computer'}
            >
              <div className="native-pane-heading">
                <Monitor size={13} />
                <span>Computer</span>
                <small>View only</small>
              </div>
              <div className="native-guest-frame">
                {!computerLoaded && (
                  <output className="native-guest-loading">
                    <LoaderCircle size={20} />
                    <span>
                      {sessionReady
                        ? 'Opening the live computer…'
                        : 'Preparing your workspace…'}
                    </span>
                  </output>
                )}
                {open && (
                  <iframe
                    key={`computer-${launchId}`}
                    title="Live Elygent computer, view only"
                    src={sessionReady ? COMPUTER_URL : 'about:blank'}
                    onLoad={() => {
                      if (sessionReady) setComputerLoaded(true);
                    }}
                    referrerPolicy="no-referrer"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
              </div>
            </section>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Mount the live adapter only when the deployer explicitly supplies their own public backend.
export default function NativeGuestWorkspace(props: Parameters<typeof ConnectedGuestWorkspace>[0]) {
  if (guestOrigin) return <ConnectedGuestWorkspace {...props} />;
  return <Dialog open={props.open} onOpenChange={props.onOpenChange}>
    <DialogContent>
      <DialogTitle>Explore the hosted cloud-agent lab</DialogTitle>
      <DialogDescription>This source preview includes the portfolio. The live cloud agents and computer sessions run on a separate service.</DialogDescription>
      <a className={buttonVariants({ size: "lg" })} href={hostedPortfolio} target="_blank" rel="noopener noreferrer">Visit Osmar’s live lab <ArrowUpRight size={16}/></a>
    </DialogContent>
  </Dialog>;
}

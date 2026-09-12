'use client';
/* eslint-disable next/no-img-element -- The app film uses a fixed local screenshot asset. */
import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { ArrowUp, Check, Pause, Play } from 'lucide-react';

export const HERO_FILM_DURATION = 18000;
const REQUEST = 'Show me the repository story.';
type Camera = { at: number; x: number; y: number; scale: number };
const desktopCamera: Camera[] = [
  { at: 0, x: 0, y: 0, scale: 1 },
  { at: HERO_FILM_DURATION, x: 0, y: 0, scale: 1 },
];
const mobileCamera: Camera[] = [
  { at: 0, x: 0, y: 0, scale: 1 },
  { at: 1600, x: -5, y: -1, scale: 1.14 },
  { at: 4700, x: -5, y: -1, scale: 1.14 },
  { at: 6500, x: 0, y: 0, scale: 1 },
  { at: 9200, x: -7, y: 3, scale: 1.18 },
  { at: 12500, x: -8, y: -5, scale: 1.22 },
  { at: 15500, x: -3, y: -2, scale: 1.08 },
  { at: HERO_FILM_DURATION, x: 0, y: 0, scale: 1 },
];
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => value * value * (3 - 2 * value);
function cameraAt(frames: Camera[], time: number) {
  const last = frames[frames.length - 1];
  if (time >= last.at) return last;
  const nextIndex = frames.findIndex((frame) => frame.at > time);
  const before = frames[Math.max(0, nextIndex - 1)];
  const after = frames[Math.max(1, nextIndex)];
  const amount = ease(clamp((time - before.at) / (after.at - before.at)));
  return {
    x: before.x + (after.x - before.x) * amount,
    y: before.y + (after.y - before.y) * amount,
    scale: before.scale + (after.scale - before.scale) * amount,
  };
}

// A single clock controls typing, scene transitions and both camera treatments.
// Pausing freezes every visual; replay never invokes an agent or another API.
export function heroFilmFrame(time: number) {
  const elapsed = Math.max(0, Math.min(HERO_FILM_DURATION, time));
  const dashboardReveal = ease(clamp((elapsed - 5000) / 1200));
  return {
    desktop: cameraAt(desktopCamera, elapsed),
    mobile: cameraAt(mobileCamera, elapsed),
    chatOpacity: 1 - dashboardReveal,
    chatY: dashboardReveal * -10,
    request: REQUEST.slice(
      0,
      Math.floor(clamp((elapsed - 700) / 2400) * REQUEST.length),
    ),
    responseOpacity: ease(clamp((elapsed - 3500) / 600)),
    responseReady: elapsed >= 4400,
    chapter:
      elapsed < 6200
        ? 'A request'
        : elapsed < 10400
          ? 'The system'
          : elapsed < 15500
            ? 'The detail'
            : 'A clear view',
    progress: elapsed / HERO_FILM_DURATION,
  };
}

export default function HeroFilm({
  dashboardSrc = '/v10/hero-dashboard.png',
  className = '',
}: {
  dashboardSrc?: string;
  className?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const elapsedRef = useRef(HERO_FILM_DURATION);
  const started = useRef(false);
  const descriptionId = useId();
  const [elapsed, setElapsed] = useState(HERO_FILM_DURATION);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [imageReady, setImageReady] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [preferenceReady, setPreferenceReady] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function updatePreference() {
      setReduced(preference.matches);
      setPreferenceReady(true);
      if (preference.matches) {
        elapsedRef.current = HERO_FILM_DURATION;
        setElapsed(HERO_FILM_DURATION);
        setPlaying(false);
      }
    }
    function updateVisibility() {
      setDocumentVisible(!document.hidden);
    }
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 },
    );
    if (root.current) observer.observe(root.current);
    if (image.current?.complete && image.current.naturalWidth > 0)
      setImageReady(true);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (
      !preferenceReady ||
      reduced ||
      !imageReady ||
      !visible ||
      !documentVisible ||
      started.current
    )
      return;
    started.current = true;
    elapsedRef.current = 0;
    setElapsed(0);
    setPlaying(true);
  }, [preferenceReady, reduced, imageReady, visible, documentVisible]);

  useEffect(() => {
    if (!playing || !visible || !documentVisible || reduced) return;
    let previous = performance.now();
    let requestId: number;
    function tick(now: number) {
      elapsedRef.current = Math.min(
        HERO_FILM_DURATION,
        elapsedRef.current + Math.min(80, now - previous),
      );
      previous = now;
      setElapsed(elapsedRef.current);
      if (elapsedRef.current >= HERO_FILM_DURATION) setPlaying(false);
      else requestId = window.requestAnimationFrame(tick);
    }
    requestId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(requestId);
  }, [playing, visible, documentVisible, reduced]);

  function replay() {
    if (reduced || !imageReady) return;
    started.current = true;
    elapsedRef.current = 0;
    setElapsed(0);
    setPlaying(true);
  }
  function toggle() {
    if (elapsedRef.current >= HERO_FILM_DURATION) replay();
    else setPlaying((value) => !value);
  }
  const frame = heroFilmFrame(elapsed);
  const ended = elapsed >= HERO_FILM_DURATION;
  const style = {
    '--hf-x': `${frame.desktop.x}%`,
    '--hf-y': `${frame.desktop.y}%`,
    '--hf-scale': frame.desktop.scale,
    '--hf-mobile-x': `${frame.mobile.x}%`,
    '--hf-mobile-y': `${frame.mobile.y}%`,
    '--hf-mobile-scale': frame.mobile.scale,
    '--hf-chat-opacity': frame.chatOpacity,
    '--hf-chat-y': `${frame.chatY}px`,
    '--hf-response-opacity': frame.responseOpacity,
    '--hf-progress': frame.progress,
  } as CSSProperties;

  return (
    <figure
      ref={root}
      className={`hero-film ${className}`}
      style={style}
      data-playing={playing && visible && documentVisible && !reduced}
      aria-describedby={descriptionId}
    >
      <div className="hero-film-stage">
        <div className="hero-film-viewport" aria-hidden="true">
          <div className="hero-film-camera">
            <img
              ref={image}
              className="hero-film-image"
              src={dashboardSrc}
              alt=""
              width="1416"
              height="1111"
              fetchPriority="high"
              onLoad={() => setImageReady(true)}
            />
            <div className="hero-film-chat">
              <div className="hero-film-chat-header">
                <span className="hero-film-agent-mark">C</span>
                <span>
                  Cloud agent<small>Osmar’s workspace</small>
                </span>
              </div>
              <div className="hero-film-conversation">
                <p className="hero-film-greeting">
                  A clear view starts
                  <br />
                  with a question.
                </p>
                <div className="hero-film-request">
                  <span>
                    {frame.request}
                    <i className="hero-film-caret" />
                  </span>
                  <span className="hero-film-send">
                    <ArrowUp size={15} />
                  </span>
                </div>
                <div className="hero-film-response">
                  <span className="hero-film-response-mark">
                    {frame.responseReady ? (
                      <Check size={13} />
                    ) : (
                      <span className="hero-film-thinking" />
                    )}
                  </span>
                  <p>
                    {frame.responseReady
                      ? 'Code, tests, and delivery. In one view.'
                      : 'Reading the example repository…'}
                  </p>
                </div>
              </div>
              <span className="hero-film-chat-note">Example workspace</span>
            </div>
          </div>
        </div>
        {!reduced && (
          <button
            className="hero-film-toggle"
            onClick={toggle}
            disabled={!imageReady}
            aria-label={
              ended
                ? 'Replay app film'
                : playing
                  ? 'Pause app film'
                  : 'Play app film'
            }
            title={ended ? 'Replay' : playing ? 'Pause' : 'Play'}
          >
            {playing && !ended ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" />
            )}
          </button>
        )}
      </div>
      <p id={descriptionId} className="hero-film-description">
        A short illustrative app film shows a typed request, then a light
        software delivery dashboard. Desktop playback keeps the complete window
        in view; mobile uses a gentle camera move through the dashboard.
        Repository numbers are example data, not Osmar’s career metrics or live
        activity. Animation plays once and can be paused or replayed.
        Reduced-motion settings show the complete dashboard without animation.
      </p>
    </figure>
  );
}

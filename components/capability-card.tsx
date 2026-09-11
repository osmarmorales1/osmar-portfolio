'use client';
/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- Static Vite deployment uses native image assets and public-file links. */
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AppShowcase from './app-showcase';

export type ProductScreen = {
  id: string;
  name: string;
  task: string;
  title: string;
  description: string;
  image: string | null;
  source: string | null;
};
export default function CapabilityCard({
  item,
  onOpen,
}: {
  item: ProductScreen;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('card-arrived');
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <article ref={ref} className="aside-product-card capability-card">
      <div className="app-card-stage">
        <span className="capability-task">{item.task}</span>
        {item.id === 'elygent' ? (
          <div className="mini-app-crop" aria-hidden="true" inert>
            <AppShowcase initialView="workboard" compact onLaunch={() => {}} />
          </div>
        ) : (
          <div className={`static-app-frame ${item.id}`}>
            <div className="static-window-bar">
              <i />
              <i />
              <i />
              <span>{item.name}</span>
            </div>
            <div className="static-app-image">
              <img
                src={item.image!}
                width="1440"
                height="900"
                alt={`${item.name} light application window`}
                loading="lazy"
              />
            </div>
          </div>
        )}
        <button
          className="app-card-open"
          onClick={onOpen}
          aria-label={`Open ${item.name} application view`}
        >
          <span className="enlarge-app">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

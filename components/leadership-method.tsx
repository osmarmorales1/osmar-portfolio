'use client';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { learningLoop } from '@/lib/portfolio-data';
import MotionHeading from './motion-heading';

export default function LeadershipMethod() {
  const [selected, setSelected] = useState('Explore');
  return (
    <section className="leadership-method" id="approach">
      <div className="aside-section-heading">
        <span className="section-kicker">How I lead</span>
        <MotionHeading>
          I explore the frontier.
          <br />
          The team gets the <em>advantage.</em>
        </MotionHeading>
        <p>Learning only becomes valuable when other people can use it.</p>
      </div>
      <Tabs
        value={selected}
        onValueChange={setSelected}
        className="method-tabs"
      >
        <TabsList aria-label="Osmar’s platform enablement approach">
          {learningLoop.map((step, i) => (
            <TabsTrigger key={step.label} value={step.label}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {step.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {learningLoop.map((step) => (
          <TabsContent key={step.label} value={step.label}>
            <div className="method-detail">
              <ArrowRight size={24} />
              <div>
                <h3>{step.verb}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <a
        className="editorial-link"
        href="https://github.com/osmarmorales1"
        target="_blank"
        rel="noreferrer"
      >
        Follow what I’m building <ArrowUpRight size={14} />
      </a>
    </section>
  );
}

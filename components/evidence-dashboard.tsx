'use client';
/* eslint-disable next/no-img-element, next/no-html-link-for-pages -- Static Vite deployment uses native image assets and public-file links. */
import { useState } from 'react';
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Laptop,
  Users,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { defaults, estimateCapacity } from '@/lib/capacity';
import MotionHeading from './motion-heading';
import PrivateCloudPanel from './private-cloud-panel';
const number = (v: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(v);

export default function EvidenceDashboard({
  onInspect,
}: {
  onInspect: (id: string) => void;
}) {
  const [view, setView] = useState('adoption');
  const [size, setSize] = useState(70);
  const [bits, setBits] = useState(16);
  const [rps, setRps] = useState(2);
  const [focused, setFocused] = useState('repositories');
  const capacity = estimateCapacity({
    ...defaults,
    parametersB: size,
    bits,
    requestsPerMinute: rps * 60,
  });
  return (
    <section className="evidence-section" id="work">
      <div className="aside-split-heading">
        <MotionHeading>
          Built locally.
          <br />
          <em>Used globally.</em>
        </MotionHeading>
        <p>
          500+ users across five regions and multiple teams at Visa.
          <button
            className="editorial-link"
            onClick={() => onInspect('factory')}
          >
            Explore my decisions <ArrowUpRight size={14} />
          </button>
        </p>
      </div>
      <div className="evidence-console">
        <div className="console-bar">
          <div className="console-dots">
            <i />
            <i />
            <i />
          </div>
          <span>Osmar / platform outcomes</span>
          <small>Public evidence</small>
        </div>
        <Tabs value={view} onValueChange={setView}>
          <div className="console-toolbar">
            <strong>
              {view === 'capacity'
                ? 'Workload → infrastructure'
                : view === 'cloud'
                  ? 'Cloud foundations'
                  : 'The work, in numbers.'}
            </strong>
            <TabsList aria-label="Explore platform outcomes">
              <TabsTrigger value="adoption">Adoption</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="capacity">Capacity</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="adoption">
            <div className="adoption-story">
              <div className="adoption-number">
                <span>
                  <Users size={16} /> ORGANIC ADOPTION
                </span>
                <strong>
                  500<span>+</span>
                </strong>
                <p>Total users of Agent Factory at Visa.</p>
                <button onClick={() => onInspect('factory')}>
                  How I made it useful <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="adoption-surface">
                <span>One capability. Familiar places to work.</span>
                <div>
                  {[
                    [Code2, 'Containers'],
                    [Laptop, 'Desktop'],
                    [Cloud, 'Private cloud'],
                  ].map(([Icon, label]) => {
                    const I = Icon as typeof Cloud;
                    return (
                      <div key={String(label)}>
                        <I size={27} />
                        <strong>{String(label)}</strong>
                        <span>Shared platform capabilities</span>
                      </div>
                    );
                  })}
                </div>
                <p>
                  Governed tools, reusable skills, model routing, and human
                  review.
                </p>
              </div>
            </div>
            <div className="console-note">
              <a href="/portfolio-evidence.txt">
                Read the evidence <ArrowUpRight size={12} />
              </a>
            </div>
          </TabsContent>
          <TabsContent value="delivery">
            <div className="delivery-dashboard">
              <div className="delivery-stat">
                <GitBranch size={23} />
                <h3>Modernization without disrupting delivery.</h3>
                <p>
                  Faster model preparation and client insights, with
                  continuity through platform modernization.
                </p>
              </div>
              <div
                className="outcome-bars"
                aria-label="Reported minimum migration counts"
              >
                {[
                  ['repositories', 'Repositories', '1k+', 100],
                  ['pipelines', 'Pipelines', '500+', 50],
                ].map(([id, label, value, width]) => (
                  <button
                    key={String(id)}
                    onMouseEnter={() => setFocused(String(id))}
                    onFocus={() => setFocused(String(id))}
                    onClick={() => onInspect('mlops')}
                    className={focused === id ? 'active' : ''}
                  >
                    <span>
                      {String(label)}
                      <strong>{String(value)}</strong>
                    </span>
                    <i>
                      <b style={{ width: `${width}%` }} />
                    </i>
                  </button>
                ))}
                <p>
                  {focused === 'repositories'
                    ? 'Versioned code moved into a repeatable delivery foundation.'
                    : 'Pipelines migrated with continuity of delivery.'}
                </p>
              </div>
            </div>
            <div className="console-note">
              <span>
                Separate MLOps modernization initiative · Reported minimum
                counts.
              </span>
              <button onClick={() => onInspect('mlops')}>
                My ownership and decisions <ArrowUpRight size={12} />
              </button>
            </div>
          </TabsContent>
          <TabsContent value="cloud">
            <PrivateCloudPanel />
            <div className="console-note">
              <span>
                Selected service experience from my Visa work · Illustrative
                view.
              </span>
              <button onClick={() => onInspect('factory')}>
                My platform approach <ArrowUpRight size={12} />
              </button>
            </div>
          </TabsContent>
          <TabsContent value="capacity">
            <div className="capacity-lab-heading">
              <span>DESIGN EXERCISE</span>
              <p>Change the workload. See the infrastructure implications.</p>
            </div>
            <div className="capacity-dashboard">
              <div className="capacity-controls">
                <fieldset>
                  <legend>Model size</legend>
                  <div>
                    {[7, 32, 70].map((v) => (
                      <button
                        key={v}
                        aria-pressed={size === v}
                        onClick={() => setSize(v)}
                      >
                        {v}B
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Weight precision</legend>
                  <div>
                    {[4, 8, 16].map((v) => (
                      <button
                        key={v}
                        aria-pressed={bits === v}
                        onClick={() => setBits(v)}
                      >
                        {v}-bit
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="traffic-control">
                  <label id="traffic-label">
                    Requests per second <strong>{number(rps)}</strong>
                  </label>
                  <Slider
                    aria-labelledby="traffic-label"
                    value={[rps]}
                    min={1}
                    max={1000}
                    step={1}
                    onValueChange={(value) =>
                      setRps(Array.isArray(value) ? value[0] : value)
                    }
                  />
                  <span>
                    1<span>1,000</span>
                  </span>
                </div>
                <p>
                  80 GiB per device · 20% reserved
                  <br />
                  300 output tokens/request · 250 tokens/s per replica
                </p>
              </div>
              <div
                className="capacity-results"
                aria-live="polite"
                aria-atomic="true"
              >
                <article>
                  <Cpu size={20} />
                  <span>Model-weight memory</span>
                  <strong>
                    {number(capacity.weightsGiB)}
                    <small> GiB</small>
                  </strong>
                  <div className="memory-devices">
                    {Array.from(
                      { length: Math.min(capacity.weightFitDeviceFloor, 4) },
                      (_, i) => (
                        <i key={i}>
                          <b
                            style={{
                              width: `${Math.min(1, Math.max(0, (capacity.weightsGiB - i * capacity.usableMemoryGiB) / capacity.usableMemoryGiB)) * 100}%`,
                            }}
                          />
                        </i>
                      ),
                    )}
                  </div>
                  <p>
                    {capacity.weightFitDeviceFloor} device
                    {capacity.weightFitDeviceFloor > 1 ? 's' : ''} minimum for
                    weights alone
                  </p>
                </article>
                <article>
                  <Database size={20} />
                  <span>Output throughput demand</span>
                  <strong>
                    {number(capacity.outputTokensPerSecond)}
                    <small> tokens/s</small>
                  </strong>
                  <div className="throughput-rail">
                    <i style={{ width: `${rps / 10}%` }} />
                  </div>
                  <div className="throughput-axis">
                    <span>0</span>
                    <span>300k tokens/s</span>
                  </div>
                  <p>
                    {number(capacity.throughputReplicaFloor)} throughput replica
                    {capacity.throughputReplicaFloor > 1 ? 's' : ''} minimum at
                    the stated assumption
                  </p>
                </article>
              </div>
            </div>
            <div className="console-note">
              <span>
                Hypothetical lower bounds—not fleet telemetry. Replicas ≠ GPUs.
                Excludes KV cache, prefill, latency, and redundancy.
              </span>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <p className="role-connection">
        The questions I bring to an AI factory: workload fit, memory, latency,
        cost, and how the platform will be operated.
      </p>
    </section>
  );
}

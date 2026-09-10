'use client';
import { useState } from 'react';
import { Cpu, Database, Network, Activity, ArrowRight } from 'lucide-react';
import { privateCloudPillars } from '@/lib/infrastructure-data';
const icons = [Cpu, Database, Network, Activity];

export default function PrivateCloudPanel() {
  const [selected, setSelected] = useState(0);
  const item = privateCloudPillars[selected];
  const Icon = icons[selected];
  return (
    <div className="private-cloud-panel">
      <div className="cloud-panel-heading">
        <span>AI FACTORY FOUNDATIONS</span>
        <p>Infrastructure that makes intelligence useful.</p>
      </div>
      <div
        className="cloud-layer-controls"
        aria-label="Explore private-cloud foundations"
      >
        {privateCloudPillars.map((pillar, i) => {
          const TileIcon = icons[i];
          return (
            <button
              key={pillar.id}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
            >
              <TileIcon size={25} />
              <strong>{pillar.name}</strong>
              <span>{pillar.short}</span>
            </button>
          );
        })}
      </div>
      <div className="cloud-layer-detail" key={item.id} aria-live="polite">
        <Icon size={28} />
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="cloud-technology-chips">
            {item.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <small>{item.consideration}</small>
        </div>
      </div>
      <div
        className="factory-path"
        aria-label="AI factory approach: compute, knowledge, agents, team outcomes"
      >
        {['Compute', 'Knowledge', 'Agents', 'Team outcomes'].map((label, i) => (
          <span key={label}>
            {i > 0 && <ArrowRight size={12} />}
            <strong>{label}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

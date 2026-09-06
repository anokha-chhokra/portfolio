import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { archNodes, archCopy } from '../data/content.js';

const DEFAULT_NOTE = 'Click a node to inspect the role it plays in the resume.';

export default function SystemSection() {
  const [activeNode, setActiveNode] = useState('Client');
  const [note, setNote] = useState(DEFAULT_NOTE);

  function handleNodeClick(id) {
    setActiveNode(id);
    setNote(`${id} — ${archCopy[id]}`);
  }

  function handleNodeKeyDown(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNodeClick(id);
    }
  }

  return (
    <section className="section" id="system">
      <div className="wrap">
        <Reveal className="card arch">
          <svg viewBox="0 0 620 275">
            {archNodes.map((node) => (
              <g
                key={node.id}
                className={`node${activeNode === node.id ? ' active' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={activeNode === node.id}
                onClick={() => handleNodeClick(node.id)}
                onKeyDown={(e) => handleNodeKeyDown(e, node.id)}
              >
                <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="12" />
                <text x={node.tx} y={node.ty} textAnchor="middle">{node.lines[0]}</text>
              </g>
            ))}
          </svg>
          <div className="interact-note" aria-live="polite">{note}</div>
        </Reveal>
      </div>
    </section>
  );
}
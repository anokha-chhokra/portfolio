import Reveal from './Reveal.jsx';
import { aboutParagraphs, aboutFacts } from '../data/content.js';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="grid2">
          <Reveal className="card about-card">
            <div className="avatar" aria-hidden="true">SA</div>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="card quick">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <small>{fact.label}</small>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
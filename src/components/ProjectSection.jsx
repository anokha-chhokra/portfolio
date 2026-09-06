import Reveal from './Reveal.jsx';
import { pipelineSteps, projectStackTags } from '../data/content.js';

export default function ProjectSection() {
  return (
    <section className="section" id="project">
      <div className="wrap">
        <Reveal className="card project">
          <div className="stackline">
            {projectStackTags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
          <div className="pipeline">
            {pipelineSteps.map((step) => (
              <div className="pipe" key={step.title}>
                <strong>{step.title}</strong>
                <small>{step.sub}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
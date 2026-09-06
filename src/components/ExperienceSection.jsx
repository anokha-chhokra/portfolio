import Reveal from './Reveal.jsx';
import { jobs } from '../data/content.js';

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="card timeline">
          {jobs.map((job) => (
            <div className="job" key={job.title}>
              <h3>{job.title}</h3>
              <div className="meta">{job.meta}</div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
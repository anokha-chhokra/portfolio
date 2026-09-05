import Reveal from './Reveal'
import { metrics } from '../data/content'

export default function Hero(){
    return (
        <section className='hero'>
            <div className='wrap hero-grid'>
                <Reveal>
                    <h1>
                        Build the <em>engine</em> behind the experience.
                    </h1>
                    <div className='metrics'>
                        {metrics.map((metric) => (
                            <div className='metric' key={metric.label}>
                                <b>{metric.value}</b>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
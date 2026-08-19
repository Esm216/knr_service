import Reveal from '../common/Reveal';
import './Stats.css';

const stats = [
  { value: '180+', label: 'Missions d\'expertise réalisées' },
  { value: '12', label: 'Années d\'expérience cumulée' },
  { value: '9', label: 'Départements couverts au Bénin' },
  { value: '98 %', label: 'Clients qui nous recommandent' },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Stats;
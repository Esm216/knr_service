import Reveal from '../common/Reveal';
import heroBg from '../../assets/sigmi1.jpg';

function SigmiHero() {
  return (
    <section
      className="relative min-h-[470px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="page-content">
      <div className="absolute inset-0 z-10 bg-slate-950/70" />
      <div className="relative z-20 max-w-3xl ">
        <Reveal>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            SIGMI – Système Intelligent de Gestion et de Maintenance des Infrastructures
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl">
            La plateforme développée par KNR pour connaître l'état réel de votre
            patrimoine bâti, planifier son entretien et maîtriser son budget.
          </p>
        </Reveal>
      </div>
      </div>
    </section>
  );
}

export default SigmiHero;
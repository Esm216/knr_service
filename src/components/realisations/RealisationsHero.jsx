import Reveal from '../common/Reveal';
import heroBg from '../../assets/realisations1.jpg';

function RealisationsHero() {
  return (
    <section
      className="relative min-h-[400px] flex items-center px-10 bg-cover bg-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 z-10 bg-neutral-950/60" />
      <div className="relative z-20 max-w-2xl page-content">
        <Reveal>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Nos missions, exposées avec leurs difficultés et leurs résultats
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
            Nous présentons nos dossiers comme nous rédigeons nos rapports : le
            contexte, le problème réel, ce que nous avons fait et ce que le
            client a obtenu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default RealisationsHero;
import Reveal from '../common/Reveal';
import previewImg from '../../assets/sigmi2.jpg';

function SigmiPreview() {
  return (
    <section className="py-16 pb-24 px-20 max-w-3xl mx-auto text-center">
      <Reveal className="mb-10">
        <span className="block text-xs tracking-wider text--400 font-semibold mb-2">
          Aperçu de la plateforme
        </span>
        <h2 className="text-3xl font-bold text-[33px] leading-[1.2] mb-5 text-neutral-900">
          Une interface sobre, pensée pour le terrain comme pour la direction
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="bg-neutral-50 rounded-md p-4 border border-neutral-200">
          <img src={previewImg} alt="Cartographie des actifs SIGMI" className="w-full rounded-lg" />
          <span className="block mt-2 text-xs text-neutral-400 border border-neutral-300">
            Cartographie des actifs : repérage immédiat des sites prioritaires. Visuel de démonstration.
          </span>
        </div>
      </Reveal>
    </section>
  );
}

export default SigmiPreview;
import Reveal from '../common/Reveal';
import { FiArrowRight } from 'react-icons/fi';

const steps = [
  { label: 'Étape 1', title: 'Audit initial', desc: "Nos ingénieurs recensent et notent l'état de chaque actif sur le terrain." },
  { label: 'Étape 2', title: 'Structuration des données', desc: 'Le patrimoine est intégré dans SIGMI, avec ses documents et son historique.' },
  { label: 'Étape 3', title: 'Paramétrage & formation', desc: 'Cycles de maintenance, rôles et alertes sont configurés, puis vos équipes sont formées.' },
  { label: 'Étape 4', title: 'Exploitation & accompagnement', desc: 'Vous pilotez au quotidien ; KNR reste disponible pour les arbitrages techniques.' },
];

function SigmiSteps() {
  return (
    <section className="bg-neutral-50 py-20 px-40 w-full font-bold">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <span className="block text-xs tracking-wider text-[#FFC107] font-semibold mb-2">
            Mise en place
          </span>
          <h2 className="text-3xl font-bold leading-tight text-neutral-900">
            De l'audit initial à l'exploitation autonome, en quatre étapes
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w--xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-white border-t border-t-[#FFC107] rounded-none overflow-hidden p-5 h-full">
                <span className="block text-[#FFC107] text-xs font-bold mb-2">{step.label}</span>
                <h3 className="text-sm font-semibold mb-2 text-neutral-900">{step.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
            <div>
              <h4 className="text-base font-bold text-neutral-900 mb-1.5">
                Voir SIGMI appliqué à votre propre patrimoine
              </h4>
              <p className="text-neutral-500 text-sm max-w-lg">
                Nous préparons une démonstration de 30 minutes à partir de deux ou
                trois bâtiments réels, pour que vous jugiez sur pièces.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-5 py-3 rounded-lg text-sm whitespace-nowrap">
              Demander une démonstration <FiArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SigmiSteps;
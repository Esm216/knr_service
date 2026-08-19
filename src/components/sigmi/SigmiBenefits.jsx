import Reveal from '../common/Reveal';
import { FiCheck } from 'react-icons/fi';

const groups = [
  {
    label: 'Pour les entreprises',
    items: [
      "Réduction des arrêts d'exploitation liés aux pannes",
      'Traçabilité complète des interventions et des prestataires',
      'Budget de maintenance prévisible et défendable',
      'Valorisation du patrimoine lors des audits et cessions',
    ],
  },
  {
    label: 'Pour les collectivités',
    items: [
      "Vision consolidée de l'état des équipements publics",
      'Priorisation objective des investissements',
      "Justification transparente de l'usage des fonds",
      'Continuité de service malgré la rotation des équipes',
    ],
  },
];

function SigmiBenefits() {
  return (
    <section className="bg-neutral-900 text-white py-20 px-10">
      <Reveal className="max-w-xl mx-auto mb-10">
        <span className="block text-xs tracking-wider text-yellow-400 font-semibold mb-2">
          Bénéfices
        </span>
        <h2 className="text-white text-2xl leading-tight">
          Des gains mesurables pour les entreprises comme pour les collectivités
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {groups.map((group, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="bg-neutral-800 rounded-xl p-6 h-full">
              <span className="block text-yellow-400 text-xs font-semibold mb-4">
                {group.label}
              </span>
              <ul className="flex flex-col gap-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-200 leading-snug">
                    <span className="w-[18px] h-[18px] bg-yellow-400 text-neutral-900 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                      <FiCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default SigmiBenefits;
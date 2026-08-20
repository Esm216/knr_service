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
    <section className="bg-neutral-900 text-white py-20 px-10 ml-[-30px]">
      <div className="page-content">
        <Reveal className="max-w-xl mb-10 text-left">
          <span className="block text-xs tracking-wider text-[#FFC107] mb-2">
            Bénéfices
          </span>
          <h2 className="text-white font-bold text-[30px] leading-[1.2]">
            Des gains mesurables pour les entreprises comme pour les collectivités
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {groups.map((group, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-neutral-800 rounded-md p-6 h-full border border-neutral-700">
                <span className="block text-[#FFC107] text-lg font-bold mb-4">
                  {group.label}
                </span>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-snug">
                      <span className="w-[18px] h-[18px] bg-[#FFC107] text-neutral-900 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
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
      </div>
    </section>
  );
}

export default SigmiBenefits;
import Reveal from '../common/Reveal';
import {
  FiClipboard,
  FiMapPin,
  FiCalendar,
  FiSmartphone,
  FiAlertTriangle,
  FiDollarSign,
  FiBarChart2,
  FiUsers
} from 'react-icons/fi';

const features = [
  {
    icon: <FiClipboard />,
    title: 'Inventaire technique du patrimoine',
    desc: "Chaque bâtiment, équipement et ouvrage est fiché : caractéristiques, état, historique d'intervention et documents techniques associés."
  },
  {
    icon: <FiMapPin />,
    title: 'Cartographie des actifs',
    desc: "Vos sites sont géolocalisés et consultables sur une carte unique, avec un code couleur d'état pour repérer immédiatement les priorités."
  },
  {
    icon: <FiCalendar />,
    title: 'Plans de maintenance préventive',
    desc: "Définissez les cycles d'entretien par type d'équipement et laissez SIGMI générer automatiquement les tâches à venir."
  },
  {
    icon: <FiSmartphone />,
    title: 'Inspections terrain sur mobile',
    desc: 'Vos agents réalisent leurs relevés depuis un téléphone, même hors connexion, avec photos, notes et check-lists normalisées.'
  },
  {
    icon: <FiAlertTriangle />,
    title: 'Alertes et priorisation',
    desc: "Les anomalies critiques déclenchent une notification immédiate aux bons interlocuteurs, avec un niveau d'urgence explicite."
  },
  {
    icon: <FiDollarSign />,
    title: 'Suivi budgétaire',
    desc: "Coûts d'intervention, engagements et consommation budgétaire suivis par site, par nature de dépense et par exercice."
  },
  {
    icon: <FiBarChart2 />,
    title: 'Rapports et tableaux de bord',
    desc: "Indicateurs d'état du patrimoine, taux de réalisation du plan de maintenance et exports prêts pour vos instances de décision."
  },
  {
    icon: <FiUsers />,
    title: 'Gestion des rôles',
    desc: 'Direction, techniciens, prestataires : chacun accède uniquement aux informations et actions qui le concernent.'
  },
];

function SigmiFeatures() {
  return (
    <section className="bg-neutral-100 py-20 px-40 w-full font-bold">

      {/* Titre de la section */}
      <Reveal className="text-center max-w-xl mx-auto mb-12">
        <span className="block text-xs tracking-[2px] text-400 font-black mb-2 text-gray-800">
          Fonctionnalités
        </span>

        <h2 className="text-4xl font-bold leading-[1.1] mb-5 text-neutral-900">
          Tout ce dont un gestionnaire de patrimoine a réellement besoin
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            
            <div className="border border-neutral-200 rounded-xl p-4 h-full bg-white">

              {/* Icône */}
              <div className="w-11 h-11 bg-amber-100 text-black rounded-lg flex items-center justify-center text-lg mb-5">
                {f.icon}
              </div>

              {/* Titre */}
              <h3 className="text-base font-bold leading-6 mb-2 text-neutral-900">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-xs leading-6 font-light">
                {f.desc}
              </p>

            </div>

          </Reveal>
        ))}

      </div>
    </section>
  );
}

export default SigmiFeatures;
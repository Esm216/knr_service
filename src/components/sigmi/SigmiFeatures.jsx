import Reveal from '../common/Reveal';
import { FiClipboard, FiMapPin, FiCalendar, FiSmartphone, FiAlertTriangle, FiDollarSign, FiBarChart2, FiUsers } from 'react-icons/fi';

const features = [
  { icon: <FiClipboard />, title: 'Inventaire technique du patrimoine', desc: "Chaque bâtiment, équipement et ouvrage est fiché : caractéristiques, état, historique d'intervention et documents techniques associés." },
  { icon: <FiMapPin />, title: 'Cartographie des actifs', desc: "Vos sites sont géolocalisés et consultables sur une carte unique, avec un code couleur d'état pour repérer immédiatement les priorités." },
  { icon: <FiCalendar />, title: 'Plans de maintenance préventive', desc: "Définissez les cycles d'entretien par type d'équipement et laissez SIGMI générer automatiquement les tâches à venir." },
  { icon: <FiSmartphone />, title: 'Inspections terrain sur mobile', desc: 'Vos agents réalisent leurs relevés depuis un téléphone, même hors connexion, avec photos, notes et check-lists normalisées.' },
  { icon: <FiAlertTriangle />, title: 'Alertes et priorisation', desc: "Les anomalies critiques déclenchent une notification immédiate aux bons interlocuteurs, avec un niveau d'urgence explicite." },
  { icon: <FiDollarSign />, title: 'Suivi budgétaire', desc: "Coûts d'intervention, engagements et consommation budgétaire suivis par site, par nature de dépense et par exercice." },
  { icon: <FiBarChart2 />, title: 'Rapports et tableaux de bord', desc: "Indicateurs d'état du patrimoine, taux de réalisation du plan de maintenance et exports prêts pour vos instances de décision." },
  { icon: <FiUsers />, title: 'Gestion des rôles', desc: 'Direction, techniciens, prestataires : chacun accède uniquement aux informations et actions qui le concernent.' },
];

function SigmiFeatures() {
  return (
    <section className="py-20 px-10 max-w-6xl mx-auto">
      <Reveal className="text-center max-w-xl mx-auto mb-12">
        <span className="block text-xs tracking-wider text-yellow-400 font-semibold mb-2">
          Fonctionnalités
        </span>
        <h2 className="text-2xl leading-tight text-neutral-900">
          Tout ce dont un gestionnaire de patrimoine a réellement besoin
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="border border-neutral-200 rounded-xl p-5 h-full">
              <div className="w-9 h-9 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center text-base mb-3.5">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold mb-2 text-neutral-900">{f.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default SigmiFeatures;
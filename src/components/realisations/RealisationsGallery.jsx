import { useState } from 'react';
import Reveal from '../common/Reveal';
import { FiMapPin } from 'react-icons/fi';
import img1 from '../../assets/M1.jpg';
import img2 from '../../assets/M2.jpg';
import img3 from '../../assets/M3.jpg';
import img4 from '../../assets/realisations2.jpg'; 
import img5 from '../../assets/sigmi1.jpg'; 


const categories = [
  'Toutes les missions',
  'Suivi de chantier',
  'Ingénierie & contrôle',
  'Expertise après sinistre',
  'Assistance technique',
  'Diagnostic technique',
];

const projects = [
  {
    category: 'Suivi de chantier',
    image: img1,
    location: 'Akpakpa, Cotonou',
    year: '2024',
    title: 'Résidence Les Palmiers – 12 logements',
    contexte:
      "Un promoteur privé développe un immeuble R+2 de douze appartements destinés à la location, avec un budget serré et un délai de commercialisation contraint.",
    problematique:
      "Les premiers mois de chantier ont révélé des écarts entre les plans et l'exécution, ainsi que des situations de travaux supérieurs à l'avancement réel.",
    intervention:
      "KNR a mis en place un contrôle hebdomadaire avec points d'arrêt avant chaque coulage, vérification systématique des ferraillages, contrôle du dosage des bétons et validation contradictoire des situations mensuelles.",
    resultats: [
      'Livraison respectée avec seulement 3 semaines de décalage',
      '11 % d\'économies sur le décompte final des travaux',
      'Aucune reprise structurelle après réception',
    ],
  },
  {
    category: 'Ingénierie & contrôle',
    image: img2,
    location: 'Abomey-Calavi',
    year: '2023',
    title: 'Groupe scolaire public – 9 salles de classe',
    contexte:
      "Une collectivité locale souhaite construire un groupe scolaire sur un terrain partiellement inondable, dans le cadre d'un financement à échéance fixe.",
    problematique:
      "La portance du sol était insuffisante en partie nord du site et le projet initial ne prévoyait aucun dispositif d'assainissement pluvial.",
    intervention:
      "KNR a repris les études de fondations à partir d'essais complémentaires, proposé des semelles filantes renforcées sur la zone sensible et intégré un réseau de drainage périphérique, puis assuré le contrôle technique jusqu'à la réception.",
    resultats: [
      'Surcoût de fondation limité à 6 % du gros œuvre',
      'Aucune remontée d\'humidité constatée après deux saisons de pluies',
      'Réception prononcée sans réserve majeure',
    ],
  },
  {
    category: 'Expertise après sinistre',
    image: img3,
    location: 'Godomey',
    year: '2024',
    title: 'Expertise après effondrement partiel',
    contexte:
      "Effondrement partiel d'un plancher haut dans un immeuble commercial de deux niveaux, sans victime mais avec une activité totalement interrompue.",
    problematique:
      "Le propriétaire et l'entreprise se renvoyaient la responsabilité, et l'assureur conditionnait toute indemnisation à un rapport technique indépendant.",
    intervention:
      "Intervention sur site en moins de 48 heures : sécurisation, relevés, prélèvements de béton, analyse des plans d'exécution et reconstitution de la chaîne causale du sinistre.",
    resultats: [],
  },
  {
    category: 'Assistance technique',
    image: img4,
    location: 'Zogbo, Cotonou',
    year: '2023',
    title: 'Voirie et assainissement de quartier',
    contexte:
      "Aménagement de 1,8 km de voirie urbaine avec caniveaux, dans un quartier régulièrement inondé pendant la saison des pluies.",
    problematique:
      "Les études initiales sous-estimaient les débits à évacuer et le phasage ne tenait pas compte des riverains aux commerces.",
    intervention:
      "KNR a recalculé les sections hydrauliques, redéfini le phasage des travaux en trois tronçons et assuré le contrôle des épaisseurs de couches et des bétons de caniveaux.",
    resultats: [],
  },
  {
    category: 'Diagnostic technique',
    image: img5,
    location: 'Fidjrossè, Cotonou',
    year: '2025',
    title: 'Diagnostic de fissuration — immeuble R+3',
    contexte:
      "Un immeuble de bureaux de quatre niveaux présente des fissures en façade trois ans après sa livraison, inquiétant les occupants et le bailleur.",
    problematique:
      "Deux entreprises consultées proposaient des reprises lourdes de structure, pour un montant supérieur à 40 millions FCFA.",
    intervention:
      "KNR a posé des témoins pendant huit semaines, réalisé des mesures sclérométriques et une détection d'armatures, puis démontré l'origine non structurelle des fissures.",
    resultats: [],
  },
  
]
function RealisationsGallery() {
  const [activeFilter, setActiveFilter] = useState('Toutes les missions');

  const filtered =
    activeFilter === 'Toutes les missions'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 px-16 max-w-6xl mx-auto overflow-x-hidden">
      <Reveal className="mb-8">
        <span className="block text-xs tracking-wider text-yellow-500 font-semibold mb-2">
          Galerie de projets
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
          Six dossiers représentatifs de nos interventions
        </h2>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
          Certaines informations ont été anonymisées par respect de la
          confidentialité contractuelle due à nos clients.
        </p>
      </Reveal>

      <Reveal delay={100} className="mb-10">
        <span className="block text-xs text-neutral-400 mb-3">
          Filtrer par type de mission
        </span>
        <div className="flex flex-wrap gap-2  min-w-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                activeFilter === cat
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-700 border-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="border border-neutral-200 rounded-xl overflow-hidden h-full flex flex-col">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <span className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded">
                  {project.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                  <FiMapPin /> {project.location} · {project.year}
                </span>
                <h3 className="text-base font-semibold text-neutral-900 mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-col gap-3 text-sm">
                  <div>
                    <span className="block text-xs font-semibold text-neutral-800 mb-1">Contexte</span>
                    <p className="text-neutral-500 text-xs leading-relaxed">{project.contexte}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-800 mb-1">Problématique</span>
                    <p className="text-neutral-500 text-xs leading-relaxed">{project.problematique}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-800 mb-1">Intervention de KNR</span>
                    <p className="text-neutral-500 text-xs leading-relaxed">{project.intervention}</p>
                  </div>

                  {project.resultats.length > 0 && (
                    <div className="pt-2 border-t border-neutral-100">
                      <span className="block text-xs font-semibold text-neutral-800 mb-2">Résultats obtenus</span>
                      <ul className="flex flex-col gap-1.5">
                        {project.resultats.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-neutral-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default RealisationsGallery;
import Reveal from '../common/Reveal';
import { FiPlayCircle } from 'react-icons/fi';
import dashboardImg from '../../assets/S1.jpg';

function SigmiPresentation() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-14 py-20 w-full items-center">

      {/* CONTENU À GAUCHE */}
      <Reveal>
        <div className="page-content">
          <span className="block text-xs tracking-[2px] text-gray-800 font-bold mb-2">
            Présentation générale
          </span>

          <h2 className="text-4xl font-bold leading-[1.1] mb-5 text-neutral-900">
            Passer d'une maintenance subie à une maintenance pilotée
          </h2>

          <p className="text-neutral-700 font-medium leading-relaxed mb-6 text-justify">
            La plupart des gestionnaires de patrimoine réparent après la panne,
            faute d'informations fiables. SIGMI centralise l'inventaire, l'état
            et l'historique de chaque actif, puis transforme ces données en plan
            d'action concret.
          </p>

          <p className="text-neutral-700 font-medium leading-relaxed mb-8 text-justify">
            Née de nos missions d'audit de patrimoine, la plateforme a été conçue
            avec des exigences de terrain : usage possible hors connexion, saisie
            rapide sur mobile, vocabulaire technique francophone et prise en main
            en une demi-journée de formation.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 bg-yellow-400 text-neutral-900 font-black px-6 py-4 rounded-lg text-sm">
              <FiPlayCircle />
              Demander une démonstration
            </button>

            <button className="border-2 border-neutral-900 text-neutral-900 font-black px-6 py-4 rounded-lg text-sm">
              Voir les fonctionnalités
            </button>
          </div>
        </div>
      </Reveal>

      {/* CONTENU À DROITE */}
      <Reveal delay={150}>
        <div className="bg-neutral-100 rounded-xl p-4 text-center">
          <img
            src={dashboardImg}
            alt="Tableau de bord SIGMI"
            className="w-full rounded-lg"
          />

          <span className="block mt-2 text-xs text-neutral-400">
            Tableau de bord SIGMI, capture de démonstration.
          </span>
        </div>
      </Reveal>

    </section>
  );
}

export default SigmiPresentation;
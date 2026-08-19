// src/components/home/FaqSection.jsx
import { useState } from 'react';
import Reveal from '../common/Reveal';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FaqSection.css';

const defaultFaqs = [
  {
    question: 'Dans quelles zones du Bénin intervenez-vous ?',
    answer:
      "Notre siège est à Cotonou. Nous intervenons quotidiennement sur le Littoral et l'Atlantique, et nous nous déplaçons dans l'ensemble des départements du Bénin pour les missions d'expertise, de diagnostic et de contrôle de chantier.",
  },
  {
    question: 'Sous quel délai puis-je obtenir un rapport d\'expertise ?',
    answer:
      "En général, comptez 5 à 10 jours ouvrés après l'intervention sur site, selon la complexité du dossier. En cas d'urgence (sinistre, effondrement), nous priorisons le traitement pour réduire ce délai.",
  },
  {
    question: 'Comment sont calculés vos honoraires ?',
    answer:
      "Nos honoraires dépendent de la nature de la mission, de la superficie ou de la complexité de l'ouvrage, et du temps d'intervention estimé. Un devis détaillé et sans engagement vous est toujours transmis avant le démarrage.",
  },
  {
    question: 'Je vis à l\'étranger : pouvez-vous suivre mon chantier ?',
    answer:
      "Oui, c'est l'une de nos spécialités. Nous proposons un suivi à distance avec comptes rendus photographiés réguliers et points en visioconférence, pensé spécifiquement pour la diaspora béninoise.",
  },
  {
    question: 'Êtes-vous indépendants des entreprises de construction ?',
    answer:
      "Totalement. Nous n'exécutons aucun travaux et n'avons aucun lien commercial avec les entreprises de bâtiment, ce qui garantit que nos conclusions ne servent que l'intérêt de nos clients.",
  },
];

function FaqSection({
  eyebrow = 'Questions fréquentes',
  title = 'Les réponses aux questions que l\'on nous pose le plus souvent',
  faqs = defaultFaqs,
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <Reveal className="faq-header">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <div
                className="faq-answer-wrap"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
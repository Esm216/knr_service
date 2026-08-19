import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import FaqSection from '../components/home/FaqSection';

const contactFaqs = [
  {
    question: 'Dans quelles zones du Bénin intervenez-vous ?',
    answer:
      "Notre siège est à Cotonou. Nous intervenons quotidiennement sur le Littoral et l'Atlantique, et nous nous déplaçons dans l'ensemble des départements du Bénin pour les missions d'expertise, de diagnostic et de contrôle de chantier.",
  },
  {
    question: "Sous quel délai puis-je obtenir un rapport d'expertise ?",
    answer:
      "En général, comptez 5 à 10 jours ouvrés après l'intervention sur site, selon la complexité du dossier.",
  },
  {
    question: 'Comment sont calculés vos honoraires ?',
    answer:
      "Nos honoraires dépendent de la nature de la mission, de la superficie de l'ouvrage et du temps d'intervention estimé. Un devis détaillé et sans engagement vous est toujours transmis avant le démarrage.",
  },
  {
    question: "Je vis à l'étranger : pouvez-vous suivre mon chantier ?",
    answer:
      "Oui, nous proposons un suivi à distance avec comptes rendus photographiés réguliers et points en visioconférence, pensé pour la diaspora béninoise.",
  },
  {
    question: 'Êtes-vous indépendants des entreprises de construction ?',
    answer:
      "Totalement. Nous n'exécutons aucun travaux et n'avons aucun lien commercial avec les entreprises de bâtiment.",
  },
  {
    question: 'Vos rapports sont-ils recevables par une assurance ou un tribunal ?',
    answer:
      "Oui. Nos rapports sont rédigés selon une méthodologie rigoureuse et documentée, ce qui les rend exploitables face à un assureur, un juge ou toute autre partie prenante.",
  },
  {
    question: 'SIGMI est-il réservé aux grandes structures ?',
    answer:
      "Non. SIGMI s'adapte aussi bien à un petit patrimoine qu'à un parc immobilier ou industriel important — l'onboarding est calibré selon la taille de vos actifs.",
  },
];

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FaqSection
        eyebrow="Questions fréquentes"
        title="Avant de nous écrire, vous trouverez peut-être votre réponse ici"
        faqs={contactFaqs}
      />
    </>
  );
}

export default ContactPage;
import Reveal from '../common/Reveal';
import heroBg from '../../assets/contact1.jpg'; 

function ContactHero() {
  return (
    <section
      className="relative min-h-[400px] flex items-center px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 z-10 bg-slate-950/60" />
      <div className="relative z-20 max-w-2xl">
        <Reveal>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Parlons de votre projet ou du désordre que vous constatez
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
            Un premier échange est gratuit et sans engagement. Nous vous répondons
            sous 24 heures ouvrées et vous adressons un devis détaillé sous 48 heures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactHero;
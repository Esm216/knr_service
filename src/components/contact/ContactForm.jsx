// src/components/contact/ContactForm.jsx
import { useState } from 'react';
import Reveal from '../common/Reveal';
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi à brancher plus tard
    console.log(form);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20 px-16 max-w-6xl mx-auto">
      {/* Formulaire */}
      <Reveal className="lg:col-span-2">
        <span className="block text-xs tracking-wider text-yellow-500 font-semibold mb-2">
          Demande de devis
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
          Décrivez votre besoin en quelques lignes
        </h2>
        <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-xl">
          Plus votre description est précise (type d'ouvrage, localisation, nature
          du problème), plus notre proposition sera juste dès le premier échange.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-800">
                Nom et prénom <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text" name="name" required
                placeholder="Ex. Adjovi Kouassi"
                value={form.name} onChange={handleChange}
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-800">
                Adresse e-mail <span className="text-yellow-500">*</span>
              </label>
              <input
                type="email" name="email" required
                placeholder="vous@exemple.com"
                value={form.email} onChange={handleChange}
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-800">
                Téléphone / WhatsApp
              </label>
              <input
                type="tel" name="phone"
                placeholder="+229 ..."
                value={form.phone} onChange={handleChange}
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-800">
                Localisation du projet
              </label>
              <input
                type="text" name="location"
                placeholder="Ex. Abomey-Calavi"
                value={form.location} onChange={handleChange}
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-800">
              Objet de la demande
            </label>
            <input
              type="text" name="subject"
              value={form.subject} onChange={handleChange}
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-800">
              Votre message <span className="text-yellow-500">*</span>
            </label>
            <textarea
              name="message" required rows={5}
              placeholder="Décrivez votre projet ou le désordre constaté : type d'ouvrage, surface, date d'apparition..."
              value={form.message} onChange={handleChange}
              className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-neutral-900 font-semibold px-6 py-3.5 rounded-lg text-sm w-full sm:w-auto"
          >
            <FiSend /> Envoyer ma demande
          </button>
        </form>
      </Reveal>

      {/* Coordonnées + carte */}
      <Reveal delay={150} className="flex flex-col gap-5">
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
          <h3 className="text-base font-semibold text-neutral-900 mb-5">Coordonnées</h3>

          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-xs text-neutral-400">Adresse</span>
                <span className="text-sm text-neutral-800">Cotonou, Bénin</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-xs text-neutral-400">E-mail</span>
                <span className="text-sm text-neutral-800">contact@knr-expertises.com</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-xs text-neutral-400">Téléphone</span>
                <span className="text-sm text-neutral-800">+229 01 97 00 00 00</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiClock className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-xs text-neutral-400">Horaires</span>
                <span className="text-sm text-neutral-800">
                  Lundi - Vendredi : 08h00 – 18h00 · Samedi : 09h00 – 13h00
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-5 pt-5 border-t border-neutral-200">
            <span className="block text-xs text-neutral-400 mb-3">Réseaux sociaux</span>
            <div className="flex gap-3 text-neutral-600 text-lg">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Carte — remplace src par ton lien Google Maps embed */}
        <div className="rounded-xl overflow-hidden border border-neutral-200 h-56">
          <iframe
            title="Localisation KNR Services Bénin"
            src="https://www.google.com/maps?q=Cotonou,Benin&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}

export default ContactForm;
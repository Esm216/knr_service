import { useState } from 'react';
import Reveal from '../common/Reveal';
import { FiPlay } from 'react-icons/fi';
import mainVideoThumb from '../../assets/M1.jpg'; // à remplacer par tes exports
import video2Thumb from '../../assets/M3.jpg';
import video3Thumb from '../../assets/M2.jpg';
import './TestimonialsSection.css';

const mainTestimonial = {
  thumb: mainVideoThumb,
  quote: "« J'ai construit depuis Paris sans jamais perdre le contrôle »",
  desc: "Je vis en France depuis quinze ans et je voulais construire à Calavi. J'avais entendu d'histoires de chantiers abandonnés ou surfacturés, KNR a pris le relais pour place : chaque quinzaine, je recevais un compte rendu…",
  name: 'Sylvain A.',
  role: 'Maître d\'ouvrage — diaspora, Calavi',
  tag: 'Suivi de chantier à distance',
};

const secondaryVideos = [
  {
    thumb: video2Thumb,
    quote: '« Leur contrôle nous a fait gagner du temps et de l\'argent »',
    name: 'Charlotte B.',
    duration: '1 min 48',
    tag: 'Contrôle technique de programme',
  },
  {
    thumb: video3Thumb,
    quote: '« Nous ne subissons plus la maintenance, nous la planifions »',
    name: 'Direction du patrimoine',
    duration: '2 min 36',
    tag: 'Audit de patrimoine & SIGMI',
  },
];

const reviews = [
  {
    text: "Deux entreprises voulaient reprendre toute ma structure. KNR a posé des témoins, mesuré, puis démontré que le problème venait des enduits, toujours pas des matériaux.",
    name: 'Mireille D.',
    role: 'Bailleur privé — Fidjrossè',
  },
  {
    text: "Nous confions à KNR le contrôle technique de nos programmes. Leurs notes de calcul sont solides et leurs remarques de chantier toujours argumentées.",
    name: 'Cabinet Ahouansou',
    role: 'Architecte associé — Cotonou',
  },
  {
    text: "Après l'effondrement partiel de notre plancher, ils étaient sur place en moins de 48 heures. Le dossier d'indemnisation a été accepté en six semaines grâce à leurs constats.",
    name: 'Ets Sodjinou',
    role: 'Gérant d\'immeuble commercial — Godomey',
  },
];

function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="testimonials-section">
      <Reveal className="testimonials-header">
        <span className="eyebrow">Témoignages</span>
        <h2>Nos clients racontent eux-mêmes leur mission</h2>
        <p>
          Trois maîtres d'ouvrage ont accepté de témoigner face caméra. Chaque
          vidéo est accompagnée de sa transcription complète.
        </p>
      </Reveal>

      <div className="testimonials-video-grid">
        <Reveal className="main-video-card">
          <button
            className="video-thumb"
            onClick={() => setActiveVideo('main')}
            aria-label="Lire le témoignage de Sylvain A."
          >
            <img src={mainTestimonial.thumb} alt={mainTestimonial.name} />
            <span className="play-button"><FiPlay /></span>
          </button>
          <div className="main-video-info">
            <h3>{mainTestimonial.quote}</h3>
            <p>{mainTestimonial.desc}</p>
            <div className="video-author">
              <strong>{mainTestimonial.name}</strong>
              <span>{mainTestimonial.role}</span>
            </div>
          </div>
        </Reveal>

        <div className="secondary-videos">
          <span className="secondary-videos-label">Autres témoignages vidéo</span>

          {secondaryVideos.map((video, i) => (
            <Reveal key={i} delay={i * 100} className="secondary-video-card">
              <button
                className="video-thumb-sm"
                onClick={() => setActiveVideo(`secondary-${i}`)}
                aria-label={`Lire le témoignage de ${video.name}`}
              >
                <img src={video.thumb} alt={video.name} />
                <span className="play-button-sm"><FiPlay /></span>
              </button>
              <div className="secondary-video-info">
                <p>{video.quote}</p>
                <span className="video-meta">{video.name} · {video.duration}</span>
                <span className="video-tag">{video.tag}</span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200} className="contact-cta-card">
            <p>Vous souhaitez parler à l'un de nos clients ?</p>
            <span>
              Sur demande, nous mettons en relation avec des maîtres d'ouvrage
              ayant réalisé une mission comparable à la vôtre.
            </span>
          </Reveal>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="review-card">
              <span className="review-quote-mark">"</span>
              <div className="review-stars">★★★★★</div>
              <p>{review.text}</p>
              <div className="review-author">
                <span className="review-avatar">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Placeholder pour la modale vidéo — à connecter à tes vraies sources vidéo */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <video src={...} controls autoPlay /> */}
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default TestimonialsSection;
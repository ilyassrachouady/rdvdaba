import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const priseRendezVousProps = {
  meta: {
    title: "Prise de Rendez-vous Médical en Ligne Maroc | Agenda Cloud - Docliq",
    description: "Solution de prise de rendez-vous médical en ligne au Maroc. Vos patients réservent 24/7, rappels SMS automatiques. -70% appels téléphoniques. Essai gratuit.",
    keywords: "prise de rendez-vous en ligne maroc, rendez-vous médical en ligne, agenda médical en ligne, booking médical",
    canonical: "https://docliq.ma/prise-rendez-vous-en-ligne-maroc"
  },
  hero: {
    badge: "Réservation 24/7 pour vos patients",
    title: "Prise de rendez-vous en ligne au Maroc",
    subtitle: "Simple et automatique.",
    description: "Vos patients prennent rendez-vous en ligne 24/7. Réduisez de 70% les appels téléphoniques.",
    cta: "Essayer gratuitement",
    userCount: 1500,
    userType: "cabinets"
  },
  stats: [
    { value: "-70%", label: "appels téléphoniques" },
    { value: "-90%", label: "rendez-vous manqués" },
    { value: "+30%", label: "nouveaux patients" }
  ],
  features: {
    title: "Avantages de la prise de rendez-vous en ligne",
    description: "Simplifiez la vie de vos patients et de votre secrétariat avec notre solution de réservation en ligne.",
    featureList: [
      { title: "Réservation 24/7", content: "Vos patients peuvent prendre rendez-vous à tout moment, même en dehors des heures d'ouverture." },
      { title: "Rappels SMS Automatiques", content: "Réduisez considérablement le nombre de rendez-vous manqués." },
      { title: "Moins d'Appels Téléphoniques", content: "Libérez votre secrétariat pour des tâches à plus forte valeur ajoutée." },
      { title: "Synchronisation en Temps Réel", content: "Votre agenda est toujours à jour, quel que soit l'appareil que vous utilisez." },
      { title: "Page de Réservation Personnalisée", content: "Une page à vos couleurs, facile à intégrer sur votre site web ou vos réseaux sociaux." },
      { title: "Confirmation Automatique", content: "Vos patients reçoivent une confirmation instantanée par email et SMS." }
    ]
  },
  seoContent: {
    title: "Solution de prise de rendez-vous médical en ligne pour cabinets marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> transforme la gestion des rendez-vous de votre cabinet médical au Maroc. Offrez à vos patients la possibilité de réserver leurs consultations en ligne 24h/24, 7j/7, depuis leur smartphone ou ordinateur. Fini les appels téléphoniques incessants, les double réservations et les agendas surchargés.'
      },
      {
        type: 'heading',
        text: 'Avantages de la prise de rendez-vous en ligne'
      },
      {
        type: 'list',
        items: [
          '<strong>Réservation 24/7</strong> : Vos patients prennent RDV quand ils veulent, même la nuit ou le week-end.',
          '<strong>-70% d\'appels téléphoniques</strong> : Libérez votre secrétariat des tâches répétitives.',
          '<strong>Rappels SMS automatiques</strong> : Réduisez les absences et no-shows de 90%.',
          '<strong>Synchronisation temps réel</strong> : Agenda toujours à jour sur tous vos appareils.',
          '<strong>Confirmations automatiques</strong> : Email et SMS envoyés instantanément au patient.'
        ]
      },
      {
        type: 'heading',
        text: 'Comment ça marche ?'
      },
      {
        type: 'paragraph',
        text: 'Docliq génère une page de réservation personnalisée pour votre cabinet. Vos patients y accèdent via un lien que vous partagez (sur votre site web, réseaux sociaux, WhatsApp). Ils choisissent le type de consultation, sélectionnent un créneau disponible, renseignent leurs coordonnées, et c\'est terminé ! Le rendez-vous apparaît instantanément dans votre agenda Docliq.'
      },
      {
        type: 'paragraph',
        text: 'Plus de <strong>1500+ cabinets médicaux au Maroc</strong> utilisent la prise de rendez-vous en ligne Docliq. Interface en français et arabe, adaptée au contexte marocain, conforme RGPD. Essai gratuit 7 jours sans engagement.'
      }
    ]
  }
};


export default function PriseRendezVousPage() {
  return (
    <>
      <Helmet>
        <title>{priseRendezVousProps.meta.title}</title>
        <meta name="description" content={priseRendezVousProps.meta.description} />
        <meta name="keywords" content={priseRendezVousProps.meta.keywords} />
        <link rel="canonical" href={priseRendezVousProps.meta.canonical} />
      </Helmet>
      <SharedSections {...priseRendezVousProps} />
    </>
  );
}

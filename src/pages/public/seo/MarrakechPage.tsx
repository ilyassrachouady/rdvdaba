import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const marrakechProps = {
  meta: {
    title: "Logiciel Médical Marrakech | Gestion Cabinet Moderne - Docliq",
    description: "Logiciel médical moderne à Marrakech. Gestion cabinet, agenda en ligne, dossiers patients cloud. 250+ cabinets à Marrakech. Essai gratuit 7 jours.",
    keywords: "logiciel médical marrakech, gestion cabinet marrakech, agenda médical marrakech, médecin marrakech",
    canonical: "https://docliq.ma/logiciel-medical-marrakech"
  },
  hero: {
    badge: "250+ cabinets à Marrakech",
    title: "Logiciel médical moderne Marrakech",
    subtitle: "Innovation santé digitale.",
    description: "Solution complète pour cabinets médicaux à Marrakech. Agenda intelligent, dossiers patients cloud, facturation automatique.",
    cta: "Moderniser mon cabinet",
    userCount: 250,
    userType: "cabinets à Marrakech"
  },
  stats: [
    { value: "-70%", label: "appels téléphoniques" },
    { value: "+40%", label: "nouveaux patients" },
    { value: "100%", label: "satisfaction patient" }
  ],
  features: {
    title: "Solution adaptée à Marrakech",
    description: "Des fonctionnalités conçues pour la patientèle locale et internationale de Marrakech.",
    featureList: [
      { title: "Réservation en Ligne 24/7", content: "Permettez à vos patients de prendre rendez-vous à tout moment." },
      { title: "Interface Multilingue", content: "Français, Arabe et Anglais pour une patientèle diversifiée." },
      { title: "Rappels SMS Automatiques", content: "Réduisez les absences et optimisez votre planning." },
      { title: "Gestion Touristique", content: "Facturation et suivi adaptés pour les patients étrangers." },
      { title: "Support Local", content: "Notre équipe à Marrakech est à votre disposition." },
      { title: "Dossiers Cloud Sécurisés", content: "Accédez aux données de vos patients où que vous soyez." }
    ]
  },
  seoContent: {
    title: "La solution préférée des médecins de Marrakech",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> accompagne plus de 250 cabinets médicaux à Marrakech dans leur transformation digitale. De la Médina à Guéliz, de l\'Hivernage à Targa, les médecins marrakchis choisissent Docliq pour offrir une expérience moderne à leurs patients tout en simplifiant leur gestion quotidienne.'
      },
      {
        type: 'heading',
        text: 'Solution adaptée à Marrakech'
      },
      {
        type: 'list',
        items: [
          '<strong>Réservation en ligne</strong> : Vos patients réservent 24/7 depuis leur smartphone.',
          '<strong>Multilingue</strong> : Interface en français, arabe et anglais pour clientèle locale et internationale.',
          '<strong>Rappels automatiques</strong> : SMS et notifications pour réduire les absences.',
          '<strong>Gestion touristique</strong> : Parfait pour cabinets recevant des patients étrangers.',
          '<strong>Support local</strong> : Assistance technique en français et arabe.'
        ]
      },
      {
        type: 'heading',
        text: 'Zones desservies à Marrakech'
      },
      {
        type: 'paragraph',
        text: 'Présents dans tous les quartiers de Marrakech : <strong>Guéliz, Hivernage, Médina, Targa, Massira, Daoudiate, M\'hamid, Semlalia, Route de Casablanca, Amelkis</strong> et toute la région Marrakech-Safi.'
      },
       {
        type: 'heading',
        text: 'Toutes spécialités médicales'
      },
      {
        type: 'paragraph',
        text: 'Notre plateforme répond aux besoins de toutes les spécialités : médecine générale, médecine esthétique, dentisterie, dermatologie, cardiologie, pédiatrie, gynécologie, ophtalmologie, chirurgie, kinésithérapie et toutes autres spécialités pratiquées à Marrakech.'
      }
    ]
  }
};


export default function MarrakechPage() {
  return (
    <>
      <Helmet>
        <title>{marrakechProps.meta.title}</title>
        <meta name="description" content={marrakechProps.meta.description} />
        <meta name="keywords" content={marrakechProps.meta.keywords} />
        <link rel="canonical" href={marrakechProps.meta.canonical} />
      </Helmet>
      <SharedSections {...marrakechProps} />
    </>
  );
}

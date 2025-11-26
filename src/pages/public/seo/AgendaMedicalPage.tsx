import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const agendaMedicalProps = {
  meta: {
    title: "Agenda Médical Intelligent Cloud Maroc | Planning Optimisé - Docliq",
    description: "Agenda médical intelligent dans le cloud. Optimisation automatique, rappels SMS, synchronisation multi-appareils. 95% taux de remplissage. Solution cloud pour médecins marocains.",
    keywords: "agenda médical cloud, planning médical intelligent, agenda médecin maroc, logiciel planning médical",
    canonical: "https://docliq.ma/agenda-medical-intelligent-cloud"
  },
  hero: {
    badge: "Optimisation automatique IA",
    title: "Agenda médical intelligent cloud",
    subtitle: "95% de taux de remplissage.",
    description: "Planning médical cloud intelligent avec optimisation automatique et synchronisation multi-appareils.",
    cta: "Essayer l'agenda cloud",
    userCount: 1500,
    userType: "cabinets"
  },
  stats: [
    { value: "-60%", label: "rendez-vous manqués" },
    { value: "+95%", label: "taux de remplissage" },
    { value: "-80%", label: "temps de secrétariat" }
  ],
  features: {
    title: "L'agenda médical le plus intelligent du Maroc",
    description: "Optimisez votre temps et maximisez votre taux de remplissage avec notre agenda intelligent.",
    featureList: [
      { title: "Optimisation par IA", content: "Notre algorithme remplit automatiquement vos créneaux vides pour maximiser votre efficacité." },
      { title: "Synchronisation Cloud", content: "Accédez à votre agenda en temps réel depuis votre PC, tablette ou smartphone." },
      { title: "Gestion Multi-praticiens", content: "Idéal pour les cabinets de groupe, gérez plusieurs agendas en un seul endroit." },
      { title: "Rappels SMS Automatiques", content: "Réduisez les absences de vos patients grâce aux rappels SMS personnalisables." },
      { title: "Prise de Rendez-vous en Ligne", content: "Permettez à vos patients de prendre rendez-vous 24/7 depuis votre site web." },
      { title: "Vues Flexibles", content: "Adaptez l'affichage de votre agenda (jour, semaine, mois) à vos besoins." }
    ]
  },
  seoContent: {
    title: "L'agenda médical le plus intelligent du Maroc",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> propose l\'agenda médical cloud le plus avancé pour cabinets médicaux au Maroc. Grâce à l\'intelligence artificielle, votre planning s\'optimise automatiquement pour maximiser votre taux de remplissage et réduire les temps morts. Accessible depuis n\'importe quel appareil, synchronisé en temps réel.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités agenda intelligent'
      },
      {
        type: 'list',
        items: [
          '<strong>Optimisation IA</strong> : Algorithme qui remplit automatiquement vos créneaux vides.',
          '<strong>Synchronisation cloud</strong> : Accédez à votre agenda depuis PC, tablette, smartphone.',
          '<strong>Multi-praticiens</strong> : Gestion de plusieurs agendas en cabinet de groupe.',
          '<strong>Vue flexible</strong> : Jour, semaine, mois - adaptez l\'affichage à vos besoins.',
          '<strong>Gestion urgences</strong> : Insertion automatique de créneaux d\'urgence.'
        ]
      },
      {
        type: 'paragraph',
        text: 'L\'agenda médical Docliq permet d\'atteindre <strong>95% de taux de remplissage</strong> en moyenne. Déployé dans 1500+ cabinets au Maroc. Essai gratuit 7 jours.'
      }
    ]
  }
};


export default function AgendaMedicalPage() {
  return (
    <>
      <Helmet>
        <title>{agendaMedicalProps.meta.title}</title>
        <meta name="description" content={agendaMedicalProps.meta.description} />
        <meta name="keywords" content={agendaMedicalProps.meta.keywords} />
        <link rel="canonical" href={agendaMedicalProps.meta.canonical} />
      </Helmet>
      <SharedSections {...agendaMedicalProps} />
    </>
  );
}

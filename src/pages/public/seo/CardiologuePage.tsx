import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const cardiologueProps = {
  meta: {
    title: "Logiciel Cardiologue Maroc | Gestion Cabinet Cardiologie - Docliq",
    description: "Solution pour cardiologues au Maroc. Dossiers patients cardio, ECG, suivi tension, agenda spécialisé. Interface moderne et sécurisée. 380+ cardiologues utilisent Docliq.",
    keywords: "logiciel cardiologue maroc, gestion cabinet cardiologie, logiciel cardiologie maroc",
    canonical: "https://docliq.ma/logiciel-cardiologue-maroc"
  },
  hero: {
    badge: "Solution pour cardiologues",
    title: "Logiciel pour cardiologue au Maroc",
    subtitle: "Suivi cardiovasculaire complet.",
    description: "Gestion complète de votre cabinet de cardiologie avec dossiers patients cardio et intégration ECG.",
    cta: "Essayer la démo gratuite",
    userCount: 380,
    userType: "cardiologues"
  },
  stats: [
    { value: "-40%", label: "temps de reporting" },
    { value: "100%", label: "données sécurisées" },
    { value: "+25%", label: "suivi patient" }
  ],
  features: {
    title: "Fonctionnalités dédiées à la cardiologie",
    description: "Des outils conçus pour le suivi cardiovasculaire, de l'ECG à la gestion des traitements.",
    featureList: [
        { title: "Dossier Patient Cardiovasculaire", content: "Historique complet des consultations, facteurs de risque, et pathologies cardiaques." },
        { title: "Intégration des ECG", content: "Importez, stockez et analysez les électrocardiogrammes de vos patients." },
        { title: "Suivi de la Tension Artérielle", content: "Graphiques d'évolution et alertes automatiques pour un suivi précis." },
        { title: "Prescription de Traitements", content: "Générez des ordonnances pour les traitements cardiovasculaires en quelques clics." },
        { title: "Rapports Cardiologiques", content: "Créez des comptes-rendus professionnels pour les confrères et les patients." },
        { title: "Agenda Spécialisé", content: "Planifiez les consultations, les échographies cardiaques et les suivis." }
    ]
  },
  seoContent: {
    title: "Logiciel de cardiologie adapté aux praticiens marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> offre une solution complète pour les cardiologues au Maroc. Gérez vos consultations, intégrez vos examens ECG, suivez l’évolution cardiovasculaire de vos patients et optimisez votre planning avec un logiciel pensé pour la cardiologie.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités cardiologie'
      },
      {
        type: 'list',
        items: [
          '<strong>Dossiers patients cardiovasculaires</strong> : Historique complet avec facteurs de risque, pathologies cardiaques.',
          '<strong>Intégration ECG</strong> : Import et stockage sécurisé des électrocardiogrammes.',
          '<strong>Suivi tension et fréquence</strong> : Graphiques d\'évolution, alertes automatiques.',
          '<strong>Rapports cardiologiques</strong> : Génération automatique de comptes-rendus professionnels.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Rejoignez <strong>380+ cardiologues marocains</strong> qui utilisent Docliq pour moderniser leur pratique. Essai gratuit 7 jours avec formation complète incluse.'
      }
    ]
  }
};

export default function CardiologuePage() {
  return (
    <>
      <Helmet>
        <title>{cardiologueProps.meta.title}</title>
        <meta name="description" content={cardiologueProps.meta.description} />
        <meta name="keywords" content={cardiologueProps.meta.keywords} />
        <link rel="canonical" href={cardiologueProps.meta.canonical} />
      </Helmet>
      <SharedSections {...cardiologueProps} />
    </>
  );
}

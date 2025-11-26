import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const casablancaProps = {
  meta: {
    title: "Logiciel Médical Casablanca | Gestion Cabinet Numérique - Docliq",
    description: "Logiciel médical N°1 à Casablanca. Gestion cabinet, agenda intelligent, téléconsultation. 500+ cabinets à Casablanca utilisent Docliq. Essai gratuit 7 jours.",
    keywords: "logiciel médical casablanca, gestion cabinet casablanca, agenda médical casablanca, médecin casablanca",
    canonical: "https://docliq.ma/logiciel-medical-casablanca"
  },
  hero: {
    badge: "500+ cabinets à Casablanca",
    title: "Logiciel médical N°1 à Casablanca",
    subtitle: "Solution complète pour cabinets.",
    description: "Gestion cabinet, agenda intelligent, dossiers patients, facturation CNSS. La solution préférée des médecins casablancais.",
    cta: "Essayer gratuitement",
    userCount: 500,
    userType: "cabinets à Casablanca"
  },
  stats: [
    { value: "-70%", label: "appels téléphoniques" },
    { value: "+95%", label: "taux de remplissage" },
    { value: "-80%", label: "charge administrative" }
  ],
  features: {
    title: "Solution adaptée aux cabinets de Casablanca",
    description: "Des fonctionnalités pensées pour les spécificités de la pratique médicale à Casablanca.",
    featureList: [
      { title: "Agenda Intelligent", content: "Optimisation des rendez-vous pour les cabinets à forte affluence." },
      { title: "Gestion Multi-praticiens", content: "Idéal pour les polycliniques et les cabinets de groupe." },
      { title: "Facturation CNSS", content: "Conforme aux normes marocaines et aux assurances locales." },
      { title: "Support Local", content: "Notre équipe est basée à Casablanca pour une intervention rapide." },
      { title: "Formation sur Place", content: "Nous nous déplaçons pour installer et former votre équipe." },
      { title: "Téléconsultation", content: "Proposez des consultations à distance à vos patients." }
    ]
  },
  seoContent: {
    title: "Pourquoi les médecins de Casablanca choisissent Docliq",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est le logiciel médical le plus utilisé à Casablanca avec plus de 500 cabinets médicaux actifs. De Maarif à l\'Oasis, d\'Anfa à Sidi Maarouf, les médecins casablancais font confiance à Docliq pour digitaliser leur pratique médicale et améliorer l\'expérience de leurs patients.'
      },
      {
        type: 'heading',
        text: 'Solution adaptée aux cabinets de Casablanca'
      },
      {
        type: 'list',
        items: [
          '<strong>Agenda intelligent</strong> : Optimisation automatique des rendez-vous pour cabinets à forte affluence.',
          '<strong>Gestion multi-praticiens</strong> : Parfait pour polycliniques et cabinets de groupe.',
          '<strong>Facturation CNSS</strong> : Conforme aux normes marocaines et assurances locales.',
          '<strong>Support local</strong> : Équipe basée à Casablanca, intervention rapide.',
          '<strong>Formation sur place</strong> : Installation et formation dans votre cabinet à Casablanca.'
        ]
      },
      {
        type: 'heading',
        text: 'Quartiers desservis à Casablanca'
      },
      {
        type: 'paragraph',
        text: 'Docliq accompagne les cabinets médicaux dans tous les quartiers de Casablanca : <strong>Maarif, Anfa, Ain Diab, Gauthier, Bourgogne, Val Fleuri, Oasis, Californie, Sidi Maarouf, Les Hôpitaux, Ain Sebaa</strong> et tous les autres quartiers de la métropole.'
      },
       {
        type: 'heading',
        text: 'Toutes spécialités médicales'
      },
      {
        type: 'paragraph',
        text: 'Notre solution s\'adapte à toutes les spécialités : médecins généralistes, dentistes, cardiologues, dermatologues, pédiatres, ophtalmologues, gynécologues, psychiatres, kinésithérapeutes, ORL, radiologues et toutes autres spécialités médicales pratiquées à Casablanca.'
      }
    ]
  }
};


export default function CasablancaPage() {
  return (
    <>
      <Helmet>
        <title>{casablancaProps.meta.title}</title>
        <meta name="description" content={casablancaProps.meta.description} />
        <meta name="keywords" content={casablancaProps.meta.keywords} />
        <link rel="canonical" href={casablancaProps.meta.canonical} />
      </Helmet>
      <SharedSections {...casablancaProps} />
    </>
  );
}

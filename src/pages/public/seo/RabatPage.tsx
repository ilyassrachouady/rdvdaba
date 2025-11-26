import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const rabatProps = {
  meta: {
    title: "Logiciel Médical Rabat | Gestion Cabinet Digitale - Docliq",
    description: "Logiciel médical leader à Rabat. Solution cloud pour cabinets médicaux, cliniques et hôpitaux. 300+ établissements à Rabat. Essai gratuit 7 jours.",
    keywords: "logiciel médical rabat, gestion cabinet rabat, agenda médical rabat, médecin rabat",
    canonical: "https://docliq.ma/logiciel-medical-rabat"
  },
  hero: {
    badge: "300+ établissements à Rabat",
    title: "Logiciel médical cloud Rabat",
    subtitle: "Transformation digitale santé.",
    description: "Solution cloud complète pour cabinets médicaux, cliniques et centres de santé à Rabat et région Rabat-Salé-Kénitra.",
    cta: "Digitaliser mon cabinet",
    userCount: 300,
    userType: "établissements à Rabat"
  },
  stats: [
    { value: "100%", label: "digitalisation" },
    { value: "+30%", label: "efficacité" },
    { value: "0", label: "papier" }
  ],
  features: {
    title: "Fonctionnalités pour établissements de Rabat",
    description: "Une solution cloud conçue pour répondre aux exigences des professionnels de santé de la capitale.",
    featureList: [
      { title: "Solution Cloud Sécurisée", content: "Vos données sont hébergées sur des serveurs haute disponibilité et conformes RGPD." },
      { title: "Gestion Multi-sites", content: "Idéal pour les cliniques et les groupes de cabinets avec plusieurs succursales." },
      { title: "Téléconsultation Intégrée", content: "Proposez des consultations vidéo sécurisées à vos patients." },
      { title: "Conformité Réglementaire", content: "Respect des normes du Ministère de la Santé marocain." },
      { title: "Formation Professionnelle", content: "Nous assurons la formation de vos équipes directement dans vos locaux." },
      { title: "Support Dédié", content: "Une équipe à votre écoute pour répondre à toutes vos questions." }
    ]
  },
  seoContent: {
    title: "Solution médicale cloud pour la capitale",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est la solution cloud de référence pour les professionnels de santé à Rabat. Capitale administrative du Maroc, Rabat concentre de nombreux cabinets médicaux, cliniques privées et centres de santé qui font confiance à notre plateforme pour moderniser leur pratique et offrir un service d\'excellence à leurs patients.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités pour établissements de Rabat'
      },
      {
        type: 'list',
        items: [
          '<strong>Solution cloud sécurisée</strong> : Données hébergées sur serveurs haute disponibilité.',
          '<strong>Gestion multi-sites</strong> : Parfait pour cliniques avec plusieurs succursales.',
          '<strong>Téléconsultation intégrée</strong> : Service de consultation en ligne sécurisé.',
          '<strong>Conformité réglementaire</strong> : Conforme normes Ministère de la Santé marocain.',
          '<strong>Formation professionnelle</strong> : Accompagnement et formation dans votre établissement.'
        ]
      },
       {
        type: 'heading',
        text: 'Secteurs couverts à Rabat'
      },
      {
        type: 'paragraph',
        text: 'Docliq est présent dans tous les secteurs de Rabat : <strong>Agdal, Hassan, Hay Riad, Aviation, Souissi, Les Orangers, Yacoub El Mansour, Océan, Témara, Salé</strong> et toute la région Rabat-Salé-Kénitra.'
      },
      {
        type: 'heading',
        text: 'Types d\'établissements'
      },
      {
        type: 'paragraph',
        text: 'Notre plateforme s\'adapte à tous les types d\'établissements de santé : cabinets médicaux individuels, cabinets de groupe, polycliniques, centres médicaux spécialisés, centres de radiologie, laboratoires d\'analyses, cabinets dentaires, centres de kinésithérapie et centres de médecine esthétique.'
      }
    ]
  }
};


export default function RabatPage() {
  return (
    <>
      <Helmet>
        <title>{rabatProps.meta.title}</title>
        <meta name="description" content={rabatProps.meta.description} />
        <meta name="keywords" content={rabatProps.meta.keywords} />
        <link rel="canonical" href={rabatProps.meta.canonical} />
      </Helmet>
      <SharedSections {...rabatProps} />
    </>
  );
}

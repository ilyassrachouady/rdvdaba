import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const pediatreProps = {
  meta: {
    title: "Logiciel Pédiatre Maroc | Gestion Cabinet Pédiatrique - Docliq",
    description: "Logiciel pédiatrique au Maroc. Courbes de croissance, carnet de vaccination, suivi développement enfant. 620+ pédiatres utilisent Docliq. Essai gratuit 7 jours.",
    keywords: "logiciel pédiatre maroc, logiciel cabinet pédiatrique, gestion pédiatrie maroc",
    canonical: "https://docliq.ma/logiciel-pediatre-maroc"
  },
  hero: {
    badge: "Solution pour pédiatres",
    title: "Logiciel pour pédiatre au Maroc",
    subtitle: "Suivi enfants et vaccination.",
    description: "Solution complète pour cabinets pédiatriques avec courbes de croissance et carnets de vaccination.",
    cta: "Essayer la démo gratuite",
    userCount: 620,
    userType: "pédiatres"
  },
  stats: [
    { value: "-50%", label: "temps de saisie" },
    { value: "100%", label: "vaccins à jour" },
    { value: "+40%", label: "satisfaction parents" }
  ],
  features: {
    title: "Fonctionnalités pédiatriques spécialisées",
    description: "Des outils conçus pour le suivi de la santé de l'enfant, de la naissance à l'adolescence.",
    featureList: [
      { title: "Courbes de Croissance", content: "Graphiques automatiques de poids, taille et périmètre crânien selon les standards de l'OMS." },
      { title: "Carnet de Vaccination Numérique", content: "Suivi complet du calendrier vaccinal avec rappels automatiques pour les parents." },
      { title: "Suivi du Développement", content: "Évaluation des étapes clés du développement psychomoteur et alertes en cas de retard." },
      { title: "Dossier Patient Enfant", content: "Historique médical complet, allergies, antécédents familiaux et notes de consultation." },
      { title: "Gestion des Fratries", content: "Liez les dossiers des frères et sœurs pour une vue d'ensemble de la santé de la famille." },
      { title: "Prescriptions Pédiatriques", content: "Calculez les dosages en fonction du poids et de l'âge de l'enfant en toute sécurité." }
    ]
  },
  seoContent: {
    title: "Logiciel pédiatrique adapté aux pédiatres marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est le logiciel de référence pour les pédiatres au Maroc. Suivez la croissance et le développement de vos jeunes patients avec des outils spécialisés : courbes de croissance automatiques, carnets de vaccination intégrés, et suivi personnalisé pour chaque enfant.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités pédiatriques spécialisées'
      },
      {
        type: 'list',
        items: [
          '<strong>Courbes de croissance</strong> : Graphiques automatiques poids/taille selon standards OMS.',
          '<strong>Carnet de vaccination</strong> : Suivi vaccinal complet avec rappels automatiques.',
          '<strong>Suivi développement</strong> : Étapes développement psychomoteur et alertes si retard.',
          '<strong>Dossier famille</strong> : Gestion simplifiée des fratries et historique familial.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Plus de <strong>620 pédiatres au Maroc</strong> font confiance à Docliq pour moderniser leur pratique. Interface intuitive, formation incluse, essai gratuit 7 jours.'
      }
    ]
  }
};


export default function PediatrePage() {
  return (
    <>
      <Helmet>
        <title>{pediatreProps.meta.title}</title>
        <meta name="description" content={pediatreProps.meta.description} />
        <meta name="keywords" content={pediatreProps.meta.keywords} />
        <link rel="canonical" href={pediatreProps.meta.canonical} />
      </Helmet>
      <SharedSections {...pediatreProps} />
    </>
  );
}

import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const kinesitherapeuteProps = {
  meta: {
    title: "Logiciel Kinésithérapeute Maroc | Gestion Cabinet Kiné - Docliq",
    description: "Solution pour kinésithérapeutes au Maroc. Planning séances, dossiers rééducation, facturation kiné. Simple et efficace. 290+ kinés utilisent Docliq.",
    keywords: "logiciel kinésithérapeute maroc, logiciel cabinet kiné, gestion kiné maroc",
    canonical: "https://docliq.ma/logiciel-kinesitherapeute-maroc"
  },
  hero: {
    badge: "Solution pour kinésithérapeutes",
    title: "Logiciel pour kinésithérapeute au Maroc",
    subtitle: "Gestion séances et rééducation.",
    description: "Solution complète pour cabinets de kinésithérapie avec gestion séances et protocoles de rééducation.",
    cta: "Essayer la démo gratuite",
    userCount: 290,
    userType: "kinésithérapeutes"
  },
  stats: [
    { value: "-70%", label: "temps de facturation" },
    { value: "100%", label: "protocoles suivis" },
    { value: "+50%", label: "gestion des séances" }
  ],
  features: {
    title: "Fonctionnalités pour kinésithérapeutes",
    description: "Des outils conçus pour optimiser la gestion de votre cabinet de kinésithérapie.",
    featureList: [
      { title: "Planning des Séances", content: "Gestion flexible des rendez-vous, y compris les séances récurrentes et les groupes." },
      { title: "Protocoles de Rééducation", content: "Créez et suivez des protocoles de traitement personnalisés pour chaque patient." },
      { title: "Suivi de la Progression", content: "Évaluez l'évolution de vos patients avec des notes, des mesures et des graphiques." },
      { title: "Dossier Patient Kiné", content: "Consignez le bilan initial, les objectifs et le suivi de chaque patient." },
      { title: "Facturation Spécialisée", content: "Adaptée à la nomenclature des actes de kinésithérapie (AMO, CNOPS, etc.)." },
      { title: "Communication Patient", content: "Envoyez des rappels de rendez-vous et des exercices à vos patients par SMS ou email." }
    ]
  },
  seoContent: {
    title: "Logiciel de gestion pour kinésithérapeutes marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> simplifie la gestion de votre cabinet de kinésithérapie au Maroc. Planifiez vos séances, suivez les protocoles de rééducation, gérez votre facturation et optimisez votre temps avec une solution pensée pour les kinésithérapeutes.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités pour kinésithérapeutes'
      },
      {
        type: 'list',
        items: [
          '<strong>Planning séances</strong> : Gestion flexible avec séances courtes, longues et rendez-vous récurrents.',
          '<strong>Protocoles de rééducation</strong> : Création et suivi de protocoles personnalisés par patient.',
          '<strong>Suivi progression</strong> : Évaluation de l\'évolution avec notes et graphiques de progrès.',
          '<strong>Facturation spécialisée</strong> : Adaptée aux tarifs et nomenclature de kinésithérapie marocaine.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Plus de <strong>290 kinésithérapeutes au Maroc</strong> utilisent Docliq quotidiennement. Essai gratuit 7 jours, formation incluse.'
      }
    ]
  }
};


export default function KinesitherapeutePage() {
  return (
    <>
      <Helmet>
        <title>{kinesitherapeuteProps.meta.title}</title>
        <meta name="description" content={kinesitherapeuteProps.meta.description} />
        <meta name="keywords" content={kinesitherapeuteProps.meta.keywords} />
        <link rel="canonical" href={kinesitherapeuteProps.meta.canonical} />
      </Helmet>
      <SharedSections {...kinesitherapeuteProps} />
    </>
  );
}

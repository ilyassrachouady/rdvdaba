import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const dermatologueProps = {
  meta: {
    title: "Logiciel Dermatologue Maroc | Gestion Cabinet Dermatologie - Docliq",
    description: "Logiciel spécialisé pour dermatologues au Maroc. Gestion photos avant/après, suivi traitements dermatologiques, dossiers patients. 420+ dermatologues utilisent Docliq.",
    keywords: "logiciel dermatologue maroc, logiciel cabinet dermatologie, gestion dermatologie maroc",
    canonical: "https://docliq.ma/logiciel-dermatologue-maroc"
  },
  hero: {
    badge: "Solution pour dermatologues",
    title: "Logiciel pour dermatologue au Maroc",
    subtitle: "Gestion photos et traitements.",
    description: "Solution complète pour votre cabinet de dermatologie avec gestion photos avant/après et suivi traitements.",
    cta: "Essayer la démo gratuite",
    userCount: 420,
    userType: "dermatologues"
  },
  stats: [
    { value: "-50%", label: "temps administratif" },
    { value: "100%", label: "photos sécurisées" },
    { value: "+30%", label: "satisfaction patient" }
  ],
  features: {
    title: "Fonctionnalités spécifiques pour la dermatologie",
    description: "Gérez photos, traitements et dossiers patients avec des outils conçus pour les dermatologues.",
    featureList: [
        { title: "Galerie Photos Avant/Après", content: "Stockez et comparez facilement les photos de vos patients pour un suivi visuel précis." },
        { title: "Protocoles de Traitement", content: "Créez et suivez des plans de traitement personnalisés pour l'acné, le psoriasis, etc." },
        { title: "Dossier Patient Dermatologique", content: "Consignez les antécédents, les allergies et les traitements de chaque patient." },
        { title: "Intégration Dermatoscopie", content: "Archivez et analysez les images de dermatoscopie directement dans le dossier patient." },
        { title: "Facturation Actes Esthétiques", content: "Générez des devis et des factures pour les actes de dermatologie esthétique." },
        { title: "Agenda Spécialisé", content: "Planifiez les consultations, les suivis et les interventions avec un agenda adapté." }
    ]
  },
  seoContent: {
    title: "Pourquoi les dermatologues marocains choisissent Docliq",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est le logiciel de gestion spécialisé pour cabinets de dermatologie au Maroc. Gérez vos consultations, stockez et comparez des photos de patients, suivez l’évolution des traitements, et optimisez votre planning avec une solution moderne adaptée à votre spécialité.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités spécifiques dermatologie'
      },
      {
        type: 'list',
        items: [
          '<strong>Gestion photos dermatologiques</strong> : Stockage sécurisé photos avant/après avec comparaison chronologique.',
          '<strong>Suivi traitements acné et esthétiques</strong> : Protocoles personnalisés avec alertes de suivi.',
          '<strong>Dermatoscopie numérique</strong> : Intégration images haute résolution pour diagnostics précis.',
          '<strong>Plans de traitement personnalisés</strong> : Création et suivi de protocoles dermatologiques complexes.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Plus de <strong>420 dermatologues au Maroc</strong> utilisent Docliq quotidiennement pour gérer leur pratique. Solution cloud accessible partout, conforme RGPD, avec support francophone dédié. Essai gratuit de 7 jours sans engagement.'
      }
    ]
  }
};

export default function DermatologuePage() {
  return (
    <>
      <Helmet>
        <title>{dermatologueProps.meta.title}</title>
        <meta name="description" content={dermatologueProps.meta.description} />
        <meta name="keywords" content={dermatologueProps.meta.keywords} />
        <link rel="canonical" href={dermatologueProps.meta.canonical} />
      </Helmet>
      <SharedSections {...dermatologueProps} />
    </>
  );
}

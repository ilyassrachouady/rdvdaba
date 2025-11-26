import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const ophtalmologueProps = {
  meta: {
    title: "Logiciel Ophtalmologue Maroc | Gestion Cabinet Ophtalmologie - Docliq",
    description: "Logiciel pour ophtalmologues marocains. Dossiers vision, prescriptions lunettes, suivi glaucome. Moderne et intuitif. 340+ ophtalmologues utilisent Docliq.",
    keywords: "logiciel ophtalmologue maroc, gestion cabinet ophtalmologie, logiciel ophtalmologie maroc",
    canonical: "https://docliq.ma/logiciel-ophtalmologue-maroc"
  },
  hero: {
    badge: "Solution pour ophtalmologues",
    title: "Logiciel pour ophtalmologue au Maroc",
    subtitle: "Vision et prescriptions optiques.",
    description: "Gestion complète pour cabinets d'ophtalmologie avec dossiers vision et prescriptions lunettes.",
    cta: "Essayer la démo gratuite",
    userCount: 340,
    userType: "ophtalmologues"
  },
  stats: [
    { value: "-60%", label: "temps de prescription" },
    { value: "100%", label: "dossiers vision" },
    { value: "+35%", label: "précision des suivis" }
  ],
  features: {
    title: "Fonctionnalités conçues pour l'ophtalmologie",
    description: "Des outils spécialisés pour la gestion de la santé visuelle de vos patients.",
    featureList: [
      { title: "Dossier de Réfraction", content: "Enregistrez et suivez l'évolution de l'acuité visuelle, de la réfraction et de la pression intraoculaire." },
      { title: "Prescriptions Optiques", content: "Générez rapidement des ordonnances pour lunettes et lentilles de contact." },
      { title: "Suivi des Pathologies", content: "Monitorez le glaucome, la cataracte et d'autres maladies oculaires avec des outils dédiés." },
      { title: "Imagerie du Fond d'Œil", content: "Stockez et comparez les images de la rétine pour un suivi précis." },
      { title: "Gestion des Rendez-vous", content: "Planifiez les consultations, les examens du champ visuel et les interventions." },
      { title: "Facturation des Actes", content: "Générez des factures pour les consultations, les examens et les actes chirurgicaux." }
    ]
  },
  seoContent: {
    title: "Solution ophtalmologie pour praticiens marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> propose une solution complète pour ophtalmologues au Maroc. Gérez vos consultations, stockez les mesures d\'acuité visuelle, générez des prescriptions optiques et suivez les pathologies oculaires avec un logiciel moderne et sécurisé.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités ophtalmologie'
      },
      {
        type: 'list',
        items: [
          '<strong>Dossiers vision complets</strong> : Historique acuité visuelle, réfraction, examens complémentaires.',
          '<strong>Prescriptions optiques</strong> : Génération automatique ordonnances lunettes et lentilles.',
          '<strong>Suivi glaucome et cataracte</strong> : Monitoring pression intraoculaire et évolution pathologies.',
          '<strong>Fond d\'œil numérique</strong> : Stockage et comparaison images rétiniennes.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Rejoignez <strong>340+ ophtalmologues marocains</strong> qui modernisent leur pratique avec Docliq. Essai gratuit 7 jours.'
      }
    ]
  }
};


export default function OphtalmologuePage() {
  return (
    <>
      <Helmet>
        <title>{ophtalmologueProps.meta.title}</title>
        <meta name="description" content={ophtalmologueProps.meta.description} />
        <meta name="keywords" content={ophtalmologueProps.meta.keywords} />
        <link rel="canonical" href={ophtalmologueProps.meta.canonical} />
      </Helmet>
      <SharedSections {...ophtalmologueProps} />
    </>
  );
}

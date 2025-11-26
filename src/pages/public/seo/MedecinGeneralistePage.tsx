import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const medecinGeneralisteProps = {
  meta: {
    title: "Logiciel Médecin Généraliste Maroc | Gestion Cabinet Médical - Docliq",
    description: "Solution complète pour médecins généralistes au Maroc. Agenda, dossiers patients, prescriptions, téléconsultation. 1850+ médecins nous font confiance. Essai 7 jours gratuit.",
    keywords: "logiciel médecin généraliste maroc, gestion cabinet médical, logiciel médecin maroc, agenda médecin généraliste",
    canonical: "https://docliq.ma/logiciel-medecin-generaliste-maroc"
  },
  hero: {
    badge: "Solution pour médecins généralistes",
    title: "Logiciel pour médecin généraliste au Maroc",
    subtitle: "Moderne et complet.",
    description: "La solution tout-en-un pour gérer efficacement votre cabinet de médecine générale.",
    cta: "Essayer la démo gratuite",
    userCount: 1850,
    userType: "médecins généralistes"
  },
  stats: [
    { value: "-70%", label: "appels téléphoniques" },
    { value: "100%", label: "dossiers numériques" },
    { value: "+40%", label: "patients par mois" }
  ],
  features: {
    title: "Fonctionnalités adaptées aux cabinets de médecine générale",
    description: "Une solution complète : agenda, dossiers patients, prescriptions, et téléconsultation.",
    featureList: [
        { title: "Agenda Intelligent", content: "Optimisez votre planning et réduisez les absences grâce aux rappels SMS automatiques." },
        { title: "Dossiers Patients", content: "Accédez à l'historique médical complet de vos patients en un clic." },
        { title: "Prescriptions Électroniques", content: "Générez des ordonnances claires et conformes avec une base de données médicaments intégrée." },
        { title: "Téléconsultation", content: "Proposez des consultations à distance sécurisées et intégrées à votre agenda." },
        { title: "Facturation Simplifiée", content: "Gérez facilement les paiements, les mutuelles et la facturation CNSS." },
        { title: "Statistiques et Rapports", content: "Suivez l'activité de votre cabinet avec des tableaux de bord clairs et personnalisables." }
    ]
  },
  seoContent: {
    title: "Pourquoi choisir Docliq pour votre cabinet de médecine générale ?",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est le logiciel de gestion de cabinet médical le plus complet au Maroc. Conçu spécifiquement pour répondre aux besoins des médecins généralistes, notre solution vous permet de gérer l’ensemble de votre pratique depuis une interface unique et intuitive.'
      },
      {
        type: 'paragraph',
        text: 'Que vous soyez médecin généraliste en ville ou en milieu rural, Docliq s’adapte à votre pratique. Gérez vos rendez-vous, vos dossiers patients, vos prescriptions et votre facturation en quelques clics.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités essentielles pour médecins généralistes'
      },
      {
        type: 'list',
        items: [
          '<strong>Agenda intelligent</strong> : Planning optimisé avec gestion des urgences et rappels SMS automatiques.',
          '<strong>Dossiers patients complets</strong> : Historique complet des consultations, antécédents, et traitements.',
          '<strong>Prescriptions électroniques</strong> : Génération rapide d\'ordonnances conformes aux normes marocaines.',
          '<strong>Téléconsultation intégrée</strong> : Consultations vidéo sécurisées pour le suivi de vos patients.',
          '<strong>Statistiques de cabinet</strong> : Suivez vos performances, revenus et taux de remplissage en temps réel.'
        ]
      },
      {
        type: 'heading',
        text: 'Adapté à tous les cabinets de médecine générale au Maroc'
      },
      {
        type: 'paragraph',
        text: 'Que votre cabinet soit situé à Casablanca, Rabat, Marrakech ou dans toute autre ville du Maroc, Docliq fonctionne 100% en ligne avec un accès sécurisé depuis n’importe quel appareil. Vos données sont sauvegardées automatiquement et protégées selon les normes RGPD.'
      },
      {
        type: 'paragraph',
        text: 'Rejoignez plus de <strong>1850 médecins généralistes marocains</strong> qui ont déjà transformé leur pratique avec Docliq. Essai gratuit de 7 jours, sans engagement, avec formation incluse.'
      }
    ]
  }
};


export default function MedecinGeneralistePage() {
  return (
    <>
      <Helmet>
        <title>{medecinGeneralisteProps.meta.title}</title>
        <meta name="description" content={medecinGeneralisteProps.meta.description} />
        <meta name="keywords" content={medecinGeneralisteProps.meta.keywords} />
        <link rel="canonical" href={medecinGeneralisteProps.meta.canonical} />
      </Helmet>
      <SharedSections {...medecinGeneralisteProps} />
    </>
  );
}

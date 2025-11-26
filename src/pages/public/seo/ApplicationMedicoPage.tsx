import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const applicationMedicoProps = {
  meta: {
    title: "Application Médico-Administrative Maroc | Gestion Cabinet - Docliq",
    description: "Application médico-administrative complète pour cabinets marocains. Facturation, comptabilité, statistiques, CNSS. Solution tout-en-un pour médecins au Maroc.",
    keywords: "application médico-administrative maroc, gestion administrative cabinet, facturation médicale maroc, CNSS médecin",
    canonical: "https://docliq.ma/application-medico-administrative-maroc"
  },
  hero: {
    badge: "Solution tout-en-un",
    title: "Application médico-administrative Maroc",
    subtitle: "Solution tout-en-un.",
    description: "Gestion complète médico-administrative : facturation, comptabilité, CNSS, statistiques.",
    cta: "Simplifier ma gestion",
    userCount: 1500,
    userType: "cabinets"
  },
  stats: [
    { value: "-90%", label: "temps de facturation" },
    { value: "100%", label: "conformité CNSS" },
    { value: "+30%", label: "revenus optimisés" }
  ],
  features: {
    title: "Application tout-en-un pour cabinets médicaux marocains",
    description: "Gérez l'ensemble de l'administratif de votre cabinet depuis une seule interface.",
    featureList: [
      { title: "Facturation Automatique", content: "Générez des factures, reçus et devis conformes aux normes marocaines en un clic." },
      { title: "Gestion CNSS Simplifiée", content: "Éditez les feuilles de soins et les déclarations CNSS sans effort." },
      { title: "Comptabilité Intégrée", content: "Suivez vos recettes, vos dépenses et générez votre journal comptable." },
      { title: "Statistiques Avancées", content: "Analysez les performances de votre cabinet avec des tableaux de bord clairs." },
      { title: "Gestion des Mutuelles", content: "Suivez les remboursements et gérez le tiers-payant avec les principales mutuelles." },
      { title: "Exports Comptables", content: "Exportez vos données comptables au format Excel pour votre fiduciaire." }
    ]
  },
  seoContent: {
    title: "Application tout-en-un pour cabinets médicaux marocains",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> est l\'application médico-administrative la plus complète du Maroc. Gérez toute la partie administrative de votre cabinet médical depuis une seule interface : facturation patients, déclarations CNSS, comptabilité, statistiques de performance. Fini les tableurs Excel et les logiciels multiples.'
      },
      {
        type: 'heading',
        text: 'Fonctionnalités médico-administratives'
      },
      {
        type: 'list',
        items: [
          '<strong>Facturation automatique</strong> : Génération factures, reçus, devis conformes normes marocaines.',
          '<strong>Gestion CNSS</strong> : Déclarations et feuilles de soins CNSS simplifiées.',
          '<strong>Comptabilité intégrée</strong> : Suivi recettes/dépenses, journal comptable, bilan.',
          '<strong>Statistiques avancées</strong> : Analytics revenus, patients, performance cabinet.',
          '<strong>Mutuelles et assurances</strong> : Gestion tiers-payant et remboursements.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Rejoignez <strong>1500+ cabinets médicaux marocains</strong> qui simplifient leur gestion administrative avec Docliq. Essai gratuit 7 jours avec formation complète.'
      }
    ]
  }
};

export default function ApplicationMedicoPage() {
  return (
    <>
      <Helmet>
        <title>{applicationMedicoProps.meta.title}</title>
        <meta name="description" content={applicationMedicoProps.meta.description} />
        <meta name="keywords" content={applicationMedicoProps.meta.keywords} />
        <link rel="canonical" href={applicationMedicoProps.meta.canonical} />
      </Helmet>
      <SharedSections {...applicationMedicoProps} />
    </>
  );
}

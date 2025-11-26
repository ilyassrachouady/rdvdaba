import SharedSections from '@/components/SharedSections';
import { Helmet } from 'react-helmet-async';

const dossiersSecurisesProps = {
  meta: {
    title: "Dossiers Patients Sécurisés Maroc | Stockage Cloud RGPD - Docliq",
    description: "Dossiers patients 100% sécurisés dans le cloud. Conforme RGPD, accès instantané, backup automatique. Sécurité maximale pour cabinets médicaux marocains.",
    keywords: "dossiers patients sécurisés, stockage dossiers médicaux maroc, dossiers patients cloud, RGPD médical",
    canonical: "https://docliq.ma/dossiers-patients-securises-maroc"
  },
  hero: {
    badge: "Conformité RGPD garantie",
    title: "Dossiers patients sécurisés au Maroc",
    subtitle: "Stockage cloud RGPD.",
    description: "Stockage 100% sécurisé de vos dossiers médicaux dans le cloud avec conformité RGPD.",
    cta: "Sécuriser mes dossiers",
    userCount: 1500,
    userType: "cabinets"
  },
  stats: [
    { value: "100%", label: "conformité RGPD" },
    { value: "0", label: "perte de données" },
    { value: "99.9%", label: "disponibilité" }
  ],
  features: {
    title: "Sécurité maximale pour vos dossiers patients",
    description: "Protégez les données de vos patients avec notre solution de stockage cloud sécurisée.",
    featureList: [
      { title: "Conformité RGPD", content: "Respect total des normes européennes de protection des données de santé." },
      { title: "Chiffrement AES-256", content: "Un chiffrement de niveau militaire pour garantir la confidentialité de vos données." },
      { title: "Sauvegarde Automatique", content: "Backup quotidien de vos données sur des serveurs sécurisés et redondants." },
      { title: "Accès Instantané", content: "Recherchez et consultez vos dossiers patients en moins d'une seconde." },
      { title: "Traçabilité des Accès", content: "Historique complet de toutes les consultations et modifications de dossiers." },
      { title: "Hébergement HDS", content: "Serveurs certifiés Hébergeur de Données de Santé pour une sécurité maximale." }
    ]
  },
  seoContent: {
    title: "Sécurité maximale pour vos dossiers patients",
    content: [
      {
        type: 'paragraph',
        text: '<strong>Docliq</strong> garantit la sécurité absolue de vos dossiers patients avec un stockage cloud conforme RGPD, encryption de bout en bout, et backup automatique quotidien. Accédez instantanément aux dossiers depuis n\'importe où, en toute sécurité.'
      },
      {
        type: 'heading',
        text: 'Sécurité et conformité'
      },
      {
        type: 'list',
        items: [
          '<strong>Conformité RGPD totale</strong> : Respect strict des normes européennes de protection données.',
          '<strong>Encryption AES-256</strong> : Chiffrement militaire de tous vos dossiers médicaux.',
          '<strong>Backup automatique</strong> : Sauvegarde quotidienne sur serveurs sécurisés multi-localisés.',
          '<strong>Accès instantané 0.3s</strong> : Recherche ultra-rapide dans tous vos dossiers.',
          '<strong>Historique complet</strong> : Traçabilité de tous les accès et modifications.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Plus de <strong>1500+ cabinets médicaux au Maroc</strong> font confiance à Docliq pour stocker leurs dossiers patients en toute sécurité. Essai gratuit 7 jours.'
      }
    ]
  }
};


export default function DossiersSecurisesPage() {
  return (
    <>
      <Helmet>
        <title>{dossiersSecurisesProps.meta.title}</title>
        <meta name="description" content={dossiersSecurisesProps.meta.description} />
        <meta name="keywords" content={dossiersSecurisesProps.meta.keywords} />
        <link rel="canonical" href={dossiersSecurisesProps.meta.canonical} />
      </Helmet>
      <SharedSections {...dossiersSecurisesProps} />
    </>
  );
}

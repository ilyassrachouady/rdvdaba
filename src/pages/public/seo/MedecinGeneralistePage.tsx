import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DemoPopup } from '@/components/ui/demo-popup';
import { Calendar, CheckCircle, ArrowRight, Users, Play, FileText, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function MedecinGeneralistePage() {
  const navigate = useNavigate();
  const [patientCount] = useState(1850);

  const handleDashboardDemo = useCallback(() => navigate('/dashboard'), [navigate]);
  const handleBookingDemo = useCallback(() => navigate('/booking-wizard'), [navigate]);

  return (
    <>
      <Helmet>
        <title>Logiciel Médecin Généraliste Maroc | Gestion Cabinet Médical - Docliq</title>
        <meta name="description" content="Solution complète pour médecins généralistes au Maroc. Agenda, dossiers patients, prescriptions, téléconsultation. 1850+ médecins nous font confiance. Essai 7 jours gratuit." />
        <meta name="keywords" content="logiciel médecin généraliste maroc, gestion cabinet médical, logiciel médecin maroc, agenda médecin généraliste" />
        <link rel="canonical" href="https://docliq.ma/logiciel-medecin-generaliste-maroc" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-docliq-neutral via-white to-slate-50">
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm">
          <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-9 md:w-10 lg:w-11 xl:w-12 h-9 md:h-10 lg:h-11 xl:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl">D</span>
                </div>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-docliq-text tracking-tight">Docliq</span>
              </div>
              <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-lg md:rounded-xl h-10 md:h-11 lg:h-12 px-4 md:px-5 lg:px-6 font-semibold shadow-lg text-sm md:text-base lg:text-lg">
                  <span className="hidden md:inline">Essayer</span>
                  <span className="md:hidden">Démo</span>
                </Button>
              </DemoPopup>
            </div>
          </div>
        </nav>

        <main>
          <section className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30">
            <div className="max-w-[1600px] mx-auto text-center">
              <div className="space-y-6 md:space-y-8">
                <Badge className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-docliq-blue border border-docliq-blue/20 rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-lg text-sm md:text-base">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">{patientCount}+ médecins généralistes</span>
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight px-4 md:px-0">
                  Logiciel pour médecin généraliste au Maroc
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise">Moderne et complet.</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4A4A4A] leading-relaxed font-normal max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
                  La solution tout-en-un pour gérer efficacement votre cabinet de médecine générale.
                </p>

                <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                  <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-bold shadow-xl w-full max-w-md">
                    <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                    Essayer gratuitement
                  </Button>
                </DemoPopup>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-6 md:mb-8">
                  Logiciel complet pour médecins généralistes au Maroc
                </h2>
                
                <div className="space-y-6 text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  <p>
                    <strong>Docliq</strong> est le logiciel de gestion médicale le plus utilisé par les médecins généralistes au Maroc. Notre solution cloud vous permet de gérer l'intégralité de votre cabinet médical depuis une interface moderne, intuitive et 100% sécurisée.
                  </p>

                  <p>
                    En tant que médecin généraliste, vous traitez une grande variété de pathologies et gérez un flux important de patients. Docliq simplifie votre quotidien avec un agenda intelligent qui optimise automatiquement votre planning, des rappels SMS pour réduire les absences, et une prise de rendez-vous en ligne 24/7 pour vos patients.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">
                    Fonctionnalités essentielles pour médecins généralistes
                  </h3>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Dossiers patients complets</strong> : Antécédents, allergies, traitements en cours, historique complet des consultations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Prescriptions électroniques</strong> : Génération rapide d'ordonnances avec base de données médicaments intégrée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Certificats médicaux</strong> : Templates personnalisables pour certificats, arrêts de travail, attestations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Suivi maladies chroniques</strong> : Alertes et rappels pour le suivi des patients diabétiques, hypertendus, etc.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Facturation et comptabilité</strong> : Gestion CNSS, mutuelles, paiements, avec reporting financier détaillé</span>
                    </li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">
                    Pourquoi 1850+ médecins généralistes choisissent Docliq
                  </h3>

                  <p>
                    Docliq a été conçu en collaboration avec des médecins généralistes marocains pour répondre précisément à vos besoins quotidiens. Interface en français, support téléphonique local, formation complète incluse, et conformité totale avec les réglementations marocaines.
                  </p>

                  <p>
                    Que vous exerciez en cabinet individuel ou en groupe, en ville ou en zone rurale, Docliq s'adapte à votre pratique. Accès depuis votre ordinateur, tablette ou smartphone. Vos données sont sauvegardées en temps réel dans le cloud sécurisé avec backup automatique quotidien.
                  </p>
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-slate-200">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-lg w-full md:w-auto">
                      Essayer Docliq gratuitement - 7 jours
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DemoPopup>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

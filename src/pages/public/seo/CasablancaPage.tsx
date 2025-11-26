import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DemoPopup } from '@/components/ui/demo-popup';
import { CheckCircle, ArrowRight, MapPin, Play, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function CasablancaPage() {
  const navigate = useNavigate();
  const handleDashboardDemo = useCallback(() => navigate('/dashboard'), [navigate]);
  const handleBookingDemo = useCallback(() => navigate('/booking-wizard'), [navigate]);

  return (
    <>
      <Helmet>
        <title>Logiciel Médical Casablanca | Gestion Cabinet Numérique - Docliq</title>
        <meta name="description" content="Logiciel médical N°1 à Casablanca. Gestion cabinet, agenda intelligent, téléconsultation. 500+ cabinets à Casablanca utilisent Docliq. Essai gratuit 7 jours." />
        <meta name="keywords" content="logiciel médical casablanca, gestion cabinet casablanca, agenda médical casablanca, médecin casablanca" />
        <link rel="canonical" href="https://docliq.ma/logiciel-medical-casablanca" />
        <meta property="og:title" content="Logiciel Médical Casablanca | Gestion Cabinet - Docliq" />
        <meta property="og:description" content="Solution complète pour cabinets médicaux à Casablanca. Agenda, dossiers patients, facturation." />
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
                <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white rounded-lg md:rounded-xl h-10 md:h-11 lg:h-12 px-4 md:px-5 lg:px-6 font-semibold shadow-lg text-sm md:text-base lg:text-lg">Démo</Button>
              </DemoPopup>
            </div>
          </div>
        </nav>

        <main>
          <section className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30">
            <div className="max-w-[1600px] mx-auto text-center">
              <div className="space-y-6 md:space-y-8">
                <Badge className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-docliq-blue border border-docliq-blue/20 rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-lg text-sm md:text-base">
                  <MapPin className="w-4 h-4" /><span className="font-semibold">500+ cabinets à Casablanca</span>
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight px-4 md:px-0">
                  Logiciel médical N°1 à Casablanca
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise">Solution complète pour cabinets.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4A4A4A] leading-relaxed font-normal max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
                  Gestion cabinet, agenda intelligent, dossiers patients, facturation CNSS. La solution préférée des médecins casablancais.
                </p>
                <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                  <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-bold shadow-xl w-full max-w-md">
                    <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />Essayer gratuitement
                  </Button>
                </DemoPopup>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-6 md:mb-8">
                  Pourquoi les médecins de Casablanca choisissent Docliq
                </h2>
                <div className="space-y-6 text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  <p><strong>Docliq</strong> est le logiciel médical le plus utilisé à Casablanca avec plus de 500 cabinets médicaux actifs. De Maarif à l'Oasis, d'Anfa à Sidi Maarouf, les médecins casablancais font confiance à Docliq pour digitaliser leur pratique médicale et améliorer l'expérience de leurs patients.</p>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Solution adaptée aux cabinets de Casablanca</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Agenda intelligent</strong> : Optimisation automatique des rendez-vous pour cabinets à forte affluence</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Gestion multi-praticiens</strong> : Parfait pour polycliniques et cabinets de groupe</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Facturation CNSS</strong> : Conforme aux normes marocaines et assurances locales</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Support local</strong> : Équipe basée à Casablanca, intervention rapide</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Formation sur place</strong> : Installation et formation dans votre cabinet à Casablanca</span></li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Quartiers desservis à Casablanca</h3>
                  <p>Docliq accompagne les cabinets médicaux dans tous les quartiers de Casablanca : <strong>Maarif, Anfa, Ain Diab, Gauthier, Bourgogne, Val Fleuri, Oasis, Californie, Sidi Maarouf, Les Hôpitaux, Ain Sebaa</strong> et tous les autres quartiers de la métropole.</p>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Toutes spécialités médicales</h3>
                  <p>Notre solution s'adapte à toutes les spécialités : médecins généralistes, dentistes, cardiologues, dermatologues, pédiatres, ophtalmologues, gynécologues, psychiatres, kinésithérapeutes, ORL, radiologues et toutes autres spécialités médicales pratiquées à Casablanca.</p>

                  <div className="bg-docliq-neutral/30 rounded-lg p-6 mt-8">
                    <div className="flex items-start gap-4">
                      <Users className="w-8 h-8 text-docliq-blue shrink-0" />
                      <div>
                        <h4 className="font-bold text-docliq-text mb-2">Rejoignez la communauté médicale casablancaise</h4>
                        <p className="text-[#4A4A4A]">Plus de <strong>500 médecins à Casablanca</strong> utilisent Docliq quotidiennement. Installation rapide, formation complète, support technique local. Essai gratuit 7 jours sans engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 md:mt-10 pt-8 border-t border-slate-200">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-lg w-full md:w-auto">
                      Demander une démo à Casablanca<ArrowRight className="ml-2 h-5 w-5" />
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

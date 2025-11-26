import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DemoPopup } from '@/components/ui/demo-popup';
import { CheckCircle, ArrowRight, MapPin, Play, Anchor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function TangerPage() {
  const navigate = useNavigate();
  const handleDashboardDemo = useCallback(() => navigate('/dashboard'), [navigate]);
  const handleBookingDemo = useCallback(() => navigate('/booking-wizard'), [navigate]);

  return (
    <>
      <Helmet>
        <title>Logiciel Médical Tanger | Gestion Cabinet Digitale - Docliq</title>
        <meta name="description" content="Logiciel médical cloud à Tanger. Solution complète pour cabinets médicaux, cliniques et centres de santé. 200+ établissements à Tanger. Essai gratuit 7 jours." />
        <meta name="keywords" content="logiciel médical tanger, gestion cabinet tanger, agenda médical tanger, médecin tanger" />
        <link rel="canonical" href="https://docliq.ma/logiciel-medical-tanger" />
        <meta property="og:title" content="Logiciel Médical Tanger | Solution Cloud - Docliq" />
        <meta property="og:description" content="Solution digitale complète pour professionnels de santé à Tanger et région Nord." />
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
                  <MapPin className="w-4 h-4" /><span className="font-semibold">200+ établissements à Tanger</span>
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight px-4 md:px-0">
                  Logiciel médical cloud Tanger
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise">Porte du Nord digitale.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4A4A4A] leading-relaxed font-normal max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
                  Solution cloud complète pour cabinets médicaux, cliniques et centres de santé à Tanger et région Tanger-Tétouan-Al Hoceïma.
                </p>
                <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                  <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-bold shadow-xl w-full max-w-md">
                    <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />Transformer mon cabinet
                  </Button>
                </DemoPopup>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-6 md:mb-8">
                  Solution santé digitale pour Tanger et le Nord
                </h2>
                <div className="space-y-6 text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  <p><strong>Docliq</strong> est le partenaire digital de plus de 200 établissements de santé à Tanger. Ville dynamique et porte d'entrée du Nord, Tanger voit ses professionnels de santé adopter massivement les solutions cloud pour moderniser leur pratique et répondre aux attentes d'une patientèle locale et internationale exigeante.</p>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Fonctionnalités pour cabinets de Tanger</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Agenda en ligne</strong> : Réservation 24/7 pour patients marocains et européens</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Interface multilingue</strong> : Français, arabe, anglais, espagnol pour patientèle internationale</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Facturation multi-devises</strong> : Gestion MAD et devises étrangères</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Cloud sécurisé</strong> : Accès depuis Tanger, Europe ou partout dans le monde</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" /><span><strong>Support régional</strong> : Équipe dédiée à la région Tanger-Tétouan</span></li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Zones couvertes à Tanger</h3>
                  <p>Docliq accompagne les cabinets dans tous les quartiers de Tanger : <strong>Centre-ville, Boukhalef, Malabata, Iberya, Tanja Balia, California, Médina, Route de Tétouan, Route de Rabat, Zona Franca</strong> et toute la région du Nord incluant Tétouan et Al Hoceïma.</p>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">Spécialités médicales à Tanger</h3>
                  <p>Notre solution s'adapte à toutes les spécialités : médecine générale, médecine interne, cardiologie, dermatologie, pédiatrie, gynécologie-obstétrique, ophtalmologie, ORL, chirurgie générale, médecine esthétique, dentisterie, kinésithérapie, radiologie et toutes autres spécialités pratiquées dans la région.</p>

                  <div className="bg-docliq-neutral/30 rounded-lg p-6 mt-8">
                    <div className="flex items-start gap-4">
                      <Anchor className="w-8 h-8 text-docliq-blue shrink-0" />
                      <div>
                        <h4 className="font-bold text-docliq-text mb-2">Partenaire des professionnels de santé tangérois</h4>
                        <p className="text-[#4A4A4A]">Plus de <strong>200 établissements à Tanger</strong> ont choisi Docliq pour leur transformation digitale. Solution cloud moderne, accessible partout, multilingue. Parfait pour cabinets avec clientèle mixte marocaine et internationale. Installation rapide, formation complète, support dédié. Essai gratuit 7 jours.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 md:mt-10 pt-8 border-t border-slate-200">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button className="bg-gradient-to-r from-docliq-blue to-docliq-purple text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-lg w-full md:w-auto">
                      Demander une démo à Tanger<ArrowRight className="ml-2 h-5 w-5" />
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

import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { DemoPopup } from '@/components/ui/demo-popup';
import { 
  Calendar,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Quote,
  Phone,
  BarChart,
  BarChart3,
  X,
  Globe,
  Star,
  Play,
  Eye,
  Stethoscope,
  FileText,
  MapPin,
  Zap,
  Heart,
  Clock
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DentistePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [patientCount] = useState(850);
  const [isInView, setIsInView] = useState<{[key: string]: boolean}>({});
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  // Auto-advance demo steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleDashboardDemo = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  const handleBookingDemo = useCallback(() => {
    navigate('/booking-wizard');
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Logiciel pour Dentiste au Maroc | Gestion Cabinet Dentaire - Docliq</title>
        <meta name="description" content="Logiciel médical spécialisé pour dentistes au Maroc. Gestion complète de votre cabinet dentaire : agenda intelligent, dossiers patients, facturation. Essai gratuit 7 jours." />
        <meta name="keywords" content="logiciel dentiste maroc, logiciel cabinet dentaire, gestion cabinet dentaire maroc, agenda dentiste, dossiers patients dentaire" />
        <link rel="canonical" href="https://docliq.ma/logiciel-dentiste-maroc" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-docliq-neutral via-white to-slate-50">
        {/* Navigation - Same as main landing */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm" role="navigation">
          <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-9 md:w-10 lg:w-11 xl:w-12 h-9 md:h-10 lg:h-11 xl:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl">D</span>
                </div>
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-docliq-text tracking-tight">
                  Docliq
                </span>
              </div>
              
              <div className="flex items-center space-x-2 md:space-x-3">
                <Button 
                  variant="ghost"
                  className="hidden lg:flex text-docliq-text hover:text-docliq-blue hover:bg-white/60 h-10 lg:h-11 xl:h-12 px-4 lg:px-5 xl:px-6 font-medium rounded-xl transition-all duration-300 text-base xl:text-lg"
                >
                  Connexion
                </Button>
                <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                  <Button 
                    className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-lg md:rounded-xl h-10 md:h-11 lg:h-12 px-4 md:px-5 lg:px-6 xl:px-7 font-semibold shadow-lg hover:shadow-docliq-blue/25 transition-all duration-300 text-sm md:text-base lg:text-lg"
                  >
                    <span className="hidden md:inline">Essayer</span>
                    <span className="md:hidden">Démo</span>
                  </Button>
                </DemoPopup>
              </div>
            </div>
          </div>
        </nav>

        <main role="main">
          {/* Hero Section - Dentist Specific */}
          <section 
            id="hero" 
            ref={el => sectionRefs.current.hero = el}
            className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30"
          >
            <div className="max-w-[1600px] mx-auto text-center">
              <div className={`space-y-6 md:space-y-8 ${isInView.hero ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
                  <Badge className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-docliq-blue border border-docliq-blue/20 rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-lg text-sm md:text-base" role="status">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-docliq-success rounded-full animate-pulse" />
                    <span className="font-semibold">Solution pour dentistes</span>
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm md:text-base text-docliq-text bg-white/80 backdrop-blur-md rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-md">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">{patientCount}+ dentistes utilisent Docliq</span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-6xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight px-4 md:px-0">
                    Logiciel pour cabinet dentaire au Maroc
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise animate-gradient-x">
                      Simple et efficace.
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4A4A4A] leading-relaxed font-normal max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
                    Gérez votre cabinet dentaire avec un logiciel moderne adapté aux dentistes marocains.
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div className="w-full max-w-md mx-auto">
                    <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                      <Button 
                        className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-bold shadow-xl hover:shadow-docliq-blue/25 focus:outline-none focus:ring-4 focus:ring-docliq-blue/30 focus:ring-offset-2 hover-lift w-full"
                      >
                        <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                        <span className="hidden md:inline">Essayer la démo gratuite</span>
                        <span className="md:hidden">Essayer la démo</span>
                        <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3" />
                      </Button>
                    </DemoPopup>
                  </div>

                  {/* Dentist-specific benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-8 md:pt-12 lg:pt-16 max-w-6xl mx-auto px-4">
                    <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors shrink-0">
                          <Calendar className="w-5 md:w-6 lg:w-7 h-5 md:w-6 lg:h-7 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">-60%</div>
                          <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">rendez-vous annulés</div>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors shrink-0">
                          <FileText className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">100%</div>
                          <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">dossiers numériques</div>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                          <BarChart3 className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">+35%</div>
                          <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">patients par mois</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dentist-Specific Features Section */}
          <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-white via-slate-50/20 to-white">
            <div className="max-w-[1600px] mx-auto">
              <div className="text-center mb-10 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-docliq-text mb-4 md:mb-6 px-4">
                  Fonctionnalités adaptées aux
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise">
                    cabinets dentaires
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-[#4A4A4A] max-w-4xl mx-auto px-4 md:px-6">
                  Solution complète pour dentistes : rendez-vous, dossiers patients, devis et facturation.
                </p>
              </div>

              {/* Feature cards would go here - same structure as main landing */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {/* Feature cards */}
              </div>
            </div>
          </section>

          {/* SEO Content Section - Dentist Specific */}
          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-6 md:mb-8">
                  Pourquoi choisir Docliq pour votre cabinet dentaire ?
                </h2>
                
                <div className="space-y-6 text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  <p>
                    <strong>Docliq</strong> est le logiciel de gestion de cabinet dentaire le plus complet au Maroc. Conçu spécifiquement pour répondre aux besoins des dentistes, notre solution vous permet de gérer l'ensemble de votre pratique depuis une interface unique et intuitive.
                  </p>

                  <p>
                    Que vous soyez dentiste généraliste, orthodontiste, ou spécialisé en implantologie, Docliq s'adapte à votre spécialité. Gérez vos rendez-vous, vos dossiers patients avec schémas dentaires, vos devis et votre facturation en quelques clics.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">
                    Fonctionnalités essentielles pour dentistes
                  </h3>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Agenda intelligent</strong> : Planning optimisé avec gestion des urgences dentaires et rappels SMS automatiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Dossiers patients dentaires</strong> : Historique complet des soins, radiographies, et plans de traitement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Devis et facturation</strong> : Génération automatique de devis dentaires conformes aux normes marocaines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-docliq-success shrink-0 mt-1" />
                      <span><strong>Statistiques de cabinet</strong> : Suivez vos performances, revenus et taux de remplissage en temps réel</span>
                    </li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-bold text-docliq-text mt-8 mb-4">
                    Adapté à tous les cabinets dentaires au Maroc
                  </h3>

                  <p>
                    Que votre cabinet soit situé à Casablanca, Rabat, Marrakech ou dans toute autre ville du Maroc, Docliq fonctionne 100% en ligne avec un accès sécurisé depuis n'importe quel appareil. Vos données sont sauvegardées automatiquement et protégées selon les normes RGPD.
                  </p>

                  <p>
                    Rejoignez plus de <strong>850 dentistes marocains</strong> qui ont déjà transformé leur pratique avec Docliq. Essai gratuit de 7 jours, sans engagement, avec formation incluse.
                  </p>
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-slate-200">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-lg w-full md:w-auto"
                    >
                      Essayer Docliq gratuitement
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

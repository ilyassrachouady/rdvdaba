import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { DemoPopup } from '@/components/ui/demo-popup';
import FooterSEO from '@/components/FooterSEO';
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
  User,
  CreditCard,
  Settings,
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

export default function DocliqLandingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [patientCount] = useState(1247);
  const [revenueCount] = useState(89750);
  const [isInView, setIsInView] = useState<{[key: string]: boolean}>({});
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  // Auto-advance demo steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations (performance optimized)
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

  // Direct navigation handlers
  const handleDashboardDemo = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  const handleBookingDemo = useCallback(() => {
    navigate('/booking-wizard');
  }, [navigate]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-docliq-neutral via-white to-slate-50">
      {/* Responsive Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm" role="navigation" aria-label="Navigation principale">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            {/* Logo - responsive sizing */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-9 md:w-10 lg:w-11 xl:w-12 h-9 md:h-10 lg:h-11 xl:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-lg" aria-hidden="true">
                <span className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl">D</span>
              </div>
              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-docliq-text tracking-tight">
                Docliq
              </span>
            </div>
            
            {/* Navigation Links - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a 
                href="#platform" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-3 xl:px-4 2xl:px-5 py-2.5 rounded-xl text-base xl:text-lg"
                aria-label="Découvrir la plateforme Docliq"
              >
                Plateforme
              </a>
              <a 
                href="#demo" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-3 xl:px-4 2xl:px-5 py-2.5 rounded-xl text-base xl:text-lg"
                aria-label="Voir la démo interactive"
              >
                Démo
              </a>
              <a 
                href="#pricing" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-3 xl:px-4 2xl:px-5 py-2.5 rounded-xl text-base xl:text-lg"
                aria-label="Consulter nos tarifs"
              >
                Tarifs
              </a>
            </div>

            {/* CTA Buttons - responsive layout */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <Button 
                variant="ghost"
                className="hidden lg:flex text-docliq-text hover:text-docliq-blue hover:bg-white/60 h-10 lg:h-11 xl:h-12 px-4 lg:px-5 xl:px-6 font-medium rounded-xl transition-all duration-300 text-base xl:text-lg"
                aria-label="Se connecter à votre compte"
              >
                Connexion
              </Button>
              <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                <Button 
                  className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-lg md:rounded-xl h-10 md:h-11 lg:h-12 px-4 md:px-5 lg:px-6 xl:px-7 font-semibold shadow-lg hover:shadow-docliq-blue/25 transition-all duration-300 text-sm md:text-base lg:text-lg"
                  aria-label="Commencer l'essai gratuit de Docliq"
                >
                  <span className="hidden md:inline">Essayer</span>
                  <span className="md:hidden">Démo</span>
                </Button>
              </DemoPopup>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main role="main">

        {/* Responsive Hero Section */}
        <section 
          id="hero" 
          ref={el => sectionRefs.current.hero = el}
          className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 xl:pb-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30"
          aria-labelledby="hero-title"
        >
          <div className="max-w-[1600px] mx-auto text-center">
            {/* Hero Content */}
            <div className={`space-y-6 sm:space-y-8 ${isInView.hero ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
              
              {/* Status badges - responsive layout */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
                <Badge className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-docliq-blue border border-docliq-blue/20 rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-lg text-sm md:text-base" role="status">
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-docliq-success rounded-full animate-pulse" aria-hidden="true" />
                  <span className="font-semibold">Plateforme active</span>
                </Badge>
                <div className="flex items-center space-x-2 text-sm md:text-base text-docliq-text bg-white/80 backdrop-blur-md rounded-full px-4 md:px-5 lg:px-6 py-2 lg:py-2.5 shadow-md">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span className="font-semibold">{patientCount.toLocaleString()}+ médecins utilisent Docliq</span>
                </div>
              </div>

              {/* Hero title and description - responsive typography */}
              <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-6xl mx-auto">
                <h1 
                  id="hero-title" 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight px-4 md:px-0"
                >
                  Un cabinet plus efficace,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise animate-gradient-x">
                    en un clic.
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4A4A4A] leading-relaxed font-normal max-w-4xl mx-auto px-4 md:px-6 lg:px-0">
                  La solution complète pour votre cabinet médical.
                </p>
              </div>

              {/* Social proof and CTA - mobile optimized */}
              <div className="space-y-6 md:space-y-8">
                {/* Social proof avatars - responsive layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex -space-x-2 md:-space-x-3" role="img" aria-label="Avatars de médecins utilisateurs">
                      {[
                        { bg: 'bg-gradient-to-br from-docliq-blue to-blue-600', initials: 'AM', name: 'Dr. Amina' },
                        { bg: 'bg-gradient-to-br from-docliq-turquoise to-emerald-600', initials: 'FZ', name: 'Dr. Fatima' },
                        { bg: 'bg-gradient-to-br from-docliq-purple to-purple-600', initials: 'HS', name: 'Dr. Hassan' },
                        { bg: 'bg-gradient-to-br from-docliq-orange to-orange-600', initials: 'LB', name: 'Dr. Leila' },
                        { bg: 'bg-gradient-to-br from-slate-700 to-slate-900', initials: '+', name: 'Plus de médecins' }
                      ].map((avatar, i) => (
                        <div 
                          key={i} 
                          className={`w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full ${avatar.bg} border-2 md:border-3 border-white flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer`}
                          aria-label={avatar.name}
                        >
                          {avatar.initials}
                        </div>
                      ))}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-sm md:text-base lg:text-lg text-[#1C1C1C] font-bold">500+ professionnels de santé</div>
                      <div className="flex items-center justify-center md:justify-start space-x-1" role="img" aria-label="Note de 4,9 sur 5 étoiles">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 md:w-4 h-3 md:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                        <span className="text-sm md:text-base text-[#4A4A4A] ml-2 font-semibold">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Primary CTA - responsive sizing */}
                <div role="group" aria-label="Actions principales" className="w-full max-w-md mx-auto">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button 
                      className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-bold shadow-xl hover:shadow-docliq-blue/25 focus:outline-none focus:ring-4 focus:ring-docliq-blue/30 focus:ring-offset-2 hover-lift w-full"
                      aria-label="Démarrer la démonstration gratuite de Docliq"
                    >
                      <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" aria-hidden="true" />
                      <span className="hidden md:inline">Essayer la démo gratuite</span>
                      <span className="md:hidden">Essayer la démo</span>
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 md:ml-3" aria-hidden="true" />
                    </Button>
                  </DemoPopup>
                </div>

                {/* Professional benefit metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-8 md:pt-12 lg:pt-16 max-w-6xl mx-auto px-4" role="region" aria-label="Bénéfices de performance">
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors shrink-0">
                        <Phone className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">-70%</div>
                        <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">appels non nécessaires</div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors shrink-0">
                        <Calendar className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">+90%</div>
                        <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">rendez-vous confirmés</div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-lg lg:rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                        <BarChart3 className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text mb-1">40 sec</div>
                        <div className="text-sm md:text-base lg:text-lg font-medium text-[#4A4A4A] leading-snug">temps moyen / RDV</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Platform Showcase */}
        <section 
          id="platform-showcase"
          ref={el => sectionRefs.current.platformShowcase = el}
          className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30"
        >
          {/* Introduction badge - responsive */}
          <div className="relative z-30 pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-4 md:pb-6 lg:pb-8 text-center px-4">
            <Badge className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-xl text-docliq-blue border border-docliq-blue/20 rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-lg text-sm">
              <Eye className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="font-semibold">Interface en action</span>
            </Badge>
          </div>

          {/* Mobile feature cards - visible on mobile only */}
          <div className="block lg:hidden relative z-30 px-4 sm:px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/40">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-docliq-blue to-blue-600 rounded-xl flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-docliq-text">Agenda Intelligent</h4>
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-2 h-2 bg-docliq-success rounded-full" />
                      <span className="text-docliq-success font-medium">95% remplissage</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/40">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-docliq-purple to-purple-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-docliq-text">Analytics</h4>
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-2 h-2 bg-docliq-purple rounded-full" />
                      <span className="text-docliq-purple font-medium">40+ métriques</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop floating feature indicators */}
          <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
            {/* Left feature - desktop only */}
            <div className="absolute top-1/2 left-8 xl:left-16 -translate-y-1/2">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 max-w-sm group hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 animate-[slideInLeft_1.2s_ease-out_1.5s_both] hover:scale-105 pointer-events-auto">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-docliq-blue via-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-docliq-text text-xl mb-2">Agenda Intelligent</h3>
                    <p className="text-base text-[#4A4A4A] leading-relaxed">
                      Optimisation automatique avec rappels SMS. Réduction des absences de 90%.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-3 h-3 bg-docliq-success rounded-full animate-pulse shadow-sm" />
                  <span className="text-docliq-success font-bold">95% taux de remplissage</span>
                </div>
              </div>
            </div>

            {/* Right features - desktop only */}
            <div className="absolute top-1/3 right-8 xl:right-16">
              <div className="space-y-8">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 max-w-sm group hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 animate-[slideInRight_1.2s_ease-out_1.8s_both] hover:scale-105 pointer-events-auto">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-docliq-purple via-purple-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-docliq-text text-xl mb-2">Analytics Temps Réel</h3>
                      <p className="text-base text-[#4A4A4A] leading-relaxed">
                        Insights sur revenus, patients et performance du cabinet.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-3 h-3 bg-docliq-purple rounded-full animate-pulse shadow-sm" />
                    <span className="text-docliq-purple font-bold">40+ métriques avancées</span>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 max-w-sm group hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 animate-[slideInRight_1.2s_ease-out_2.1s_both] hover:scale-105 pointer-events-auto">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-docliq-turquoise via-emerald-500 to-emerald-700 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-docliq-text text-xl mb-2">Support Maroc</h3>
                      <p className="text-base text-[#4A4A4A] leading-relaxed">
                        Équipe francophone locale. Formation et assistance 24/7.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-3 h-3 bg-docliq-turquoise rounded-full animate-pulse shadow-sm" />
                    <span className="text-docliq-turquoise font-bold">Réponse &lt; 2h garantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ContainerScroll animation - responsive spacing */}
          <div className="relative z-10 px-4 md:px-6 lg:px-8 xl:px-12">
            <ContainerScroll
              titleComponent={<div></div>}
            >
              <img
                src="/ocliqsolution.png"
                alt="Interface complète de la plateforme Docliq - Tableau de bord médical professionnel avec gestion des rendez-vous, dossiers patients et analytics en temps réel"
                width={1600}
                height={900}
                className="mx-auto rounded-xl md:rounded-2xl lg:rounded-3xl object-cover h-full object-left-top w-full shadow-xl md:shadow-2xl max-w-[1400px]"
                loading="eager"
              />
            </ContainerScroll>
          </div>
        </section>

        {/* Responsive Platform Features */}
        <section 
          id="platform" 
          ref={el => sectionRefs.current.platform = el}
          className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-white via-slate-50/20 to-white"
          aria-labelledby="platform-title"
        >
          <div className="max-w-[1600px] mx-auto">
            {/* Responsive Section header */}
            <div className={`text-center mb-8 md:mb-10 lg:mb-12 xl:mb-16 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
              <Badge className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-xl text-docliq-blue border border-docliq-blue/20 rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 shadow-lg mb-4 md:mb-6 text-sm md:text-base">
                <Stethoscope className="w-4 h-4" />
                <span className="font-semibold">Gestion de cabinet médical</span>
              </Badge>
              
              <h2 id="platform-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-docliq-text mb-3 md:mb-4 lg:mb-6 leading-tight px-4">
                Agenda médical intelligent
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise animate-gradient-x">
                  pour médecins
                </span>
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A4A4A] max-w-5xl mx-auto leading-relaxed px-4 md:px-6 lg:px-8 xl:px-0 mb-4">
                Plateforme complète avec prise de rendez-vous ultra-rapide, dossiers patients sécurisés et analytics avancés.
                <br className="hidden md:block" />
                <span className="text-[#1C1C1C] font-semibold">Optimisé pour tous les cabinets médicaux au Maroc.</span>
              </p>
            </div>

            {/* Responsive Feature cards */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
              {[
                {
                  icon: Calendar,
                  title: "Agenda Intelligent",
                  subtitle: "Rendez-vous en 40 secondes",
                  description: "Optimisation automatique avec rappels SMS et gestion des créneaux libres.",
                  metrics: "95%",
                  metricLabel: "taux de remplissage",
                  color: "from-docliq-blue to-blue-600",
                  accentColor: "bg-docliq-blue",
                  benefits: ["Réduction no-shows 90%", "SMS automatiques", "Sync calendrier"]
                },
                {
                  icon: FileText,
                  title: "Dossiers Sécurisés",
                  subtitle: "Accès instantané",
                  description: "Stockage RGPD avec recherche ultra-rapide et historique médical complet.",
                  metrics: "0.3s",
                  metricLabel: "temps d'accès",
                  color: "from-docliq-turquoise to-emerald-600",
                  accentColor: "bg-docliq-turquoise",
                  benefits: ["Recherche instantanée", "Sécurité maximale", "Backup automatique"]
                },
                {
                  icon: BarChart3,
                  title: "Analytics Avancés",
                  subtitle: "Insights temps réel",
                  description: "Tableaux de bord intelligents pour optimiser la rentabilité de votre cabinet.",
                  metrics: "40+",
                  metricLabel: "métriques détaillées",
                  color: "from-docliq-purple to-purple-600",
                  accentColor: "bg-docliq-purple",
                  benefits: ["ROI en temps réel", "Prédictions IA", "Rapports auto"]
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <article 
                    key={index}
                    className="group relative bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative p-5 md:p-6 lg:p-8 xl:p-10">
                      {/* Header with icon and metric - responsive */}
                      <div className="flex items-start justify-between mb-5 md:mb-6 lg:mb-8">
                        <div className={`w-14 md:w-16 lg:w-18 xl:w-20 h-14 md:h-16 lg:h-18 xl:h-20 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0`}>
                          <IconComponent className="w-7 md:w-8 lg:w-9 xl:w-10 h-7 md:h-8 lg:h-9 xl:h-10 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-text">{feature.metrics}</div>
                          <div className="text-xs md:text-sm lg:text-base text-[#6A6A6A] font-medium whitespace-nowrap">{feature.metricLabel}</div>
                        </div>
                      </div>

                      {/* Content - responsive */}
                      <div className="space-y-3 md:space-y-4 lg:space-y-5">
                        <div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-docliq-text mb-2 group-hover:text-docliq-blue transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm md:text-base lg:text-lg font-semibold text-docliq-blue">{feature.subtitle}</p>
                        </div>
                        
                        <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Benefits with responsive styling */}
                        <div className="grid grid-cols-1 gap-2 md:gap-3 pt-2 md:pt-3">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                              <div className={`w-5 md:w-6 h-5 md:h-6 rounded-full ${feature.accentColor} flex items-center justify-center shadow-sm shrink-0`}>
                                <CheckCircle className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" />
                              </div>
                              <span className="text-[#4A4A4A] font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover action indicator - desktop only */}
                      <div className="absolute bottom-4 lg:bottom-5 right-4 lg:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                        <div className={`w-8 lg:w-10 h-8 lg:h-10 rounded-full ${feature.accentColor} flex items-center justify-center shadow-lg`}>
                          <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Responsive Trust indicators */}
            <div className={`mt-8 md:mt-10 lg:mt-12 xl:mt-16 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-400`} role="region" aria-label="Garanties et certifications">
              <div className="bg-white/60 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/40 shadow-xl p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                  {[
                    { icon: Shield, label: "Conformité RGPD", value: "Certifié", color: "text-docliq-success", bgColor: "bg-docliq-success/10" },
                    { icon: Globe, label: "Disponibilité", value: "99.9%", color: "text-docliq-blue", bgColor: "bg-docliq-blue/10" },
                    { icon: MapPin, label: "Support Maroc", value: "24/7", color: "text-docliq-orange", bgColor: "bg-docliq-orange/10" },
                    { icon: Zap, label: "Temps de réponse", value: "< 2s", color: "text-docliq-purple", bgColor: "bg-docliq-purple/10" }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className={`w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 ${stat.bgColor} rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 ${stat.color}`} />
                        </div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-docliq-text mb-1">{stat.value}</div>
                        <div className="text-xs md:text-sm lg:text-base text-[#6A6A6A] font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Interactive Demo Section */}
      <section 
        id="demo" 
        ref={el => sectionRefs.current.demo = el}
        className="py-12 md:py-16 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20 relative overflow-hidden"
        aria-labelledby="demo-title"
      >
        <div className="relative max-w-[1600px] mx-auto">
          <div className={`text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24 ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center shadow-lg" aria-hidden="true">
                <Eye className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" />
              </div>
              <Badge className="bg-docliq-blue/10 text-docliq-blue border border-docliq-blue/20 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 text-sm md:text-base">
                Démo interactive
              </Badge>
            </div>
            <h2 id="demo-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-docliq-text mb-4 md:mb-6 lg:mb-8 px-4 leading-tight">
              Voyez comme c'est simple pour 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> vos patients</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A4A4A] max-w-4xl mx-auto leading-relaxed px-4 md:px-6">
              En 3 clics, vos patients prennent rendez-vous dans votre cabinet médical. Interface intuitive, 
              rappels automatiques, confirmation SMS. Zéro friction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center">
            {/* Interactive Steps */}
            <div className={`space-y-6 md:space-y-8 order-2 lg:order-1 ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    step: 1,
                    title: "Choix du service",
                    description: "Le patient sélectionne le type de consultation",
                    details: "Consultation, urgence, contrôle... Interface claire avec tarifs affichés.",
                    active: currentStep === 0
                  },
                  {
                    step: 2,
                    title: "Date et créneau",
                    description: "Planning en temps réel avec disponibilités",
                    details: "Synchronisé avec votre agenda. Pas de double réservation possible.",
                    active: currentStep === 1
                  },
                  {
                    step: 3,
                    title: "Confirmation",
                    description: "Informations patient et validation",
                    details: "SMS et email de confirmation automatiques. Rappel 24h avant.",
                    active: currentStep === 2
                  }
                ].map((step, index) => (
                  <article 
                    key={index}
                    className={`relative p-5 md:p-6 lg:p-7 rounded-xl md:rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      step.active 
                        ? 'border-docliq-blue bg-gradient-to-r from-docliq-blue/5 to-docliq-purple/5 shadow-lg' 
                        : 'border-slate-200 bg-white hover:border-docliq-blue/30'
                    }`}
                    onClick={() => setCurrentStep(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Étape ${step.step}: ${step.title}`}
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div 
                        className={`w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl lg:text-2xl transition-all duration-300 shrink-0 ${
                          step.active 
                            ? 'bg-docliq-blue text-white shadow-lg' 
                            : 'bg-slate-100 text-docliq-text/70'
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-2 transition-colors ${
                          step.active ? 'text-docliq-blue' : 'text-docliq-text'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-[15px] md:text-base lg:text-lg text-[#4A4A4A] mb-2 md:mb-3 leading-relaxed">{step.description}</p>
                        <p className={`text-sm md:text-[15px] lg:text-base leading-relaxed transition-all duration-300 ${
                          step.active ? 'text-[#4A4A4A] opacity-100' : 'text-[#6A6A6A] opacity-0'
                        }`}>
                          {step.details}
                        </p>
                      </div>
                      {step.active && (
                        <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-docliq-blue rounded-full shrink-0" aria-hidden="true"></div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-8">
                <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                  <Button 
                    className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-docliq-blue focus:ring-offset-2 w-full md:w-auto"
                    aria-label="Essayer la démonstration complète"
                  >
                    <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" aria-hidden="true" />
                    Essayer la démo complète
                  </Button>
                </DemoPopup>
                <Button 
                  variant="outline"
                  className="border-2 border-docliq-blue/30 text-docliq-blue hover:bg-docliq-blue/5 hover:border-docliq-blue rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-docliq-blue focus:ring-offset-2 w-full md:w-auto"
                >
                  Programmer une présentation
                  <Calendar className="w-4 md:w-5 h-4 md:h-5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Dynamic Mobile Preview */}
            <div className={`relative order-1 lg:order-2 ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-500`}>
              <div className="relative mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[400px] h-[550px] md:h-[600px] lg:h-[650px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-docliq-text rounded-[3rem] p-2">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-docliq-text rounded-full"></div>
                    
                    <div className="pt-12 pb-8 px-6 h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-docliq-blue to-docliq-purple rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-docliq-text">Dr. Benali</div>
                            <div className="text-xs text-docliq-text/70">Dentiste</div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-docliq-text/70">Étape {currentStep + 1} sur 3</span>
                          <span className="text-sm text-docliq-blue font-medium">
                            {Math.round(((currentStep + 1) / 3) * 100)}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-docliq-blue to-docliq-purple rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Content based on current step */}
                      <div className="flex-1">
                        {currentStep === 0 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-docliq-text mb-4">Choisissez votre service</h3>
                            {[
                              { name: "Consultation", price: "300 MAD", time: "30 min" },
                              { name: "Détartrage", price: "200 MAD", time: "45 min" },
                              { name: "Urgence", price: "400 MAD", time: "60 min" }
                            ].map((service, i) => (
                              <div key={i} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                i === 0 ? 'border-docliq-blue bg-docliq-blue/5' : 'border-slate-200'
                              }`}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium text-docliq-text">{service.name}</div>
                                    <div className="text-sm text-docliq-text/70">{service.time}</div>
                                  </div>
                                  <div className="text-docliq-blue font-semibold">{service.price}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {currentStep === 1 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-docliq-text mb-4">Choisissez une date</h3>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {["Lun 15", "Mar 16", "Mer 17", "Jeu 18", "Ven 19", "Sam 20"].map((day, i) => (
                                <div key={i} className={`p-3 text-center text-xs border rounded-lg cursor-pointer transition-all ${
                                  i === 2 ? 'border-docliq-blue bg-docliq-blue/5 text-docliq-blue font-semibold' : 'border-slate-200 text-docliq-text/70'
                                }`}>
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-medium text-docliq-text">Créneaux disponibles</div>
                              {["09:00", "10:30", "14:00", "15:30"].map((time, i) => (
                                <div key={i} className={`p-3 border rounded-lg cursor-pointer text-center transition-all ${
                                  i === 1 ? 'border-docliq-blue bg-docliq-blue/5 text-docliq-blue font-semibold' : 'border-slate-200 text-docliq-text/70'
                                }`}>
                                  {time}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-docliq-text mb-4">Vos informations</h3>
                            <div className="space-y-3">
                              <div>
                                <label className="text-xs text-docliq-text/70 mb-1 block">Nom complet</label>
                                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                                  Amina Alami
                                </div>
                              </div>
                              <div>
                                <label className="text-xs text-docliq-text/70 mb-1 block">Téléphone</label>
                                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                                  +212 6XX XXX XXX
                                </div>
                              </div>
                              <div className="p-4 bg-docliq-success/10 border border-docliq-success/20 rounded-lg mt-4">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="w-5 h-5 text-docliq-success" />
                                  <div>
                                    <div className="text-sm font-medium text-docliq-text">Rendez-vous confirmé!</div>
                                    <div className="text-xs text-docliq-text/70 mt-1">SMS de rappel envoyé</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom CTA */}
                      <div className="pt-6">
                        <div className="w-full bg-gradient-to-r from-docliq-blue to-docliq-purple text-white p-4 rounded-xl text-center">
                          <div className="text-sm font-medium">
                            {currentStep === 0 && "Continuer"}
                            {currentStep === 1 && "Réserver ce créneau"}
                            {currentStep === 2 && "Rendez-vous confirmé ✓"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-docliq-orange/30 to-docliq-blue/30 rounded-2xl blur-xl" aria-hidden="true"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-docliq-turquoise/30 to-docliq-success/30 rounded-2xl blur-xl" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      {/* Premium Comparison Section */}
      <section 
        id="features" 
        ref={el => sectionRefs.current.features = el}
        className="py-12 md:py-16 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Compact Header */}
          <div className={`text-center mb-10 md:mb-12 lg:mb-16 ${isInView.features ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-100 to-blue-100 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full mb-5 md:mb-6 lg:mb-8">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-semibold text-xs md:text-sm lg:text-base uppercase tracking-wide">
                500+ cabinets transformés
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 md:mb-5 lg:mb-6 leading-tight px-4">
              Avant / 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple">Après Docliq</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#4A4A4A] max-w-4xl mx-auto leading-relaxed px-4 md:px-6">
              Voyez la différence dans votre quotidien.
            </p>
          </div>


          {/* Compact Timeline Comparison */}
          <div className={`mb-10 md:mb-12 lg:mb-16 xl:mb-20 ${isInView.features ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-400`}>
            
            {/* Compact Timeline */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              {/* Sans Docliq - Problems */}
              <div className="relative">
                <div className="absolute left-5 md:left-6 top-14 md:top-16 bottom-14 md:bottom-16 w-px bg-gradient-to-b from-red-300 to-red-500"></div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="w-11 md:w-12 lg:w-14 h-11 md:h-12 lg:h-14 rounded-xl lg:rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
                      <X className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-700">Votre journée AVANT</h4>
                      <p className="text-red-600 text-sm md:text-base lg:text-lg font-medium">Le stress du quotidien</p>
                    </div>
                  </div>

                  {[
                    { activity: "15+ appels manqués par jour", icon: Phone },
                    { activity: "Patients en colère au téléphone", icon: X },
                    { activity: "2h perdues en reprogrammation", icon: Clock },
                    { activity: "WhatsApp qui ne s'arrête jamais", icon: Phone },
                    { activity: "Agenda raturé illisible", icon: FileText },
                    { activity: "Rappels manuels jusqu'à 20h", icon: X }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="relative flex items-center gap-3 md:gap-4">
                        <div className="w-3 md:w-4 h-3 md:h-4 rounded-full z-10 bg-red-500 border-2 md:border-4 border-white shadow-lg shrink-0"></div>
                        <Card className="flex-1 p-3 md:p-4 lg:p-5 bg-white/80 backdrop-blur-sm border-red-200 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-3">
                            <div className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                              <IconComponent className="w-4 md:w-4.5 lg:w-5 h-4 md:h-4.5 lg:h-5 text-red-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm md:text-base lg:text-lg text-[#1C1C1C] font-medium leading-snug">{item.activity}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Summary */}
                  <div className="relative bg-red-50 p-5 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl border-2 border-red-200 mt-6 md:mt-8">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">Épuisement</div>
                      <p className="text-base md:text-lg lg:text-xl text-red-700 font-semibold">Chaque jour identique</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avec Docliq - Benefits */}
              <div className="relative">
                <div className="absolute left-5 md:left-6 top-14 md:top-16 bottom-14 md:bottom-16 w-px bg-gradient-to-b from-docliq-blue to-docliq-purple"></div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="w-11 md:w-12 lg:w-14 h-11 md:h-12 lg:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center animate-bounce shrink-0">
                      <CheckCircle className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-docliq-blue">Votre journée APRÈS</h4>
                      <p className="text-docliq-blue text-sm md:text-base lg:text-lg font-medium">Sérénité retrouvée</p>
                    </div>
                  </div>

                  {[
                    { activity: "RDV se prennent tout seuls", icon: BarChart, type: "auto" },
                    { activity: "Patients rappelés automatiquement", icon: CheckCircle, type: "auto" },
                    { activity: "Votre page web travaille pour vous", icon: Globe, type: "auto" },
                    { activity: "Vous voyez tout en un coup d'œil", icon: BarChart, type: "manual" },
                    { activity: "Planning parfaitement organisé", icon: Calendar, type: "auto" },
                    { activity: "4h de plus pour vos patients", icon: CheckCircle, type: "auto" }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="relative flex items-center gap-3 md:gap-4">
                        <div className={`w-3 md:w-4 h-3 md:h-4 rounded-full z-10 border-2 md:border-4 border-white shadow-lg shrink-0 ${
                          item.type === 'auto' ? 'bg-green-500' : 'bg-docliq-blue'
                        }`}></div>
                        <Card className="flex-1 p-3 md:p-4 lg:p-5 bg-white/90 backdrop-blur-sm border-docliq-blue/20 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-lg bg-docliq-blue/10 flex items-center justify-center shrink-0">
                              <IconComponent className="w-4 md:w-4.5 lg:w-5 h-4 md:h-4.5 lg:h-5 text-docliq-blue" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm md:text-base lg:text-lg text-[#1C1C1C] font-medium leading-snug">{item.activity}</p>
                            </div>
                            {item.type === 'auto' && (
                              <Badge variant="secondary" className="text-xs md:text-sm bg-green-50 text-green-700 border-green-200 px-2 py-1 animate-pulse shrink-0">
                                AUTO
                              </Badge>
                            )}
                          </div>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Summary */}
                  <div className="relative bg-gradient-to-r from-green-50 to-blue-50 p-5 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl border-2 border-docliq-blue/30 mt-6 md:mt-8 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-docliq-blue mb-2">Liberté totale</div>
                      <p className="text-base md:text-lg lg:text-xl text-docliq-blue font-semibold">Enfin du temps pour soigner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact CTA */}
            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16 bg-gradient-to-r from-docliq-blue/5 via-docliq-purple/5 to-green-100/20 rounded-xl lg:rounded-2xl p-6 md:p-8 lg:p-10 text-center border-2 border-docliq-blue/20">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-100 to-docliq-blue/10 px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-5">
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-bold text-xs md:text-sm uppercase tracking-wide">
                    Transformation garantie en 48h
                  </span>
                </div>
                
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-5 leading-tight px-4">
                  Prêt à retrouver 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> votre sérénité</span> ?
                </h4>
                
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A4A4A] mb-6 md:mb-7 lg:mb-8 px-4">
                  500+ cabinets l'ont fait. Votre tour maintenant.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center">
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg text-base md:text-lg w-full md:w-auto"
                    >
                      Voir la démo maintenant
                      <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                    </Button>
                  </DemoPopup>
                  <div className="flex items-center justify-center gap-2 text-[#4A4A4A]">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 shrink-0" />
                    <span className="font-medium text-sm md:text-base">Installation en 5 min • Résultats immédiats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        ref={el => sectionRefs.current.testimonials = el}
        className="py-12 md:py-16 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-white via-slate-50/20 to-white"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className={`text-center mb-10 md:mb-12 lg:mb-16 xl:mb-20 ${isInView.testimonials ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center shadow-lg">
                <Quote className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" />
              </div>
              <Badge className="bg-docliq-blue/10 text-docliq-blue border border-docliq-blue/20 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 text-sm md:text-base">
                Témoignages
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-docliq-text mb-4 md:mb-6 lg:mb-8 px-4 leading-tight">
              Nos médecins 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> témoignent</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A4A4A] max-w-4xl mx-auto leading-relaxed px-4 md:px-6">
              Découvrez pourquoi plus de 500 praticiens nous font confiance.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ${isInView.testimonials ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-200`}>
            {[
              {
                name: "Dr. Amina Benali",
                specialty: "Pédiatre, Casablanca",
                content: "Docliq a transformé mon cabinet. Mes patients adorent la prise de rendez-vous en ligne.",
                rating: 5
              },
              {
                name: "Dr. Hassan Alami",
                specialty: "Cardiologue, Rabat", 
                content: "Interface claire, support excellent. Je recommande à tous mes confrères.",
                rating: 5
              },
              {
                name: "Dr. Fatima Zahra",
                specialty: "Dermatologue, Marrakech",
                content: "Plus de temps pour mes patients, moins de paperasse. Exactement ce qu'il me fallait.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-7 lg:p-8 xl:p-10">
                  <div className="flex gap-1 mb-5 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 text-slate-300 mb-4 md:mb-5" />
                  <p className="text-base md:text-lg lg:text-xl text-[#1C1C1C] leading-relaxed mb-5 md:mb-6 lg:mb-7 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-11 md:w-12 lg:w-14 h-11 md:h-12 lg:h-14 rounded-full bg-slate-200 shrink-0"></div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base md:text-lg lg:text-xl text-docliq-text">{testimonial.name}</h4>
                      <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg">{testimonial.specialty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Simple Pricing */}
      <section 
        id="pricing" 
        ref={el => sectionRefs.current.pricing = el}
        className="py-12 md:py-16 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-white via-slate-50/20 to-white"
      >
        <div className="max-w-5xl mx-auto">
          {/* Responsive header */}
          <div className={`text-center mb-8 md:mb-10 lg:mb-12 xl:mb-14 ${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
            <Badge className="inline-flex items-center gap-2 bg-docliq-orange/10 text-docliq-orange border border-docliq-orange/20 rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-2.5 mb-5 md:mb-6 text-sm md:text-base">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Prix de lancement</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-docliq-text mb-4 md:mb-5 lg:mb-6 leading-tight px-4">
              Un prix, tout inclus
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple">
                399 MAD/mois
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#4A4A4A] max-w-3xl mx-auto px-4 md:px-6 leading-relaxed">
              Toutes les fonctionnalités, support premium inclus. 
              <span className="font-semibold text-[#1C1C1C]">Pas de frais cachés.</span>
            </p>
          </div>

          {/* Responsive pricing card */}
          <div className={`${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
            <div className="relative max-w-lg mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/40 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Top accent */}
                <div className="h-1 md:h-1.5 bg-gradient-to-r from-docliq-blue to-docliq-purple"></div>
                
                <div className="p-6 md:p-8 lg:p-10">
                  {/* Price section - responsive */}
                  <div className="text-center mb-6 md:mb-8">
                    <Badge className="bg-docliq-orange/10 text-docliq-orange border-docliq-orange/20 text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 mb-4 md:mb-5">
                      Prix de lancement 🚀
                    </Badge>
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <span className="text-lg md:text-xl lg:text-2xl text-docliq-text/50 line-through">799 MAD</span>
                      <Badge className="bg-docliq-success/10 text-docliq-success border-docliq-success/20 text-xs md:text-sm px-2 md:px-3 py-1">
                        -50%
                      </Badge>
                    </div>
                    <div className="mb-2 md:mb-3">
                      <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-docliq-text">399</span>
                      <span className="text-lg md:text-xl lg:text-2xl text-docliq-text/70 ml-2">MAD/mois</span>
                    </div>
                    <p className="text-sm md:text-base text-[#6A6A6A]">Facturation mensuelle • Sans engagement</p>
                    <div className="mt-4 md:mt-5 pt-4 md:pt-5 border-t border-docliq-text/10">
                      <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                        + <span className="font-semibold">Frais de configuration unique</span> lors de la première installation
                      </p>
                    </div>
                  </div>

                  {/* Responsive features */}
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {[
                      "Rendez-vous illimités",
                      "Dossiers patients sécurisés",
                      "SMS automatiques",
                      "Analytics temps réel",
                      "Support 24/7",
                      "Formation incluse"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 md:gap-4">
                        <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-docliq-success shrink-0" />
                        <span className="text-base md:text-lg text-[#1C1C1C] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Responsive CTA */}
                  <DemoPopup onDashboardClick={handleDashboardDemo} onBookingClick={handleBookingDemo}>
                    <Button 
                      className="w-full bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl md:rounded-2xl h-12 md:h-14 lg:h-16 font-semibold shadow-lg hover-lift mb-4 md:mb-5 text-base md:text-lg lg:text-xl"
                    >
                      <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3" />
                      Commencer maintenant
                    </Button>
                  </DemoPopup>
                  
                  {/* Trust - responsive */}
                  <p className="text-center text-sm md:text-base text-[#6A6A6A] leading-relaxed">
                    ✓ 7 jours gratuits • ✓ Support inclus • ✓ Données sécurisées
                  </p>
                </div>

                {/* Time-limited banner - responsive */}
                <div className="bg-gradient-to-r from-docliq-orange/5 to-yellow-50 px-4 md:px-5 py-2 md:py-3 border-t border-docliq-orange/10">
                  <div className="flex items-center justify-center gap-2 text-docliq-orange text-xs md:text-sm">
                    <Clock className="w-3 md:w-4 h-3 md:h-4 shrink-0" />
                    <span className="font-medium">Prix de lancement - Offre limitée 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive trust indicators */}
          <div className={`mt-8 md:mt-10 lg:mt-12 ${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-400`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 text-center">
              <div className="flex items-center gap-2 md:gap-3 text-[#4A4A4A]">
                <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-docliq-success shrink-0" />
                <span className="text-base md:text-lg font-medium">Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-[#4A4A4A]">
                <Zap className="w-5 md:w-6 h-5 md:h-6 text-docliq-blue shrink-0" />
                <span className="text-base md:text-lg font-medium">Setup en 24h</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-[#4A4A4A]">
                <Heart className="w-5 md:w-6 h-5 md:h-6 text-docliq-purple shrink-0" />
                <span className="text-base md:text-lg font-medium">Support Maroc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Collection Form Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 md:mb-5 lg:mb-6 px-4 leading-tight">
              Prêt à transformer votre cabinet ?
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed px-4 md:px-6">
              Rejoignez des centaines de professionnels de santé qui ont déjà choisi Docliq.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl border border-white/50">
            <form className="space-y-5 md:space-y-6 lg:space-y-7">
              <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
                {/* Prénom */}
                <div>
                  <label htmlFor="firstName" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Votre prénom"
                  />
                </div>

                {/* Nom */}
                <div>
                  <label htmlFor="lastName" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>

              {/* Spécialité */}
              <div>
                <label htmlFor="specialty" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                  Votre spécialité
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                >
                  <option value="">Sélectionnez votre spécialité</option>
                  <option value="medecin-generaliste">Médecin généraliste</option>
                  <option value="cardiologue">Cardiologue</option>
                  <option value="dermatologue">Dermatologue</option>
                  <option value="gynécologue">Gynécologue</option>
                  <option value="pédiatre">Pédiatre</option>
                  <option value="dentiste">Dentiste</option>
                  <option value="psychiatre">Psychiatre</option>
                  <option value="ophtalmologue">Ophtalmologue</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-base md:text-lg font-medium text-[#1C1C1C] mb-2 md:mb-3">
                  Comment pouvons-nous vous aider ?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                  placeholder="Décrivez vos besoins ou posez vos questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 md:pt-6">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white font-semibold py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg lg:text-xl"
                >
                  Demander une démonstration gratuite
                  <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-5 md:pt-6 lg:pt-7 border-t border-slate-200/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-center text-base md:text-lg text-[#4A4A4A]">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-green-500 shrink-0" />
                    <span className="font-medium">100% sécurisé</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <Zap className="w-5 md:w-6 h-5 md:h-6 text-blue-500 shrink-0" />
                    <span className="font-medium">Réponse en 24h</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-purple-500 shrink-0" />
                    <span className="font-medium">Sans engagement</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      </main>


      {/* SEO Footer Section */}
      <FooterSEO />

      {/* Responsive Dark Footer */}
      <footer className="relative py-10 md:py-12 lg:py-14 xl:py-16 px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white overflow-hidden" role="contentinfo">
        {/* Dark pattern overlay with subtle brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-docliq-blue/10 via-transparent to-docliq-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_50%)]" />
        
        <div className="relative max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
            {/* Responsive Logo and tagline - Always left aligned */}
            <div className="flex items-start gap-3 md:gap-4 lg:gap-5 w-full md:w-auto">
              <div className="w-12 md:w-12 lg:w-14 h-12 md:h-12 lg:h-14 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-2xl border border-white/10 shrink-0" aria-hidden="true">
                <span className="text-white font-bold text-lg md:text-lg lg:text-xl">D</span>
              </div>
              <div className="text-left">
                <span className="text-2xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight block">Docliq</span>
                <p className="text-base md:text-lg lg:text-xl text-[#9CA3AF] font-medium mt-1 md:mt-2">Logiciel médical moderne pour le Maroc</p>
                <p className="text-base md:text-base lg:text-lg text-[#6B7280] mt-1">Simplifions ensemble la gestion médicale</p>
              </div>
            </div>
            
            {/* Responsive navigation - Left aligned on mobile */}
            <nav aria-label="Liens légaux" className="w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 lg:gap-6">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg md:rounded-xl px-4 md:px-5 py-2.5 md:py-2.5 font-medium text-base md:text-lg w-full md:w-auto text-left"
                  aria-label="Consulter les mentions légales"
                >
                  Mentions légales
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg md:rounded-xl px-4 md:px-5 py-2.5 md:py-2.5 font-medium text-base md:text-lg w-full md:w-auto text-left"
                  aria-label="Consulter la politique de confidentialité"
                >
                  Confidentialité
                </a>
                <a 
                  href="mailto:contact@docliq.ma" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg md:rounded-xl px-4 md:px-5 py-2.5 md:py-2.5 font-medium text-base md:text-lg w-full md:w-auto text-left"
                  aria-label="Nous contacter par email"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
          
          {/* Responsive divider */}
          <div className="my-8 md:my-10 lg:my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          
          {/* Responsive copyright - Always left aligned */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8">
            <div className="text-left w-full lg:w-auto">
              <p className="text-[#9CA3AF] font-medium text-base md:text-lg lg:text-xl">
                © 2025 Docliq. Plateforme de gestion médicale
              </p>
              <p className="text-[#6A6A6A] text-base md:text-base lg:text-lg mt-2">
                Conçue pour tous les professionnels de santé au Maroc
              </p>
            </div>
            
            {/* Made by Ocliq - Left on mobile, right on desktop */}
            <div className="text-left lg:text-right w-full lg:w-auto">
              <p className="text-[#9CA3AF] text-base md:text-lg lg:text-xl font-medium">
                Made by <a href="https://ocliq.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-docliq-blue transition-colors font-semibold">Ocliq</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-3/4 h-px bg-gradient-to-r from-transparent via-docliq-blue/20 to-transparent" />
      </footer>
    </div>
  );
}
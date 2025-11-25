import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
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
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
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

  // Demo modal handlers
  const openDemoModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Calculate position relative to viewport (for fixed modal)
    // Add some offset so the modal doesn't overlap the button
    const modalWidth = 350; // match your modal width
    const modalHeight = 240; // estimated modal height
    
    // Position to the right of the button, but ensure it stays within viewport
    let popupX = Math.min(rect.left + rect.width + 15, window.innerWidth - modalWidth - 20);
    
    // Center vertically relative to button, but ensure it stays within viewport
    let popupY = Math.min(rect.top, window.innerHeight - modalHeight - 20);
    
    // If modal would be too far left, position it to the left of the button instead
    if (popupX < 20) {
      popupX = Math.max(rect.left - modalWidth - 15, 20);
    }
    
    // Ensure minimum distance from top
    popupY = Math.max(popupY, 20);
    
    setModalPosition({ 
      x: popupX, 
      y: popupY 
    });
    setIsDemoModalOpen(true);
  };
  const closeDemoModal = () => setIsDemoModalOpen(false);
  
  const navigateToDashboardDemo = () => {
    navigate('/dashboard');
    closeDemoModal();
  };
  
  const navigateToBookingDemo = () => {
    navigate('/booking-wizard');
    closeDemoModal();
  };

  const handleDemo = useCallback((event) => {
    openDemoModal(event);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-docliq-neutral via-white to-slate-50">
      {/* Responsive Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-sm" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo - responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-lg" aria-hidden="true">
                <span className="text-white font-bold text-base sm:text-lg lg:text-xl">D</span>
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-docliq-text tracking-tight">
                Docliq
              </span>
            </div>
            
            {/* Navigation Links - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-1">
              <a 
                href="#platform" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-4 xl:px-5 py-2.5 lg:py-3 rounded-xl text-base lg:text-lg"
                aria-label="Découvrir la plateforme Docliq"
              >
                Plateforme
              </a>
              <a 
                href="#demo" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-4 xl:px-5 py-2.5 lg:py-3 rounded-xl text-base lg:text-lg"
                aria-label="Voir la démo interactive"
              >
                Démo
              </a>
              <a 
                href="#pricing" 
                className="text-docliq-text/80 hover:text-docliq-blue hover:bg-docliq-blue/5 transition-all duration-300 font-medium px-4 xl:px-5 py-2.5 lg:py-3 rounded-xl text-base lg:text-lg"
                aria-label="Consulter nos tarifs"
              >
                Tarifs
              </a>
            </div>

            {/* CTA Buttons - responsive layout */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Button 
                variant="ghost"
                className="hidden md:flex text-docliq-text hover:text-docliq-blue hover:bg-white/60 h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 font-medium rounded-xl transition-all duration-300 text-base lg:text-lg"
                aria-label="Se connecter à votre compte"
              >
                Connexion
              </Button>
              <Button 
                onClick={handleDemo}
                className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-lg sm:rounded-xl h-10 sm:h-11 lg:h-12 px-4 sm:px-5 lg:px-6 font-semibold shadow-lg hover:shadow-docliq-blue/25 transition-all duration-300 text-sm sm:text-base lg:text-lg"
                aria-label="Commencer l'essai gratuit de Docliq"
              >
                <span className="hidden sm:inline">Essayer</span>
                <span className="sm:hidden">Demo</span>
              </Button>
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
          className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-docliq-neutral/30"
          aria-labelledby="hero-title"
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Hero Content */}
            <div className={`space-y-6 sm:space-y-8 ${isInView.hero ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
              
              {/* Status badges - responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <Badge className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md text-docliq-blue border border-docliq-blue/20 rounded-full px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 shadow-lg text-xs sm:text-sm" role="status">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-docliq-success rounded-full animate-pulse" aria-hidden="true" />
                  <span className="font-semibold">Plateforme active</span>
                </Badge>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-docliq-text bg-white/80 backdrop-blur-md rounded-full px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 shadow-md">
                  <Users className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
                  <span className="font-semibold">{patientCount.toLocaleString()}+ médecins utilisent Docliq</span>
                </div>
              </div>

              {/* Hero title and description - responsive typography */}
              <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto px-2 sm:px-0">
                <h1 
                  id="hero-title" 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-docliq-text leading-[1.1] tracking-tight"
                >
                  Un cabinet plus efficace,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise animate-gradient-x">
                    en un clic.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-docliq-text/80 leading-relaxed font-light max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
                  La solution complète pour votre cabinet médical.
                </p>
              </div>

              {/* Social proof and CTA - mobile optimized */}
              <div className="space-y-6 sm:space-y-8">
                {/* Social proof avatars - responsive layout */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex -space-x-2 sm:-space-x-3" role="img" aria-label="Avatars de médecins utilisateurs">
                      {[
                        { bg: 'bg-gradient-to-br from-docliq-blue to-blue-600', initials: 'AM', name: 'Dr. Amina' },
                        { bg: 'bg-gradient-to-br from-docliq-turquoise to-emerald-600', initials: 'FZ', name: 'Dr. Fatima' },
                        { bg: 'bg-gradient-to-br from-docliq-purple to-purple-600', initials: 'HS', name: 'Dr. Hassan' },
                        { bg: 'bg-gradient-to-br from-docliq-orange to-orange-600', initials: 'LB', name: 'Dr. Leila' },
                        { bg: 'bg-gradient-to-br from-slate-700 to-slate-900', initials: '+', name: 'Plus de médecins' }
                      ].map((avatar, i) => (
                        <div 
                          key={i} 
                          className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full ${avatar.bg} border-2 sm:border-3 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer`}
                          aria-label={avatar.name}
                        >
                          {avatar.initials}
                        </div>
                      ))}
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-sm sm:text-base text-docliq-text font-bold">500+ professionnels de santé</div>
                      <div className="flex items-center justify-center sm:justify-start space-x-1" role="img" aria-label="Note de 4,9 sur 5 étoiles">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                        <span className="text-xs sm:text-sm text-docliq-text/70 ml-2 font-semibold">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Primary CTA - responsive sizing */}
                <div role="group" aria-label="Actions principales">
                  <Button 
                    onClick={handleDemo}
                    className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl sm:rounded-2xl h-12 sm:h-14 px-6 sm:px-8 lg:px-10 text-base sm:text-lg font-bold shadow-xl hover:shadow-docliq-blue/25 focus:outline-none focus:ring-4 focus:ring-docliq-blue/30 focus:ring-offset-2 hover-lift w-full sm:w-auto"
                    aria-label="Démarrer la démonstration gratuite de Docliq"
                  >
                    <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" aria-hidden="true" />
                    <span className="hidden sm:inline">Essayer la démo gratuite</span>
                    <span className="sm:hidden">Essayer la démo</span>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3" aria-hidden="true" />
                  </Button>
                </div>

                {/* Professional benefit metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto px-4" role="region" aria-label="Bénéfices de performance">
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <Phone className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-docliq-text mb-1">-70%</div>
                        <div className="text-sm sm:text-base md:text-lg font-medium text-docliq-text/70">appels non nécessaires</div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <Calendar className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-docliq-text mb-1">+90%</div>
                        <div className="text-sm sm:text-base md:text-lg font-medium text-docliq-text/70">rendez-vous confirmés</div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <BarChart3 className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-docliq-text mb-1">40 sec</div>
                        <div className="text-sm sm:text-base md:text-lg font-medium text-docliq-text/70">temps moyen / RDV</div>
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
          <div className="relative z-30 pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 text-center px-4">
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
                    <p className="text-sm text-docliq-text/70 leading-relaxed">
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
                      <p className="text-sm text-docliq-text/70 leading-relaxed">
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
                      <p className="text-sm text-docliq-text/70 leading-relaxed">
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

          {/* Bottom scroll indicator - responsive */}
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 animate-[fadeInUp_1s_ease-out_2.5s_both] z-30">
            <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-docliq-text/60">
              <span className="text-xs sm:text-sm font-medium">Faites défiler pour explorer</span>
              <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-docliq-text/30 rounded-full flex justify-center">
                <div className="w-1 h-2 sm:h-3 bg-docliq-blue rounded-full mt-1 sm:mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* ContainerScroll animation - responsive spacing */}
          <div className="relative z-10 px-2 sm:px-4 lg:px-0">
            <ContainerScroll
              titleComponent={<div></div>}
            >
              <img
                src="/ocliqsolution.png"
                alt="Interface complète de la plateforme Docliq - Tableau de bord médical professionnel avec gestion des rendez-vous, dossiers patients et analytics en temps réel"
                width={1600}
                height={900}
                className="mx-auto rounded-2xl sm:rounded-3xl object-cover h-full object-left-top w-full shadow-xl sm:shadow-2xl"
                loading="eager"
              />
            </ContainerScroll>
          </div>
        </section>

        {/* Responsive Platform Features */}
        <section 
          id="platform" 
          ref={el => sectionRefs.current.platform = el}
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/20 to-white"
          aria-labelledby="platform-title"
        >
          <div className="max-w-7xl mx-auto">
            {/* Responsive Section header */}
            <div className={`text-center mb-8 sm:mb-10 lg:mb-12 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
              <Badge className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-xl text-docliq-blue border border-docliq-blue/20 rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-lg mb-4 sm:mb-6 text-sm">
                <Stethoscope className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-semibold">Gestion de cabinet médical</span>
              </Badge>
              
              <h2 id="platform-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-docliq-text mb-3 sm:mb-4 leading-tight px-2">
                Agenda médical intelligent
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue via-docliq-purple to-docliq-turquoise animate-gradient-x">
                  pour médecins
                </span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-docliq-text/80 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-6 lg:px-0">
                Plateforme complète avec prise de rendez-vous ultra-rapide, dossiers patients sécurisés et analytics avancés.
                <br className="hidden sm:block" />
                <span className="text-docliq-text font-semibold">Optimisé pour tous les cabinets médicaux au Maroc.</span>
              </p>
            </div>

            {/* Responsive Feature cards */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
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
                    className="group relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 overflow-hidden"
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative p-4 sm:p-6 lg:p-8">
                      {/* Header with icon and metric - responsive */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl sm:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                          <IconComponent className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-docliq-text">{feature.metrics}</div>
                          <div className="text-[10px] sm:text-xs text-docliq-text/60 font-medium">{feature.metricLabel}</div>
                        </div>
                      </div>

                      {/* Content - responsive */}
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-docliq-text mb-1 group-hover:text-docliq-blue transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-docliq-blue">{feature.subtitle}</p>
                        </div>
                        
                        <p className="text-sm sm:text-base text-docliq-text/70 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Benefits with responsive styling */}
                        <div className="grid grid-cols-1 gap-1.5 sm:gap-2 pt-2">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                              <div className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full ${feature.accentColor} flex items-center justify-center shadow-sm`}>
                                <CheckCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" />
                              </div>
                              <span className="text-docliq-text/80 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover action indicator - desktop only */}
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        <div className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full ${feature.accentColor} flex items-center justify-center shadow-lg`}>
                          <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Responsive Trust indicators */}
            <div className={`mt-8 sm:mt-10 lg:mt-12 ${isInView.platform ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-400`} role="region" aria-label="Garanties et certifications">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/40 shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: Shield, label: "Conformité RGPD", value: "Certifié", color: "text-docliq-success", bgColor: "bg-docliq-success/10" },
                    { icon: Globe, label: "Disponibilité", value: "99.9%", color: "text-docliq-blue", bgColor: "bg-docliq-blue/10" },
                    { icon: MapPin, label: "Support Maroc", value: "24/7", color: "text-docliq-orange", bgColor: "bg-docliq-orange/10" },
                    { icon: Zap, label: "Temps de réponse", value: "< 2s", color: "text-docliq-purple", bgColor: "bg-docliq-purple/10" }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className={`w-10 sm:w-12 h-10 sm:h-12 ${stat.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-5 sm:w-6 h-5 sm:h-6 ${stat.color}`} />
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-docliq-text mb-1">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-docliq-text/60 font-medium">{stat.label}</div>
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
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20 relative overflow-hidden"
        aria-labelledby="demo-title"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center mb-20 ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center" aria-hidden="true">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-docliq-blue/10 text-docliq-blue border border-docliq-blue/20 px-4 py-2">
                Démo interactive
              </Badge>
            </div>
            <h2 id="demo-title" className="text-5xl font-bold text-docliq-text mb-6">
              Voyez comme c'est simple pour 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> vos patients</span>
            </h2>
            <p className="text-xl text-docliq-text/80 max-w-3xl mx-auto leading-relaxed">
              En 3 clics, vos patients prennent rendez-vous dans votre cabinet médical. Interface intuitive, 
              rappels automatiques, confirmation SMS. Zéro friction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Interactive Steps */}
            <div className={`space-y-8 ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
              <div className="space-y-6">
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
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      step.active 
                        ? 'border-docliq-blue bg-gradient-to-r from-docliq-blue/5 to-docliq-purple/5 shadow-lg' 
                        : 'border-slate-200 bg-white hover:border-docliq-blue/30'
                    }`}
                    onClick={() => setCurrentStep(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Étape ${step.step}: ${step.title}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          step.active 
                            ? 'bg-docliq-blue text-white shadow-lg' 
                            : 'bg-slate-100 text-docliq-text/70'
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                          step.active ? 'text-docliq-blue' : 'text-docliq-text'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-docliq-text/70 mb-3">{step.description}</p>
                        <p className={`text-sm transition-all duration-300 ${
                          step.active ? 'text-docliq-text/70 opacity-100' : 'text-docliq-text/40 opacity-0'
                        }`}>
                          {step.details}
                        </p>
                      </div>
                      {step.active && (
                        <div className="w-3 h-3 bg-docliq-blue rounded-full" aria-hidden="true"></div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={(e) => openDemoModal(e)}
                  className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-xl h-14 px-8 text-lg font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-docliq-blue focus:ring-offset-2"
                  aria-label="Essayer la démonstration complète"
                >
                  <Play className="w-5 h-5 mr-2" aria-hidden="true" />
                  Essayer la démo complète
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-docliq-blue/30 text-docliq-blue hover:bg-docliq-blue/5 hover:border-docliq-blue rounded-xl h-14 px-8 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-docliq-blue focus:ring-offset-2"
                >
                  Programmer une présentation
                  <Calendar className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Dynamic Mobile Preview */}
            <div className={`relative ${isInView.demo ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-500`}>
              <div className="relative mx-auto w-80 h-[600px]">
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
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Compact Header */}
          <div className={`text-center mb-12 ${isInView.features ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                500+ cabinets transformés
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Avant / 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple">Après Docliq</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Voyez la différence dans votre quotidien.
            </p>
          </div>


          {/* Compact Timeline Comparison */}
          <div className={`mb-16 ${isInView.features ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-400`}>
            
            {/* Compact Timeline */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sans Docliq - Problems */}
              <div className="relative">
                <div className="absolute left-6 top-16 bottom-16 w-px bg-gradient-to-b from-red-300 to-red-500"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                      <X className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-red-700">Votre journée AVANT</h4>
                      <p className="text-red-600/80 text-base">Le stress du quotidien</p>
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
                      <div key={idx} className="relative flex items-center space-x-4">
                        <div className="w-4 h-4 rounded-full z-10 bg-red-500 border-4 border-white shadow-lg"></div>
                        <Card className="flex-1 p-4 bg-white/80 backdrop-blur-sm border-red-200 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-red-600" />
                            </div>
                            <div>
                              <p className="text-base text-slate-700 font-medium">{item.activity}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Summary */}
                  <div className="relative bg-red-50 p-6 rounded-xl border-2 border-red-200 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">Épuisement</div>
                      <p className="text-lg text-red-700 font-medium">Chaque jour identique</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avec Docliq - Benefits */}
              <div className="relative">
                <div className="absolute left-6 top-16 bottom-16 w-px bg-gradient-to-b from-docliq-blue to-docliq-purple"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-docliq-blue">Votre journée APRÈS</h4>
                      <p className="text-docliq-blue/80 text-base">Sérénité retrouvée</p>
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
                      <div key={idx} className="relative flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full z-10 border-4 border-white shadow-lg ${
                          item.type === 'auto' ? 'bg-green-500' : 'bg-docliq-blue'
                        }`}></div>
                        <Card className="flex-1 p-4 bg-white/90 backdrop-blur-sm border-docliq-blue/20 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-docliq-blue/10 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-docliq-blue" />
                            </div>
                            <div className="flex-1">
                              <p className="text-base text-slate-700 font-medium">{item.activity}</p>
                            </div>
                            {item.type === 'auto' && (
                              <Badge variant="secondary" className="text-sm bg-green-50 text-green-700 border-green-200 px-2 py-1 animate-pulse">
                                AUTO
                              </Badge>
                            )}
                          </div>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Summary */}
                  <div className="relative bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-docliq-blue/30 mt-8 transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-docliq-blue mb-2">Liberté totale</div>
                      <p className="text-lg text-docliq-blue font-medium">Enfin du temps pour soigner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact CTA */}
            <div className="mt-12 bg-gradient-to-r from-docliq-blue/5 via-docliq-purple/5 to-green-100/20 rounded-2xl p-8 text-center border-2 border-docliq-blue/20">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-docliq-blue/10 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-bold text-xs uppercase tracking-wide">
                    Transformation garantie en 48h
                  </span>
                </div>
                
                <h4 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
                  Prêt à retrouver 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> votre sérénité</span> ?
                </h4>
                
                <p className="text-xl text-slate-600 mb-6">
                  500+ cabinets l'ont fait. Votre tour maintenant.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={(e) => openDemoModal(e)}
                  >
                    Voir la démo maintenant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center justify-center space-x-2 text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-sm">Installation en 5 min • Résultats immédiats</span>
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
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/20 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isInView.testimonials ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700`}>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-docliq-blue to-docliq-purple flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-docliq-blue/10 text-docliq-blue border border-docliq-blue/20 px-4 py-2">
                Témoignages
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-docliq-text mb-6">
              Nos médecins 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple"> témoignent</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-docliq-text/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez pourquoi plus de 500 praticiens nous font confiance.
            </p>
          </div>

          <div className={`grid lg:grid-cols-3 gap-8 ${isInView.testimonials ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-200`}>
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
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 mb-4" />
                  <p className="text-base md:text-lg lg:text-xl text-docliq-text leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg text-docliq-text">{testimonial.name}</h4>
                      <p className="text-docliq-text/70 text-sm md:text-base">{testimonial.specialty}</p>
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
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/20 to-white"
      >
        <div className="max-w-4xl mx-auto">
          {/* Responsive header */}
          <div className={`text-center mb-6 sm:mb-8 lg:mb-10 ${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-docliq-text mb-3 sm:mb-4 leading-tight px-4">
              Un prix, tout inclus
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-docliq-blue to-docliq-purple">
                399 MAD/mois
              </span>
            </h2>
            <p className="text-base sm:text-lg text-docliq-text/70 max-w-2xl mx-auto px-4">
              Toutes les fonctionnalités, support premium inclus. 
              <span className="font-semibold text-docliq-text">Pas de frais cachés.</span>
            </p>
          </div>

          {/* Responsive pricing card */}
          <div className={`${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-200`}>
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/40 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-docliq-blue to-docliq-purple"></div>
                
                <div className="p-4 sm:p-6">
                  {/* Price section - responsive */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <span className="text-base sm:text-lg text-docliq-text/50 line-through">799 MAD</span>
                      <Badge className="bg-docliq-success/10 text-docliq-success border-docliq-success/20 text-xs px-2 py-1">
                        -50%
                      </Badge>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <span className="text-4xl sm:text-5xl font-bold text-docliq-text">399</span>
                      <span className="text-base sm:text-lg text-docliq-text/70 ml-1">MAD/mois</span>
                    </div>
                    <p className="text-xs sm:text-sm text-docliq-text/60">Facturation mensuelle • Sans engagement</p>
                  </div>

                  {/* Responsive features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {[
                      "Rendez-vous illimités",
                      "Dossiers patients sécurisés",
                      "SMS automatiques",
                      "Analytics temps réel",
                      "Support 24/7",
                      "Formation incluse"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-success flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-docliq-text font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Responsive CTA */}
                  <Button 
                    onClick={(e) => openDemoModal(e)}
                    className="w-full bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white rounded-lg sm:rounded-xl h-10 sm:h-12 font-semibold shadow-lg hover-lift mb-3 text-sm sm:text-base"
                  >
                    <Play className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    Commencer maintenant
                  </Button>
                  
                  {/* Trust - responsive */}
                  <p className="text-center text-[10px] sm:text-xs text-docliq-text/60">
                    ✓ 30 jours gratuits • ✓ Support inclus • ✓ Données sécurisées
                  </p>
                </div>

                {/* Time-limited banner - responsive */}
                <div className="bg-gradient-to-r from-docliq-orange/5 to-yellow-50 px-3 sm:px-4 py-1.5 sm:py-2 border-t border-docliq-orange/10">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-docliq-orange text-[10px] sm:text-xs">
                    <Clock className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                    <span className="font-medium">Offre jusqu'au 31 décembre 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive trust indicators */}
          <div className={`mt-6 sm:mt-8 ${isInView.pricing ? 'animate-fade-in' : 'opacity-0'} transition-all duration-1000 delay-400`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center">
              <div className="flex items-center space-x-2 text-docliq-text/60">
                <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-success" />
                <span className="text-xs sm:text-sm font-medium">Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center space-x-2 text-docliq-text/60">
                <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-blue" />
                <span className="text-xs sm:text-sm font-medium">Setup en 24h</span>
              </div>
              <div className="flex items-center space-x-2 text-docliq-text/60">
                <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-purple" />
                <span className="text-xs sm:text-sm font-medium">Support Maroc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Collection Form Section */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/20 via-white to-slate-50/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Prêt à transformer votre cabinet ?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Rejoignez des centaines de professionnels de santé qui ont déjà choisi Docliq.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Prénom */}
                <div>
                  <label htmlFor="firstName" className="block text-base font-medium text-slate-700 mb-3">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Votre prénom"
                  />
                </div>

                {/* Nom */}
                <div>
                  <label htmlFor="lastName" className="block text-base font-medium text-slate-700 mb-3">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-slate-700 mb-3">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-base font-medium text-slate-700 mb-3">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>

              {/* Spécialité */}
              <div>
                <label htmlFor="specialty" className="block text-base font-medium text-slate-700 mb-3">
                  Votre spécialité
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm"
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
                <label htmlFor="message" className="block text-base font-medium text-slate-700 mb-3">
                  Comment pouvons-nous vous aider ?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-docliq-blue focus:ring-2 focus:ring-docliq-blue/20 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                  placeholder="Décrivez vos besoins ou posez vos questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Demander une démonstration gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 border-t border-slate-200/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-base text-slate-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>100% sécurisé</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>Réponse en 24h</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Sans engagement</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      </main>

      {/* Demo Selection Popup */}
      {isDemoModalOpen && (
        <>
          <div 
            className="fixed inset-0 z-[9999] bg-transparent" 
            onClick={closeDemoModal}
          />
          <div 
            className="fixed z-[10000] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
            style={{
              left: `${modalPosition.x}px`,
              top: `${modalPosition.y}px`,
              width: "350px",
              minHeight: "240px",
              transition: "top 0.2s ease, left 0.2s ease"
            }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Choisissez votre démo
              </h3>
              <p className="text-slate-600 text-sm">
                Quel aspect souhaitez-vous découvrir ?
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={navigateToDashboardDemo}
                className="w-full group bg-gradient-to-r from-docliq-blue to-docliq-purple hover:from-docliq-blue/90 hover:to-docliq-purple/90 text-white p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-base font-semibold mb-1">Tableau de bord médecin</h4>
                    <p className="text-blue-100 text-xs">Gestion des patients, agenda</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={navigateToBookingDemo}
                className="w-full group bg-white hover:bg-slate-50 border border-slate-200 hover:border-docliq-blue/30 text-slate-700 hover:text-docliq-blue p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-base font-semibold mb-1">Prise de rendez-vous</h4>
                    <p className="text-slate-500 text-xs">Expérience patient</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Responsive Dark Footer */}
      <footer className="relative py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white overflow-hidden" role="contentinfo">
        {/* Dark pattern overlay with subtle brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-docliq-blue/10 via-transparent to-docliq-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
            {/* Responsive Logo and tagline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-5 text-center sm:text-left">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-docliq-blue via-docliq-purple to-docliq-turquoise flex items-center justify-center shadow-2xl border border-white/10" aria-hidden="true">
                <span className="text-white font-bold text-base sm:text-lg">D</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Docliq</span>
                <p className="text-base sm:text-lg text-gray-300 font-medium mt-0.5 sm:mt-1">Logiciel médical moderne pour le Maroc</p>
                <p className="text-sm sm:text-base text-gray-400 mt-0.5 sm:mt-1">Simplifions ensemble la gestion médicale</p>
              </div>
            </div>
            
            {/* Responsive navigation */}
            <nav aria-label="Liens légaux" className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-base sm:text-lg"
                  aria-label="Consulter les mentions légales"
                >
                  Mentions légales
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-base sm:text-lg"
                  aria-label="Consulter la politique de confidentialité"
                >
                  Confidentialité
                </a>
                <a 
                  href="mailto:contact@docliq.ma" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 font-medium text-base sm:text-lg"
                  aria-label="Nous contacter par email"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
          
          {/* Responsive divider */}
          <div className="my-6 sm:my-8 lg:my-10 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          
          {/* Responsive copyright and trust indicators */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-medium text-base sm:text-lg">
                © 2024 Docliq. Plateforme de gestion médicale
              </p>
              <p className="text-gray-500 text-sm sm:text-base mt-1">
                Conçue pour tous les professionnels de santé au Maroc
              </p>
            </div>
            
            {/* Responsive trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg sm:rounded-xl bg-docliq-success/10 flex items-center justify-center">
                  <Shield className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-success" />
                </div>
                <span className="text-sm sm:text-base font-medium">Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg sm:rounded-xl bg-docliq-blue/10 flex items-center justify-center">
                  <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-blue" />
                </div>
                <span className="text-sm sm:text-base font-medium">Casablanca, Maroc</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg sm:rounded-xl bg-docliq-purple/10 flex items-center justify-center">
                  <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-docliq-purple" />
                </div>
                <span className="text-sm sm:text-base font-medium">Fait avec passion</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-3/4 h-px bg-gradient-to-r from-transparent via-docliq-blue/20 to-transparent" />
      </footer>
    </div>
  );
}
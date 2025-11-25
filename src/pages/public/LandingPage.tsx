import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  ChevronRight,
  Play,
  Phone,
  MessageSquare,
  CreditCard,
  BarChart3,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Download,
  UserPlus,
  Settings,
  Bell,
  Search,
  Filter,
  Calendar as CalendarIcon,
  PlusCircle,
  Edit3,
  Eye
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    appointments: 0,
    patients: 0,
    revenue: 0
  });

  // Animated counter for dashboard stats
  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardStats({
        appointments: 247,
        patients: 1834,
        revenue: 89650
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance demo steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Docliq</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/demo')}
                className="text-[#445066] hover:text-[#3A7AFE]"
              >
                Voir la démo
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                className="bg-[#3A7AFE] hover:bg-[#3A7AFE]/90 text-white"
              >
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#3A7AFE]/10 to-[#7460EE]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#2AB8A6]/10 to-[#3BB587]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 lg:pr-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] text-white border-0 px-4 py-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Spécialement conçu pour le Maroc
                  </Badge>
                  <div className="flex items-center space-x-2 text-[#3BB587]">
                    <div className="w-2 h-2 bg-[#3BB587] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">2847 médecins nous font confiance</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Votre cabinet
                  <span className="block bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] bg-clip-text text-transparent">
                    sans papier
                  </span>
                </h1>
                
                <p className="text-xl text-[#445066] leading-relaxed max-w-2xl">
                  Libérez-vous de la paperasse. Gérez patients, rendez-vous et facturation 
                  en quelques clics. Interface moderne, sécurisée et adaptée aux praticiens marocains.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/demo')}
                  className="group bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] hover:from-[#3A7AFE]/90 hover:to-[#7460EE]/90 text-white px-10 py-6 text-lg rounded-2xl shadow-xl shadow-[#3A7AFE]/25 border-0 transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Voir la démo interactive
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#3A7AFE]/30 text-[#3A7AFE] hover:bg-[#3A7AFE]/5 hover:border-[#3A7AFE] px-10 py-6 text-lg rounded-2xl group transition-all duration-200"
                >
                  Planifier une présentation
                  <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-white">
                        <AvatarFallback className="bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] text-white text-xs">
                          {String.fromCharCode(65 + i)}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-[#445066] font-medium">+2500 praticiens</span>
                </div>
                <div className="flex items-center space-x-1 text-[#FF9F45]">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-sm text-[#445066] font-medium ml-2">4.9/5</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Dashboard Preview */}
            <div className="relative lg:pl-8">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Dr. Amina Benali</h3>
                        <p className="text-white/80 text-sm">Cabinet Dentaire - Casablanca</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bell className="w-5 h-5 text-white/80" />
                      <div className="w-2 h-2 bg-[#FF9F45] rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Stats */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-[#3A7AFE]/5 to-[#3A7AFE]/10 rounded-2xl">
                      <div className="text-2xl font-bold text-[#3A7AFE]">
                        {dashboardStats.appointments}
                      </div>
                      <div className="text-xs text-[#445066] mt-1">RDV ce mois</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#2AB8A6]/5 to-[#2AB8A6]/10 rounded-2xl">
                      <div className="text-2xl font-bold text-[#2AB8A6]">
                        {dashboardStats.patients}
                      </div>
                      <div className="text-xs text-[#445066] mt-1">Patients</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#3BB587]/5 to-[#3BB587]/10 rounded-2xl">
                      <div className="text-2xl font-bold text-[#3BB587]">
                        {(dashboardStats.revenue / 1000).toFixed(0)}k
                      </div>
                      <div className="text-xs text-[#445066] mt-1">MAD</div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-xl hover:bg-[#F1F5F9] transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#3A7AFE]/10 rounded-lg flex items-center justify-center">
                          <UserPlus className="w-4 h-4 text-[#3A7AFE]" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Nouveau patient</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#445066]" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-xl hover:bg-[#F1F5F9] transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#2AB8A6]/10 rounded-lg flex items-center justify-center">
                          <PlusCircle className="w-4 h-4 text-[#2AB8A6]" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Ajouter RDV</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#445066]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FF9F45]/20 to-[#3A7AFE]/20 rounded-3xl blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#2AB8A6]/20 to-[#3BB587]/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Visual Steps */}
      <section className="py-32 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-[#3A7AFE] border-[#3A7AFE]/20 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Configuration en 15 minutes
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              De l'installation à vos premiers patients
            </h2>
            <p className="text-xl text-[#445066] max-w-3xl mx-auto">
              Découvrez comme il est simple de digitaliser votre cabinet. 
              Pas de formation complexe, pas de migration de données laborieuse.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                step: "01",
                title: "Inscription instantanée",
                description: "Créez votre compte en 2 minutes. Aucune installation, tout fonctionne dans votre navigateur.",
                icon: UserPlus,
                visual: (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="space-y-4">
                      <div className="h-3 bg-[#F5F7FA] rounded-full">
                        <div className="h-full w-full bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#3BB587]" />
                        <span className="text-sm text-gray-900">Compte créé ✨</span>
                      </div>
                    </div>
                  </div>
                ),
                color: "#3A7AFE"
              },
              {
                step: "02",
                title: "Personnalisation express",
                description: "Ajoutez vos informations, services et disponibilités. Interface guidée, zéro complexité.",
                icon: Settings,
                visual: (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">Services</span>
                        <div className="text-xs text-[#3BB587] bg-[#3BB587]/10 px-2 py-1 rounded">3/3</div>
                      </div>
                      <div className="space-y-2">
                        {["Consultation", "Détartrage", "Urgences"].map((service, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#3BB587]" />
                            <span className="text-xs text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
                color: "#2AB8A6"
              },
              {
                step: "03",
                title: "Premiers rendez-vous",
                description: "Partagez votre lien de réservation. Vos patients prennent rendez-vous automatiquement.",
                icon: Calendar,
                visual: (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-900 font-medium">Aujourd'hui</span>
                        <div className="text-xs text-[#FF9F45] bg-[#FF9F45]/10 px-2 py-1 rounded">5 RDV</div>
                      </div>
                      <div className="space-y-2">
                        {[
                          { time: "09:00", patient: "Mme. Alami", type: "Consultation" },
                          { time: "10:30", patient: "M. Bennani", type: "Détartrage" }
                        ].map((rdv, i) => (
                          <div key={i} className="flex items-center space-x-3 p-2 bg-[#F5F7FA] rounded-lg">
                            <div className="text-xs font-mono text-[#445066]">{rdv.time}</div>
                            <div className="flex-1">
                              <div className="text-xs font-medium text-gray-900">{rdv.patient}</div>
                              <div className="text-xs text-[#445066]">{rdv.type}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
                color: "#3BB587"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center mb-8">
                  <div 
                    className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 relative"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}25 100%)`,
                      border: `2px solid ${step.color}20`
                    }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-[#445066] leading-relaxed mb-8">{step.description}</p>
                </div>
                
                <div className="transform hover:scale-105 transition-transform duration-300">
                  {step.visual}
                </div>
                
                {/* Connecting line */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Gain de temps",
                description: "Automatisez la prise de RDV, les rappels et la facturation.",
                metric: "4h/jour",
                metricLabel: "économisées",
                color: "#3A7AFE"
              },
              {
                icon: Shield,
                title: "Sécurité totale",
                description: "Données patients chiffrées, conformité RGPD, sauvegardes automatiques.",
                metric: "100%",
                metricLabel: "sécurisé",
                color: "#2AB8A6"
              },
              {
                icon: Smartphone,
                title: "Mobilité",
                description: "Accédez à votre cabinet depuis n'importe où, sur tous vos appareils.",
                metric: "24/7",
                metricLabel: "disponible",
                color: "#7460EE"
              },
              {
                icon: Heart,
                title: "Patients ravis",
                description: "Réservation en ligne, rappels SMS, expérience patient modernisée.",
                metric: "96%",
                metricLabel: "satisfaction",
                color: "#3BB587"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 cursor-pointer transform hover:-translate-y-2 ${
                  hoveredCard === index ? 'shadow-2xl scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 text-center">
                  <div 
                    className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}10 0%, ${item.color}20 100%)` 
                    }}
                  >
                    <item.icon className="w-10 h-10 relative z-10" style={{ color: item.color }} />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)` }}
                    ></div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold" style={{ color: item.color }}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-[#445066] font-medium">{item.metricLabel}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-[#445066] leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A7AFE]/5 via-white to-[#2AB8A6]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#3A7AFE]/10 text-[#3A7AFE] border-[#3A7AFE]/20 mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Démo interactive
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Voyez comme c'est simple pour vos patients
            </h2>
            <p className="text-xl text-[#445066] max-w-3xl mx-auto">
              En 3 clics, vos patients prennent rendez-vous. Interface intuitive, 
              rappels automatiques, confirmation SMS. Zéro friction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Interactive Steps */}
            <div className="space-y-8">
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
                  <div 
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      step.active 
                        ? 'border-[#3A7AFE] bg-gradient-to-r from-[#3A7AFE]/5 to-[#7460EE]/5 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-[#3A7AFE]/30'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          step.active 
                            ? 'bg-[#3A7AFE] text-white shadow-lg' 
                            : 'bg-gray-100 text-[#445066]'
                        }`}
                      >
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                          step.active ? 'text-[#3A7AFE]' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-[#445066] mb-3">{step.description}</p>
                        <p className={`text-sm transition-all duration-300 ${
                          step.active ? 'text-[#445066] opacity-100' : 'text-[#445066]/60 opacity-0'
                        }`}>
                          {step.details}
                        </p>
                      </div>
                      {step.active && (
                        <div className="w-3 h-3 bg-[#3A7AFE] rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg"
                  onClick={() => navigate('/demo')}
                  className="group bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] hover:from-[#3A7AFE]/90 hover:to-[#7460EE]/90 text-white px-10 py-6 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Essayer la démo complète
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#3A7AFE]/30 text-[#3A7AFE] hover:bg-[#3A7AFE]/5 hover:border-[#3A7AFE] px-10 py-6 text-lg rounded-2xl group"
                >
                  Programmer une présentation
                  <Calendar className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Dynamic Mobile Preview */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[600px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full"></div>
                    
                    <div className="pt-12 pb-8 px-6 h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Dr. Benali</div>
                            <div className="text-xs text-[#445066]">Dentiste</div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#445066]">Étape {currentStep + 1} sur 3</span>
                          <span className="text-sm text-[#3A7AFE] font-medium">
                            {Math.round(((currentStep + 1) / 3) * 100)}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Content based on current step */}
                      <div className="flex-1">
                        {currentStep === 0 && (
                          <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choisissez votre service</h3>
                            {[
                              { name: "Consultation", price: "300 MAD", time: "30 min" },
                              { name: "Détartrage", price: "200 MAD", time: "45 min" },
                              { name: "Urgence", price: "400 MAD", time: "60 min" }
                            ].map((service, i) => (
                              <div key={i} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                i === 0 ? 'border-[#3A7AFE] bg-[#3A7AFE]/5' : 'border-gray-200'
                              }`}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium text-gray-900">{service.name}</div>
                                    <div className="text-sm text-[#445066]">{service.time}</div>
                                  </div>
                                  <div className="text-[#3A7AFE] font-semibold">{service.price}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {currentStep === 1 && (
                          <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choisissez une date</h3>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {["Lun 15", "Mar 16", "Mer 17", "Jeu 18", "Ven 19", "Sam 20"].map((day, i) => (
                                <div key={i} className={`p-3 text-center text-xs border rounded-lg cursor-pointer transition-all ${
                                  i === 2 ? 'border-[#3A7AFE] bg-[#3A7AFE]/5 text-[#3A7AFE] font-semibold' : 'border-gray-200 text-[#445066]'
                                }`}>
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-medium text-gray-900">Créneaux disponibles</div>
                              {["09:00", "10:30", "14:00", "15:30"].map((time, i) => (
                                <div key={i} className={`p-3 border rounded-lg cursor-pointer text-center transition-all ${
                                  i === 1 ? 'border-[#3A7AFE] bg-[#3A7AFE]/5 text-[#3A7AFE] font-semibold' : 'border-gray-200 text-[#445066]'
                                }`}>
                                  {time}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="space-y-4 animate-fadeIn">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos informations</h3>
                            <div className="space-y-3">
                              <div>
                                <label className="text-xs text-[#445066] mb-1 block">Nom complet</label>
                                <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm">
                                  Amina Alami
                                </div>
                              </div>
                              <div>
                                <label className="text-xs text-[#445066] mb-1 block">Téléphone</label>
                                <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm">
                                  +212 6XX XXX XXX
                                </div>
                              </div>
                              <div className="p-4 bg-[#3BB587]/10 border border-[#3BB587]/20 rounded-lg mt-4">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="w-5 h-5 text-[#3BB587]" />
                                  <div>
                                    <div className="text-sm font-medium text-gray-900">Rendez-vous confirmé!</div>
                                    <div className="text-xs text-[#445066] mt-1">SMS de rappel envoyé</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom CTA */}
                      <div className="pt-6">
                        <div className="w-full bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] text-white p-4 rounded-xl text-center">
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
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FF9F45]/30 to-[#3A7AFE]/30 rounded-2xl blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#2AB8A6]/30 to-[#3BB587]/30 rounded-2xl blur-xl animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Walkthrough Section */}
      <section className="py-32 bg-gradient-to-br from-white via-[#F8FAFC] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7460EE]/5 via-white to-[#2AB8A6]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#7460EE]/10 text-[#7460EE] border-[#7460EE]/20 mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Visite guidée complète
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Découvrez votre future interface
            </h2>
            <p className="text-xl text-[#445066] max-w-3xl mx-auto">
              Explorez chaque fonctionnalité de votre tableau de bord. Navigation intuitive, 
              design moderne et données en temps réel.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Navigation Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Navigation</h3>
              <div className="space-y-4">
                {[
                  {
                    id: 0,
                    icon: BarChart3,
                    title: "Tableau de bord",
                    description: "Vue d'ensemble et métriques",
                    color: "#3A7AFE"
                  },
                  {
                    id: 1,
                    icon: Calendar,
                    title: "Rendez-vous",
                    description: "Planning et gestion RDV",
                    color: "#2AB8A6"
                  },
                  {
                    id: 2,
                    icon: Users,
                    title: "Patients",
                    description: "Dossiers et historique",
                    color: "#3BB587"
                  },
                  {
                    id: 3,
                    icon: Settings,
                    title: "Paramètres",
                    description: "Configuration cabinet",
                    color: "#7460EE"
                  }
                ].map((nav, index) => (
                  <div 
                    key={index}
                    className={`group p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      currentStep === nav.id 
                        ? 'border-[#7460EE] bg-gradient-to-r from-[#7460EE]/5 to-[#3A7AFE]/5 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => setCurrentStep(nav.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          currentStep === nav.id 
                            ? 'bg-white shadow-lg' 
                            : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}
                      >
                        <nav.icon 
                          className={`w-6 h-6 transition-colors ${
                            currentStep === nav.id ? 'text-[#7460EE]' : 'text-[#445066]'
                          }`} 
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold transition-colors ${
                          currentStep === nav.id ? 'text-[#7460EE]' : 'text-gray-900'
                        }`}>
                          {nav.title}
                        </h4>
                        <p className="text-sm text-[#445066]">{nav.description}</p>
                      </div>
                      {currentStep === nav.id && (
                        <div className="w-3 h-3 bg-[#7460EE] rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-8">
                <Button 
                  size="lg"
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gradient-to-r from-[#7460EE] to-[#3A7AFE] hover:from-[#7460EE]/90 hover:to-[#3A7AFE]/90 text-white px-6 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Monitor className="mr-3 w-5 h-5" />
                  Accéder au dashboard
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-[#7460EE]/30 text-[#7460EE] hover:bg-[#7460EE]/5 hover:border-[#7460EE] px-6 py-4 text-lg rounded-2xl"
                  onClick={() => navigate('/demo')}
                >
                  Voir côté patient
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* MacBook Dashboard Preview */}
            <div className="lg:col-span-2">
              <div className="relative mx-auto max-w-6xl">
                {/* MacBook Frame */}
                <div className="relative bg-gray-800 rounded-t-3xl p-3 shadow-2xl">
                  {/* MacBook Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-lg py-2 px-4 flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-sm bg-gray-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-sm"></div>
                      </div>
                      <div className="text-xs text-gray-300 font-mono">https://docliq.ma/dashboard</div>
                      <div className="flex-1"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full h-[650px] bg-white rounded-lg overflow-hidden relative shadow-inner">
                    {/* Dashboard Navigation Bar */}
                    <div className="bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h1 className="text-white font-bold text-lg">Docliq</h1>
                            <p className="text-white/80 text-sm">Dr. Amina Benali - Cabinet Dentaire</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Bell className="w-5 h-5 text-white/80" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF9F45] rounded-full animate-pulse"></div>
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">AB</span>
                          </div>
                        </div>
                      </div>

                      {/* Dashboard Navigation Tabs */}
                      <div className="flex space-x-1 mt-4 bg-white/10 rounded-xl p-1">
                        {[
                          { id: 0, icon: BarChart3, label: "Accueil" },
                          { id: 1, icon: Calendar, label: "RDV" },
                          { id: 2, icon: Users, label: "Patients" },
                          { id: 3, icon: Settings, label: "Paramètres" }
                        ].map((tab, index) => (
                          <div
                            key={index}
                            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                              currentStep === tab.id 
                                ? 'bg-white text-[#3A7AFE] shadow-md' 
                                : 'text-white/80 hover:bg-white/10'
                            }`}
                            onClick={() => setCurrentStep(tab.id)}
                          >
                            <tab.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{tab.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Content Area */}
                    <div className="p-6 h-full overflow-auto bg-[#F8FAFC]">
                      {/* Dashboard Home */}
                      {currentStep === 0 && (
                        <div className="space-y-6 animate-fadeIn">
                          {/* Welcome Header */}
                          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div>
                                <h2 className="text-2xl font-bold text-gray-900">Bonjour Dr. Benali!</h2>
                                <p className="text-[#445066] mt-2">Voici un résumé de votre journée</p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-[#445066]">Aujourd'hui</div>
                                <div className="text-lg font-semibold text-gray-900">Mardi 16 Mars 2024</div>
                              </div>
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-[#3A7AFE]/10 rounded-lg flex items-center justify-center">
                                  <Calendar className="w-5 h-5 text-[#3A7AFE]" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">{dashboardStats.appointments}</div>
                                  <div className="text-xs text-[#445066]">RDV ce mois</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-[#2AB8A6]/10 rounded-lg flex items-center justify-center">
                                  <Users className="w-5 h-5 text-[#2AB8A6]" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">{dashboardStats.patients}</div>
                                  <div className="text-xs text-[#445066]">Patients actifs</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-[#3BB587]/10 rounded-lg flex items-center justify-center">
                                  <CreditCard className="w-5 h-5 text-[#3BB587]" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">{(dashboardStats.revenue / 1000).toFixed(0)}k</div>
                                  <div className="text-xs text-[#445066]">Revenus (MAD)</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-[#FF9F45]/10 rounded-lg flex items-center justify-center">
                                  <Star className="w-5 h-5 text-[#FF9F45]" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                                  <div className="text-xs text-[#445066]">Satisfaction</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Today's Appointments */}
                          <div className="grid lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Rendez-vous aujourd'hui</h3>
                                <Badge className="bg-[#3BB587]/10 text-[#3BB587]">5 RDV</Badge>
                              </div>
                              <div className="space-y-3">
                                {[
                                  { time: "09:00", patient: "Mme. Alami", service: "Consultation", status: "confirmed" },
                                  { time: "10:30", patient: "M. Bennani", service: "Détartrage", status: "in-progress" },
                                  { time: "14:00", patient: "Mlle. Zahra", service: "Contrôle", status: "pending" },
                                  { time: "15:30", patient: "M. Hassan", service: "Urgence", status: "urgent" }
                                ].map((appointment, i) => (
                                  <div key={i} className="flex items-center space-x-4 p-3 bg-[#F8FAFC] rounded-xl">
                                    <div className="text-sm font-mono text-[#445066] w-12">{appointment.time}</div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900">{appointment.patient}</div>
                                      <div className="text-sm text-[#445066]">{appointment.service}</div>
                                    </div>
                                    <div className={`w-3 h-3 rounded-full ${
                                      appointment.status === 'confirmed' ? 'bg-[#3BB587]' :
                                      appointment.status === 'in-progress' ? 'bg-[#FF9F45] animate-pulse' :
                                      appointment.status === 'urgent' ? 'bg-red-500 animate-pulse' :
                                      'bg-[#3A7AFE]'
                                    }`}></div>
                                  </div>
                                ))}
                              </div>
                              <Button className="w-full mt-4 bg-[#3A7AFE] hover:bg-[#3A7AFE]/90 text-white rounded-xl">
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Nouveau rendez-vous
                              </Button>
                            </div>

                            {/* Quick Actions & Recent Activity */}
                            <div className="space-y-6">
                              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="p-3 bg-[#3A7AFE]/5 border border-[#3A7AFE]/20 rounded-xl cursor-pointer hover:bg-[#3A7AFE]/10 transition-colors">
                                    <UserPlus className="w-5 h-5 text-[#3A7AFE] mb-2" />
                                    <div className="text-sm font-medium text-gray-900">Nouveau patient</div>
                                  </div>
                                  <div className="p-3 bg-[#2AB8A6]/5 border border-[#2AB8A6]/20 rounded-xl cursor-pointer hover:bg-[#2AB8A6]/10 transition-colors">
                                    <Calendar className="w-5 h-5 text-[#2AB8A6] mb-2" />
                                    <div className="text-sm font-medium text-gray-900">Planifier RDV</div>
                                  </div>
                                  <div className="p-3 bg-[#3BB587]/5 border border-[#3BB587]/20 rounded-xl cursor-pointer hover:bg-[#3BB587]/10 transition-colors">
                                    <CreditCard className="w-5 h-5 text-[#3BB587] mb-2" />
                                    <div className="text-sm font-medium text-gray-900">Nouvelle facture</div>
                                  </div>
                                  <div className="p-3 bg-[#7460EE]/5 border border-[#7460EE]/20 rounded-xl cursor-pointer hover:bg-[#7460EE]/10 transition-colors">
                                    <BarChart3 className="w-5 h-5 text-[#7460EE] mb-2" />
                                    <div className="text-sm font-medium text-gray-900">Rapports</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* MacBook Bottom */}
                <div className="bg-gray-600 h-4 rounded-b-3xl mx-8"></div>
                <div className="bg-gray-700 h-2 rounded-b-2xl mx-12"></div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#7460EE]/20 to-[#3A7AFE]/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#2AB8A6]/20 to-[#3BB587]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-[#7460EE]/10 via-[#3A7AFE]/10 to-[#2AB8A6]/10 rounded-3xl p-8 border border-[#7460EE]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à digitaliser votre cabinet ?
              </h3>
              <p className="text-[#445066] mb-6 max-w-2xl mx-auto">
                Rejoignez plus de 2500 praticiens marocains qui font confiance à Docliq 
                pour moderniser leur pratique médicale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-[#7460EE] to-[#3A7AFE] hover:from-[#7460EE]/90 hover:to-[#3A7AFE]/90 text-white px-10 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Zap className="mr-3 w-5 h-5" />
                  Commencer l'essai gratuit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#7460EE]/30 text-[#7460EE] hover:bg-[#7460EE]/5 hover:border-[#7460EE] px-10 py-4 text-lg rounded-2xl"
                >
                  Demander une démo personnalisée
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3A7AFE]/5 to-[#7460EE]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#2AB8A6]/5 to-[#3BB587]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-white/80 text-[#3A7AFE] border-[#3A7AFE]/20 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              +2500 praticiens satisfaits
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Ils ont révolutionné leur cabinet
            </h2>
            <p className="text-xl text-[#445066] max-w-2xl mx-auto">
              De Casablanca à Marrakech, découvrez comment les médecins marocains 
              modernisent leur pratique avec Docliq.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-20">
            <Card className="border-0 shadow-2xl rounded-3xl p-12 bg-gradient-to-br from-white via-white to-[#F8FAFC] max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] rounded-3xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                      AB
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Dr. Amina Benali</h3>
                    <p className="text-[#445066]">Dentiste • Casablanca</p>
                    <div className="flex items-center justify-center mt-3 space-x-1 text-[#FF9F45]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-6">
                    <blockquote className="text-2xl text-gray-900 leading-relaxed">
                      "En 6 mois, j'ai réduit de 80% le temps administratif et doublé ma patientèle. 
                      Mes patients adorent la facilité de prise de rendez-vous."
                    </blockquote>
                    
                    <div className="grid grid-cols-3 gap-6 pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#3A7AFE]">+127%</div>
                        <div className="text-sm text-[#445066]">Nouveaux patients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#2AB8A6]">-80%</div>
                        <div className="text-sm text-[#445066]">Temps admin</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#3BB587]">98%</div>
                        <div className="text-sm text-[#445066]">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Youssef Alami",
                specialty: "Généraliste • Rabat",
                quote: "Configuration en 10 minutes, formation de l'équipe en 1 heure. Je recommande à tous mes collègues.",
                avatar: "YA",
                metric: "10min",
                metricLabel: "Installation"
              },
              {
                name: "Dr. Fatima Zahra",
                specialty: "Pédiatre • Marrakech",
                quote: "Les parents apprécient les rappels SMS. Moins d'absences, meilleure organisation.",
                avatar: "FZ",
                metric: "-60%",
                metricLabel: "Absences"
              },
              {
                name: "Dr. Omar Bennani",
                specialty: "Dentiste • Fès",
                quote: "Interface claire, support en français impeccable. Exactement ce qu'il nous fallait au Maroc.",
                avatar: "OB",
                metric: "24/7",
                metricLabel: "Support"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl rounded-3xl p-8 bg-white transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-[#445066] text-sm">{testimonial.specialty}</p>
                      <div className="flex items-center mt-2 space-x-1 text-[#FF9F45]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-[#445066] leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-2xl">
                    <div className="text-2xl font-bold text-[#3A7AFE]">{testimonial.metric}</div>
                    <div className="text-sm text-[#445066]">{testimonial.metricLabel}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "2,847", label: "Praticiens actifs" },
                { number: "450k+", label: "Rendez-vous gérés" },
                { number: "98.7%", label: "Satisfaction client" },
                { number: "12", label: "Villes couvertes" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-[#445066]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#3A7AFE]/10 to-[#7460EE]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#2AB8A6]/10 to-[#3BB587]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#3A7AFE]/10 text-[#3A7AFE] border-[#3A7AFE]/20 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Essai gratuit 14 jours
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Commencez dès aujourd'hui
            </h2>
            <p className="text-xl text-[#445066] max-w-3xl mx-auto">
              Tarification simple et transparente. Pas de frais cachés, pas d'engagement long terme. 
              Annulation possible à tout moment.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white via-white to-[#F8FAFC]">
              <div className="bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] p-8 text-center text-white">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-semibold">Docliq Pro</span>
                </div>
                <p className="text-white/90">La solution complète pour votre cabinet</p>
              </div>
              
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center lg:justify-start space-x-3">
                        <span className="text-6xl font-bold text-gray-900">199</span>
                        <div>
                          <span className="text-xl text-[#445066]">MAD</span>
                          <div className="text-sm text-[#445066]">par mois</div>
                        </div>
                      </div>
                      <p className="text-[#445066] mt-2">
                        Soit seulement <span className="font-semibold text-[#3A7AFE]">6,60 MAD/jour</span>
                      </p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="p-4 bg-[#3BB587]/10 border border-[#3BB587]/20 rounded-2xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[#3BB587] rounded-xl flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Essai gratuit 14 jours</div>
                            <div className="text-sm text-[#445066]">Testez toutes les fonctionnalités</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg"
                          onClick={() => navigate('/register')}
                          className="flex-1 bg-gradient-to-r from-[#3A7AFE] to-[#7460EE] hover:from-[#3A7AFE]/90 hover:to-[#7460EE]/90 text-white px-8 py-6 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                          Commencer l'essai gratuit
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-[#445066]">
                          ✓ Aucune carte de crédit requise • ✓ Configuration en 15 minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      Tout inclus, sans limite :
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { icon: Calendar, text: "Rendez-vous illimités", highlight: true },
                        { icon: Users, text: "Patients illimités", highlight: true },
                        { icon: CreditCard, text: "Facturation intégrée", highlight: false },
                        { icon: MessageSquare, text: "SMS et emails automatiques", highlight: false },
                        { icon: Shield, text: "Sécurité et sauvegardes", highlight: false },
                        { icon: Phone, text: "Support en français 7j/7", highlight: false },
                        { icon: Smartphone, text: "Applications mobile et web", highlight: false },
                        { icon: Globe, text: "Lien de réservation personnalisé", highlight: false }
                      ].map((feature, index) => (
                        <div 
                          key={index}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                            feature.highlight 
                              ? 'bg-gradient-to-r from-[#3A7AFE]/5 to-[#7460EE]/5 border border-[#3A7AFE]/20' 
                              : 'hover:bg-[#F8FAFC]'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            feature.highlight 
                              ? 'bg-[#3A7AFE] text-white' 
                              : 'bg-[#F8FAFC] text-[#3A7AFE]'
                          }`}>
                            <feature.icon className="w-4 h-4" />
                          </div>
                          <span className={`${feature.highlight ? 'font-semibold text-gray-900' : 'text-[#445066]'}`}>
                            {feature.text}
                          </span>
                          {feature.highlight && (
                            <Badge className="bg-[#3A7AFE] text-white text-xs">Populaire</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Sécurisé",
                description: "Données chiffrées et conformes RGPD"
              },
              {
                icon: Zap,
                title: "Installation rapide",
                description: "Opérationnel en moins de 15 minutes"
              },
              {
                icon: Phone,
                title: "Support dédié",
                description: "Équipe francophone disponible 7j/7"
              },
              {
                icon: Heart,
                title: "Fait pour le Maroc",
                description: "Interface et support adaptés localement"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#3A7AFE]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-[#445066]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3A7AFE] to-[#7460EE] rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-semibold">Docliq</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La plateforme de gestion médicale pensée pour les praticiens marocains.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Produit</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">Fonctionnalités</p>
                <p className="hover:text-white cursor-pointer transition-colors">Tarifs</p>
                <p className="hover:text-white cursor-pointer transition-colors">Démo</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">Centre d'aide</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-white cursor-pointer transition-colors">Formation</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Légal</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white cursor-pointer transition-colors">Mentions légales</p>
                <p className="hover:text-white cursor-pointer transition-colors">Confidentialité</p>
                <p className="hover:text-white cursor-pointer transition-colors">CGU</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Docliq. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
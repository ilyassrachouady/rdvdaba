import { Link } from 'react-router-dom';

export default function FooterSEO() {
  return (
    <div className="relative bg-slate-50/50 border-t border-slate-200/50">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-10 md:py-12 lg:py-14">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-docliq-text mb-2">
            Solutions Docliq pour professionnels de santé au Maroc
          </h2>
          <p className="text-sm md:text-base text-[#6A6A6A]">
            Logiciel médical adapté à chaque spécialité et disponible dans toutes les villes du Maroc
          </p>
        </div>

        {/* SEO Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          
          {/* Column 1: Par Spécialité */}
          <div>
            <h3 className="text-sm font-bold text-docliq-text uppercase tracking-wide mb-4">
              Par Spécialité
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/dentiste-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel pour dentistes
                </Link>
              </li>
              <li>
                <Link 
                  to="/medecin-generaliste-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médecin généraliste
                </Link>
              </li>
              <li>
                <Link 
                  to="/dermatologue-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel dermatologue
                </Link>
              </li>
              <li>
                <Link 
                  to="/cardiologue-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel cardiologue
                </Link>
              </li>
              <li>
                <Link 
                  to="/pediatre-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel pédiatre
                </Link>
              </li>
              <li>
                <Link 
                  to="/kinesitherapeute-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel kinésithérapeute
                </Link>
              </li>
              <li>
                <Link 
                  to="/ophtalmologue-maroc"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel ophtalmologue
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Par Fonctionnalité */}
          <div>
            <h3 className="text-sm font-bold text-docliq-text uppercase tracking-wide mb-4">
              Par Fonctionnalité
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/prise-rendez-vous-medical-en-ligne"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Prise de rendez-vous en ligne
                </Link>
              </li>
              <li>
                <Link 
                  to="/agenda-medical-intelligent-cloud" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Agenda médical intelligent
                </Link>
              </li>
              <li>
                <Link 
                  to="/dossiers-patients-securises-cloud"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Dossiers patients sécurisés
                </Link>
              </li>
              <li>
                <Link 
                  to="/application-medico-administrative-maroc" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Application médico-administrative
                </Link>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Facturation médicale cloud
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Gestion cabinet moderne
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Par Ville */}
          <div>
            <h3 className="text-sm font-bold text-docliq-text uppercase tracking-wide mb-4">
              Par Ville
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/logiciel-medical-casablanca"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médical Casablanca
                </Link>
              </li>
              <li>
                <Link 
                  to="/logiciel-medical-rabat"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médical Rabat
                </Link>
              </li>
              <li>
                <Link 
                  to="/logiciel-medical-marrakech"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médical Marrakech
                </Link>
              </li>
              <li>
                <Link 
                  to="/logiciel-medical-tanger"
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médical Tanger
                </Link>
              </li>
              <li>
                <Link 
                  to="/logiciel-medecin-tanger-agadir" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Logiciel médical Agadir
                </Link>
              </li>
              <li>
                <a 
                  href="#platform" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Solution cloud tout Maroc
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Ressources */}
          <div>
            <h3 className="text-sm font-bold text-docliq-text uppercase tracking-wide mb-4">
              Ressources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="#demo" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Démo interactive gratuite
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Tarifs et abonnements
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Témoignages médecins
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Guide gestion cabinet
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Fonctionnalités complètes
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@docliq.ma" 
                  className="text-sm text-[#4A4A4A] hover:text-docliq-blue transition-colors duration-200 hover:underline"
                >
                  Support & Formation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom disclaimer */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-slate-200/50 text-center">
          <p className="text-xs md:text-sm text-[#6A6A6A] leading-relaxed max-w-4xl mx-auto">
            Docliq est la solution de gestion médicale la plus complète au Maroc, utilisée par plus de 500 professionnels de santé dans tout le royaume. Que vous soyez dentiste, médecin généraliste, spécialiste ou paramédical, notre logiciel cloud s'adapte à votre pratique avec une interface moderne, sécurisée et conforme RGPD.
          </p>
        </div>
      </div>
    </div>
  );
}

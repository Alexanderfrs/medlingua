import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import AppHeader from "@/components/layout/AppHeader";
import { Stethoscope, Shield, Users, Globe, GraduationCap, Heart, Award, CheckCircle, ArrowRight, Wifi, Clock, FileCheck, Star } from "lucide-react";
import SideNavigator from "@/components/navigation/SideNavigator";
interface LandingPageProps {
  onLogin?: () => void;
}
const LandingPage: React.FC<LandingPageProps> = ({
  onLogin
}) => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register');
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const sections = [{
    id: "hero",
    label: "Start"
  }, {
    id: "features",
    label: "Funktionen"
  }, {
    id: "pricing",
    label: "Preise"
  }];
  return <div className="min-h-screen flex flex-col relative">
      <AppHeader onLogin={handleLogin} />
      
      <SideNavigator sections={sections} />
      
      <main className="flex-grow pt-24">
        <section id="hero" className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-800 leading-tight">
                  Medizinisches Deutsch für <span className="text-medical-600">alle Sprachniveaus</span>
                </h1>
                <p className="text-lg text-neutral-600 mb-8 max-w-lg">
                  Die spezialisierte Sprachlern-Plattform für medizinisches Fachpersonal. Verbessere deine Kommunikation im Gesundheitswesen - von A1 bis C1.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-medical-500 hover:bg-medical-600" onClick={handleRegister}>
                    Kostenlos starten
                  </Button>
                  <a href="#features">
                    <Button size="lg" variant="outline">
                      Mehr erfahren
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Medizinisches Personal in Deutschland" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-900/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <p className="text-sm font-medium text-neutral-700">
                      "Mit MedLingua konnte ich meine Sprachbarrieren im medizinischen Alltag überwinden und fühle mich nun viel sicherer in der Kommunikation mit Patienten und Kollegen."
                    </p>
                    <div className="mt-2 flex items-center">
                      <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Elena Petrescu" className="w-8 h-8 rounded-full mr-2" />
                      <div>
                        <p className="text-xs font-semibold">Elena Petrescu</p>
                        <p className="text-xs text-neutral-500">Pflegekraft aus Rumänien</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="py-16 bg-neutral-50 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                Spezialisiert für den medizinischen Bereich
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                MedLingua unterscheidet sich von allgemeinen Sprachlern-Apps durch den Fokus auf den medizinischen Kontext.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Medizinisches Fachvokabular</h3>
                <p className="text-neutral-600">
                  Lerne über 2.000 medizinische Fachbegriffe, Diagnosen und Redewendungen, die im Klinikalltag wirklich relevant sind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Praxisnahe Dialogszenarien</h3>
                <p className="text-neutral-600">
                  Übe mit realistischen Gesprächssituationen aus dem Krankenhausalltag - von der Patientenaufnahme bis zur Visite.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Für alle Sprachniveaus</h3>
                <p className="text-neutral-600">
                  Maßgeschneiderte Inhalte für jedes Sprachniveau von A1 bis C1 - du kannst sofort starten, egal wo du stehst.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mit Experten entwickelt</h3>
                <p className="text-neutral-600">
                  Alle Inhalte wurden in Zusammenarbeit mit Ärzten, Pflegekräften und Sprachlehrern entwickelt und geprüft.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Für Pflegekräfte optimiert</h3>
                <p className="text-neutral-600">
                  Besonderer Fokus auf die sprachlichen Bedürfnisse von internationalen Pflegekräften in Deutschland.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zertifikatsanerkennung</h3>
                <p className="text-neutral-600">
                  Optimale Vorbereitung auf Sprachprüfungen für die berufliche Anerkennung im deutschen Gesundheitswesen.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-xl shadow-md border border-neutral-200">
              <h3 className="text-xl font-bold mb-4 text-center">Im Vergleich zu allgemeinen Sprachlern-Apps</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-center">Allgemeine Apps<br />(Duolingo, Babbel, usw.)</th>
                      <th className="py-3 px-4 text-center bg-medical-50 font-medium">MedLingua</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">Medizinisches Fachvokabular</td>
                      <td className="py-3 px-4 text-center">Begrenzt oder nicht vorhanden</td>
                      <td className="py-3 px-4 text-center bg-medical-50 font-medium">Umfassend & spezialisiert</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">Praxisnahe Dialogszenarien</td>
                      <td className="py-3 px-4 text-center">Allgemeine Alltagsgespräche</td>
                      <td className="py-3 px-4 text-center bg-medical-50 font-medium">Realistische medizinische Situationen</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">Lernziel</td>
                      <td className="py-3 px-4 text-center">Allgemeine Sprachkenntnisse</td>
                      <td className="py-3 px-4 text-center bg-medical-50 font-medium">Berufsbezogene Kommunikation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Unterstützung von Fachkräften</td>
                      <td className="py-3 px-4 text-center">Minimal</td>
                      <td className="py-3 px-4 text-center bg-medical-50 font-medium">Spezifische Vorbereitung auf den Berufsalltag</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <section id="pricing" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                Einfache und transparente Preise
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Wähle den Plan, der am besten zu deinen Lernzielen passt.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Basis</h3>
                  <p className="text-neutral-500 mt-1">Für Einsteiger</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Kostenlos</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Grundlegendes medizinisches Vokabular</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5 Dialogszenarien pro Monat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fortschrittsübersicht</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={handleRegister}>
                  Kostenlos starten
                </Button>
              </div>
              
              <div className="bg-medical-50 p-6 rounded-xl shadow-md border border-medical-200 relative">
                <div className="absolute -top-3 right-4 bg-medical-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Empfohlen
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Professional</h3>
                  <p className="text-neutral-500 mt-1">Für aktive Lerner</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">€4,99</span>
                  <span className="text-neutral-500"> / Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vollständiger Zugriff auf das Fachvokabular</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unbegrenzte Dialogszenarien</span>
                  </li>
                  <li className="flex items-start">
                    <Wifi className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Offline-Modus für unterwegs</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>FSP-Prüfungsvorbereitung mit Zeitoptionen</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detaillierte Ergebnisanalysen</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>1 Monat gratis nach 3-Monats-Streak</span>
                  </li>
                </ul>
                <Button className="w-full bg-medical-500 hover:bg-medical-600" onClick={handleRegister}>
                  Jetzt starten
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Team</h3>
                  <p className="text-neutral-500 mt-1">Für Institutionen</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">€399</span>
                  <span className="text-neutral-500"> / Jahr</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Alles aus Professional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bis zu 10 Benutzerkonten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Administratorbereich</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fortschrittsberichte für das Team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mündliche Prüfungssimulationen</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full" variant="outline">
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="bg-medical-500 p-4 text-white text-center">
                <h3 className="text-xl font-semibold">Treue-Programm: 3+1</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-medical-50 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Award className="h-8 w-8 text-medical-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Nutze MedLingua 3 Monate regelmäßig</h4>
                    <p className="text-neutral-600">Und erhalte den 4. Monat Premium kostenlos!</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-center font-medium">90 Tage Streak</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-center font-medium">= 1 Monat Premium gratis</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-center font-medium">Unbegrenzt wiederholbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-medical-600 to-medical-500 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit, deine medizinischen Sprachkenntnisse zu verbessern?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Starte noch heute und mache dich fit für deinen beruflichen Alltag im deutschen Gesundheitswesen.
              </p>
              <Button size="lg" className="bg-white text-medical-600 hover:bg-white/90" onClick={handleRegister}>
                Kostenlos registrieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default LandingPage;
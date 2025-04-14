import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FinancementPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-7xl space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <div className="bg-orange-100 text-secondary-dark font-medium py-1 px-3 rounded-full w-fit mx-auto mb-4">
            Accessible à tous
          </div>
          <h1 className="text-4xl font-bold mb-6">Financer Votre Formation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chez InfoWeb France, nous croyons que le financement ne devrait jamais être un obstacle à votre reconversion professionnelle. Découvrez nos multiples solutions pour financer votre formation.
          </p>
        </section>
        
        {/* Overview Cards */}
        <section className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-light-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">CPF</h3>
              <p className="text-gray-600">
                Utilisez votre Compte Personnel de Formation pour financer tout ou partie de votre formation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-light-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entreprise</h3>
              <p className="text-gray-600">
                Financements par votre employeur dans le cadre de la formation continue ou du plan de développement des compétences.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-light-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aides Publiques</h3>
              <p className="text-gray-600">
                France Travail, régions, départements... Plusieurs dispositifs publics peuvent vous aider à financer votre formation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-light-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financement Personnel</h3>
              <p className="text-gray-600">
                Solutions de paiement échelonné et réductions possibles pour un financement à votre rythme.
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Funding Details Tabs */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Options de Financement Détaillées</h2>
          <Tabs defaultValue="cpf" className="w-full">
            <TabsList className="overflow-x-auto flex gap-2 sm:grid sm:w-full sm:grid-cols-4 bg-white rounded-lg p-1 sm:pl-1 pl-64 bg-gray-50">
              <TabsTrigger
                value="cpf"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                CPF
              </TabsTrigger>
              <TabsTrigger
                value="entreprise"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Financement Entreprise
              </TabsTrigger>
              <TabsTrigger
                value="public"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Aides Publiques
              </TabsTrigger>
              <TabsTrigger
                value="personnel"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Financement Personnel
              </TabsTrigger>
            </TabsList>

            {/* CPF */}
            <TabsContent value="cpf" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Compte Personnel de Formation (CPF)</h3>
                  <p className="text-gray-600 mb-4">
                    Le CPF vous permet de cumuler jusqu'à 5000€ pour financer des formations certifiantes. Toutes nos formations sont éligibles au CPF, vous permettant de mobiliser vos droits pour votre reconversion professionnelle.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Consultez vos droits CPF</h4>
                      <p className="text-gray-600">Connectez-vous sur moncompteformation.gouv.fr pour connaître le montant disponible sur votre compte.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Abondement possible</h4>
                      <p className="text-gray-600">Si vos droits CPF ne couvrent pas la totalité du coût, un abondement peut être demandé à France Travail ou à votre employeur.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Accompagnement aux démarches</h4>
                      <p className="text-gray-600">Notre équipe vous accompagne pour activer votre compte CPF et réaliser votre inscription.</p>
                    </div>
                  </div>
                  <a
                      href="https://of.moncompteformation.gouv.fr/espace-public/aide/quelles-sont-les-offres-eligibles-au-compte-personnel-de-formation-cpf"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                  <Button className="bg-secondary hover:bg-secondary-dark mt-6">
                    Vérifier l'éligibilité de votre formation
                  </Button>
                  </a>
                </div>
                
                <div className="md:w-1/2 bg-light-bg rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Comment utiliser votre CPF ?</h4>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium">Créez ou connectez-vous à votre compte</h5>
                        <p className="text-sm text-gray-600">Rendez-vous sur moncompteformation.gouv.fr ou téléchargez l'application mobile "Mon Compte Formation".</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium">Recherchez notre formation</h5>
                        <p className="text-sm text-gray-600">Utilisez la barre de recherche pour trouver la formation InfoWeb France qui vous intéresse.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium">Inscrivez-vous directement</h5>
                        <p className="text-sm text-gray-600">Suivez les étapes d'inscription et validez votre dossier. Nous serons notifiés et prendrons contact avec vous.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium">Financez le reste si nécessaire</h5>
                        <p className="text-sm text-gray-600">Si vos droits ne couvrent pas l'intégralité, vous pourrez compléter par un autre mode de financement.</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-sm">
                    <strong>Bon à savoir :</strong> Votre CPF est crédité de 500€ par an (plafonné à 5000€) pour un temps plein, au prorata pour un temps partiel.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Financement Entreprise */}
            <TabsContent value="entreprise" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Financements par votre entreprise</h3>
                  <p className="text-gray-600 mb-4">
                    Votre formation peut être prise en charge par votre employeur actuel dans le cadre de plusieurs dispositifs. C'est une solution avantageuse pour développer vos compétences tout en restant dans votre entreprise.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Plan de développement des compétences</h4>
                      <p className="text-gray-600">
                        L'entreprise peut financer votre formation dans le cadre de son plan de développement des compétences, généralement géré par le service RH ou formation.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">FNE-Formation</h4>
                      <p className="text-gray-600">
                        Pour les entreprises en difficulté, le Fonds National pour l'Emploi peut prendre en charge jusqu'à 100% des coûts pédagogiques.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Pro-A (reconversion ou promotion par alternance)</h4>
                      <p className="text-gray-600">
                        Ce dispositif permet aux salariés de suivre une formation en alternance pour changer de métier tout en conservant leur contrat de travail.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-light-bg rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">Le rôle des OPCO</h4>
                    <p className="text-gray-600 mb-4">
                      Les Opérateurs de Compétences (OPCO) sont les organismes qui financent la formation professionnelle. Votre entreprise verse des cotisations à un OPCO selon son secteur d'activité.
                    </p>
                    <p className="text-gray-600">
                      InfoWeb France est partenaire des principaux OPCO et peut vous aider à monter votre dossier de financement :
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>ATLAS (services financiers et conseil)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>OPCO Entreprises de proximité</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>AKTO (services à forte intensité de main-d'œuvre)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>OCAPIAT (agriculture et agroalimentaire)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>OPCO 2i (industrie)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-secondary rounded-lg bg-secondary/5">
                    <h4 className="font-semibold mb-4">Comment convaincre votre employeur ?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">1.</span>
                        <span>Préparez un argumentaire sur les bénéfices de la formation pour l'entreprise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">2.</span>
                        <span>Proposez un calendrier compatible avec vos missions actuelles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">3.</span>
                        <span>Renseignez-vous sur les dispositifs de financement disponibles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">4.</span>
                        <span>Contactez-nous pour obtenir un devis et programme détaillé</span>
                      </li>
                    </ul>
                    <a href="/contact">
                    <Button className="w-full mt-4 bg-secondary hover:bg-secondary-dark">
                      Recevoir un dossier
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Aides Publiques */}
            <TabsContent value="public" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Les aides publiques pour votre formation</h3>
                  <p className="text-gray-600 mb-4">
                    Si vous êtes demandeur d'emploi ou dans une situation spécifique, plusieurs dispositifs d'aide publique peuvent financer votre formation.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-lg mb-2 flex items-center">
                        <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        France Travail (ex-Pôle Emploi)
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Plusieurs dispositifs existent pour les demandeurs d'emploi :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>L'Aide Individuelle à la Formation (AIF)</li>
                        <li>L'Action de Formation Conventionnée (AFC)</li>
                        <li>La Préparation Opérationnelle à l'Emploi (POE)</li>
                      </ul>
                      <p className="text-sm text-gray-500 mt-2">
                        Consultez votre conseiller France Travail pour vérifier votre éligibilité.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-lg mb-2 flex items-center">
                        <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Conseils régionaux et départementaux
                      </h4>
                      <p className="text-gray-600">
                        Les régions proposent souvent des aides à la formation professionnelle, notamment pour les demandeurs d'emploi et les jeunes. Chaque région dispose de ses propres dispositifs et critères d'éligibilité.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-lg mb-2 flex items-center">
                        <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Aides spécifiques
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Des aides existent pour des publics spécifiques :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>AGEFIPH pour les personnes en situation de handicap</li>
                        <li>Mission locale pour les jeunes de moins de 26 ans</li>
                        <li>OPACIF pour les anciens titulaires de CDD</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-light-bg rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">L'allocation de retour à l'emploi formation (AREF)</h4>
                    <p className="text-gray-600 mb-4">
                      Si vous êtes indemnisé par France Travail et que votre formation est validée par votre conseiller, vous pouvez continuer à percevoir vos allocations pendant votre formation sous forme d'AREF.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Conditions principales :
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Avoir des droits ouverts à l'allocation chômage</li>
                      <li>Formation validée dans votre projet personnalisé d'accès à l'emploi</li>
                      <li>Durée minimale de formation de 40 heures</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Simulateur d'aide au financement</h4>
                    <p className="text-gray-600 mb-4">
                      En fonction de votre situation, plusieurs financements peuvent être mobilisés. Notre conseiller en formation vous aidera à optimiser votre plan de financement.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Votre statut</label>
                        <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                          <option>Salarié(e)</option>
                          <option>Demandeur d'emploi</option>
                          <option>Indépendant(e)</option>
                          <option>Étudiant(e)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Formation visée</label>
                        <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                          <option>Développement Web Full Stack</option>
                          <option>Data Science & Intelligence Artificielle</option>
                          <option>UX/UI Design</option>
                          <option>Digital marketing</option>
                          <option>Cybersécurité</option>
                          <option>Business Analytics</option>
                          <option>Quality Assurance</option>
                          <option>Fondamentaux JavaScript</option>
                          <option>Analyse de données avec Python</option>
                          <option>Concepteur Développeur d'Application</option>

                        </select>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-secondary hover:bg-secondary-dark">
                      Simuler mes financements
                    </Button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Ou contactez directement un conseiller au 01 23 45 67 89
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Financement Personnel */}
            <TabsContent value="personnel" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Solutions de financement personnel</h3>
                  <p className="text-gray-600 mb-4">
                    Si vous ne pouvez pas bénéficier d'un financement externe ou souhaitez compléter une prise en charge partielle, nous vous proposons des solutions adaptées à votre budget.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div className="flex items-start">
                      <div className="bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Paiement en plusieurs fois sans frais</h4>
                        <p className="text-gray-600">
                          Étalez le coût de votre formation sur 3, 6, 10 ou 12 mois sans frais supplémentaires, selon la formation choisie.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Réductions spéciales</h4>
                        <p className="text-gray-600">
                          Nous proposons des tarifs préférentiels pour les étudiants, les demandeurs d'emploi, et lors de nos périodes promotionnelles.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                    <div className="bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Garantie satisfait ou remboursé</h4>
                        <p className="text-gray-600">
                          Si vous n'êtes pas satisfait après les premières sessions de formation, nous vous remboursons intégralement sans conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="bg-secondary/10 p-4 rounded-lg mt-6">
                    <strong>Notre engagement :</strong> Nous sommes convaincus que l'argent ne devrait jamais être un obstacle à votre projet de reconversion. Contactez-nous pour trouver la solution qui vous convient le mieux.
                  </p>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-light-bg p-6">
                      <h4 className="font-semibold text-lg mb-2">Exemples de financements personnels</h4>
                      <p className="text-gray-600">
                        Nos formations sont accessibles avec des modalités de paiement adaptées à chaque budget.
                      </p>
                    </div>
                    
                    <div className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="bootcamp">
                          <AccordionTrigger className="text-left">
                            Bootcamp Développeur Web Full Stack (3990€)
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 text-gray-600">
                              <p><strong>Option 1 :</strong> Paiement en 12 fois sans frais (332,50€/mois)</p>
                              <p><strong>Option 2 :</strong> Réduction de 10% pour paiement comptant (3591€)</p>
                              <p><strong>Option 3 :</strong> Complément CPF + Paiement du reste (personnalisé)</p>
                              <p className="text-sm text-gray-500 mt-2">
                                Un acompte de 30% est demandé à l'inscription, le solde avant le début de la formation.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="data-science">
                          <AccordionTrigger className="text-left">
                            Formation Data Science (4990€)
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 text-gray-600">
                              <p><strong>Option 1 :</strong> Paiement en 12 fois sans frais (415,83€/mois)</p>
                              <p><strong>Option 2 :</strong> Réduction de 15% pour paiement comptant (4241,50€)</p>
                              <p><strong>Option 3 :</strong> Complément CPF + Paiement du reste (personnalisé)</p>
                              <p className="text-sm text-gray-500 mt-2">
                                Un acompte de 30% est demandé à l'inscription, le solde avant le début de la formation.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="ux-design">
                          <AccordionTrigger className="text-left">
                            UX/UI Design (2990€)
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 text-gray-600">
                              <p><strong>Option 1 :</strong> Paiement en 6 fois sans frais (498,33€/mois)</p>
                              <p><strong>Option 2 :</strong> Réduction de 10% pour paiement comptant (2691€)</p>
                              <p><strong>Option 3 :</strong> Complément CPF + Paiement du reste (personnalisé)</p>
                              <p className="text-sm text-gray-500 mt-2">
                                Un acompte de 30% est demandé à l'inscription, le solde avant le début de la formation.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    <div className="p-6 border-t">
                      <a href="/formations">
                      <Button className="w-full bg-secondary hover:bg-secondary-dark">
                        Catalogue de formations
                      </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes sur le financement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Puis-je cumuler plusieurs financements pour ma formation ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Oui, il est tout à fait possible de combiner plusieurs sources de financement pour couvrir le coût total de votre formation. Par exemple, vous pouvez utiliser votre CPF et compléter par un financement personnel ou une aide de France Travail. Notre équipe vous accompagne pour optimiser votre plan de financement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Comment savoir si ma formation est éligible au CPF ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Toutes nos formations certifiantes sont éligibles au CPF. Pour vérifier, vous pouvez consulter le site moncompteformation.gouv.fr et rechercher notre organisme "InfoWeb France" ou le titre visé par la formation. Vous y trouverez également le montant pris en charge.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Combien de temps avant le début de la formation dois-je faire ma demande de financement ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Nous recommandons d'initier vos démarches de financement au moins 1 à 2 mois avant le début de la formation. Pour le CPF, comptez environ 15 jours pour une validation. Pour les financements via France Travail ou d'autres organismes, les délais peuvent être plus longs (1 à 2 mois). Notre équipe vous accompagne dans toutes vos démarches pour respecter ces délais.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Puis-je bénéficier d'une aide si je suis en poste et souhaite me reconvertir ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Oui, plusieurs dispositifs existent pour les salariés en reconversion : le CPF, le projet de transition professionnelle (ex-CIF), ou encore le dispositif Pro-A. Vous pouvez également vous renseigner auprès de votre employeur sur la possibilité d'un financement dans le cadre du plan de développement des compétences de l'entreprise.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Les formations sont-elles éligibles au crédit d'impôt formation ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Si vous êtes travailleur indépendant ou dirigeant d'entreprise, vous pouvez bénéficier d'un crédit d'impôt pour vos dépenses de formation. Ce crédit est égal au nombre d'heures de formation multiplié par le SMIC horaire (dans la limite de 40 heures par an). Nous vous fournissons tous les justificatifs nécessaires pour votre déclaration fiscale.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Que se passe-t-il si j'abandonne ma formation en cours ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    En cas d'abandon pour force majeure (maladie, accident...), nous étudions chaque situation individuellement. Pour un abandon pour convenance personnelle, les modalités de remboursement dépendent du financeur et du moment de l'abandon. Toutes ces conditions sont détaillées dans nos conditions générales de vente que nous vous invitons à consulter.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Les formations peuvent-elles être financées pour les travailleurs indépendants ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Oui, en tant que travailleur indépendant, vous cotisez à un fonds d'assurance formation (FAF) qui peut prendre en charge tout ou partie de votre formation. Selon votre activité, vous dépendez d'un FAF spécifique : AGEFICE (commerçants), FIFPL (professions libérales), FAFCEA (artisans)... Vous pouvez également utiliser votre CPF ou opter pour un financement personnel.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Proposez-vous des facilités de paiement pour les financements personnels ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Oui, nous proposons plusieurs options pour faciliter votre investissement : paiement en plusieurs fois sans frais (jusqu'à 12 mensualités), réductions pour paiement comptant, tarifs préférentiels pour certains publics. N'hésitez pas à échanger avec notre service administratif pour trouver la solution la plus adaptée à votre situation financière.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full bg-light-bg rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour financer votre formation ?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe de conseillers est à votre disposition pour vous aider à trouver la meilleure solution de financement adaptée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/contact">
            <Button className="bg-secondary hover:bg-secondary-dark">
              Prendre RDV avec un conseiller
            </Button>
            </a>
            <Button variant="outline" className="w-max border-secondary text-secondary hover:bg-secondary/10">
              Télécharger notre guide des financements
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
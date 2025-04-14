import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function PourquoiNousPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-7xl space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <div className="bg-orange-100 text-secondary-dark font-medium py-1 px-3 rounded-full w-fit mx-auto mb-4">
            Votre partenaire de confiance
          </div>
          <h1 className="text-4xl font-bold mb-6">Pourquoi Nous Choisir ?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi des milliers d'étudiants et de professionnels font confiance à notre école pour leur reconversion dans la tech.
          </p>
        </section>
        
        {/* Values Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-light-bg p-4 rounded-full mb-4">
              <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation Pédagogique</h3>
            <p className="text-gray-600">
              Notre approche d'apprentissage par la pratique vous garantit une montée en compétences rapide et durable.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-light-bg p-4 rounded-full mb-4">
              <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Communauté Engagée</h3>
            <p className="text-gray-600">
              Rejoignez un réseau de professionnels et d'apprenants passionnés qui vous accompagneront tout au long de votre parcours.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-light-bg p-4 rounded-full mb-4">
              <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise Professionnelle</h3>
            <p className="text-gray-600">
              Nos formateurs sont des experts métier qui apportent une expérience concrète du monde professionnel.
            </p>
          </div>
        </section>
        
        {/* Key Figures Section */}
        <section className="w-full bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-8 text-center">InfoWeb France en chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary">98%</p>
              <p className="text-gray-600 mt-1">Taux de satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary">+5000</p>
              <p className="text-gray-600 mt-1">Étudiants formés</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary">92%</p>
              <p className="text-gray-600 mt-1">Taux d'insertion</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary">+300</p>
              <p className="text-gray-600 mt-1">Entreprises partenaires</p>
            </div>
          </div>
        </section>
        
        {/* Our Approach Tabs Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Notre Approche</h2>
          <Tabs defaultValue="methode" className="w-full">
            <TabsList className="overflow-x-auto flex gap-2 sm:grid sm:w-full sm:grid-cols-3  rounded-lg p-1 sm:pl-1 pl-52 bg-gray-50">
              <TabsTrigger
                value="methode"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Méthode Pédagogique
              </TabsTrigger>
              <TabsTrigger
                value="accompagnement"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Accompagnement
              </TabsTrigger>
              <TabsTrigger
                value="insertion"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-lg transition-all"
              >
                Insertion Professionnelle
              </TabsTrigger>
            </TabsList>

            {/* Méthode Pédagogique */}
            <TabsContent value="methode" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Une formation axée sur la pratique</h3>
                  <p className="text-gray-600 mb-4">
                    Notre pédagogie repose sur l'apprentissage par projet, où vous développez de véritables compétences en résolvant des problèmes concrets du monde professionnel.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Vous apprenez en faisant, guidé par des experts qui vous accompagnent à chaque étape de votre progression.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Acquisition des bases théoriques</h4>
                        <p className="text-sm text-gray-500">Masterclass et ressources pédagogiques</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Mise en pratique guidée</h4>
                        <p className="text-sm text-gray-500">Exercices et ateliers encadrés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Projets professionnalisants</h4>
                        <p className="text-sm text-gray-500">Application concrète en conditions réelles</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-light-bg rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Les avantages de notre méthode</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Apprentissage accéléré des compétences techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Développement de l'autonomie et de la confiance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Acquisition des méthodes de travail professionnelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Préparation optimale à l'environnement professionnel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Constitution d'un portfolio de projets concrets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Accompagnement */}
            <TabsContent value="accompagnement" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Un suivi personnalisé tout au long de votre parcours</h3>
                  <p className="text-gray-600 mb-4">
                    Chez InfoWeb France, nous croyons que chaque apprenant est unique. C'est pourquoi nous avons développé un système d'accompagnement complet qui s'adapte à vos besoins spécifiques.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Mentor dédié</h4>
                      <p className="text-gray-600">Un professionnel expérimenté vous guide personnellement tout au long de votre formation.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Coaching professionnel</h4>
                      <p className="text-gray-600">Des séances régulières pour définir votre projet professionnel et préparer votre insertion.</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Suivi pédagogique</h4>
                      <p className="text-gray-600">Évaluations régulières et feedback constructif pour mesurer votre progression.</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-light-bg rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Une communauté solidaire</h4>
                  <p className="text-gray-600 mb-4">
                    Rejoindre InfoWeb France, c'est intégrer un écosystème bienveillant où l'entraide est une valeur fondamentale.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Accès à notre communauté d'alumni et de professionnels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Sessions de pair-programming et d'apprentissage collaboratif</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Événements networking et rencontres avec l'écosystème tech</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Masterclass avec des intervenants extérieurs de premier plan</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button className="bg-secondary hover:bg-secondary-dark">
                      Découvrir notre communauté
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Insertion Professionnelle */}
            <TabsContent value="insertion" className="p-6 border rounded-lg mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Votre carrière, notre priorité</h3>
                  <p className="text-gray-600 mb-4">
                    Notre mission ne s'arrête pas à la formation technique. Nous mettons tout en œuvre pour vous préparer au marché de l'emploi et faciliter votre insertion professionnelle.
                  </p>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Préparation à l'emploi</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Ateliers CV et personal branding</li>
                        <li>Simulations d'entretiens techniques et RH</li>
                        <li>Coaching pour la négociation salariale</li>
                        <li>Accompagnement à la création d'entreprise</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Réseau d'entreprises partenaires</h4>
                      <p className="text-gray-600">
                        Notre réseau de plus de 300 entreprises partenaires vous offre un accès privilégié à des opportunités d'emploi exclusives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-light-bg rounded-lg p-6 mb-6">
                    <h4 className="font-semibold mb-4">92% de nos diplômés trouvent un emploi dans les 6 mois</h4>
                    <div className="h-4 w-full bg-gray-200 rounded">
                      <div className="h-4 bg-secondary rounded" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Ils recrutent nos diplômés</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {/* Placeholder company logos */}
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 1</div>
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 2</div>
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 3</div>
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 4</div>
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 5</div>
                      <div className="h-16 bg-white rounded flex items-center justify-center text-gray-400">Logo 6</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Testimonials Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Ce que disent nos diplômés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                        src="/images/testimonials/sophie.png" // <-- your image path here
                        alt="Amal Benali"
                        className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sophie Martin</h4>
                    <p className="text-sm text-gray-500">Développeuse Full-Stack</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Après 10 ans dans la restauration, j'ai décidé de me reconvertir dans le développement web. InfoWeb France m'a accompagnée de A à Z, et j'ai trouvé un emploi un mois après ma certification. Une expérience qui a changé ma vie !"
                </p>
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                        src="/images/testimonials/thomas.png" // <-- your image path here
                        alt="Amal Benali"
                        className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Thomas Dubois</h4>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "La force d'InfoWeb France, c'est leur réseau. Au-delà de la formation technique qui est excellente, j'ai pu rencontrer des professionnels qui m'ont ouvert des portes vers le métier de Product Manager que j'exerce aujourd'hui."
                </p>
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                        src="/images/testimonials/amal.png"
                        alt="Amal Benali"
                        className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">Amal Benali</h4>
                    <p className="text-sm text-gray-500">Data Scientist</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  "J'avais déjà des connaissances en programmation, mais la formation en data science m'a permis de me
                  spécialiser et d'acquérir les compétences recherchées sur le marché. La pédagogie par projet est
                  vraiment efficace."
                </p>
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquemment posées</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Est-ce que je peux suivre une formation sans expérience préalable ?
              </AccordionTrigger>
              <AccordionContent>
                Absolument ! Nos formations sont conçues pour être accessibles à tous les niveaux, y compris les débutants complets. Notre méthode pédagogique vous permettra d'acquérir progressivement les compétences nécessaires, quel que soit votre point de départ.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Comment se déroule le financement de la formation ?
              </AccordionTrigger>
              <AccordionContent>
                Nous proposons plusieurs options de financement : prise en charge par votre CPF, financement par Pôle Emploi, OPCO, ou par votre entreprise dans le cadre de la formation continue. Nous proposons également des facilités de paiement pour les autofinancements. Notre équipe administrative vous accompagne dans toutes les démarches.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Quelles sont les modalités de formation (présentiel, distanciel) ?
              </AccordionTrigger>
              <AccordionContent>
                Nous proposons des formations en présentiel dans nos campus de Paris, Lyon et Bordeaux, ainsi qu'en format 100% distanciel. Les deux formats bénéficient du même niveau d'encadrement et d'accompagnement. Certaines formations sont également disponibles en format hybride, combinant sessions présentielles et travail à distance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Quelle est la durée des formations ?
              </AccordionTrigger>
              <AccordionContent>
                La durée varie selon les formations, allant de 3 mois pour nos bootcamps intensifs à 12 mois pour nos parcours plus complets en alternance. Nous proposons également des modules courts de spécialisation d'une durée de 2 à 6 semaines pour les professionnels souhaitant acquérir de nouvelles compétences.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Les formations sont-elles certifiantes ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, toutes nos formations longues sont sanctionnées par des certifications reconnues par l'État et inscrites au RNCP (Répertoire National des Certifications Professionnelles). Nous préparons également nos apprenants à l'obtention de certifications techniques spécifiques reconnues par l'industrie (AWS, Microsoft, Google Cloud, etc.).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* CTA Section */}
        <section className="w-full bg-secondary text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre carrière dans la tech ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez InfoWeb France et bénéficiez d'une formation de qualité, d'un accompagnement personnalisé et d'un réseau professionnel solide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/formations">
            <Button className="bg-white text-secondary hover:bg-gray-100">
              Découvrir nos formations
            </Button>
            </a>
            <a href="/contact">
            <Button className="bg-secondary-dark hover:bg-secondary-dark/90 border border-white">
              Prendre rendez-vous avec un conseiller
            </Button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
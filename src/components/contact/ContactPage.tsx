import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    formation: "",
    message: "",
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      formation: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Ici vous pourriez ajouter l'appel API pour envoyer les données
    alert("Merci pour votre message ! Nous vous contacterons très prochainement.");
    // Réinitialiser le formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      formation: "",
      message: "",
      newsletter: false
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-7xl space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <div className="bg-orange-100 text-secondary-dark font-medium py-1 px-3 rounded-full w-fit mx-auto mb-4">
            Nous contacter
          </div>
          <h1 className="text-4xl font-bold mb-6">Comment pouvons-nous vous aider ?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Que vous souhaitiez en savoir plus sur nos formations ou discuter de votre projet professionnel,
            nos conseillers sont à votre disposition pour répondre à toutes vos questions.
          </p>
        </section>

        {/* Contact Form and Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input 
                        id="nom" 
                        name="nom" 
                        placeholder="Votre nom" 
                        value={formData.nom}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input 
                        id="prenom" 
                        name="prenom" 
                        placeholder="Votre prénom" 
                        value={formData.prenom}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="votre.email@exemple.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input 
                        id="telephone" 
                        name="telephone" 
                        type="tel" 
                        placeholder="06 XX XX XX XX" 
                        value={formData.telephone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="formation">Formation d'intérêt</Label>
                    <Select 
                      onValueChange={handleSelectChange}
                      value={formData.formation}
                    >
                      <SelectTrigger id="formation" className="w-full">
                        <SelectValue placeholder="Sélectionnez une formation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dev-web">Développement Web Full Stack</SelectItem>
                        <SelectItem value="data-science">Data Science & Intelligence Artificielle</SelectItem>
                        <SelectItem value="ux-ui">UX/UI Design</SelectItem>
                        <SelectItem value="cybersecurity">Cybersécurité</SelectItem>
                        <SelectItem value="business-analytics">Business Analytics</SelectItem>
                        <SelectItem value="qa">Quality Assurance</SelectItem>
                        <SelectItem value="js-fundamentals">Fondamentaux JavaScript</SelectItem>
                        <SelectItem value="python-data">Analyse de données avec Python</SelectItem>
                        <SelectItem value="cda">Concepteur Développeur d'Application</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Votre message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      Je souhaite recevoir la newsletter avec les actualités et offres d'InfoWeb France
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary-dark">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-secondary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@infoweb-france.fr" className="text-gray-600 hover:text-secondary">
                        contact@infoweb-france.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-secondary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:+33123456789" className="text-gray-600 hover:text-secondary">
                        01 23 45 67 89
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-secondary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Horaires d'ouverture</p>
                      <p className="text-gray-600">Du lundi au vendredi</p>
                      <p className="text-gray-600">9h - 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#twitter" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#instagram" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#facebook" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#linkedin" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          fillRule="evenodd"
                          d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 17.3H5.667v-8.59h2.672V17.3zM7.003 7.41c-.857 0-1.553-.694-1.553-1.55 0-.857.696-1.553 1.553-1.553.856 0 1.552.696 1.552 1.552 0 .857-.696 1.552-1.552 1.552zm9.125 9.89h-2.669V12.8c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.57h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092V17.3z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Campus Locations */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Nos campus</h2>

          <Tabs defaultValue="paris" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-50 rounded-lg">
              <TabsTrigger value="paris">Paris</TabsTrigger>
              <TabsTrigger value="lyon">Lyon</TabsTrigger>
              <TabsTrigger value="bordeaux">Bordeaux</TabsTrigger>
            </TabsList>

            <TabsContent value="paris" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div className="aspect-video  rounded-lg mb-4 flex items-center justify-center ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.092386048061!2d2.359954511323726!3d48.86751945244326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e08e98453a5%3A0xb998114ae02e1e03!2sR%C3%A9publique!5e0!3m2!1sfr!2sfr!4v1744603397477!5m2!1sfr!2sfr"
                            width="600" height="300" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-secondary mr-3 mt-1"/>
                        <div>
                          <p className="font-medium">InfoWeb France Paris</p>
                          <p className="text-gray-600">15 rue de la République</p>
                          <p className="text-gray-600">75011 Paris</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-xl font-semibold">À propos du campus</h3>
                      <p className="text-gray-600">
                        Notre campus parisien, situé en plein cœur du 11e arrondissement, est facilement accessible en
                        métro (lignes 3, 5 et 8).
                        Cet espace moderne de 1200m² accueille nos formations dans un environnement propice à
                        l'apprentissage et aux échanges.
                      </p>
                      <div>
                        <h4 className="font-medium mb-2">Comment venir ?</h4>
                        <p className="text-gray-600">
                          <strong>Métro :</strong> République (lignes 3, 5, 8, 9, 11)<br/>
                          <strong>Bus :</strong> Lignes 20, 56, 65, 75
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lyon" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div
                          className="aspect-video rounded-lg mb-4 flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11134.908255865368!2d4.839303728969638!3d45.756617437281555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea624b2960c3%3A0x9dfd1dd0dd0897d8!2sLa%20Part-Dieu%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1744603569123!5m2!1sfr!2sfr"
                            width="600" height="300" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-secondary mr-3 mt-1"/>
                        <div>
                          <p className="font-medium">InfoWeb France Lyon</p>
                          <p className="text-gray-600">25 rue de la Part-Dieu</p>
                          <p className="text-gray-600">69003 Lyon</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-xl font-semibold">À propos du campus</h3>
                      <p className="text-gray-600">
                        Inauguré en 2019, notre campus lyonnais est situé dans le quartier dynamique de la Part-Dieu. 
                        Cet espace de 800m² bénéficie d'équipements de pointe et d'une excellente connexion aux transports en commun.
                      </p>
                      <div>
                        <h4 className="font-medium mb-2">Comment venir ?</h4>
                        <p className="text-gray-600">
                          <strong>Métro :</strong> Part-Dieu (ligne B)<br />
                          <strong>Tramway :</strong> T1, T3, T4<br />
                          <strong>Train :</strong> Gare de la Part-Dieu
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bordeaux" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <div className="aspect-video rounded-lg mb-4 flex items-center justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.4598851152555!2d-0.5697286230951571!3d44.8529317710705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55287e0221d69d%3A0x6d29d916fd0df5f8!2sQuai%20des%20Chartrons%2C%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1744603636662!5m2!1sfr!2sfr" width="600" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-secondary mr-3 mt-1" />
                        <div>
                          <p className="font-medium">InfoWeb France Bordeaux</p>
                          <p className="text-gray-600">8 quai des Chartrons</p>
                          <p className="text-gray-600">33000 Bordeaux</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h3 className="text-xl font-semibold">À propos du campus</h3>
                      <p className="text-gray-600">
                        Notre campus bordelais, le plus récent, a ouvert ses portes en 2022. Situé dans le quartier historique des Chartrons, 
                        il offre un cadre inspirant de 600m² avec vue sur la Garonne pour apprendre dans les meilleures conditions.
                      </p>
                      <div>
                        <h4 className="font-medium mb-2">Comment venir ?</h4>
                        <p className="text-gray-600">
                          <strong>Tram :</strong> CAPC (ligne B)<br />
                          <strong>Bus :</strong> Lignes 4, 15<br />
                          <strong>VCub :</strong> Station Chartrons
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quels sont les délais de réponse ?</h3>
              <p className="text-gray-600">
                Nous nous engageons à répondre à toutes les demandes sous 48h ouvrées. Pour les demandes urgentes, 
                n'hésitez pas à nous appeler directement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Puis-je visiter vos locaux ?</h3>
              <p className="text-gray-600">
                Bien sûr ! Nous organisons des journées portes ouvertes tous les mois et des visites individuelles 
                sur rendez-vous. Contactez-nous pour planifier votre visite.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Comment obtenir des informations sur les financements ?</h3>
              <p className="text-gray-600">
                Notre équipe administrative est spécialisée dans l'accompagnement au financement. Prenez rendez-vous avec 
                un conseiller qui étudiera votre situation et vous proposera les solutions adaptées.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Proposez-vous des formations en alternance ?</h3>
              <p className="text-gray-600">
                Oui, la plupart de nos formations sont disponibles en alternance. Nous vous accompagnons également dans la 
                recherche d'entreprise partenaire grâce à notre réseau.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'une réponse rapide ?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Notre équipe est disponible pour vous répondre par téléphone du lundi au vendredi de 9h à 18h.
          </p>
          <Button className="bg-secondary hover:bg-secondary-dark">
            <Phone className="mr-2 h-4 w-4" /> 01 23 45 67 89
          </Button>
        </section>
      </div>
    </main>
  );
}
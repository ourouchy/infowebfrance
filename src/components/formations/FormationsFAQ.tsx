import type React from 'react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'inscriptions' | 'financement' | 'technique';
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quels sont les prérequis pour suivre vos formations ?',
    answer: 'La plupart de nos formations sont accessibles aux débutants et ne nécessitent pas de connaissances préalables en programmation. Nous demandons simplement une bonne motivation, de la curiosité, et une aisance avec l\'outil informatique. Pour les formations plus avancées, certains prérequis techniques peuvent être demandés, ils sont alors clairement indiqués dans la description du programme.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Comment se déroulent les cours ?',
    answer: 'Nos formations sont dispensées en ligne, avec un mélange de contenus asynchrones (vidéos, lectures, exercices) et de sessions synchrones (webinaires, sessions de mentorat, reviews de code). Vous avez accès à une plateforme d\'apprentissage dédiée et à un système de chat pour communiquer avec vos formateurs et les autres apprenants. Les cours sont conçus pour être suivis à temps partiel, vous permettant de continuer à travailler ou d\'avoir d\'autres activités en parallèle.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'Combien de temps faut-il consacrer par semaine à la formation ?',
    answer: 'Pour nos programmes à temps partiel, nous recommandons de prévoir environ 15 à 20 heures par semaine. Cette estimation peut varier selon votre rythme d\'apprentissage et votre expérience préalable. La flexibilité de notre format vous permet d\'organiser votre temps d\'étude selon vos disponibilités, tout en respectant les échéances des projets.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Comment fonctionne la garantie "Emploi ou Remboursement" ?',
    answer: 'Notre garantie signifie que si vous ne trouvez pas un emploi dans le domaine de votre formation dans les 6 mois suivant l\'obtention de votre diplôme, nous vous remboursons intégralement les frais de scolarité. Pour bénéficier de cette garantie, vous devez participer activement au programme d\'accompagnement à l\'emploi, compléter tous les projets du cursus avec succès et suivre nos recommandations en matière de recherche d\'emploi.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'Quelles certifications obtient-on à la fin de la formation ?',
    answer: 'Selon la formation choisie, vous pouvez obtenir soit un titre professionnel reconnu par l\'État et inscrit au RNCP (Répertoire National des Certifications Professionnelles), soit une certification professionnelle InfoWeb. Pour les formations certifiantes RNCP, les détails du titre et de son niveau sont précisés dans la description du programme.',
    category: 'inscriptions'
  },
  {
    id: 'faq-6',
    question: 'Comment s\'inscrire à une formation ?',
    answer: 'Le processus d\'inscription se déroule en plusieurs étapes : 1) Remplissez le formulaire d\'inscription en ligne, 2) Passez un court test d\'aptitude (non technique), 3) Réalisez un entretien avec un conseiller pédagogique, 4) Si vous êtes accepté, vous recevrez une offre d\'admission, 5) Complétez votre dossier d\'inscription et procédez au paiement ou aux démarches de financement.',
    category: 'inscriptions'
  },
  {
    id: 'faq-7',
    question: 'Puis-je utiliser mon CPF pour financer ma formation ?',
    answer: 'Oui, nos formations certifiantes RNCP sont éligibles au financement CPF (Compte Personnel de Formation). Vous pouvez consulter votre solde CPF sur moncompteformation.gouv.fr et utiliser tout ou partie de vos droits pour financer votre formation. Notre équipe peut vous accompagner dans ces démarches.',
    category: 'financement'
  },
  {
    id: 'faq-8',
    question: 'Quelles sont les autres options de financement disponibles ?',
    answer: 'Outre le CPF, plusieurs options s\'offrent à vous : 1) Pôle Emploi (AIF) pour les demandeurs d\'emploi, 2) Financement par votre employeur via son OPCO, 3) Paiement en plusieurs fois sans frais, 4) Dans certains cas, des financements régionaux peuvent être disponibles. Contactez notre service financier pour une étude personnalisée de votre situation.',
    category: 'financement'
  },
  {
    id: 'faq-9',
    question: 'Les formations peuvent-elles être suivies sur tablette ou smartphone ?',
    answer: 'Bien que notre plateforme d\'apprentissage soit accessible sur tablette et smartphone pour certains contenus, nous recommandons fortement l\'utilisation d\'un ordinateur portable ou de bureau pour suivre nos formations. Certains logiciels et outils nécessaires au bon déroulement des cours et des projets ne sont pas compatibles avec les appareils mobiles.',
    category: 'technique'
  },
  {
    id: 'faq-10',
    question: 'Que se passe-t-il si je ne peux pas suivre une session en direct ?',
    answer: 'Toutes nos sessions en direct sont enregistrées et mises à disposition sur la plateforme d\'apprentissage. Vous pouvez donc les visionner ultérieurement si vous n\'avez pas pu y assister. Nous vous recommandons toutefois de participer aux sessions en direct autant que possible pour bénéficier de l\'interaction avec les formateurs et les autres apprenants.',
    category: 'technique'
  }
];

const FormationsFAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = faqItems.filter(item =>
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vous avez des questions sur nos formations ? Consultez notre FAQ pour trouver des réponses
            aux questions les plus fréquemment posées.
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-8 flex justify-center space-x-2 overflow-x-auto whitespace-nowrap md:space-x-4">
            {['general', 'inscriptions', 'financement', 'technique', 'all'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-6 md:text-base ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'general' && 'Général'}
                {category === 'inscriptions' && 'Inscriptions'}
                {category === 'financement' && 'Financement'}
                {category === 'technique' && 'Technique'}
                {category === 'all' && 'Tout voir'}
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                  aria-expanded={openItems[item.id]}
                >
                  <h3 className="font-medium">{item.question}</h3>
                  <svg
                    className={`h-5 w-5 transform text-gray-500 transition-transform ${
                      openItems[item.id] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openItems[item.id] && (
                  <div className="border-t border-gray-200 px-6 py-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-light-bg p-6 text-center md:p-8">
          <h3 className="text-xl font-bold md:text-2xl">Vous n'avez pas trouvé la réponse à votre question ?</h3>
          <p className="mt-2 text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-secondary px-6 py-2 font-medium text-white shadow-sm hover:bg-secondary-dark"
            >
              Nous contacter
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsFAQ;

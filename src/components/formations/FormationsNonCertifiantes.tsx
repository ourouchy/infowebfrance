import type React from 'react';

interface NonCertifianteFormation {
  id: string;
  title: string;
  duration: string;
  schedule: string;
  price: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
}

const nonCertifianteFormations: NonCertifianteFormation[] = [
  {
    id: 'javascript-fundamentals',
    title: 'Fondamentaux JavaScript',
    duration: '8 semaines',
    schedule: 'Temps partiel, 6h/semaine',
    price: 'À partir de 990€',
    description: 'Cette formation courte vous permet d\'acquérir les bases solides en JavaScript nécessaires pour débuter dans le développement web front-end. Vous apprendrez à manipuler le DOM, gérer les événements et comprendre les concepts fondamentaux du langage.',
    objectives: [
      'Maîtriser la syntaxe et les concepts de base de JavaScript',
      'Manipuler le DOM pour créer des pages web interactives',
      'Comprendre et utiliser les fonctions, les objets et les tableaux',
      'Gérer les événements utilisateur',
      'Utiliser les fonctionnalités modernes de ES6+'
    ],
    prerequisites: [
      'Connaissances de base en HTML et CSS',
      'Aucune expérience préalable en programmation requise',
      'Un ordinateur avec une connexion internet stable'
    ]
  },
  {
    id: 'python-data-analysis',
    title: 'Analyse de données avec Python',
    duration: '12 semaines',
    schedule: 'Temps partiel, 8h/semaine',
    price: 'À partir de 1490€',
    description: 'Cette formation courte vous permet d\'acquérir les compétences nécessaires pour manipuler, analyser et visualiser des données avec Python. Vous découvrirez les bibliothèques essentielles comme Pandas, NumPy et Matplotlib.',
    objectives: [
      'Maîtriser les bases de Python pour l\'analyse de données',
      'Manipuler des données avec Pandas et NumPy',
      'Créer des visualisations efficaces avec Matplotlib et Seaborn',
      'Effectuer des analyses statistiques de base',
      'Comprendre le processus d\'extraction, transformation et chargement de données'
    ],
    prerequisites: [
      'Connaissances de base en programmation',
      'Notions élémentaires de mathématiques et de statistiques',
      'Un ordinateur avec une connexion internet stable'
    ]
  }
 
];

const FormationsNonCertifiantes: React.FC = () => {
  return (
    <section id="formations-non-certifiantes" className="bg-light-bg py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Formations sans titre
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nos formations courtes vous permettent d'acquérir rapidement des compétences spécifiques
            sans vous engager dans un parcours certifiant complet. Idéales pour compléter votre profil
            ou vous initier à un nouveau domaine.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {nonCertifianteFormations.map((formation) => (
            <div
              key={formation.id}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{formation.title}</h3>
                  <span className="rounded-full bg-beige/20 px-3 py-1 text-xs font-medium text-beige">
                    Sans titre
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                    {formation.duration}
                  </span>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                    {formation.schedule}
                  </span>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                    {formation.price}
                  </span>
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-600">
                {formation.description}
              </p>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-bold">Objectifs :</h4>
                <ul className="space-y-1 text-sm">
                  {formation.objectives.slice(0, 3).map((objective, index) => (
                    <li key={`${formation.id}-obj-${index}`} className="flex items-start">
                      <svg className="mr-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{objective}</span>
                    </li>
                  ))}
                  {formation.objectives.length > 3 && (
                    <li className="text-xs text-gray-500">
                      + {formation.objectives.length - 3} autres objectifs
                    </li>
                  )}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-bold">Prérequis :</h4>
                <ul className="space-y-1 text-sm">
                  {formation.prerequisites.slice(0, 2).map((prerequisite, index) => (
                    <li key={`${formation.id}-prereq-${index}`} className="flex items-start">
                      <svg className="mr-1.5 mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                  {formation.prerequisites.length > 2 && (
                    <li className="text-xs text-gray-500">
                      + {formation.prerequisites.length - 2} autres prérequis
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-auto">
                <a
                  href={`/formations/${formation.id}`}
                  className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                >
                  En savoir plus
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-white p-6 shadow-md md:p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h3 className="text-xl font-bold md:text-2xl">Vous avez besoin d'une formation sur mesure ?</h3>
              <p className="mt-2 text-gray-600">
                Nous proposons également des formations personnalisées pour les entreprises et les équipes.
                Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis sur mesure.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-dark"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsNonCertifiantes;

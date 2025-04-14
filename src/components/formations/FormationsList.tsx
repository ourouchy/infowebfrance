import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 

type FormationCategory = 'all' | 'web' | 'data' | 'design' | 'cybersecurity' | 'business';

interface Formation {
  id: string;
  title: string;
  category: FormationCategory;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  isCertified: boolean;
  description: string;
  skills: string[];
  imageUrl: string;
}

const formations: Formation[] = [
  {
    id: 'dev-web-fullstack',
    title: 'Développement Web Full Stack',
    category: 'web',
    duration: '9 mois, à temps partiel',
    level: 'beginner',
    isCertified: false,
    description: 'Formation complète au développement web, de la création de sites vitrines à la construction d\'applications web complexes.',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/images/formations/dev-web.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science & Intelligence Artificielle',
    category: 'data',
    duration: '10 mois, à temps partiel',
    level: 'intermediate',
    isCertified: true,
    description: 'Maîtrisez l\'analyse de données, le machine learning et l\'intelligence artificielle pour répondre aux problématiques métier.',
    skills: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'Deep Learning', 'SQL'],
    imageUrl: '/images/formations/data-science.jpg'
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    category: 'design',
    duration: '8 mois, à temps partiel',
    level: 'beginner',
    isCertified: true,
    description: 'Apprenez à concevoir des interfaces utilisateur intuitives et esthétiques, en suivant les meilleures pratiques du design centré sur l\'utilisateur.',
    skills: ['Figma', 'Adobe XD', 'Recherche UX', 'Wireframing', 'Prototypage', 'Design Systems'],
    imageUrl: '/images/formations/ux-ui.jpg'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité',
    category: 'cybersecurity',
    duration: '10 mois, à temps partiel',
    level: 'intermediate',
    isCertified: true,
    description: 'Développez les compétences nécessaires pour protéger les systèmes d\'information contre les cyberattaques et gérer la sécurité informatique.',
    skills: ['Réseaux', 'Linux', 'Tests d\'intrusion', 'Cryptographie', 'OSINT', 'Sécurité défensive'],
    imageUrl: '/images/formations/cybersecurity.jpg'
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    category: 'business',
    duration: '7 mois, à temps partiel',
    level: 'beginner',
    isCertified: true,
    description: 'Maîtrisez l\'analyse de données pour améliorer la prise de décision et optimiser les performances de l\'entreprise.',
    skills: ['Excel avancé', 'SQL', 'Tableau', 'Power BI', 'Analyse métier', 'Data Storytelling'],
    imageUrl: '/images/formations/business-analytics.jpg'
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    category: 'web',
    duration: '7 mois, à temps partiel',
    level: 'beginner',
    isCertified: true,
    description: 'Apprenez à mettre en place et à exécuter des processus d\'assurance qualité pour garantir la fiabilité des applications logicielles.',
    skills: ['Tests manuels', 'Tests automatisés', 'Selenium', 'Cypress', 'ISTQB', 'Gestion de la qualité'],
    imageUrl: '/images/formations/qa.jpg'
  },
  {
    id: 'javascript-fundamentals',
    title: 'Fondamentaux JavaScript',
    category: 'web',
    duration: '8 semaines, à temps partiel',
    level: 'beginner',
    isCertified: false,
    description: 'Maîtrisez les bases de JavaScript, le langage de programmation le plus utilisé au monde pour le développement web.',
    skills: ['Variables et types', 'Fonctions', 'Objets', 'Tableaux', 'DOM', 'ES6+'],
    imageUrl: '/images/formations/javascript.jpg'
  },
  {
    id: 'python-data-analysis',
    title: 'Analyse de données avec Python',
    category: 'data',
    duration: '12 semaines, à temps partiel',
    level: 'beginner',
    isCertified: false,
    description: 'Apprenez à manipuler, analyser et visualiser des données avec Python, le langage le plus populaire en data science.',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Analyse statistique'],
    imageUrl: '/images/formations/python-data.jpg'
  },
  {
    id: 'con-dev-app',
    title: 'Concepteur Développeur d\'Application',
    category: 'web',
    duration: '9 mois, à temps partiel',
    level: 'intermediate',
    isCertified: true,
    description: 'concevoir, développer et déployer des applications complexes et évolutives.',
    skills: ['PostgreSQL', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/images/formations/dev-web.jpg'
  },
];

const FormationsList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FormationCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFormations = formations.filter(formation => {
    const matchesCategory = activeCategory === 'all' || formation.category === activeCategory;
    const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           formation.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-light-bg py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Explorez nos formations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Filtrez par domaine ou recherchez une formation spécifique pour trouver celle qui correspond à vos objectifs professionnels
          </p>
        </div>

        <div className="mt-12">
          {/* Filtres et recherche */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex overflow-x-auto whitespace-nowrap py-2 no-scrollbar w-full max-w-full">
              <button
                className={`mr-2 rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'all' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                Toutes
              </button>
              <button
                className={`mr-2 rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'web' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('web')}
              >
                Développement Web
              </button>
              <button
                className={`mr-2 rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'data' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('data')}
              >
                Data
              </button>
              <button
                className={`mr-2 rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'design' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('design')}
              >
                UX/UI Design
              </button>
              <button
                className={`mr-2 rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'cybersecurity' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('cybersecurity')}
              >
                Cybersécurité
              </button>
              <button
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  activeCategory === 'business' ? 'bg-secondary text-white' : 'bg-white text-primary'
                }`}
                onClick={() => setActiveCategory('business')}
              >
                Business
              </button>
            </div>
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Liste des formations */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredFormations.map((formation) => (
              <div
                key={formation.id}
                className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{formation.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-light-bg px-3 py-1 text-sm font-medium text-primary">
                      {formation.duration}
                    </span>
                    <span className="inline-block rounded-full bg-light-bg px-3 py-1 text-sm font-medium text-primary">
                      {formation.level === 'beginner' ? 'Débutant' : formation.level === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                    </span>
                    {formation.isCertified && (
                      <span className="inline-block rounded-full bg-tertiary/10 px-3 py-1 text-sm font-medium text-tertiary">
                        Certifiante
                      </span>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  {formation.description}
                </p>
                <div className="mb-6">
                  <h4 className="mb-2 font-medium">Compétences acquises :</h4>
                  <div className="flex flex-wrap gap-2">
                    {formation.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                    {formation.skills.length > 4 && (
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                        +{formation.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  to={`/formations/${formation.id}`}
                  className="mt-4 inline-block font-medium text-secondary hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>

          {filteredFormations.length === 0 && (
            <div className="mt-8 rounded-lg bg-white p-8 text-center shadow-md">
              <h3 className="text-xl font-bold">Aucune formation trouvée</h3>
              <p className="mt-2 text-gray-600">
                Essayez de modifier vos critères de recherche ou contactez-nous pour en savoir plus sur nos programmes.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 font-medium text-secondary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormationsList;

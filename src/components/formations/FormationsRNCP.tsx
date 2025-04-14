import type React from 'react';

interface RNCPFormation {
  id: string;
  title: string;
  rncp: string;
  niveau: string;
  duration: string;
  description: string;
  competences: string[];
  debouches: string[];
}

const rncpFormations: RNCPFormation[] = [
  {
    id: 'con-dev-app',
    title: 'Concepteur Développeur d\'Applications',
    rncp: 'RNCP31678',
    niveau: 'Niveau 6 (Bac+3/4)',
    duration: '9 mois, à temps partiel',
    description: 'Cette formation certifiante vous permet de maîtriser les outils et technologies nécessaires au développement d\'applications web et mobiles modernes. Vous serez capable de concevoir, développer et déployer des applications complexes et évolutives.',
    competences: [
      'Concevoir et développer des composants d\'interface utilisateur',
      'Concevoir et développer la persistance des données',
      'Concevoir et développer une application multicouche répartie',
      'Utiliser l\'anglais dans son activité professionnelle en informatique'
    ],
    debouches: [
      'Développeur full-stack',
      'Développeur front-end',
      'Développeur back-end',
      'Lead developer',
      'Chef de projet technique'
    ]
  },
  {
    id: 'data-science',
    title: 'Expert en Data Science',
    rncp: 'RNCP35288',
    niveau: 'Niveau 7 (Bac+5)',
    duration: '10 mois, à temps partiel',
    description: 'Cette formation certifiante vous permet d\'acquérir les compétences avancées nécessaires pour collecter, analyser et interpréter de grands volumes de données. Vous serez capable de développer des modèles prédictifs et de proposer des solutions basées sur les données.',
    competences: [
      'Concevoir et développer des solutions de traitement de données massives',
      'Créer et mettre en œuvre des modèles d\'intelligence artificielle',
      'Développer une architecture de données adaptée aux besoins métiers',
      'Communiquer et conseiller sur les enjeux de la data science'
    ],
    debouches: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Chief Data Officer',
      'Consultant en IA'
    ]
  },
  {
    id: 'ux-ui-design',
    title: 'Designer UX/UI',
    rncp: 'RNCP36544',
    niveau: 'Niveau 6 (Bac+3/4)',
    duration: '8 mois, à temps partiel',
    description: 'Cette formation certifiante vous permet d\'acquérir les compétences nécessaires à la conception d\'interfaces utilisateur et d\'expériences digitales innovantes. Vous serez capable de concevoir des produits centrés sur l\'utilisateur et de piloter des projets de design.',
    competences: [
      'Analyser les besoins et attentes des utilisateurs',
      'Concevoir des interfaces fonctionnelles et esthétiques',
      'Prototyper et tester des solutions interactives',
      'Collaborer avec des équipes de développement'
    ],
    debouches: [
      'UX Designer',
      'UI Designer',
      'Product Designer',
      'Directeur artistique digital',
      'Chef de projet design'
    ]
  }
];

const FormationsRNCP: React.FC = () => {
  return (
    <section id="formations-rncp" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Formations certifiantes RNCP
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nos formations certifiantes sont reconnues par l'État et inscrites au Répertoire National
            des Certifications Professionnelles (RNCP). Elles vous permettent d'obtenir un titre
            professionnel reconnu par les entreprises.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:gap-12">
          {rncpFormations.map((formation) => (
            <div key={formation.id} className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                <h3 className="text-2xl font-bold">{formation.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    {formation.rncp}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    {formation.niveau}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    {formation.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600">
                  {formation.description}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-lg font-bold">Compétences visées</h4>
                    <ul className="space-y-2">
                      {formation.competences.map((competence, index) => (
                        <li key={index} className="flex">
                          <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{competence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-lg font-bold">Débouchés professionnels</h4>
                    <ul className="space-y-2">
                      {formation.debouches.map((debouche, index) => (
                        <li key={index} className="flex">
                          <svg className="mr-2 h-5 w-5 flex-shrink-0 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                          <span>{debouche}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href={`/formations/${formation.id}`}
                    className="inline-flex items-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-dark"
                  >
                    Détails de la formation
                    <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-light-bg p-6 md:p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h3 className="text-xl font-bold md:text-2xl">Financement CPF disponible</h3>
              <p className="mt-2 text-gray-600">
                Nos formations certifiantes sont éligibles au financement CPF (Compte Personnel de Formation).
                Vous pouvez mobiliser vos droits CPF pour financer tout ou partie de votre formation.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/financement"
                className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/80"
              >
                En savoir plus sur les financements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsRNCP;

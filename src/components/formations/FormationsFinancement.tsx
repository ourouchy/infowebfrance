import type React from 'react';

interface FinancementOption {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  steps: string[];
  icon: React.ReactNode;
}

const FormationsFinancement: React.FC = () => {
  const financementOptions: FinancementOption[] = [
    {
      id: 'cpf',
      title: 'Compte Personnel de Formation (CPF)',
      description: 'Utilisez vos droits CPF acquis tout au long de votre carrière pour financer votre formation certifiante.',
      eligibility: [
        'Salariés du secteur privé',
        'Demandeurs d\'emploi',
        'Travailleurs indépendants'
      ],
      steps: [
        'Consultez votre solde sur moncompteformation.gouv.fr',
        'Sélectionnez notre formation sur la plateforme',
        'Nous validons votre demande sous 48h'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'pole-emploi',
      title: 'Pôle Emploi (AIF)',
      description: 'L\'Aide Individuelle à la Formation (AIF) peut prendre en charge tout ou partie du coût de votre formation.',
      eligibility: [
        'Demandeurs d\'emploi inscrits à Pôle Emploi',
        'Formation en adéquation avec votre projet professionnel'
      ],
      steps: [
        'Discutez de votre projet avec votre conseiller Pôle Emploi',
        'Obtenez une attestation de notre part',
        'Déposez votre demande d\'AIF auprès de Pôle Emploi'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'opco',
      title: 'OPCO / Plan de développement des compétences',
      description: 'Votre entreprise peut financer votre formation via son OPCO ou son plan de développement des compétences.',
      eligibility: [
        'Salariés en CDI, CDD, intérim',
        'Accord de votre employeur nécessaire'
      ],
      steps: [
        'Obtenez l\'accord de votre employeur',
        'Nous vous fournissons un devis et un programme détaillé',
        'Votre employeur dépose la demande auprès de son OPCO'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'paiement-facilite',
      title: 'Paiement en plusieurs fois',
      description: 'Nous proposons des facilités de paiement pour rendre nos formations accessibles au plus grand nombre.',
      eligibility: [
        'Tous profils',
        'Sans condition de ressources'
      ],
      steps: [
        'Choisissez votre formation',
        'Optez pour un paiement en 3, 6 ou 10 mensualités',
        'Premier versement à l\'inscription'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-beige" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="financement" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Options de financement
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Chez InfoWeb France, nous croyons que l'accès à la formation ne devrait pas être limité par des
            contraintes financières. Découvrez les différentes options pour financer votre parcours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {financementOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-light-bg">
                {option.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{option.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{option.description}</p>

              <div className="mt-auto">
                <h4 className="mb-2 text-sm font-bold">Éligibilité :</h4>
                <ul className="mb-4 space-y-1 text-sm">
                  {option.eligibility.map((item, index) => (
                    <li key={`${option.id}-eligibility-${index}`} className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <button
                    onClick={() => window.location.href = `/financement#${option.id}`}
                    className="text-sm font-medium text-secondary hover:underline"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="p-8 md:p-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h3 className="text-2xl font-bold md:text-3xl">Besoin d'aide pour trouver le meilleur financement ?</h3>
                <p className="mt-4">
                  Notre équipe d'experts en financement est là pour vous aider à trouver la solution la plus
                  adaptée à votre situation. Nous vous accompagnons dans toutes vos démarches administratives.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white hover:text-primary"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsFinancement;

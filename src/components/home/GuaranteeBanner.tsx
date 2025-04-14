import React from 'react';

const GuaranteeBanner = () => {
  return (
    <section className="bg-light-bg py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Obtenez un job dans la tech,<br />
            ou nous vous remboursons
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Garantie 1 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Formation experte pour débutants</h3>
              <p className="text-gray-600">
                Aucune expérience préalable requise. Nos programmes sont conçus pour les débutants, avec un apprentissage progressif.
              </p>
            </div>

            {/* Garantie 2 */}
            <div className="rounded-xl bg-secondary p-8 text-white shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Garantie Emploi ou Remboursement</h3>
              <p>
                Si vous ne trouvez pas d'emploi dans les 6 mois suivant l'obtention de votre diplôme, nous vous remboursons intégralement.
              </p>
            </div>

            {/* Garantie 3 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Accompagnement professionnel</h3>
              <p className="text-gray-600">
                Coaching personnalisé, préparation aux entretiens et accès à notre réseau d'entreprises partenaires.
              </p>
            </div>
          </div>

          {/* Statistique */}
          <div className="mt-16 flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold shadow-lg">
              82%
            </div>
            <p className="max-w-md text-lg text-gray-700">
              de nos diplômés trouvent un emploi dans les 6 mois suivant l'obtention de leur diplôme
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;

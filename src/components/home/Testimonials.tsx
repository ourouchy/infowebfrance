import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-light-bg py-16 md:py-24" id="alumni">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Ce que disent nos diplômés</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Plus de 1000 étudiants ont déjà transformé leur carrière grâce à nos formations
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Témoignage 1 */}
          <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Portrait de Marie L."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Marie L.</h3>
                <p className="text-sm text-gray-500">Développeuse Full-Stack</p>
              </div>
            </div>
            <p className="flex-grow text-gray-600">
              "Après 7 ans dans la restauration, j'ai décidé de me reconvertir dans le développement web.
              InfoWeb m'a permis de trouver un emploi en tant que développeuse junior seulement 2 mois après
              avoir obtenu mon diplôme. Le format à temps partiel était parfait pour moi."
            </p>
            <div className="mt-4 flex">
              <span className="text-secondary">★★★★★</span>
            </div>
          </div>

          {/* Témoignage 2 */}
          <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Portrait de Thomas R."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Thomas R.</h3>
                <p className="text-sm text-gray-500">Data Scientist</p>
              </div>
            </div>
            <p className="flex-grow text-gray-600">
              "J'étais comptable depuis 12 ans et je voulais me diriger vers la tech. InfoWeb a été
              un excellent choix. Le programme Data Science était complet et bien structuré. Aujourd'hui,
              je travaille dans une startup fintech, avec un salaire bien supérieur à mon ancien poste."
            </p>
            <div className="mt-4 flex">
              <span className="text-secondary">★★★★★</span>
            </div>
          </div>

          {/* Témoignage 3 */}
          <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center">
              <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Portrait de Sarah M."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Sarah M.</h3>
                <p className="text-sm text-gray-500">UX/UI Designer</p>
              </div>
            </div>
            <p className="flex-grow text-gray-600">
              "Je cherchais à acquérir des compétences en design numérique pour compléter mon expérience en
              marketing. La formation UX/UI de InfoWeb a été une révélation ! Les projets pratiques et le
              mentorat m'ont aidée à construire un portfolio solide qui a impressionné mes employeurs."
            </p>
            <div className="mt-4 flex">
              <span className="text-secondary">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Statistique */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium">4.8/5</p>
          <p className="text-gray-600">Note moyenne sur plus de 1200+ avis</p>
          <div className="mx-auto mt-6 flex max-w-xs items-center justify-between">
            <img src="https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg" alt="Trustpilot" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="h-8" />
            <img src="https://w1.pngwing.com/pngs/417/829/png-transparent-circle-logo-organization-switchup-text-sign-line-signage-area-thumbnail.png" alt="SwitchUp" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

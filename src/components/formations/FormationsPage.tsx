import type React from 'react';
import FormationsHeader from './FormationsHeader';
import FormationsList from './FormationsList';
import FormationsRNCP from './FormationsRNCP';
import FormationsNonCertifiantes from './FormationsNonCertifiantes';
import FormationsFinancement from './FormationsFinancement';
import FormationsTestimonials from './FormationsTestimonials';
import FormationsFAQ from './FormationsFAQ';

const FormationsPage: React.FC = () => {
  return (
    <>
      <FormationsHeader />
      <main>
        <section className="bg-white py-12 md:py-16">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Des formations conçues pour répondre aux besoins du marché
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Chez InfoWeb France, nous proposons des formations adaptées aux débutants comme aux professionnels souhaitant
                se reconvertir dans les métiers du numérique. Nos programmes sont conçus par des experts de l'industrie et
                régulièrement mis à jour pour répondre aux évolutions du marché.
              </p>
            </div>
          </div>
        </section>

        <FormationsList />
        <FormationsRNCP />
        <FormationsNonCertifiantes />
        <FormationsFinancement />
        <FormationsTestimonials />
        <FormationsFAQ />
      </main>
    </>
  );
};

export default FormationsPage;

import type React from 'react';

const FormationsHeader: React.FC = () => {
  return (
    <section className="bg-gradient-hero py-16 text-white md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            Nos Formations Tech
          </h1>
          <p className="mt-6 text-xl">
            Découvrez nos formations professionnalisantes
            pour entrer dans le monde de la tech ou faire évoluer votre carrière
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="#formations-rncp" className="btn-primary">
              Formations certifiantes RNCP
            </a>
            <a href="#formations-non-certifiantes" className="btn-secondary !border-white !text-white hover:!bg-white/10">
              Formations sans titre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsHeader;

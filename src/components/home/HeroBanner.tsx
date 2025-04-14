import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-2xl text-white md:w-1/2">
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Apprenez le métier.<br />
              Obtenez le métier.
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Transformez votre carrière en moins de 10 mois avec des formations tech à temps partiel, conçues pour les débutants.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/formations" className="btn-primary">
                Nos Formations
              </Link>
              <Link to="/pourquoi-nous" className="btn-secondary bg-light-bg">
                En savoir plus
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Garantie de remboursement si vous ne trouvez pas d'emploi
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/herobanner.png"
                alt="Étudiant"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

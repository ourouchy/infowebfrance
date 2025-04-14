import type React from 'react';
import { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  formation: string;
  company: string;
  position: string;
  quote: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Anna Kournikova',
    formation: 'Développement Web Full Stack',
    company: 'Datacraft',
    position: 'Développeuse Front-end',
    quote: 'Après avoir mis fin prématurément à ma carrière de tenniswoman, je cherchais une nouvelle voie. Après 8 ans dans l\'industrie du sport, j\'ai décidé de me reconvertir dans l\'analyse de données. Infoweb France m\'a guidée tout au long de ma formation et, grâce à leur accompagnement, j\'ai rapidement trouvé un poste dans la tech. Le format flexible m\'a permis d\'apprendre efficacement tout en préparant ma transition de carrière.',
    imageUrl: '/images/testimonials/Anna.png'
  },
  {
    id: 'testimonial-2',
    name: 'Ansu Fati',
    formation: 'Data Science & IA',
    company: 'Amplitude',
    position: 'Data Scientist',
    quote: 'Après avoir raté ma carrière de footballeur, je cherchais un nouveau départ. La formation en Data Science d\'Infoweb France a été une révélation. Tout était super bien structuré, on commence par les bases et on monte progressivement jusqu\'aux techniques avancées de machine learning. Les formateurs m\'ont vraiment soutenu à chaque étape, toujours là pour répondre à mes questions (et Dieu sait que j’en avais !). Aujourd’hui, je suis fier d’avoir trouvé une nouvelle passion. Merci Infoweb France !',
    imageUrl: '/images/testimonials/ansu.png'
  },
  {
    id: 'testimonial-3',
    name: 'Arda Guller',
    formation: 'UX/UI Design',
    company: 'Luko',
    position: 'UI Designer',
    quote: 'Après avoir traversé une période compliquée dans ma carrière de footballeur, j\'avais besoin d\'un nouveau départ. La formation en UX/UI d\'Infoweb France m\'a donné une vraie seconde chance. J\'ai retrouvé la rigueur et la discipline qui m\'avaient manqué sur les terrains. Aujourd\'hui, je travaille dans le Design, un domaine où la précision est aussi essentielle qu\'un bon contrôle de balle.',
    imageUrl: '/images/testimonials/arda.png'
  },
  {
    id: 'testimonial-4',
    name: 'Adrien Rabiot',
    formation: 'Cybersécurité',
    company: 'OwnSecurity',
    position: 'Analyste en cybersécurité',
    quote: 'Ma carrière sportive n\'a pas toujours été un long fleuve tranquille, surtout avec une gestion difficile de mon entourage. Grâce à la formation Cybersécurité d\'Infoweb France, j\'ai appris à piloter des projets et à analyser les données stratégiques sous risques des entreprises. Cette reconversion m\'a offert l\'indépendance et la stabilité que je recherchais depuis longtemps.',
    imageUrl: '/images/testimonials/rabiot.png'
  }
];

const FormationsTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-light-bg py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ce qu'en disent nos diplômés
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez les parcours et succès de nos anciens étudiants qui ont
            transformé leur carrière grâce à nos formations.
          </p>
        </div>

        <div className="mt-12">
          {/* Slider pour desktop */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex w-full flex-none flex-shrink-0 px-4"
                  >
                    <div className="flex w-full overflow-hidden rounded-xl bg-white shadow-lg">
                      <div className="hidden w-1/3 items-center justify-center bg-gradient-hero md:flex">
                        <div className="p-8">
                          <div className="h-48 w-48 overflow-hidden rounded-full">
                             <img
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            /> 
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-8 md:w-2/3">
                        <svg className="mb-4 h-10 w-10 text-secondary" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8v6a6 6 0 01-6 6H2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-4zM30 8v6a6 6 0 01-6 6h-2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-4z" />
                        </svg>
                        <blockquote className="mb-8 text-lg font-medium text-gray-600">
                          {testimonial.quote}
                        </blockquote>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.position} chez {testimonial.company}</p>
                          <p className="text-sm text-secondary">Formation : {testimonial.formation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:-translate-y-1/2 hover:scale-110 hover:shadow-lg"
                aria-label="Témoignage précédent"
              >
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:-translate-y-1/2 hover:scale-110 hover:shadow-lg"
                aria-label="Témoignage suivant"
              >
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-secondary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Version mobile */}
          <div className="md:hidden">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <svg className="mb-4 h-8 w-8 text-secondary" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v6a6 6 0 01-6 6H2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-4zM30 8v6a6 6 0 01-6 6h-2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-4z" />
              </svg>
              <blockquote className="mb-6 text-gray-600">
                {testimonials[activeIndex].quote}
              </blockquote>
              <div>
                <p className="font-bold">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].position} chez {testimonials[activeIndex].company}</p>
                <p className="text-sm text-secondary">Formation : {testimonials[activeIndex].formation}</p>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={goToPrevious}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm"
                  aria-label="Témoignage précédent"
                >
                  Précédent
                </button>
                <button
                  onClick={goToNext}
                  className="rounded-md bg-secondary px-3 py-1 text-sm text-white"
                  aria-label="Témoignage suivant"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg">
            Rejoignez notre communauté d'apprenants et transformez votre carrière
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            S'inscrire à une formation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormationsTestimonials;

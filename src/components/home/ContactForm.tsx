import type React from 'react';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simuler une soumission de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        message: '',
      });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Texte de gauche */}
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Réservez un appel avec un conseiller
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Vous avez des questions sur nos formations ? Prenez rendez-vous avec l'un de nos conseillers pour discuter de votre projet professionnel et voir comment InfoWeb France peut vous aider à atteindre vos objectifs.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-bg">
                  <svg className="h-6 w-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Assistance téléphonique</h3>
                  <p className="mt-1 text-gray-600">
                    Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
                  </p>
                  <a href="tel:+33123456789" className="mt-2 inline-block font-medium text-secondary hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-bg">
                  <svg className="h-6 w-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="mt-1 text-gray-600">
                    Envoyez-nous un email et nous vous répondrons sous 24h.
                  </p>
                  <a href="mailto:contact@infoweb.fr" className="mt-2 inline-block font-medium text-secondary hover:underline">
                    contact@infoweb.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-semibold">Prendre rendez-vous</h3>

            {isSuccess ? (
              <div className="rounded-lg bg-green-50 p-4 text-green-800">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      Merci pour votre message ! Un conseiller vous contactera très prochainement.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                    Formation qui vous intéresse
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                  >
                    <option value="">Sélectionnez une formation</option>
                    <option value="dev-web">Développement Web</option>
                    <option value="data-science">Data Science</option>
                    <option value="ux-ui">UX/UI Design</option>
                    <option value="cyber-security">Cybersécurité</option>
                    <option value="business-analytics">Business Analytics</option>
                    <option value="qa">Quality Assurance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                  ></textarea>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>

                <p className="text-xs text-gray-500">
                  En soumettant ce formulaire, vous acceptez que Infoweb France utilise vos données pour vous contacter concernant votre demande.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

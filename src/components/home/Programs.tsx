import React from 'react';

const Programs = () => {
  return (
    <section className="py-16 md:py-24" id="formations">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">La solution la plus abordable pour entrer dans la tech</h2>
          <p className="mt-4 text-lg text-gray-600">À partir de 200€/mois</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Programme 1 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Développement Web</h3>
              <p className="mt-2 text-gray-600">Full Stack JavaScript</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HTML, CSS, JavaScript</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>React, Node.js, Express</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>MongoDB, API REST</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 9 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/dev-web-fullstack" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>

          {/* Programme 2 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Data Science</h3>
              <p className="mt-2 text-gray-600">Python & Analyse de données</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Python, NumPy, Pandas</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Machine Learning, SQL</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Visualisation de données</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 10 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/data-science" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>

          {/* Programme 3 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">UX/UI Design</h3>
              <p className="mt-2 text-gray-600">Conception d'interfaces</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Figma, Adobe XD</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Recherche utilisateur</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>UI/UX, Prototypage</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 8 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/ux-ui-design" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>

          {/* Programme 4 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Cybersécurité</h3>
              <p className="mt-2 text-gray-600">Sécurité des systèmes</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Réseaux, Linux</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tests d'intrusion</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cryptographie, OSINT</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 10 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/cybersecurity" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>

          {/* Programme 5 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Business Analytics</h3>
              <p className="mt-2 text-gray-600">Intelligence d'affaires</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Excel, SQL avancé</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tableau, Power BI</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Analyse de données métier</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 7 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/business-analytics" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>

          {/* Programme 6 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Quality Assurance</h3>
              <p className="mt-2 text-gray-600">Test et qualité logicielle</p>
            </div>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Test manuel et automatisé</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Selenium, Cypress</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Assurance qualité, ISTQB</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Durée: 7 mois, à temps partiel</span>
              </li>
            </ul>
            <a href="/formations/quality-assurance" className="mt-4 inline-block font-medium text-secondary hover:underline">
              En savoir plus →
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">Pas sûr ? Faites notre quiz d'orientation professionnelle</p>
          <a href="#quiz" className="btn-primary mt-6 inline-block">
            Faire le quiz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;

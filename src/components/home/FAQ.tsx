import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between rounded-lg py-2 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <svg
          className={`h-5 w-5 transform text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 pl-2 pr-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Qu'est-ce que InfoWeb France ?",
      answer: "InfoWeb France est un bootcamp tech proposant des formations en ligne à temps partiel pour se reconvertir dans la tech. Nous proposons des programmes en développement web, data science, UX/UI design, cybersécurité et plus encore, avec une garantie de remboursement si vous ne trouvez pas d'emploi.",
    },
    {
      question: "Les formations sont-elles adaptées aux débutants ?",
      answer: "Oui, toutes nos formations sont conçues pour les débutants n'ayant aucune expérience préalable. Nous commençons par les bases et progressons vers des concepts plus avancés. Notre approche pédagogique est axée sur la pratique avec un fort accompagnement.",
    },
    {
      question: "Quel est le format des cours ?",
      answer: "Nos cours sont 100% en ligne et à temps partiel, ce qui vous permet de continuer à travailler pendant votre formation. Vous aurez accès à des leçons interactives, des webinaires en direct, des projets pratiques et un accompagnement personnalisé par des mentors professionnels.",
    },
    {
      question: "Combien coûtent les formations ?",
      answer: "Nos formations commencent à partir de 200€ par mois. Nous proposons plusieurs options de paiement, y compris le paiement échelonné sans frais supplémentaires. Si vous souhaitez connaître le prix exact d'une formation spécifique, nous vous invitons à prendre rendez-vous avec un conseiller.",
    },
    {
      question: "Comment fonctionne la garantie emploi ou remboursement ?",
      answer: "Si vous ne trouvez pas d'emploi dans les 6 mois suivant l'obtention de votre diplôme, et après avoir suivi notre programme de recherche d'emploi, nous vous remboursons intégralement les frais de formation. Cette garantie nécessite de respecter certaines conditions, notamment la participation active aux ateliers de recherche d'emploi et la soumission régulière de candidatures.",
    },
    {
      question: "Quels emplois puis-je obtenir après la formation ?",
      answer: "Selon le programme que vous choisissez, vous pourrez postuler à des emplois comme développeur web junior, data analyst, UX/UI designer, spécialiste en cybersécurité, QA engineer, ou business analyst. Nos diplômés travaillent dans des startups, des grandes entreprises et des agences digitales en France et à l'international.",
    },
    {
      question: "Comment se déroule l'accompagnement professionnel ?",
      answer: "Notre programme d'accompagnement professionnel comprend des ateliers de préparation CV, des simulations d'entretiens, du coaching personnalisé, et l'accès à notre réseau d'entreprises partenaires. Nous vous accompagnons dans toutes les étapes de votre recherche d'emploi, même après l'obtention de votre diplôme.",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Questions fréquentes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tout ce que vous devez savoir avant de commencer votre parcours avec InfoWeb France
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">Vous avez d'autres questions ?</p>
          <a href="#contact" className="btn-primary mt-6 inline-block">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

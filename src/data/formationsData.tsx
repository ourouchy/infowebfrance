// src/data/formationsData.ts

export const formationsData = {
  // Other formations go here if you have them...
  
  "dev-web-fullstack": {
    hero: {
      label: "Formation phare",
      title: "Développement Web Full Stack",
      description: "Devenez développeur web en 9 mois avec notre programme intensif à temps partiel. Apprenez à créer des sites et applications web modernes.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "9 mois"
        },
        {
          icon: "weeklyHours",
          text: "20h/semaine"
        },
        {
          icon: "mode",
          text: "100% en ligne"
        }
      ]
    },

    sessions: [
      {
        title: "Session de Juin 2025",
        date: "Début: 2 Juin 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Septembre 2025",
        date: "Début: 8 Septembre 2025",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session de Janvier 2026",
        date: "Début: 12 Janvier 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "94%", text: "Taux de satisfaction", color: "text-orange-500" },
      { value: "85%", text: "Taux d'employabilité", color: "text-orange-500" },
      { value: "450+", text: "Entreprises partenaires", color: "text-orange-500" },
      { value: "5000+", text: "Diplômés depuis 2018", color: "text-orange-500" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux du développement web",
            description: "HTML5, CSS3, et principes de design web. Introduction à la programmation, bases de JavaScript.",
            duration: "6 semaines"
          },
          {
            number: 2,
            title: "JavaScript avancé",
            description: "Concepts avancés de JavaScript, programmation asynchrone, manipulation du DOM, API Web, et introduction à React.",
            duration: "8 semaines"
          },
          {
            number: 3,
            title: "Développement frontal avec React",
            description: "Composants React, state management, React Router, et intégration avec des API.",
            duration: "10 semaines"
          },
          {
            number: 4,
            title: "Développement backend avec Node.js",
            description: "Création de serveurs avec Express, API REST, authentification, et bases de données MongoDB.",
            duration: "8 semaines"
          },
          {
            number: 5,
            title: "Projet final Full Stack",
            description: "Création d'une application web complète avec React et Node.js. Préparation au déploiement et à la mise en production.",
            duration: "6 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "Frontend",
            items: [
              "HTML5, CSS3, Responsive Design",
              "JavaScript ES6+, DOM manipulation",
              "React.js, State management, Hooks",
              "UI/UX design, Styled Components"
            ]
          },
          {
            title: "Backend",
            items: [
              "Node.js, Express.js",
              "API REST, authentification JWT",
              "MongoDB, modélisation de bases de données",
              "Sécurité web, tests et déploiement"
            ]
          },
          {
            title: "Outils & Pratiques",
            items: [
              "Git, GitHub, gestion de versions",
              "Méthodologies Agile, Scrum",
              "Tests unitaires et d'intégration",
              "Webpack, NPM, environnements de dev"
            ]
          },
          {
            title: "Compétences professionnelles",
            items: [
              "Résolution de problèmes techniques",
              "Travail en équipe, code reviews",
              "Communication technique, documentation",
              "Préparation aux entretiens techniques"
            ]
          }
        ]
      },

      certification: {
        title: "Certification",
        paragraphs: [
          "À la fin de votre formation, vous recevrez une certification reconnue par l'industrie qui atteste de vos compétences en développement web Full Stack. Cette certification est valorisée par nos entreprises partenaires et facilitera votre insertion professionnelle."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Complétion de tous les projets pratiques",
          "Réussite à l'examen final (score minimal de 70%)",
          "Présentation et validation du projet professionnel",
          "Participation à au moins 85% des sessions de formation"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Notre certification est reconnue par plus de 450 entreprises partenaires en France et à l'international. Elle est également éligible au CPF (Compte Personnel de Formation).",
        advantagesTitle: "Avantages de la certification",
        advantages: [
          "Reconnue par l'industrie tech",
          "Portfolio professionnel validé",
          "Accès au réseau d'alumni",
          "Garantie Emploi ou Remboursement",
          "Support carrière à vie"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "200€",
            suffix: "/mois",
            description: "Paiement échelonné sur 12 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "2200€",
            suffix: " total",
            description: "Économisez 200€ par rapport au paiement mensuel.",
            features: [
              "Économie de 200€",
              "Accès à vie au contenu",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "CPF / Pôle Emploi",
            price: "Financé",
            suffix: "",
            description: "Utilisez vos droits à la formation pour financer votre parcours.",
            features: [
              "Éligible au CPF",
              "Financement Pôle Emploi",
              "Accompagnement administratif"
            ],
            buttonLabel: "Vérifier éligibilité",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe est là pour vous aider à trouver la meilleure solution de financement adaptée à votre situation. N'hésitez pas à nous contacter pour un conseil personnalisé."
        }
      }
    },

    faq: [
      {
        question: "Faut-il des connaissances préalables en programmation?",
        answer:
          "Non, notre formation est conçue pour les débutants. Nous commençons par les fondamentaux et progressons vers des concepts plus avancés. Une bonne logique et une motivation à apprendre sont les seules prérequis."
      },
      {
        question: "Comment fonctionne la garantie \"Emploi ou Remboursement\"?",
        answer:
          "Si vous ne trouvez pas d'emploi dans les 6 mois suivant l'obtention de votre diplôme, nous vous remboursons intégralement votre formation. Cette garantie est soumise à certaines conditions, comme la participation active à notre programme d'accompagnement à l'emploi et la recherche active d'emploi."
      },
      {
        question: "Combien de temps dois-je consacrer par semaine à la formation?",
        answer:
          "La formation nécessite environ 20 heures par semaine, incluant les cours, les exercices et les projets. Le programme est conçu pour être compatible avec une activité professionnelle à temps partiel ou d'autres engagements."
      },
      {
        question: "Quels types d'emplois puis-je obtenir après la formation?",
        answer:
          "Nos diplômés occupent des postes de Développeur Front-End, Développeur Back-End, Développeur Full Stack, Intégrateur Web ou Développeur JavaScript. Les salaires débutent généralement entre 35 000€ et 45 000€ brut annuel."
      },
      {
        question: "Comment se déroulent les cours et le suivi?",
        answer:
          "La formation combine des cours en ligne, des workshops interactifs, des projets pratiques et un mentorat hebdomadaire. Chaque étudiant bénéficie d'un suivi personnalisé avec des retours réguliers sur ses projets et sa progression."
      }
    ],

    finalCta: {
      background: "bg-orange-50",
      title: "Prêt à lancer votre carrière dans le développement web?",
      description: "Rejoignez les milliers d'étudiants qui ont transformé leur vie professionnelle grâce à Infoweb France.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Demander une brochure",
          style: "outline"
        }
      ]
    }
  },
  "data-science": {
    hero: {
      label: "Formation certifiante",
      title: "Data Science & Intelligence Artificielle",
      description: "Devenez Data Scientist en 10 mois avec notre programme intensif certifiant RNCP. Maîtrisez l'analyse de données, le machine learning et développez des solutions IA.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "10 mois"
        },
        {
          icon: "weeklyHours",
          text: "25h/semaine"
        },
        {
          icon: "mode",
          text: "Hybride (distanciel & présentiel)"
        }
      ]
    },

    sessions: [
      {
        title: "Session de Septembre 2025",
        date: "Début: 15 Septembre 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Janvier 2026",
        date: "Début: 19 Janvier 2026",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session de Mars 2026",
        date: "Début: 23 Mars 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "96%", text: "Taux de satisfaction", color: "text-purple-500" },
      { value: "90%", text: "Taux d'employabilité", color: "text-purple-500" },
      { value: "320+", text: "Entreprises partenaires", color: "text-purple-500" },
      { value: "2500+", text: "Diplômés depuis 2019", color: "text-purple-500" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux de la programmation pour Data Science",
            description: "Python pour la data science, structures de données avancées, algorithmique et bonnes pratiques de code.",
            duration: "6 semaines"
          },
          {
            number: 2,
            title: "Analyse et visualisation de données",
            description: "Manipulation de données avec Pandas, NumPy, visualisations avec Matplotlib, Seaborn et Plotly, statistiques descriptives.",
            duration: "8 semaines"
          },
          {
            number: 3,
            title: "Machine Learning fondamental",
            description: "Apprentissage supervisé et non-supervisé, modèles de régression, classification, clustering avec scikit-learn.",
            duration: "10 semaines"
          },
          {
            number: 4,
            title: "Deep Learning & IA avancée",
            description: "Réseaux de neurones avec TensorFlow/Keras, Computer Vision, NLP, séries temporelles et systèmes de recommandation.",
            duration: "10 semaines"
          },
          {
            number: 5,
            title: "MLOps & Déploiement",
            description: "Industrialisation de modèles, CI/CD pour la data science, API REST avec Flask/FastAPI, Docker et cloud computing.",
            duration: "6 semaines"
          },
          {
            number: 6,
            title: "Projet certifiant RNCP",
            description: "Réalisation d'un projet professionnel end-to-end en partenariat avec une entreprise, incluant la présentation devant un jury RNCP.",
            duration: "8 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "Data Engineering",
            items: [
              "Extraction et nettoyage de données",
              "Pipelines ETL/ELT",
              "SQL avancé, bases NoSQL",
              "Big Data: Spark, bases Hadoop"
            ]
          },
          {
            title: "Data Analysis",
            items: [
              "Python, Pandas, NumPy",
              "Visualisation: Matplotlib, Seaborn, Tableau",
              "Statistiques inférentielles",
              "Tests A/B, analyse exploratoire"
            ]
          },
          {
            title: "Machine Learning & IA",
            items: [
              "Scikit-learn, modèles prédictifs",
              "Deep Learning: TensorFlow, Keras",
              "NLP, Computer Vision",
              "Fine-tuning, transfer learning"
            ]
          },
          {
            title: "Production & Soft Skills",
            items: [
              "MLOps, API REST (Flask/FastAPI)",
              "Déploiement cloud (AWS/GCP/Azure)",
              "Data storytelling, présentations",
              "Communication technique, éthique IA"
            ]
          }
        ]
      },

      certification: {
        title: "Certification RNCP",
        paragraphs: [
          "Notre formation est certifiante au RNCP niveau 7 (équivalent Bac+5) sous le titre 'Expert en Science des Données et Intelligence Artificielle' (Code RNCP 35288). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
          "La formation est également éligible au CPF et offre une reconnaissance professionnelle forte sur le marché du travail des data scientists."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Validation des compétences techniques à travers des projets évalués",
          "Réussite à l'examen final (QCM technique et étude de cas)",
          "Soutenance du projet professionnel devant un jury RNCP",
          "85% minimum de présence aux sessions de formation"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Notre certification RNCP niveau 7 est reconnue à l'échelle nationale et appréciée des recruteurs dans les secteurs de la tech, finance, santé, industrie et conseil. Elle atteste de compétences professionnelles en data science de haut niveau.",
        advantagesTitle: "Avantages de la certification",
        advantages: [
          "Titre reconnu par l'État (niveau 7)",
          "Éligible CPF, OPCO et autres financements",
          "Portfolio de projets professionnels",
          "Accès au réseau de +2500 alumni",
          "Coaching carrière et job matching"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "450€",
            suffix: "/mois",
            description: "Paiement échelonné sur 12 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "4950€",
            suffix: " total",
            description: "Économisez 450€ par rapport au paiement mensuel.",
            features: [
              "Économie de 450€",
              "Accès à vie aux contenus",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "CPF / OPCO / Pôle Emploi",
            price: "Financé",
            suffix: "",
            description: "Formation éligible aux principaux dispositifs de financement public.",
            features: [
              "Éligible CPF (jusqu'à 100%)",
              "Financement OPCO possible",
              "Accompagnement administratif"
            ],
            buttonLabel: "Vérifier éligibilité",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe spécialisée en financement de formation vous accompagne dans vos démarches CPF, OPCO ou Pôle Emploi. Nous proposons également des solutions de financement adaptées aux reconversions professionnelles."
        }
      }
    },

    faq: [
      {
        question: "Faut-il avoir des compétences en programmation pour suivre cette formation?",
        answer:
          "Un niveau débutant en programmation est recommandé mais pas obligatoire. Nous proposons un module préparatoire en Python pour les débutants complets. Une aisance avec les mathématiques niveau Bac+2 (algèbre, statistiques) est un atout."
      },
      {
        question: "En quoi consiste exactement le titre RNCP niveau 7?",
        answer:
          "Le titre RNCP niveau 7 'Expert en Science des Données et Intelligence Artificielle' est une certification professionnelle reconnue par l'État français, équivalente à un niveau Bac+5. Elle atteste de votre capacité à concevoir, développer et déployer des solutions d'IA et d'analyse de données dans un contexte professionnel."
      },
      {
        question: "Comment se déroule la formation en format hybride?",
        answer:
          "La formation combine 80% de cours en ligne synchrones (cours en direct) et asynchrones (contenus à votre rythme), et 20% en présentiel pour des workshops intensifs et networking. Les sessions présentielles ont lieu un weekend par mois à Paris, Lyon, ou Bordeaux selon votre localisation."
      },
      {
        question: "Quels types d'emplois et salaires puis-je espérer après cette formation?",
        answer:
          "Nos diplômés occupent des postes de Data Scientist, Data Analyst, ML Engineer, ou AI Specialist. En France, les salaires débutent généralement entre 45 000€ et 60 000€ brut annuel selon la région et le secteur d'activité. Notre réseau de 320+ entreprises partenaires facilite votre insertion professionnelle."
      },
      {
        question: "Comment fonctionne l'accompagnement pendant et après la formation?",
        answer:
          "Pendant la formation, vous bénéficiez d'un mentorat hebdomadaire avec des experts du domaine, des revues de code et des sessions de coaching personnalisées. Après la formation, vous avez accès à notre programme d'accompagnement à l'emploi incluant préparation aux entretiens, job dating exclusifs et mise en relation avec nos entreprises partenaires."
      },
      {
        question: "La formation est-elle accessible aux personnes en situation de handicap?",
        answer:
          "Oui, nous mettons en place des aménagements spécifiques pour les personnes en situation de handicap. Notre référent handicap est disponible pour discuter de vos besoins particuliers et adapter votre parcours. Nous sommes engagés pour une formation inclusive et accessible à tous."
      }
    ],

    finalCta: {
      background: "bg-purple-50",
      title: "Prêt à devenir un expert en Data Science?",
      description: "Rejoignez notre formation certifiante RNCP et intégrez un secteur d'avenir avec des compétences recherchées par les entreprises.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Planifier un appel conseil",
          style: "outline"
        }
      ]
    }
  },
  "ux-ui-design": {
    hero: {
      label: "Formation certifiante",
      title: "UX/UI Design & Design Thinking",
      description: "Devenez concepteur UX/UI en 8 mois avec notre formation certifiante RNCP. Maîtrisez les méthodes de conception centrée utilisateur et créez des interfaces innovantes et engageantes.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "8 mois"
        },
        {
          icon: "weeklyHours",
          text: "20h/semaine"
        },
        {
          icon: "mode",
          text: "Hybride (80% distanciel)"
        }
      ]
    },

    sessions: [
      {
        title: "Session d'Octobre 2025",
        date: "Début: 6 Octobre 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Février 2026",
        date: "Début: 9 Février 2026",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session de Mai 2026",
        date: "Début: 11 Mai 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "93%", text: "Taux de satisfaction", color: "text-teal-500" },
      { value: "87%", text: "Taux d'employabilité", color: "text-teal-500" },
      { value: "280+", text: "Entreprises partenaires", color: "text-teal-500" },
      { value: "1800+", text: "Diplômés depuis 2020", color: "text-teal-500" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux du design et expérience utilisateur",
            description: "Principes de design, psychologie cognitive, accessibilité, et bases de l'UX. Initiation aux méthodes de recherche utilisateur.",
            duration: "5 semaines"
          },
          {
            number: 2,
            title: "Research UX & Design Thinking",
            description: "Méthodologies de recherche utilisateur, personas, parcours utilisateur, tests d'utilisabilité et méthodologie Design Thinking.",
            duration: "6 semaines"
          },
          {
            number: 3,
            title: "Wireframing & Prototypage",
            description: "Architecture de l'information, wireframes, maquettes low et high fidelity, prototypage interactif avec Figma et Adobe XD.",
            duration: "7 semaines"
          },
          {
            number: 4,
            title: "UI Design & Design Systems",
            description: "Principes d'interface, typographie, couleur, iconographie, design responsive, et création de systèmes de design cohérents.",
            duration: "7 semaines"
          },
          {
            number: 5,
            title: "Interaction Design & Animation",
            description: "Design d'interactions, micro-interactions, animation d'interface, prototypes avancés et préparation aux handoffs développeurs.",
            duration: "5 semaines"
          },
          {
            number: 6,
            title: "Projet certifiant RNCP",
            description: "Réalisation d'un projet UX/UI complet pour un client réel, de la recherche au prototype final, incluant la présentation devant un jury RNCP.",
            duration: "6 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "User Experience (UX)",
            items: [
              "Recherche utilisateur qualitative et quantitative",
              "Tests d'utilisabilité et analytics",
              "Personas et empathy mapping",
              "Architecture de l'information"
            ]
          },
          {
            title: "User Interface (UI)",
            items: [
              "Design d'interfaces responsive",
              "Systèmes de design et composants",
              "Typographie et théorie des couleurs",
              "Iconographie et illustration digitale"
            ]
          },
          {
            title: "Outils & Méthodologies",
            items: [
              "Figma, Adobe XD, Sketch",
              "Design Thinking et méthodes agiles",
              "Prototypage interactif",
              "Collaboration designer-développeur"
            ]
          },
          {
            title: "Compétences professionnelles",
            items: [
              "Présentation de concepts design",
              "Gestion de projets créatifs",
              "Argumenter des choix de design",
              "Créer et défendre un portfolio"
            ]
          }
        ]
      },

      certification: {
        title: "Certification RNCP",
        paragraphs: [
          "Notre formation est certifiante au RNCP niveau 6 (équivalent Bac+3/4) sous le titre 'Concepteur-Designer UX' (Code RNCP 36633). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
          "Cette certification valide vos compétences en conception d'expériences et d'interfaces numériques, vous permettant d'accéder à des postes qualifiés dans le domaine du design numérique."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Réalisation complète des projets pratiques du cursus",
          "Constitution d'un portfolio professionnel de projets UX/UI",
          "Soutenance du projet final devant un jury RNCP",
          "Validation des compétences par évaluation continue"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Notre certification RNCP niveau 6 est reconnue par l'ensemble des acteurs du numérique en France et en Europe. Elle vous positionne comme un professionnel qualifié du design d'expérience et d'interface, capable d'intervenir sur l'ensemble du processus de conception.",
        advantagesTitle: "Avantages de la certification",
        advantages: [
          "Titre reconnu par l'État (niveau 6)",
          "Portfolio professionnel validé",
          "Compatible avec tous les financements (CPF, OPCO)",
          "Mentorat par des designers en poste",
          "Sessions de recrutement dédiées"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "350€",
            suffix: "/mois",
            description: "Paiement échelonné sur 10 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "3300€",
            suffix: " total",
            description: "Économisez 200€ par rapport au paiement mensuel.",
            features: [
              "Économie de 200€",
              "Accès à vie aux contenus",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "CPF / OPCO / Pôle Emploi",
            price: "Financé",
            suffix: "",
            description: "Formation éligible aux principaux dispositifs de financement public.",
            features: [
              "Éligible CPF à 100%",
              "Prise en charge OPCO possible",
              "Accompagnement dossier administratif"
            ],
            buttonLabel: "Vérifier éligibilité",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe dédiée au financement vous aide à monter votre dossier CPF, OPCO ou Pôle Emploi. Nous proposons également des facilités de paiement pour les étudiants et les personnes en reconversion."
        }
      }
    },

    faq: [
      {
        question: "Faut-il être doué en dessin pour suivre cette formation?",
        answer:
          "Non, aucun talent particulier en dessin n'est requis. L'UX/UI design repose davantage sur la compréhension des besoins utilisateurs et la résolution de problèmes que sur des compétences artistiques. Les outils numériques facilitent la création d'interfaces, même sans compétence en dessin traditionnel."
      },
      {
        question: "Quels logiciels sont couverts dans la formation?",
        answer:
          "La formation couvre principalement Figma, qui est l'outil le plus utilisé dans l'industrie actuellement. Nous abordons également Adobe XD et Sketch. Une licence Figma Professional est incluse pendant la durée de votre formation. Nous introduisons aussi des outils complémentaires comme Miro pour la recherche utilisateur et Zeplin pour la collaboration avec les développeurs."
      },
      {
        question: "Comment fonctionne le format hybride de la formation?",
        answer:
          "La formation est à 80% en distanciel via des cours en direct, des ateliers interactifs et du travail individuel ou en groupe. Les 20% en présentiel correspondent à des workshops intensifs mensuels à Paris, Lyon ou Bordeaux (selon votre choix) pour les revues de projets, les exercices collaboratifs et le networking professionnel."
      },
      {
        question: "Quels types d'emplois et salaires puis-je espérer après cette formation?",
        answer:
          "Nos diplômés occupent des postes de UX Designer, UI Designer, UX/UI Designer, Product Designer ou Web Designer. En France, les salaires débutent généralement entre 36 000€ et 45 000€ brut annuel selon la région et le secteur. Notre taux d'insertion de 87% témoigne de la forte demande pour ces profils sur le marché du travail."
      },
      {
        question: "En quoi consiste le projet certifiant RNCP?",
        answer:
          "Le projet certifiant consiste à mener un projet UX/UI complet pour un vrai client (entreprise partenaire ou association). Vous passerez par toutes les étapes: recherche utilisateur, définition de la stratégie UX, wireframing, prototypage et tests. Ce projet sera présenté devant un jury composé de professionnels et de représentants RNCP, et constituera la pièce maîtresse de votre portfolio."
      },
      {
        question: "Je n'ai aucune expérience en design ou en tech, puis-je quand même suivre cette formation?",
        answer:
          "Oui, notre formation est accessible aux débutants complets. Nous commençons par les fondamentaux et progressons graduellement. Une sensibilité visuelle et un intérêt pour la technologie sont des atouts, mais aucun prérequis technique n'est exigé. Nous recommandons simplement de suivre notre module de préparation gratuit avant le début de la formation."
      }
    ],

    finalCta: {
      background: "bg-teal-50",
      title: "Prêt à transformer votre créativité en carrière?",
      description: "Rejoignez notre formation certifiante en UX/UI Design et donnez vie à des expériences numériques qui font la différence.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Réserver un entretien conseil",
          style: "outline"
        }
      ]
    }
  },
  "cybersecurity": {
    hero: {
      label: "Formation certifiante",
      title: "Expert en Cybersécurité",
      description: "Devenez expert en sécurité informatique en 10 mois avec notre formation certifiante RNCP. Maîtrisez les techniques offensives et défensives pour protéger les systèmes d'information contre les cybermenaces.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "10 mois"
        },
        {
          icon: "weeklyHours",
          text: "25h/semaine"
        },
        {
          icon: "mode",
          text: "Hybride (75% distanciel)"
        }
      ]
    },

    sessions: [
      {
        title: "Session de Septembre 2025",
        date: "Début: 22 Septembre 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Février 2026",
        date: "Début: 16 Février 2026",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session de Mai 2026",
        date: "Début: 18 Mai 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "95%", text: "Taux de satisfaction", color: "text-blue-600" },
      { value: "92%", text: "Taux d'employabilité", color: "text-blue-600" },
      { value: "250+", text: "Entreprises partenaires", color: "text-blue-600" },
      { value: "1200+", text: "Diplômés depuis 2019", color: "text-blue-600" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux de la cybersécurité",
            description: "Principes de sécurité informatique, cadres réglementaires (RGPD, NIS2, LPM), fondamentaux des réseaux et systèmes, cryptographie de base.",
            duration: "6 semaines"
          },
          {
            number: 2,
            title: "Sécurité des systèmes et réseaux",
            description: "Sécurisation des systèmes Linux et Windows, configuration de pare-feu, VPN, détection d'intrusion, analyse de logs et monitoring.",
            duration: "7 semaines"
          },
          {
            number: 3,
            title: "Tests d'intrusion et hacking éthique",
            description: "Méthodologies de pentest, reconnaissance, identification des vulnérabilités, exploitation, élévation de privilèges et post-exploitation.",
            duration: "8 semaines"
          },
          {
            number: 4,
            title: "Sécurité applicative et DevSecOps",
            description: "Sécurité web (OWASP Top 10), développement sécurisé, analyse statique et dynamique de code, intégration de la sécurité dans le CI/CD.",
            duration: "7 semaines"
          },
          {
            number: 5,
            title: "Réponse aux incidents et forensics",
            description: "Gestion de crise cybersécurité, analyse forensique, investigation numérique, récupération de données et analyse de malwares.",
            duration: "6 semaines"
          },
          {
            number: 6,
            title: "Gouvernance et management de la sécurité",
            description: "Élaboration de politiques de sécurité, gestion des risques, conformité, normes ISO 27001, audits de sécurité et sensibilisation.",
            duration: "4 semaines"
          },
          {
            number: 7,
            title: "Projet certifiant RNCP",
            description: "Réalisation d'un projet complet de sécurisation d'infrastructure ou d'audit pour un client réel, incluant la présentation devant un jury RNCP.",
            duration: "6 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "Sécurité défensive",
            items: [
              "Sécurisation d'infrastructures IT",
              "Configuration de solutions de sécurité",
              "Détection et monitoring",
              "Hardening de systèmes et réseaux"
            ]
          },
          {
            title: "Sécurité offensive",
            items: [
              "Tests d'intrusion méthodiques",
              "Exploitation de vulnérabilités",
              "Social engineering",
              "Red teaming et war games"
            ]
          },
          {
            title: "SecOps & Incident Response",
            items: [
              "Gestion d'incidents de sécurité",
              "Analyse forensique",
              "Threat hunting",
              "Investigation de compromissions"
            ]
          },
          {
            title: "Management & Conformité",
            items: [
              "Gestion des risques cyber",
              "Mise en conformité (RGPD, NIS2, etc.)",
              "Politiques de sécurité",
              "Audits et certification ISO 27001"
            ]
          }
        ]
      },

      certification: {
        title: "Certification RNCP",
        paragraphs: [
          "Notre formation est certifiante au RNCP niveau 7 (équivalent Bac+5) sous le titre 'Expert en Sécurité Digitale' (Code RNCP 35631). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
          "En complément du titre RNCP, la formation prépare aux certifications internationales reconnues dans le secteur : CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional) et CompTIA Security+."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Validation des évaluations techniques pratiques",
          "Réussite aux examens théoriques (score minimal de 70%)",
          "Réalisation et soutenance d'un projet de sécurité complet",
          "Participation à au moins 85% des sessions de formation"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Notre certification RNCP niveau 7 est hautement valorisée par les entreprises françaises et européennes, particulièrement dans les secteurs sensibles comme la défense, la finance, la santé et les OIV (Opérateurs d'Importance Vitale). La préparation aux certifications internationales renforce encore votre employabilité.",
        advantagesTitle: "Avantages de la certification",
        advantages: [
          "Titre reconnu par l'État (niveau 7)",
          "Préparation aux certifications internationales",
          "Accès au réseau d'experts en cybersécurité",
          "Labs pratiques en conditions réelles",
          "CTF (Capture The Flag) exclusifs"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "550€",
            suffix: "/mois",
            description: "Paiement échelonné sur 12 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "5950€",
            suffix: " total",
            description: "Économisez 650€ par rapport au paiement mensuel.",
            features: [
              "Économie de 650€",
              "Accès à vie aux contenus",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "CPF / OPCO / Pôle Emploi",
            price: "Financé",
            suffix: "",
            description: "Formation éligible aux principaux dispositifs de financement public.",
            features: [
              "Éligible CPF (jusqu'à 100%)",
              "Prise en charge OPCO",
              "Accompagnement administratif dédié"
            ],
            buttonLabel: "Vérifier éligibilité",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe de conseillers en financement vous accompagne dans vos démarches administratives et vous aide à optimiser votre financement selon votre situation. Des solutions spécifiques existent pour les militaires en reconversion et les agents publics."
        }
      }
    },

    faq: [
      {
        question: "Faut-il avoir des connaissances préalables en informatique?",
        answer:
          "Des connaissances de base en informatique sont nécessaires, notamment la compréhension des systèmes d'exploitation, des réseaux et des principes de programmation. Un niveau technicien informatique ou développeur est idéal, mais nous proposons un module de mise à niveau technique pour les personnes en reconversion."
      },
      {
        question: "Cette formation me prépare-t-elle à quelles certifications?",
        answer:
          "En plus du titre RNCP niveau 7, la formation vous prépare aux certifications internationales les plus reconnues dans le domaine : CEH (Certified Ethical Hacker), CompTIA Security+ et fournit les bases pour l'OSCP (Offensive Security Certified Professional). Les frais d'examen pour le CEH et le CompTIA Security+ sont inclus dans le prix de la formation."
      },
      {
        question: "Comment se déroulent les travaux pratiques en cybersécurité?",
        answer:
          "Vous accédez à notre plateforme sécurisée de labs virtuels où vous pouvez pratiquer des techniques offensives et défensives dans des environnements isolés. Les sessions présentielles incluent des workshops intensifs de hacking éthique et des CTF (Capture The Flag). Vous travaillerez sur des scénarios réalistes, des infrastructures virtualisées et des cas d'usage entreprise."
      },
      {
        question: "Quels types d'emplois et salaires puis-je espérer après cette formation?",
        answer:
          "Nos diplômés occupent des postes de Pentester, Analyste SOC, Consultant en Cybersécurité, Ingénieur Sécurité ou Responsable RSSI junior. En France, les salaires débutent généralement entre 45 000€ et 65 000€ brut annuel selon l'expérience préalable et la spécialisation. La demande pour ces profils est en constante augmentation avec un déficit de compétences sur le marché."
      },
      {
        question: "Est-ce que les aspects légaux et éthiques sont abordés dans la formation?",
        answer:
          "Absolument. La formation consacre un module entier aux aspects légaux, réglementaires et éthiques de la cybersécurité. Vous étudierez le cadre juridique français et européen (RGPD, LPM, NIS2), les méthodologies conformes à la loi pour les tests d'intrusion, et les principes éthiques du hacking. Tous nos étudiants signent un code de déontologie en début de formation."
      },
      {
        question: "Comment sont sélectionnés les formateurs?",
        answer:
          "Nos formateurs sont exclusivement des professionnels en activité dans le domaine de la cybersécurité : pentesteurs, experts en réponse à incident, RSSI, consultants sécurité... Ils partagent leur expérience terrain et les dernières tendances du secteur. Plusieurs sont titulaires de certifications avancées (OSCP, CISSP, CISM) et participent régulièrement à des conférences de sécurité comme le FIC, les SSTIC ou la BlackHat."
      }
    ],

    finalCta: {
      background: "bg-blue-50",
      title: "Prêt à devenir un expert en cybersécurité?",
      description: "Dans un monde hyper-connecté, les experts en sécurité informatique sont les gardiens des données et systèmes critiques. Rejoignez l'élite de la cyberdéfense française.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Participer à un CTF découverte",
          style: "outline"
        }
      ]
    }
  },
  "business-analytics": {
    hero: {
      label: "Formation certifiante",
      title: "Business Analytics & Intelligence d'Affaires",
      description: "Devenez expert en analyse de données business en 6 mois avec notre formation certifiante. Transformez les données en insights stratégiques pour optimiser la performance des entreprises.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "6 mois"
        },
        {
          icon: "weeklyHours",
          text: "15h/semaine"
        },
        {
          icon: "mode",
          text: "100% en ligne"
        }
      ]
    },

    sessions: [
      {
        title: "Session de Novembre 2025",
        date: "Début: 3 Novembre 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Mars 2026",
        date: "Début: 2 Mars 2026",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session de Juin 2026",
        date: "Début: 1 Juin 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "92%", text: "Taux de satisfaction", color: "text-indigo-500" },
      { value: "89%", text: "Taux d'employabilité", color: "text-indigo-500" },
      { value: "300+", text: "Entreprises partenaires", color: "text-indigo-500" },
      { value: "1600+", text: "Diplômés depuis 2020", color: "text-indigo-500" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux de l'analyse de données",
            description: "Introduction à l'analyse de données business, statistiques descriptives, Excel avancé et bases de données relationnelles (SQL).",
            duration: "4 semaines"
          },
          {
            number: 2,
            title: "Visualisation et reporting",
            description: "Tableaux de bord interactifs avec Power BI et Tableau, data storytelling, création de rapports d'analyse pour différentes audiences business.",
            duration: "5 semaines"
          },
          {
            number: 3,
            title: "Analyse marketing et commerciale",
            description: "KPIs commerciaux, analyse de conversion, segmentation client, analyse de campagnes marketing, prédiction des ventes.",
            duration: "4 semaines"
          },
          {
            number: 4,
            title: "Business Intelligence & décision",
            description: "Modélisation prédictive business, analyse de rentabilité, optimisation des processus, aide à la décision et recommandations stratégiques.",
            duration: "4 semaines"
          },
          {
            number: 5,
            title: "Python pour l'analyse business",
            description: "Fondamentaux de Python, manipulation de données avec Pandas, analyse exploratoire et statistique, automatisation des rapports.",
            duration: "4 semaines"
          },
          {
            number: 6,
            title: "Projet certifiant",
            description: "Réalisation d'un projet d'analyse complet sur des données réelles d'entreprise, incluant recommandations et présentation devant un jury professionnel.",
            duration: "5 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "Outils d'analyse",
            items: [
              "Excel avancé (TCD, formules, macros)",
              "SQL pour l'analyse de données",
              "Power BI & Tableau",
              "Python niveau intermédiaire"
            ]
          },
          {
            title: "Techniques d'analyse",
            items: [
              "Analyse descriptive et diagnostique",
              "Segmentation et ciblage client",
              "Modélisation prédictive business",
              "Tests statistiques et corrélations"
            ]
          },
          {
            title: "Compétences métier",
            items: [
              "KPIs et métriques business",
              "Analyse financière fondamentale",
              "Optimisation marketing et ventes",
              "Performance opérationnelle"
            ]
          },
          {
            title: "Communication & soft skills",
            items: [
              "Data storytelling",
              "Présentation de résultats d'analyse",
              "Recommandations business",
              "Communication avec les décideurs"
            ]
          }
        ]
      },

      certification: {
        title: "Certification RNCP",
        paragraphs: [
          "Notre formation est certifiante au RNCP niveau 5 (équivalent Bac+2) sous le titre 'Analyste de données d'entreprise' (Code RNCP 34974). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
          "La formation prépare également à la certification Microsoft Power BI Data Analyst Associate, l'une des certifications les plus demandées sur le marché du travail dans le domaine de l'analyse de données business."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Réalisation des projets pratiques d'analyse",
          "Réussite à l'examen théorique (QCM technique)",
          "Présentation et défense du projet final devant un jury",
          "Participation active aux sessions collaboratives"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Notre certification RNCP niveau 5 est reconnue par les entreprises françaises comme attestant des compétences opérationnelles en analyse de données business. La préparation à la certification Microsoft complète votre profil avec une reconnaissance internationale.",
        advantagesTitle: "Avantages de la certification",
        advantages: [
          "Titre reconnu par l'État (niveau 5)",
          "Double certification (RNCP + Microsoft)",
          "Portfolio de projets d'analyse",
          "Accès privilégié aux offres partenaires",
          "Employabilité immédiate"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "250€",
            suffix: "/mois",
            description: "Paiement échelonné sur 8 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "1950€",
            suffix: " total",
            description: "Économisez 50€ par rapport au paiement mensuel.",
            features: [
              "Économie de 50€",
              "Accès à vie aux contenus",
              "Garantie Emploi ou Remboursement"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "CPF / OPCO / Pôle Emploi",
            price: "Financé",
            suffix: "",
            description: "Formation éligible aux principaux dispositifs de financement public.",
            features: [
              "Éligible CPF à 100%",
              "Prise en charge OPCO possible",
              "Accompagnement dossier administratif"
            ],
            buttonLabel: "Vérifier éligibilité",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe de conseillers vous guide dans l'optimisation de votre financement. Cette formation étant plus courte et accessible, elle est particulièrement adaptée au financement CPF et aux plans de développement des compétences en entreprise."
        }
      }
    },

    faq: [
      {
        question: "Faut-il avoir des compétences en informatique ou en mathématiques?",
        answer:
          "Non, aucun prérequis technique spécifique n'est nécessaire. Un niveau baccalauréat en mathématiques est suffisant. La formation débute par les fondamentaux et progresse graduellement. Une aisance avec les outils bureautiques de base (Excel notamment) est recommandée mais pas obligatoire."
      },
      {
        question: "Quelle est la différence entre Business Analytics et Data Science?",
        answer:
          "Le Business Analytics se concentre sur l'utilisation des données pour résoudre des problématiques business concrètes et améliorer la prise de décision, avec des outils accessibles comme Excel, SQL, Power BI. La Data Science est plus technique et implique des algorithmes complexes, de la programmation avancée et des modèles statistiques sophistiqués. Notre formation en Business Analytics est moins technique mais plus orientée applications métier."
      },
      {
        question: "Comment se déroulent les cours en ligne?",
        answer:
          "La formation 100% en ligne combine des cours en direct (webinaires interactifs), des ressources asynchrones (vidéos, exercices), des projets pratiques et des sessions de mentorat individuelles. Vous bénéficiez d'un accès à notre plateforme d'apprentissage 24/7 et participez à des sessions collaboratives hebdomadaires. Le format est conçu pour être compatible avec une activité professionnelle."
      },
      {
        question: "Quels types d'emplois puis-je viser après cette formation?",
        answer:
          "Nos diplômés occupent des postes d'Analyste Business, Analyste de données marketing, Business Intelligence Analyst, Chargé d'études statistiques ou Consultant en analyse de données. En France, les salaires débutent généralement entre 32 000€ et 40 000€ brut annuel. C'est également une excellente formation complémentaire pour les professionnels du marketing, des finances ou des opérations souhaitant développer leurs compétences analytiques."
      },
      {
        question: "Est-ce que la formation inclut des données et cas réels?",
        answer:
          "Absolument. Vous travaillerez sur des datasets provenant d'entreprises réelles (anonymisés quand nécessaire) dans divers secteurs : e-commerce, finance, marketing, RH, logistique... Vous réaliserez également un projet final basé sur une problématique authentique d'une de nos entreprises partenaires, ce qui enrichira considérablement votre portfolio."
      },
      {
        question: "Cette formation peut-elle m'aider dans mon poste actuel même si je ne cherche pas un nouveau travail?",
        answer:
          "Tout à fait. De nombreux étudiants suivent cette formation pour développer leurs compétences analytiques dans leur fonction actuelle. L'analyse de données est aujourd'hui précieuse dans presque tous les départements d'une entreprise. Nos modules sont conçus pour être immédiatement applicables à des situations professionnelles courantes, permettant d'améliorer la prise de décision et l'efficacité dans votre rôle actuel."
      }
    ],

    finalCta: {
      background: "bg-indigo-50",
      title: "Prêt à transformer les données en décisions stratégiques?",
      description: "Rejoignez notre formation en Business Analytics et devenez indispensable dans toute organisation grâce à votre capacité à extraire des insights précieux des données.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Assister à un webinaire gratuit",
          style: "outline"
        }
      ]
    }
  },
  "quality-assurance": {
  hero: {
    label: "Formation certifiante",
    title: "Quality Assurance & Test Logiciel",
    description: "Devenez expert en assurance qualité logicielle en 6 mois avec notre formation certifiante. Maîtrisez les méthodologies de test pour garantir la fiabilité et la performance des applications.",
    ctaButton1: "S'inscrire",
    ctaButton2: "Télécharger le syllabus",
    features: [
      {
        icon: "schedule", 
        text: "6 mois"
      },
      {
        icon: "weeklyHours",
        text: "15h/semaine"
      },
      {
        icon: "mode",
        text: "100% en ligne"
      }
    ]
  },

  sessions: [
    {
      title: "Session de Novembre 2025",
      date: "Début: 3 Novembre 2025",
      statusLabel: "Inscriptions ouvertes",
      statusColor: "bg-green-200" 
    },
    {
      title: "Session de Mars 2026",
      date: "Début: 2 Mars 2026",
      statusLabel: "Prochainement",
      statusColor: "bg-blue-200"
    },
    {
      title: "Session de Juin 2026",
      date: "Début: 1 Juin 2026",
      statusLabel: "À venir",
      statusColor: "bg-gray-50"
    }
  ],

  stats: [
    { value: "94%", text: "Taux de satisfaction", color: "text-indigo-500" },
    { value: "91%", text: "Taux d'employabilité", color: "text-indigo-500" },
    { value: "250+", text: "Entreprises partenaires", color: "text-indigo-500" },
    { value: "1200+", text: "Diplômés depuis 2020", color: "text-indigo-500" }
  ],

  tabs: {
    programme: {
      title: "Programme de formation",
      steps: [
        {
          number: 1,
          title: "Fondamentaux du test logiciel",
          description: "Introduction aux méthodologies de test, concepts de base de l'assurance qualité, cycle de vie du test, documentation des tests et normes ISO/IEEE.",
          duration: "4 semaines"
        },
        {
          number: 2,
          title: "Tests fonctionnels et manuels",
          description: "Conception de cas de test, tests boîte noire et boîte blanche, tests d'acceptation, gestion des anomalies et reporting avec JIRA et TestRail.",
          duration: "5 semaines"
        },
        {
          number: 3,
          title: "Automatisation des tests",
          description: "Introduction à Selenium, Cypress et Playwright, création de scripts de test automatisés, frameworks de test, gestion des données de test.",
          duration: "4 semaines"
        },
        {
          number: 4,
          title: "Tests de performance et sécurité",
          description: "Utilisation de JMeter, LoadRunner, tests de charge et de stress, bases des tests de sécurité, OWASP Top 10, validation de la robustesse.",
          duration: "4 semaines"
        },
        {
          number: 5,
          title: "DevOps et tests continus",
          description: "Intégration dans CI/CD, tests dans un environnement Agile, pratiques DevOps, Git, Jenkins, automatisation dans les pipelines.",
          duration: "4 semaines"
        },
        {
          number: 6,
          title: "Projet certifiant",
          description: "Conception et mise en œuvre d'une stratégie de test complète pour une application réelle, incluant tests manuels et automatisés, présentation devant un jury professionnel.",
          duration: "5 semaines"
        }
      ],
      downloadLabel: "Télécharger le programme complet"
    },

    competences: {
      title: "Compétences acquises",
      columns: [
        {
          title: "Outils de test",
          items: [
            "JIRA, TestRail, Zephyr",
            "Selenium, Cypress, Playwright",
            "JMeter, LoadRunner",
            "Git, Jenkins, Docker"
          ]
        },
        {
          title: "Méthodologies de test",
          items: [
            "Tests fonctionnels et non-fonctionnels",
            "Tests de régression et d'intégration",
            "TDD, BDD (Cucumber/Gherkin)",
            "Tests de performance et de sécurité"
          ]
        },
        {
          title: "Compétences techniques",
          items: [
            "Bases de SQL et API testing",
            "Scripting (Python, JavaScript)",
            "Automatisation des tests",
            "Analyse et reporting des bugs"
          ]
        },
        {
          title: "Communication & soft skills",
          items: [
            "Communication des résultats de test",
            "Collaboration avec les développeurs",
            "Documentation technique",
            "Gestion des priorités de test"
          ]
        }
      ]
    },

    certification: {
      title: "Certification RNCP",
      paragraphs: [
        "Notre formation est certifiante au RNCP niveau 5 (équivalent Bac+2) sous le titre 'Testeur logiciel' (Code RNCP 35286). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
        "La formation prépare également à la certification ISTQB Foundation Level, une certification internationale de référence dans le domaine du test logiciel."
      ],
      conditionsTitle: "Conditions d'obtention",
      conditions: [
        "Réalisation des projets pratiques de test",
        "Réussite à l'examen théorique (QCM technique)",
        "Présentation et défense du projet final devant un jury",
        "Participation active aux sessions collaboratives"
      ],
      recognitionTitle: "Reconnaissance",
      recognitionText:
        "Notre certification RNCP niveau 5 est reconnue par les entreprises françaises comme attestant des compétences opérationnelles en test logiciel. La préparation à la certification ISTQB complète votre profil avec une reconnaissance internationale.",
      advantagesTitle: "Avantages de la certification",
      advantages: [
        "Titre reconnu par l'État (niveau 5)",
        "Double certification (RNCP + ISTQB)",
        "Portfolio de projets de test",
        "Accès privilégié aux offres partenaires",
        "Employabilité immédiate"
      ]
    },

    financement: {
      title: "Options de financement",
      plans: [
        {
          label: "Paiement mensuel",
          price: "250€",
          suffix: "/mois",
          description: "Paiement échelonné sur 8 mois sans frais supplémentaires.",
          features: [
            "Sans condition de revenus",
            "Sans frais de dossier",
            "Garantie Emploi ou Remboursement"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: false
        },
        {
          label: "Paiement comptant",
          price: "1950€",
          suffix: " total",
          description: "Économisez 50€ par rapport au paiement mensuel.",
          features: [
            "Économie de 50€",
            "Accès à vie aux contenus",
            "Garantie Emploi ou Remboursement"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: true
        },
        {
          label: "CPF / OPCO / Pôle Emploi",
          price: "Financé",
          suffix: "",
          description: "Formation éligible aux principaux dispositifs de financement public.",
          features: [
            "Éligible CPF à 100%",
            "Prise en charge OPCO possible",
            "Accompagnement dossier administratif"
          ],
          buttonLabel: "Vérifier éligibilité",
          isPopular: false
        }
      ],
      note: {
        title: "Questions sur le financement?",
        text: "Notre équipe de conseillers vous guide dans l'optimisation de votre financement. Cette formation étant plus courte et accessible, elle est particulièrement adaptée au financement CPF et aux plans de développement des compétences en entreprise."
      }
    }
  },

  faq: [
    {
      question: "Faut-il avoir des compétences en développement pour suivre cette formation?",
      answer:
        "Non, aucun prérequis en développement n'est nécessaire pour débuter. La formation commence par les fondamentaux et progresse graduellement. Des bases en informatique et une familiarité avec les environnements numériques sont suffisantes. Les notions de programmation nécessaires pour l'automatisation des tests seront enseignées pendant la formation."
    },
    {
      question: "Quelle est la différence entre un Quality Assurance et un développeur?",
      answer:
        "Le Quality Assurance (QA) se concentre sur la vérification de la qualité des logiciels, la détection des bugs et la validation des exigences, tandis que le développeur crée le code source. Le QA adopte une perspective utilisateur et qualité, utilisant des outils de test spécifiques. Notre formation en QA est moins axée sur la création de code complexe mais davantage sur les méthodologies de test et la gestion de la qualité."
    },
    {
      question: "Comment se déroulent les cours en ligne?",
      answer:
        "La formation 100% en ligne combine des cours en direct (webinaires interactifs), des ressources asynchrones (vidéos, exercices), des projets pratiques et des sessions de mentorat individuelles. Vous bénéficiez d'un accès à notre plateforme d'apprentissage 24/7 et participez à des sessions collaboratives hebdomadaires. Le format est conçu pour être compatible avec une activité professionnelle."
    },
    {
      question: "Quels types d'emplois puis-je viser après cette formation?",
      answer:
        "Nos diplômés occupent des postes de Testeur logiciel, Analyste QA, Ingénieur de test, Technicien de test automatisé ou Consultant en assurance qualité. En France, les salaires débutent généralement entre 30 000€ et 38 000€ brut annuel. Cette formation est également précieuse pour les professionnels du développement ou du digital souhaitant se spécialiser dans la qualité logicielle."
    },
    {
      question: "Est-ce que la formation inclut des applications et cas réels?",
      answer:
        "Absolument. Vous travaillerez sur des applications réelles de différentes natures (web, mobile, API) dans divers contextes : e-commerce, finance, services, etc. Vous réaliserez également un projet final basé sur une application authentique d'une de nos entreprises partenaires, ce qui enrichira considérablement votre portfolio et votre expérience pratique."
    },
    {
      question: "Le marché du Quality Assurance est-il porteur en France?",
      answer:
        "Oui, le marché est très dynamique. Avec la transformation numérique des entreprises et l'importance croissante de la qualité logicielle, les profils QA sont très recherchés. Selon les dernières études sectorielles, la demande dépasse actuellement l'offre, notamment pour les profils maîtrisant l'automatisation des tests. Le métier offre également de bonnes perspectives d'évolution vers des postes de lead QA ou de management de la qualité."
    }
  ],

  finalCta: {
    background: "bg-indigo-50",
    title: "Prêt à garantir l'excellence des applications numériques?",
    description: "Rejoignez notre formation en Quality Assurance et devenez un expert incontournable dans la validation de la qualité logicielle, une compétence essentielle dans notre économie numérique.",
    buttons: [
      {
        label: "S'inscrire maintenant",
        style: "primary"
      },
      {
        label: "Assister à un webinaire gratuit",
        style: "outline"
      }
    ]
  }
  },
  "javascript-fundamentals": {
  hero: {
    label: "Formation intensive",
    title: "JavaScript Fundamentals",
    description: "Maîtrisez les fondamentaux de JavaScript en 3 mois avec notre formation intensive. Développez vos compétences en programmation front-end et acquérez les bases solides pour créer des applications web interactives.",
    ctaButton1: "S'inscrire",
    ctaButton2: "Télécharger le syllabus",
    features: [
      {
        icon: "schedule", 
        text: "3 mois"
      },
      {
        icon: "weeklyHours",
        text: "10h/semaine"
      },
      {
        icon: "mode",
        text: "100% en ligne"
      }
    ]
  },

  sessions: [
    {
      title: "Session d'Octobre 2025",
      date: "Début: 6 Octobre 2025",
      statusLabel: "Inscriptions ouvertes",
      statusColor: "bg-green-200" 
    },
    {
      title: "Session de Janvier 2026",
      date: "Début: 12 Janvier 2026",
      statusLabel: "Prochainement",
      statusColor: "bg-blue-200"
    },
    {
      title: "Session d'Avril 2026",
      date: "Début: 6 Avril 2026",
      statusLabel: "À venir",
      statusColor: "bg-gray-50"
    }
  ],

  stats: [
    { value: "96%", text: "Taux de satisfaction", color: "text-indigo-500" },
    { value: "85%", text: "Complètent la formation", color: "text-indigo-500" },
    { value: "120+", text: "Entreprises recommandent", color: "text-indigo-500" },
    { value: "2500+", text: "Étudiants formés", color: "text-indigo-500" }
  ],

  tabs: {
    programme: {
      title: "Programme de formation",
      steps: [
        {
          number: 1,
          title: "Introduction à JavaScript",
          description: "Bases du langage, syntaxe, variables, types de données, opérateurs, structures conditionnelles et boucles, fonctions fondamentales.",
          duration: "2 semaines"
        },
        {
          number: 2,
          title: "Structures de données",
          description: "Travail avec les tableaux et objets, méthodes d'array, manipulation d'objets, destructuration, spread et rest operators.",
          duration: "2 semaines"
        },
        {
          number: 3,
          title: "Fonctions avancées",
          description: "Fonctions anonymes, fonctions fléchées, closures, contexte d'exécution, this, call, apply et bind, programmation fonctionnelle de base.",
          duration: "2 semaines"
        },
        {
          number: 4,
          title: "DOM et événements",
          description: "Manipulation du DOM, sélecteurs, événements utilisateur, création et modification d'éléments, gestion des formulaires et validation.",
          duration: "2 semaines"
        },
        {
          number: 5,
          title: "Asynchrone en JavaScript",
          description: "Callbacks, promesses, async/await, fetch API, gestion des erreurs, travail avec des API REST.",
          duration: "2 semaines"
        },
        {
          number: 6,
          title: "Projet final",
          description: "Création d'une application web interactive complète en JavaScript pur, application des connaissances acquises dans un projet concret.",
          duration: "2 semaines"
        }
      ],
      downloadLabel: "Télécharger le programme complet"
    },

    competences: {
      title: "Compétences acquises",
      columns: [
        {
          title: "Fondamentaux JavaScript",
          items: [
            "Syntaxe et structures de base",
            "Fonctions et portée",
            "Tableaux et objets",
            "ES6+ features"
          ]
        },
        {
          title: "Manipulation du DOM",
          items: [
            "Sélection et modification d'éléments",
            "Gestion d'événements",
            "Création dynamique de contenu",
            "Animation basique"
          ]
        },
        {
          title: "Programmation asynchrone",
          items: [
            "Promesses et async/await",
            "API Fetch et AJAX",
            "Gestion des erreurs",
            "Conception d'interfaces réactives"
          ]
        },
        {
          title: "Développement front-end",
          items: [
            "Intégration avec HTML/CSS",
            "Validation de formulaires",
            "LocalStorage et SessionStorage",
            "Bonnes pratiques de code"
          ]
        }
      ]
    },

    certification: {
      title: "Attestation de formation",
      paragraphs: [
        "Cette formation intensive n'est pas certifiante mais vous recevrez une attestation de réussite détaillant les compétences acquises et validées par notre équipe pédagogique.",
        "Cette attestation est reconnue par nos entreprises partenaires et peut être valorisée sur votre CV et vos profils professionnels."
      ],
      conditionsTitle: "Conditions d'obtention",
      conditions: [
        "Participation à au moins 80% des séances",
        "Réalisation des exercices pratiques hebdomadaires",
        "Développement et présentation du projet final",
        "Participation active aux sessions collaboratives"
      ],
      recognitionTitle: "Reconnaissance",
      recognitionText:
        "Bien que non certifiante, cette formation est reconnue dans l'écosystème tech pour sa qualité pédagogique et son approche pratique. Vous pouvez également utiliser cette formation comme première étape avant d'intégrer nos formations certifiantes plus avancées.",
      advantagesTitle: "Avantages de la formation",
      advantages: [
        "Programme intensif et pratique",
        "Portfolio de projets JavaScript",
        "Accès à la communauté des anciens élèves",
        "Supports de cours à vie",
        "Mentorat personnalisé"
      ]
    },

    financement: {
      title: "Options de financement",
      plans: [
        {
          label: "Paiement mensuel",
          price: "175€",
          suffix: "/mois",
          description: "Paiement échelonné sur 4 mois sans frais supplémentaires.",
          features: [
            "Sans condition de revenus",
            "Sans frais de dossier",
            "Satisfaction garantie ou remboursé"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: false
        },
        {
          label: "Paiement comptant",
          price: "650€",
          suffix: " total",
          description: "Économisez 50€ par rapport au paiement mensuel.",
          features: [
            "Économie de 50€",
            "Accès à vie aux contenus",
            "Satisfaction garantie ou remboursé"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: true
        },
        {
          label: "Plan entreprise",
          price: "850€",
          suffix: " HT",
          description: "Formation professionnelle financée par votre employeur.",
          features: [
            "Facturation à l'entreprise",
            "Convention de formation",
            "Suivi pédagogique détaillé"
          ],
          buttonLabel: "Demander un devis",
          isPopular: false
        }
      ],
      note: {
        title: "Questions sur le financement?",
        text: "Notre équipe de conseillers vous guide dans vos options de financement. Cette formation étant courte et non certifiante, elle n'est pas éligible au CPF mais peut être prise en charge via le budget formation de votre entreprise ou votre OPCO selon votre situation."
      }
    }
  },

  faq: [
    {
      question: "Faut-il des connaissances préalables en programmation?",
      answer:
        "Non, cette formation est accessible aux débutants complets en programmation. Nous commençons par les fondamentaux et progressons étape par étape. Une familiarité basique avec HTML et CSS est un plus, mais pas obligatoire - nous incluons une introduction rapide à ces technologies dans les premiers modules."
    },
    {
      question: "Cette formation me permettra-t-elle de trouver un emploi dans le développement web?",
      answer:
        "Cette formation vous donne les bases solides en JavaScript, qui est un premier pas essentiel vers le développement web. Pour devenir développeur web employable, vous devrez compléter votre formation avec des connaissances en frameworks (comme React ou Vue) et posséder un portfolio de projets. Cette formation peut être suivie par notre formation certifiante 'Dev Web Fullstack' pour obtenir un profil complet."
    },
    {
      question: "Comment se déroulent les cours en ligne?",
      answer:
        "La formation combine des vidéos préenregistrées, des lectures, des exercices interactifs et des sessions live hebdomadaires avec un instructeur. Vous progressez à votre rythme sur la plateforme, mais devez respecter certaines échéances pour les projets. Les instructeurs sont disponibles via un chat dédié pour répondre à vos questions et vous bénéficiez d'une session de mentorat individuel par mois."
    },
    {
      question: "Quel matériel est nécessaire pour suivre la formation?",
      answer:
        "Un ordinateur (Windows, Mac ou Linux) avec une connexion internet stable est suffisant. Aucun logiciel spécifique n'est requis hormis un navigateur web récent (Chrome, Firefox, Edge ou Safari) et un éditeur de code (nous recommandons VS Code, qui est gratuit). Tout le travail se fait dans l'environnement de développement du navigateur et notre plateforme d'exercices en ligne."
    },
    {
      question: "Pourrai-je créer des applications web complètes après cette formation?",
      answer:
        "Vous serez capable de créer des applications web front-end interactives avec JavaScript pur. Le programme couvre la manipulation du DOM, les événements utilisateurs, le stockage local et les appels API - tout ce dont vous avez besoin pour construire des interfaces réactives. Pour des applications plus complexes avec backend, vous auriez besoin de compétences supplémentaires, disponibles dans nos autres formations."
    },
    {
      question: "Combien de temps dois-je consacrer à la formation chaque semaine?",
      answer:
        "Nous recommandons environ 10 heures par semaine, incluant le visionnage des cours, la pratique des exercices et le travail sur les projets. La charge peut être répartie selon votre disponibilité, avec un minimum recommandé de 3 sessions de travail par semaine pour maintenir la progression. Notre plateforme est accessible 24/7, vous permettant d'étudier selon votre propre emploi du temps."
    }
  ],

  finalCta: {
    background: "bg-indigo-50",
    title: "Prêt à maîtriser JavaScript et créer des sites web interactifs?",
    description: "Rejoignez notre formation JavaScript Fundamentals et développez les compétences essentielles pour donner vie à vos idées sur le web.",
    buttons: [
      {
        label: "S'inscrire maintenant",
        style: "primary"
      },
      {
        label: "Essayer un cours gratuit",
        style: "outline"
      }
    ]
  }
  },
  "python-data-analysis": {
    hero: {
      label: "Formation intensive",
      title: "Analyse de données avec Python",
      description: "Maîtrisez l'analyse et la visualisation de données avec Python en 3 mois avec notre formation intensive. Exploitez la puissance de pandas, NumPy et Matplotlib pour transformer des données brutes en insights exploitables.",
      ctaButton1: "S'inscrire",
      ctaButton2: "Télécharger le syllabus",
      features: [
        {
          icon: "schedule", 
          text: "3 mois"
        },
        {
          icon: "weeklyHours",
          text: "10h/semaine"
        },
        {
          icon: "mode",
          text: "100% en ligne"
        }
      ]
    },

    sessions: [
      {
        title: "Session d'Octobre 2025",
        date: "Début: 6 Octobre 2025",
        statusLabel: "Inscriptions ouvertes",
        statusColor: "bg-green-200" 
      },
      {
        title: "Session de Janvier 2026",
        date: "Début: 12 Janvier 2026",
        statusLabel: "Prochainement",
        statusColor: "bg-blue-200"
      },
      {
        title: "Session d'Avril 2026",
        date: "Début: 6 Avril 2026",
        statusLabel: "À venir",
        statusColor: "bg-gray-50"
      }
    ],

    stats: [
      { value: "95%", text: "Taux de satisfaction", color: "text-indigo-500" },
      { value: "88%", text: "Complètent la formation", color: "text-indigo-500" },
      { value: "150+", text: "Entreprises recommandent", color: "text-indigo-500" },
      { value: "2200+", text: "Étudiants formés", color: "text-indigo-500" }
    ],

    tabs: {
      programme: {
        title: "Programme de formation",
        steps: [
          {
            number: 1,
            title: "Fondamentaux Python pour l'analyse",
            description: "Bases du langage Python, environnement Jupyter, structures de données, fonctions, contrôle de flux et introduction aux bibliothèques scientifiques.",
            duration: "2 semaines"
          },
          {
            number: 2,
            title: "Manipulation de données avec pandas",
            description: "Structures pandas (Series, DataFrame), importation/exportation de données, filtrage, transformation, agrégation et nettoyage de données.",
            duration: "2 semaines"
          },
          {
            number: 3,
            title: "Analyse numérique avec NumPy",
            description: "Arrays NumPy, opérations vectorisées, algèbre linéaire de base, statistiques descriptives et calculs de performances.",
            duration: "2 semaines"
          },
          {
            number: 4,
            title: "Visualisation de données",
            description: "Matplotlib, Seaborn, principes de data viz, graphiques statistiques avancés, personnalisation des visualisations et storytelling visuel.",
            duration: "2 semaines"
          },
          {
            number: 5,
            title: "Préparation et exploration de données",
            description: "Gestion des valeurs manquantes, détection d'anomalies, analyse exploratoire, feature engineering et préparation des données pour l'analyse.",
            duration: "2 semaines"
          },
          {
            number: 6,
            title: "Projet d'analyse complet",
            description: "Réalisation d'un projet d'analyse de données de bout en bout sur un dataset réel, de l'importation des données à la présentation des résultats.",
            duration: "2 semaines"
          }
        ],
        downloadLabel: "Télécharger le programme complet"
      },

      competences: {
        title: "Compétences acquises",
        columns: [
          {
            title: "Python pour la data",
            items: [
              "Programmation Python fondamentale",
              "Environnement Jupyter & notebooks",
              "Packages scientifiques (SciPy)",
              "Automatisation des analyses"
            ]
          },
          {
            title: "Manipulation de données",
            items: [
              "pandas (analyse tabulaire)",
              "NumPy (calcul vectoriel)",
              "ETL avec Python",
              "Nettoyage et préparation des données"
            ]
          },
          {
            title: "Analyse et statistiques",
            items: [
              "Statistiques descriptives",
              "Tests d'hypothèses de base",
              "Analyse temporelle",
              "Analyse multidimensionnelle"
            ]
          },
          {
            title: "Visualisation",
            items: [
              "Matplotlib & Seaborn",
              "Graphiques interactifs (Plotly)",
              "Dashboards simples",
              "Data storytelling"
            ]
          }
        ]
      },

      certification: {
        title: "Attestation de formation",
        paragraphs: [
          "Cette formation intensive n'est pas certifiante mais vous recevrez une attestation de réussite détaillant les compétences acquises et validées par notre équipe pédagogique.",
          "Cette attestation est reconnue par nos entreprises partenaires et peut être valorisée sur votre CV et vos profils professionnels."
        ],
        conditionsTitle: "Conditions d'obtention",
        conditions: [
          "Participation à au moins 80% des séances",
          "Réalisation des exercices pratiques hebdomadaires",
          "Développement et présentation du projet final d'analyse",
          "Participation active aux sessions collaboratives"
        ],
        recognitionTitle: "Reconnaissance",
        recognitionText:
          "Bien que non certifiante, cette formation est reconnue dans l'écosystème data pour sa qualité pédagogique et son approche pratique. Vous pouvez également utiliser cette formation comme première étape avant d'intégrer notre formation certifiante en Data Science.",
        advantagesTitle: "Avantages de la formation",
        advantages: [
          "Programme intensif et pratique",
          "Portfolio de projets d'analyse",
          "Accès à la communauté des data analysts",
          "Supports de cours à vie",
          "Mentorat personnalisé"
        ]
      },

      financement: {
        title: "Options de financement",
        plans: [
          {
            label: "Paiement mensuel",
            price: "195€",
            suffix: "/mois",
            description: "Paiement échelonné sur 4 mois sans frais supplémentaires.",
            features: [
              "Sans condition de revenus",
              "Sans frais de dossier",
              "Satisfaction garantie ou remboursé"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: false
          },
          {
            label: "Paiement comptant",
            price: "750€",
            suffix: " total",
            description: "Économisez 30€ par rapport au paiement mensuel.",
            features: [
              "Économie de 30€",
              "Accès à vie aux contenus",
              "Satisfaction garantie ou remboursé"
            ],
            buttonLabel: "Choisir ce plan",
            isPopular: true
          },
          {
            label: "Plan entreprise",
            price: "950€",
            suffix: " HT",
            description: "Formation professionnelle financée par votre employeur.",
            features: [
              "Facturation à l'entreprise",
              "Convention de formation",
              "Suivi pédagogique détaillé"
            ],
            buttonLabel: "Demander un devis",
            isPopular: false
          }
        ],
        note: {
          title: "Questions sur le financement?",
          text: "Notre équipe de conseillers vous guide dans vos options de financement. Cette formation étant courte et non certifiante, elle n'est pas éligible au CPF mais peut être prise en charge via le budget formation de votre entreprise ou votre OPCO selon votre situation."
        }
      }
    },

    faq: [
      {
        question: "Faut-il des connaissances préalables en programmation ou en statistiques?",
        answer:
          "Aucune expérience préalable en programmation n'est strictement nécessaire, mais une familiarité avec les concepts informatiques de base est utile. Concernant les statistiques, nous couvrons les notions fondamentales dans le cours. Une formation scientifique ou mathématique est un plus, mais pas obligatoire - notre approche pédagogique est conçue pour accompagner les débutants."
      },
      {
        question: "Cette formation me permettra-t-elle de devenir Data Scientist?",
        answer:
          "Cette formation vous donne les bases solides en analyse de données avec Python, qui est un premier pas essentiel vers la Data Science. Pour devenir Data Scientist, vous devrez compléter votre formation avec des connaissances en machine learning et statistiques avancées. Cette formation peut être suivie par notre formation certifiante 'Data Science' pour obtenir un profil complet de Data Scientist."
      },
      {
        question: "Comment se déroulent les cours en ligne?",
        answer:
          "La formation combine des vidéos préenregistrées, des notebooks Jupyter interactifs, des exercices pratiques et des sessions live hebdomadaires avec un instructeur. Vous progressez à votre rythme sur la plateforme, mais devez respecter certaines échéances pour les projets. Les instructeurs sont disponibles via un chat dédié pour répondre à vos questions et vous bénéficiez d'une session de mentorat individuel par mois."
      },
      {
        question: "Quels types de données allons-nous analyser pendant la formation?",
        answer:
          "Vous travaillerez sur divers types de datasets: données structurées (CSV, Excel), données financières, données temporelles, données marketing, données de e-commerce, et plus encore. Les exemples sont tirés de cas réels et de datasets publics. Le projet final vous permet de choisir un domaine qui vous intéresse particulièrement ou qui correspond à votre secteur professionnel."
      },
      {
        question: "Puis-je utiliser cette formation pour améliorer mes compétences dans mon poste actuel?",
        answer:
          "Absolument! De nombreux étudiants suivent cette formation pour ajouter des compétences d'analyse de données à leur profil professionnel actuel. Que vous soyez en marketing, finance, RH, opérations ou autre, la capacité à analyser des données avec Python est un atout majeur qui peut vous permettre d'automatiser des tâches, d'extraire des insights plus profonds et de prendre des décisions basées sur les données."
      },
      {
        question: "Quel matériel est nécessaire pour suivre la formation?",
        answer:
          "Un ordinateur (Windows, Mac ou Linux) avec une connexion internet stable est suffisant. Nous utilisons des environnements cloud pour l'analyse de données (Google Colab, Kaggle Notebooks) donc vous n'avez pas besoin d'une machine très puissante. Tout est configurable dans le navigateur, sans installation complexe requise, bien que nous vous guidions également pour configurer un environnement local Python si vous le souhaitez."
      }
    ],

    finalCta: {
      background: "bg-indigo-50",
      title: "Prêt à exploiter la puissance des données avec Python?",
      description: "Rejoignez notre formation d'Analyse de données avec Python et développez des compétences essentielles et recherchées sur le marché du travail actuel.",
      buttons: [
        {
          label: "S'inscrire maintenant",
          style: "primary"
        },
        {
          label: "Essayer un cours gratuit",
          style: "outline"
        }
      ]
    }
  },
  "con-dev-app": {
  hero: {
    label: "Formation certifiante",
    title: "Concepteur Développeur d'Application",
    description: "Devenez expert en conception et développement d'applications en 9 mois avec notre formation certifiante. Maîtrisez l'ensemble du cycle de développement et construisez des applications robustes et évolutives.",
    ctaButton1: "S'inscrire",
    ctaButton2: "Télécharger le syllabus",
    features: [
      {
        icon: "schedule", 
        text: "9 mois"
      },
      {
        icon: "weeklyHours",
        text: "20h/semaine"
      },
      {
        icon: "mode",
        text: "100% en ligne"
      }
    ]
  },

  sessions: [
    {
      title: "Session de Septembre 2025",
      date: "Début: 15 Septembre 2025",
      statusLabel: "Inscriptions ouvertes",
      statusColor: "bg-green-200" 
    },
    {
      title: "Session de Janvier 2026",
      date: "Début: 19 Janvier 2026",
      statusLabel: "Prochainement",
      statusColor: "bg-blue-200"
    },
    {
      title: "Session de Mai 2026",
      date: "Début: 11 Mai 2026",
      statusLabel: "À venir",
      statusColor: "bg-gray-50"
    }
  ],

  stats: [
    { value: "93%", text: "Taux de satisfaction", color: "text-indigo-500" },
    { value: "87%", text: "Taux d'employabilité", color: "text-indigo-500" },
    { value: "350+", text: "Entreprises partenaires", color: "text-indigo-500" },
    { value: "1800+", text: "Diplômés depuis 2019", color: "text-indigo-500" }
  ],

  tabs: {
    programme: {
      title: "Programme de formation",
      steps: [
        {
          number: 1,
          title: "Fondamentaux de la programmation",
          description: "Algorithmique, structures de données, programmation orientée objet, principes SOLID, design patterns et architecture logicielle.",
          duration: "6 semaines"
        },
        {
          number: 2,
          title: "Développement Back-end",
          description: "Java/Spring, Node.js, conception d'API RESTful, microservices, gestion de la sécurité, tests unitaires et d'intégration.",
          duration: "7 semaines"
        },
        {
          number: 3,
          title: "Développement Front-end",
          description: "HTML5/CSS3 avancé, JavaScript moderne (ES6+), React.js, Redux, responsive design, accessibilité et UX fondamentaux.",
          duration: "7 semaines"
        },
        {
          number: 4,
          title: "Bases de données & DevOps",
          description: "Conception et optimisation de bases de données SQL/NoSQL, intégration continue, déploiement continu, Docker, cloud computing et monitoring.",
          duration: "6 semaines"
        },
        {
          number: 5,
          title: "Gestion de projet & méthodologies",
          description: "Méthodes Agile (Scrum, Kanban), planification, estimation, gestion des risques, communication technique et documentation.",
          duration: "4 semaines"
        },
        {
          number: 6,
          title: "Conception avancée & Architecture",
          description: "UML, architecture en couches, microservices vs monolithes, API design, sécurité applicative, performances et scalabilité.",
          duration: "5 semaines"
        },
        {
          number: 7,
          title: "Projet certifiant",
          description: "Réalisation d'une application complète en conditions professionnelles, de la conception à la mise en production, avec présentation devant un jury.",
          duration: "8 semaines"
        }
      ],
      downloadLabel: "Télécharger le programme complet"
    },

    competences: {
      title: "Compétences acquises",
      columns: [
        {
          title: "Conception logicielle",
          items: [
            "Architecture applicative",
            "Modélisation UML",
            "Design patterns",
            "Conception orientée domaine (DDD)"
          ]
        },
        {
          title: "Développement",
          items: [
            "Java/Spring, Node.js",
            "JavaScript/React.js",
            "SQL et NoSQL",
            "Tests automatisés et TDD"
          ]
        },
        {
          title: "DevOps & Déploiement",
          items: [
            "CI/CD (Jenkins, GitHub Actions)",
            "Conteneurisation (Docker)",
            "Cloud (AWS, Azure notions)",
            "Monitoring et logging"
          ]
        },
        {
          title: "Gestion & Méthodes",
          items: [
            "Méthodologies Agile",
            "Gestion de projet technique",
            "Spécifications fonctionnelles",
            "Documentation technique"
          ]
        }
      ]
    },

    certification: {
      title: "Certification RNCP",
      paragraphs: [
        "Notre formation est certifiante au RNCP niveau 6 (équivalent Bac+3/4) sous le titre 'Concepteur Développeur d'Applications' (Code RNCP 31678). Cette certification est délivrée par France Compétences et reconnue par l'État français.",
        "La formation prépare également aux certifications professionnelles Oracle Certified Professional Java Developer et AWS Certified Developer – Associate, très recherchées sur le marché du travail."
      ],
      conditionsTitle: "Conditions d'obtention",
      conditions: [
        "Validation des évaluations théoriques (QCM techniques)",
        "Réalisation des projets pratiques intermédiaires",
        "Développement et soutenance du projet final devant un jury",
        "Validation des compétences en milieu professionnel (stage ou alternance)"
      ],
      recognitionTitle: "Reconnaissance",
      recognitionText:
        "Notre certification RNCP niveau 6 est reconnue par les entreprises françaises et européennes comme attestant des compétences avancées en conception et développement d'applications. Les certifications Oracle et AWS complètent votre profil avec une reconnaissance internationale dans des technologies spécifiques.",
      advantagesTitle: "Avantages de la certification",
      advantages: [
        "Titre reconnu par l'État (niveau 6)",
        "Certifications techniques complémentaires",
        "Portfolio de projets professionnels",
        "Réseau d'entreprises partenaires",
        "Accès aux postes de niveau intermédiaire/senior"
      ]
    },

    financement: {
      title: "Options de financement",
      plans: [
        {
          label: "Paiement mensuel",
          price: "455€",
          suffix: "/mois",
          description: "Paiement échelonné sur 12 mois sans frais supplémentaires.",
          features: [
            "Sans condition de revenus",
            "Sans frais de dossier",
            "Garantie Emploi ou Remboursement"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: false
        },
        {
          label: "Paiement comptant",
          price: "5250€",
          suffix: " total",
          description: "Économisez 210€ par rapport au paiement mensuel.",
          features: [
            "Économie de 210€",
            "Accès à vie aux contenus",
            "Garantie Emploi ou Remboursement"
          ],
          buttonLabel: "Choisir ce plan",
          isPopular: true
        },
        {
          label: "CPF / OPCO / Pôle Emploi",
          price: "Financé",
          suffix: "",
          description: "Formation éligible aux principaux dispositifs de financement public.",
          features: [
            "Éligible CPF à 100%",
            "Prise en charge OPCO possible",
            "Accompagnement dossier administratif"
          ],
          buttonLabel: "Vérifier éligibilité",
          isPopular: false
        }
      ],
      note: {
        title: "Questions sur le financement?",
        text: "Notre équipe de conseillers vous guide dans l'optimisation de votre financement. Cette formation étant certifiante RNCP, elle est éligible à tous les dispositifs de financement de la formation professionnelle, y compris les financements publics (CPF, Pôle Emploi) et les plans de développement des compétences en entreprise."
      }
    }
  },

  faq: [
    {
      question: "Quels sont les prérequis pour suivre cette formation?",
      answer:
        "Cette formation requiert des connaissances de base en programmation (variables, fonctions, conditions, boucles) dans au moins un langage. Une première expérience en développement web (HTML/CSS/JavaScript) ou logiciel est recommandée. Un niveau Bac+2 en informatique ou une expérience professionnelle équivalente est conseillé. Un test technique et un entretien de motivation sont réalisés avant l'admission."
    },
    {
      question: "Quelle est la différence avec une formation de développeur web?",
      answer:
        "La formation Concepteur Développeur d'Application est plus complète et avancée qu'une simple formation de développeur web. Elle couvre non seulement le développement front-end et back-end, mais aussi la conception logicielle, l'architecture applicative, le DevOps et la gestion de projet. Elle permet d'accéder à des postes avec plus de responsabilités comme développeur fullstack senior, lead développeur ou architecte applicatif junior."
    },
    {
      question: "Comment se déroule la formation à distance?",
      answer:
        "La formation combine des cours en direct (classes virtuelles interactives), des modules d'apprentissage asynchrones, des projets pratiques individuels et en groupe, et un accompagnement personnalisé. Vous aurez des rendez-vous hebdomadaires avec vos formateurs, des sessions de mentorat technique et des revues de code. Notre plateforme LMS donne accès aux supports de cours, exercices, évaluations et forums de discussion 24/7."
    },
    {
      question: "Quels types d'emplois puis-je viser après cette formation?",
      answer:
        "Nos diplômés occupent des postes de Concepteur Développeur d'Applications, Développeur Full Stack, Lead Développeur, Chef de Projet Technique, Architecte Logiciel Junior ou encore Ingénieur DevOps. En France, les salaires débutent généralement entre 38 000€ et 50 000€ brut annuel selon la région et le type d'entreprise. L'évolution vers des postes d'architecte ou de CTO est possible après quelques années d'expérience."
    },
    {
      question: "Est-il possible de suivre cette formation en alternance?",
      answer:
        "Oui, cette formation est disponible en alternance avec un rythme de 3 semaines en entreprise / 1 semaine en formation. Nous vous accompagnons dans la recherche d'une entreprise d'accueil parmi nos partenaires. L'alternance permet de mettre en pratique immédiatement les compétences acquises et facilite l'insertion professionnelle. Le contrat d'alternance couvre également les frais de formation."
    },
    {
      question: "Comment la formation reste-t-elle à jour avec les technologies qui évoluent rapidement?",
      answer:
        "Notre programme est révisé semestriellement par un comité pédagogique composé de professionnels en activité. Nous intégrons régulièrement les nouvelles versions des frameworks et les technologies émergentes. L'accent est mis sur les fondamentaux solides et les principes qui transcendent les outils spécifiques, ce qui permet aux diplômés de s'adapter rapidement aux évolutions technologiques tout au long de leur carrière."
    }
  ],

  finalCta: {
    background: "bg-indigo-50",
    title: "Prêt à devenir un expert en conception et développement d'applications?",
    description: "Rejoignez notre formation certifiante de Concepteur Développeur d'Application et transformez votre passion pour le code en une carrière solide et évolutive.",
    buttons: [
      {
        label: "S'inscrire maintenant",
        style: "primary"
      },
      {
        label: "Assister à un webinaire gratuit",
        style: "outline"
      }
    ]
  }
  }
};

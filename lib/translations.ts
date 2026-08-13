export const translations = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      education: "Formation",
      contact: "Contact",
      contactButton: "Contact",
      headerSubtitle: "Ingénieure Diplômée en Génie Logiciel",
    },
    hero: {
      title: "Ingénieure Diplômée en Génie Logiciel",
      bio: "Ingénieure FullStack diplômée en 2026, passionnée par le développement d'applications web et mobiles innovantes. Solide expérience en Flutter, React, Node.js et intégration IA. Capacité à concevoir des architectures robustes et livrer des produits à forte valeur ajoutée.",
      downloadCv: "Télécharger CV",
      viewProjects: "Voir mes projets",
      cardTitle: "Ingénieure Full-Stack",
      cardSubtitle: "Diplômée 2026 · Mention Excellent",
      cvFile: "/cv-ines-charef-fr.pdf",
      cvFileName: "CV-Ines-Charef-FR.pdf",
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez mes réalisations récentes",
      tabs: { all: "Tous", ux: "UX/UI Design", web: "Web", mobile: "Mobile", data: "Data Science" },
      viewProject: "Voir le projet",
      backToProjects: "← Retour aux projets",
      items: {
        smartclothing: {
          title: "Smart Clothing Advisor",
          description: "Application mobile IA de recommandation vestimentaire par vision par ordinateur (PFE)",
        },
        sugarhero: {
          title: "SugarHero",
          description: "Application médicale pour enfants diabétiques",
        },
        covid: {
          title: "Analyse COVID-19",
          description: "Analyse de données et facteurs de risque",
        },
        todolist: {
          title: "ToDoList",
          description: "Application mobile de gestion de tâches",
        },
        springboot: {
          title: "Gestion de Bibliothèque",
          description: "Application microservices Spring Boot pour la gestion de bibliothèque",
        },
        guardpet: {
          title: "GuardPet (Paw Pets)",
          description: "Application de mise en relation propriétaires/pet-sitters",
        },
      },
    },
    skills: {
      title: "Compétences Techniques",
      subtitle:
        "Mes compétences techniques couvrent un large éventail de technologies, du développement web et mobile à l'intelligence artificielle, au cloud et au design UX/UI.",
      tabs: {
        programming: "Programmation",
        ux: "UX/UI Design",
        ai: "IA",
        web: "Web/Mobile",
        cloud: "Cloud/DevOps",
        database: "Bases de données",
        systems: "Systèmes",
      },
      cards: {
        ux: {
          title: "UX/UI Design",
          description:
            "Conception d'expériences utilisateur centrées sur l'humain avec recherche utilisateur, personas, wireframes et prototypes interactifs.",
        },
        fullstack: {
          title: "Dev Full-Stack",
          description:
            "Expérience complète dans le développement d'applications web et mobiles, de la conception de l'interface utilisateur à l'implémentation des API et la gestion des bases de données.",
        },
        ai: {
          title: "Intelligence Artificielle",
          description:
            "Compétences en développement de modèles d'apprentissage automatique et de réseaux de neurones pour l'analyse de données et la résolution de problèmes complexes.",
        },
        cloud: {
          title: "Cloud & DevOps",
          description:
            "Expérience dans le déploiement et la gestion d'applications sur des plateformes cloud comme Azure et AWS, ainsi que dans l'utilisation d'outils DevOps pour l'automatisation.",
        },
      },
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours en entreprise",
      items: [
        {
          title: "Développeuse Web — Site e-commerce",
          company: "Gold Crest · Freelance",
          period: "2026",
          stack: ["PHP", "HTML5", "CSS3", "JavaScript", "JSON"],
          link: "https://yellow-oyster-989150.hostingersite.com/panier.php",
          linkLabel: "Voir le site",
          points: [
            "Conception et développement complet d'un site e-commerce sur-mesure pour une boutique spécialisée dans la vente de cartables, vélos et accessoires.",
            "Catalogue produits (sélection de couleur, gestion des quantités, panier) et tunnel de commande avec livraison en cascade (région → délégation) couvrant les 24 gouvernorats de Tunisie.",
            "Back-office administrateur sécurisé : authentification, gestion des produits, suivi et mise à jour du statut des commandes.",
            "Architecture sans base de données (stockage JSON) pour un déploiement simplifié sur hébergement mutualisé, réduisant coûts et complexité technique.",
          ],
        },
        {
          title: "Ingénieure Stagiaire – PFE",
          company: "SPACE HR · Tunisie",
          period: "Fév – Juin 2026",
          stack: ["Flutter", "FastAPI", "Firebase", "Gemini 2.0 Flash Vision API", "MobileNetV2", "ONNX"],
          points: [
            "Développement de Smart Clothing Advisor : application mobile complète (Flutter, FastAPI, Firebase) de recommandation vestimentaire par vision par ordinateur, avec suggestions personnalisées selon la météo et le catalogue marketplace.",
            "Conception et itération d'un pipeline de classification d'image en 3 générations : CNN sur Fashion-MNIST, puis MobileNetV2 (92,6 % de précision), jusqu'à l'API Google Gemini 2.0 Flash Vision comme classifieur principal, avec le modèle local en fallback hors ligne.",
            "Projet mené de bout en bout (spécifications, architecture, développement, tests) et soutenu avec la mention Excellent.",
          ],
        },
        {
          title: "Stagiaire Data Analyst & BI",
          company: "SOSEPA (Groupe SOPROVAM) · Moknine, Tunisie",
          period: "Fév 2026",
          stack: ["Python", "Machine Learning", "Power BI", "ETL"],
          points: [
            "Pipeline ETL sur 1 million d'enregistrements e-commerce (extraction, nettoyage, normalisation).",
            "Modèles ML : Random Forest (qualité produit) et K-Means (segmentation par popularité) ; dashboards Power BI décisionnels.",
          ],
        },
        {
          title: "Stagiaire Data Analyst & BI",
          company: "Arvion Canada · Remote",
          period: "Août 2025",
          stack: ["Web FullStack", "Power BI", "Machine Learning"],
          points: [
            "Plateforme web supply chain cosmétique : dashboards décisionnels et modèle ML prédictif ventes/production.",
          ],
        },
      ],
    },
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique en informatique et génie logiciel",
      degree: {
        title: "Diplôme National d'Ingénieur – Génie Logiciel",
        school: "EPI Digital School · Sousse",
        badge: "2026",
        mention: "Mention Excellent",
        description:
          "Formation d'ingénieur en informatique avec spécialisation en développement logiciel et intelligence artificielle.",
        bullets: [
          "Développement d'applications web et mobiles avancées",
          "Intelligence artificielle et apprentissage automatique",
          "Architecture logicielle et conception de systèmes",
          "Gestion de projets informatiques",
        ],
      },
      prepCycle: {
        title: "Cycle Préparatoire Intégré en Informatique",
        school: "EPI Digital School · Sousse",
        badge: "2021 – 2023",
        description:
          "Formation préparatoire aux études d'ingénieur avec focus sur les fondamentaux de l'informatique et des mathématiques.",
        bullets: [
          "Algorithmique et structures de données",
          "Programmation orientée objet",
          "Bases de données relationnelles",
          "Mathématiques pour l'informatique",
        ],
      },
      bac: {
        title: "Baccalauréat Technique",
        school: "Tunisie",
        badge: "2021",
        description: "Baccalauréat technique avec spécialisation en sciences et technologies de l'information.",
      },
      certifications: {
        title: "Certifications",
        school: "Diverses plateformes",
        badge: "2021-2024",
        items: [
          { name: "CCNA 1 / CCNA 2", description: "Réseaux informatiques et protocoles" },
          { name: "Microsoft Azure Fundamentals (AZ-900)", description: "Services cloud Microsoft Azure" },
          { name: "AWS Cloud Practitioner", description: "Services cloud Amazon Web Services" },
        ],
      },
    },
    languages: {
      title: "Langues",
      subtitle: "Les langues que je parle et utilise au quotidien",
      items: [
        { name: "Arabe", level: 100, note: "Langue maternelle" },
        { name: "Français", level: 80, note: "B2 (DELF)" },
        { name: "Anglais", level: 80, note: "B2 (TOEIC)" },
        { name: "Allemand", level: 30, note: "Notions" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "N'hésitez pas à me contacter pour discuter de projets ou d'opportunités",
      formTitle: "Envoyez-moi un message",
      formSubtitle: "Remplissez le formulaire ci-dessous et je vous répondrai dès que possible",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Sujet de votre message",
      messageLabel: "Message",
      messagePlaceholder: "Votre message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      sentTitle: "Message envoyé !",
      sentBody: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      sendAnother: "Envoyer un autre message",
      errorGeneric: "Erreur lors de l'envoi du message. Veuillez réessayer.",
      infoTitle: "Informations de contact",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Sousse, Tunisie",
      socialTitle: "Réseaux sociaux",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      contactButton: "Contact",
      headerSubtitle: "Software Engineer",
    },
    hero: {
      title: "Software Engineer",
      bio: "FullStack engineering graduate passionate about building innovative web and mobile applications. Strong experience in Flutter, React, Node.js and AI integration. Skilled at designing robust architectures and delivering high-value products.",
      downloadCv: "Download CV",
      viewProjects: "View my projects",
      cardTitle: "Full-Stack Engineer",
      cardSubtitle: "Graduated 2026 · Highest Honors",
      cvFile: "/cv-ines-charef-en.pdf",
      cvFileName: "CV-Ines-Charef-EN.pdf",
    },
    projects: {
      title: "My Projects",
      subtitle: "Check out my recent work",
      tabs: { all: "All", ux: "UX/UI Design", web: "Web", mobile: "Mobile", data: "Data Science" },
      viewProject: "View project",
      backToProjects: "← Back to projects",
      items: {
        smartclothing: {
          title: "Smart Clothing Advisor",
          description: "AI mobile app for computer-vision outfit recommendations (Final Year Project)",
        },
        sugarhero: {
          title: "SugarHero",
          description: "Medical app for diabetic children",
        },
        covid: {
          title: "COVID-19 Analysis",
          description: "Data analysis and risk factors",
        },
        todolist: {
          title: "ToDoList",
          description: "Mobile task management app",
        },
        springboot: {
          title: "Library Management System",
          description: "Spring Boot microservices application for library management",
        },
        guardpet: {
          title: "GuardPet (Paw Pets)",
          description: "App connecting pet owners with pet-sitters",
        },
      },
    },
    skills: {
      title: "Technical Skills",
      subtitle:
        "My technical skills span a wide range of technologies, from web and mobile development to artificial intelligence, cloud and UX/UI design.",
      tabs: {
        programming: "Programming",
        ux: "UX/UI Design",
        ai: "AI",
        web: "Web/Mobile",
        cloud: "Cloud/DevOps",
        database: "Databases",
        systems: "Systems",
      },
      cards: {
        ux: {
          title: "UX/UI Design",
          description:
            "Human-centered user experience design with user research, personas, wireframes and interactive prototypes.",
        },
        fullstack: {
          title: "Full-Stack Dev",
          description:
            "Complete experience building web and mobile applications, from UI design to API implementation and database management.",
        },
        ai: {
          title: "Artificial Intelligence",
          description:
            "Skilled at building machine learning models and neural networks for data analysis and solving complex problems.",
        },
        cloud: {
          title: "Cloud & DevOps",
          description:
            "Experience deploying and managing applications on cloud platforms such as Azure and AWS, and using DevOps tools for automation.",
        },
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My path in the industry",
      items: [
        {
          title: "Web Developer — E-commerce Website",
          company: "Gold Crest · Freelance",
          period: "2026",
          stack: ["PHP", "HTML5", "CSS3", "JavaScript", "JSON"],
          link: "https://yellow-oyster-989150.hostingersite.com/panier.php",
          linkLabel: "View site",
          points: [
            "End-to-end design and development of a custom e-commerce website for a store specializing in backpacks, bicycles, and accessories.",
            "Product catalog (color selection, quantity management, cart) and a checkout flow with cascading delivery-zone selection (region → district) covering all 24 governorates of Tunisia.",
            "Secure admin back-office: authentication, product management, order tracking and status updates.",
            "Database-free architecture (JSON storage) for simplified deployment on shared hosting, reducing costs and technical complexity.",
          ],
        },
        {
          title: "Engineering Intern – Final Year Project",
          company: "SPACE HR · Tunisia",
          period: "Feb – Jun 2026",
          stack: ["Flutter", "FastAPI", "Firebase", "Gemini 2.0 Flash Vision API", "MobileNetV2", "ONNX"],
          points: [
            "Built Smart Clothing Advisor: a complete mobile app (Flutter, FastAPI, Firebase) for AI-powered outfit recommendations via computer vision, with suggestions personalized by weather and marketplace catalog.",
            "Designed and iterated a 3-generation image classification pipeline: a CNN trained on Fashion-MNIST, then MobileNetV2 (92.6% accuracy), culminating in the integration of the Google Gemini 2.0 Flash Vision API as the primary classifier, with the local model as an offline fallback.",
            "Owned the project end to end (specifications, architecture, development, testing) and defended it with Highest Honors.",
          ],
        },
        {
          title: "Data Analyst & BI Intern",
          company: "SOSEPA (Groupe SOPROVAM) · Moknine, Tunisia",
          period: "Feb 2026",
          stack: ["Python", "Machine Learning", "Power BI", "ETL"],
          points: [
            "Built an ETL pipeline over 1 million e-commerce records (extraction, cleaning, normalization).",
            "ML models: Random Forest (product quality) and K-Means (popularity segmentation); decision-support Power BI dashboards.",
          ],
        },
        {
          title: "Data Analyst & BI Intern",
          company: "Arvion Canada · Remote",
          period: "Aug 2025",
          stack: ["Web FullStack", "Power BI", "Machine Learning"],
          points: ["Cosmetics supply-chain web platform: decision-support dashboards and a predictive ML model for sales/production."],
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "My academic background in computer science and software engineering",
      degree: {
        title: "National Engineering Degree – Software Engineering",
        school: "EPI Digital School · Sousse",
        badge: "2026",
        mention: "Highest Honors",
        description:
          "Engineering degree in computer science with a specialization in software development and artificial intelligence.",
        bullets: [
          "Advanced web and mobile application development",
          "Artificial intelligence and machine learning",
          "Software architecture and system design",
          "IT project management",
        ],
      },
      prepCycle: {
        title: "Integrated Preparatory Cycle in Computer Science",
        school: "EPI Digital School · Sousse",
        badge: "2021 – 2023",
        description: "Preparatory program for engineering studies focused on computer science and mathematics fundamentals.",
        bullets: [
          "Algorithms and data structures",
          "Object-oriented programming",
          "Relational databases",
          "Mathematics for computer science",
        ],
      },
      bac: {
        title: "Technical Baccalaureate",
        school: "Tunisia",
        badge: "2021",
        description: "Technical baccalaureate specialized in information science and technology.",
      },
      certifications: {
        title: "Certifications",
        school: "Various platforms",
        badge: "2021-2024",
        items: [
          { name: "CCNA 1 / CCNA 2", description: "Computer networks and protocols" },
          { name: "Microsoft Azure Fundamentals (AZ-900)", description: "Microsoft Azure cloud services" },
          { name: "AWS Cloud Practitioner", description: "Amazon Web Services cloud services" },
        ],
      },
    },
    languages: {
      title: "Languages",
      subtitle: "The languages I speak and use daily",
      items: [
        { name: "Arabic", level: 100, note: "Native" },
        { name: "French", level: 80, note: "B2 (DELF)" },
        { name: "English", level: 80, note: "B2 (TOEIC)" },
        { name: "German", level: 30, note: "Basic" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out to discuss projects or opportunities",
      formTitle: "Send me a message",
      formSubtitle: "Fill out the form below and I'll get back to you as soon as possible",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Subject of your message",
      messageLabel: "Message",
      messagePlaceholder: "Your message",
      send: "Send message",
      sending: "Sending...",
      sentTitle: "Message sent!",
      sentBody: "Thank you for your message. I'll get back to you as soon as possible.",
      sendAnother: "Send another message",
      errorGeneric: "Error sending the message. Please try again.",
      infoTitle: "Contact information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Sousse, Tunisia",
      socialTitle: "Social media",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const

export type TranslationKey = keyof typeof translations

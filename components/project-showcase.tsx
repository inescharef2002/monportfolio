"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  BarChart,
  Activity,
  Clock,
  Users,
  Shield,
  BookOpen,
  Database,
  CheckSquare,
  Code,
  Palette,
  Search,
  Heart,
  UserPlus,
  PlusCircle,
  Settings,
  Mail,
  Utensils,
  Dumbbell,
} from "lucide-react"

interface ProjectShowcaseProps {
  project: "sugarhero" | "covid" | "todolist" | "springboot" | "guardpet" | "serenity"
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const [activeDemo, setActiveDemo] = useState("login")

  const projects = {
    guardpet: {
      title: "GuardPet",
      subtitle: "Projet UX/UI Design",
      description: "Application mobile de mise en relation entre propriétaires d'animaux et pet-sitters",
      tags: ["UX/UI Design", "Figma", "Wireframes", "Personas", "User Stories"],
      longDescription:
        "GuardPet est une plateforme qui met en relation des propriétaires d'animaux avec des gardiens ou pet-sitters de confiance. L'application vise à simplifier la vie des propriétaires d'animaux lorsqu'ils doivent s'absenter temporairement. J'ai conçu l'expérience utilisateur complète en suivant un processus centré sur l'utilisateur.",
      features: [
        { icon: <Search className="text-blue-600 h-5 w-5" />, text: "Recherche de pet-sitters" },
        { icon: <Users className="text-blue-600 h-5 w-5" />, text: "Profils détaillés" },
        { icon: <Heart className="text-blue-600 h-5 w-5" />, text: "Gestion des animaux" },
        { icon: <Shield className="text-blue-600 h-5 w-5" />, text: "Système de confiance" },
      ],
      detailedFeatures: [
        {
          title: "Recherche Avancée",
          description:
            "Système de recherche avec filtres par localisation, type d'animal, disponibilité et budget pour trouver le pet-sitter idéal.",
        },
        {
          title: "Profils Pet-sitters",
          description:
            "Profils détaillés avec avis, photos, certifications et expérience pour assurer la confiance des propriétaires.",
        },
        {
          title: "Gestion des Animaux",
          description:
            "Interface pour enregistrer les informations complètes des animaux : santé, identification, vétérinaire et antécédents médicaux.",
        },
        {
          title: "Personas & User Stories",
          description:
            "Recherche utilisateur approfondie avec création de personas (Asma, Karim & Samira, Ali) et user stories détaillées.",
        },
        {
          title: "Wireframes & Prototypes",
          description:
            "Conception complète des wireframes et maquettes haute fidélité pour toutes les fonctionnalités principales.",
        },
        {
          title: "Charte Graphique",
          description:
            "Création d'une identité visuelle complète avec palette de couleurs, logo et guidelines de design.",
        },
      ],
      techStack: {
        frontend: [
          { name: "Figma", description: "Conception des maquettes et prototypes" },
          { name: "Balsamiq", description: "Création des wireframes" },
          { name: "Xtensio", description: "Création des personas" },
          { name: "Miro", description: "Arborescence et user journey" },
        ],
        backend: [
          { name: "Design Thinking", description: "Méthodologie de conception centrée utilisateur" },
          { name: "User Research", description: "Recherche et analyse des besoins utilisateurs" },
          { name: "Information Architecture", description: "Structuration de l'information" },
          { name: "Usability Testing", description: "Tests d'utilisabilité et validation" },
          { name: "Coolors.co", description: "Génération de palette de couleurs" },
          { name: "Namelix", description: "Création du logo" },
        ],
      },
      challenges: [
        {
          title: "Recherche utilisateur complexe",
          description: "Comprendre les besoins variés des propriétaires d'animaux et des pet-sitters.",
          solution:
            "Création de 3 personas détaillés représentant différents profils d'utilisateurs avec leurs besoins spécifiques.",
        },
        {
          title: "Interface intuitive pour tous âges",
          description: "Concevoir une interface accessible aux utilisateurs de 34 à 67 ans.",
          solution:
            "Design épuré avec navigation simple et éléments visuels clairs, testé avec différents groupes d'âge.",
        },
        {
          title: "Système de confiance",
          description: "Rassurer les propriétaires sur la fiabilité des pet-sitters.",
          solution: "Intégration d'un système d'avis, de certifications et de suivi en temps réel avec photos.",
        },
      ],
      demoScreens: [
        {
          id: "home",
          name: "Accueil",
          icon: <Users className="mr-2 h-4 w-4" />,
          image: "/guardpet-home-updated.png",
        },
        {
          id: "login",
          name: "Connexion",
          icon: <Shield className="mr-2 h-4 w-4" />,
          image: "/guardpet-login-new.png",
        },
        {
          id: "signup",
          name: "Inscription",
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          image: "/guardpet-signup.png",
        },
        {
          id: "search",
          name: "Recherche",
          icon: <Search className="mr-2 h-4 w-4" />,
          image: "/guardpet-search.png",
        },
        {
          id: "animal-info",
          name: "Infos Animal",
          icon: <Heart className="mr-2 h-4 w-4" />,
          image: "/guardpet-animal-info.png",
        },
        {
          id: "story",
          name: "User Story",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/guardpet-story-scene.png",
        },
        {
          id: "persona",
          name: "Persona Leila",
          icon: <Users className="mr-2 h-4 w-4" />,
          image: "/guardpet-persona.png",
        },
        {
          id: "architecture",
          name: "Arborescence",
          icon: <Palette className="mr-2 h-4 w-4" />,
          image: "/guardpet-architecture.png",
        },
        {
          id: "wireframe",
          name: "Wireframe Animal",
          icon: <PlusCircle className="mr-2 h-4 w-4" />,
          image: "/guardpet-animal-form.png",
        },
        {
          id: "palette",
          name: "Charte Graphique",
          icon: <Palette className="mr-2 h-4 w-4" />,
          image: "/guardpet-palette.png",
        },
      ],
    },
    sugarhero: {
      title: "SugarHero",
      subtitle: "Application Médicale",
      description: "Plateforme éducative pour enfants diabétiques avec suivi glycémique, repas et activité physique",
      tags: ["React.js", "Node.js", "MongoDB", "JWT", "Socket.IO"],
      longDescription:
        "SugarHero est une application médicale full-stack conçue pour aider les enfants diabétiques à gérer leur condition de manière ludique et éducative. La plateforme offre un suivi glycémique en temps réel, des recommandations de repas, et un suivi d'activité physique.",
      features: [
        { icon: <Activity className="text-blue-600 h-5 w-5" />, text: "Suivi en temps réel" },
        { icon: <Users className="text-blue-600 h-5 w-5" />, text: "Gestion CRUD utilisateurs" },
        { icon: <Shield className="text-blue-600 h-5 w-5" />, text: "Système sécurisé" },
        { icon: <Clock className="text-blue-600 h-5 w-5" />, text: "Notifications" },
      ],
      detailedFeatures: [
        {
          title: "Suivi Glycémique",
          description:
            "Permet aux enfants et parents de suivre les niveaux de glycémie en temps réel avec des visualisations adaptées aux enfants.",
        },
        {
          title: "Gestion des Repas",
          description:
            "Suggestions de repas équilibrés avec calcul automatique des glucides et impact sur la glycémie.",
        },
        {
          title: "Activité Physique",
          description:
            "Suivi des activités physiques et leur impact sur les niveaux de glycémie avec recommandations personnalisées.",
        },
        {
          title: "Tableau de Bord Admin",
          description:
            "Interface complète pour les professionnels de santé avec gestion CRUD des utilisateurs et contenus.",
        },
        {
          title: "Notifications",
          description:
            "Système d'alertes en temps réel pour les niveaux critiques de glycémie et rappels de médicaments.",
        },
        {
          title: "Sécurité",
          description: "Système sécurisé de récupération de mot de passe par email et authentification robuste.",
        },
      ],
      techStack: {
        frontend: [
          { name: "React.js", description: "Interface utilisateur interactive et réactive" },
          { name: "Socket.IO (client)", description: "Communication en temps réel" },
          { name: "Chart.js", description: "Visualisations graphiques des données" },
          { name: "Tailwind CSS", description: "Styling responsive et moderne" },
        ],
        backend: [
          { name: "Node.js", description: "Serveur JavaScript" },
          { name: "Express", description: "Framework web" },
          { name: "MongoDB", description: "Base de données NoSQL" },
          { name: "JWT", description: "Authentification sécurisée" },
          { name: "Socket.IO", description: "Communication bidirectionnelle en temps réel" },
          { name: "Nodemailer", description: "Envoi d'emails pour récupération de mot de passe" },
        ],
      },
      challenges: [
        {
          title: "Interface adaptée aux enfants",
          description:
            "Créer une interface à la fois ludique pour les enfants mais aussi informative pour les parents et professionnels de santé.",
          solution: "Design centré utilisateur avec différents modes d'affichage selon le profil connecté.",
        },
        {
          title: "Données en temps réel",
          description: "Assurer la transmission et l'affichage des données glycémiques en temps réel sans latence.",
          solution: "Implémentation de Socket.IO pour une communication bidirectionnelle instantanée.",
        },
        {
          title: "Sécurité des données médicales",
          description: "Garantir la confidentialité et la sécurité des données médicales sensibles des enfants.",
          solution: "Chiffrement des données, authentification JWT robuste et autorisations basées sur les rôles.",
        },
      ],
      demoScreens: [
        {
          id: "dashboard",
          name: "Suivi Glycémique",
          icon: <LineChart className="mr-2 h-4 w-4" />,
          image: "/sugarhero-glucose.png",
        },
        {
          id: "reminders",
          name: "Rappels",
          icon: <Clock className="mr-2 h-4 w-4" />,
          image: "/sugarhero-reminders.png",
        },
        {
          id: "learning",
          name: "Apprentissage",
          icon: <BookOpen className="mr-2 h-4 w-4" />,
          image: "/sugarhero-learning.png",
        },
        {
          id: "quiz",
          name: "Quiz",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/sugarhero-quiz.png",
        },
        {
          id: "login",
          name: "Connexion",
          icon: <Shield className="mr-2 h-4 w-4" />,
          image: "/sugarhero-login.png",
        },
        {
          id: "admin-quiz",
          name: "Admin Quiz",
          icon: <Settings className="mr-2 h-4 w-4" />,
          image: "/sugarhero-admin-quiz.png",
        },
        {
          id: "admin-users",
          name: "Gestion Utilisateurs",
          icon: <Users className="mr-2 h-4 w-4" />,
          image: "/sugarhero-admin-users.png",
        },
        {
          id: "diet-tracking",
          name: "Suivi Alimentaire",
          icon: <Utensils className="mr-2 h-4 w-4" />,
          image: "/sugarhero-diet-tracking.png",
        },
        {
          id: "exercise-tracking",
          name: "Suivi Exercices",
          icon: <Dumbbell className="mr-2 h-4 w-4" />,
          image: "/sugarhero-exercise-tracking.png",
        },
        {
          id: "admin-content",
          name: "Contenus Éducatifs",
          icon: <BookOpen className="mr-2 h-4 w-4" />,
          image: "/sugarhero-admin-content.png",
        },
        {
          id: "password-reset",
          name: "Récupération MDP",
          icon: <Mail className="mr-2 h-4 w-4" />,
          image: "/sugarhero-password-reset.png",
        },
        {
          id: "registration",
          name: "Inscription",
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          image: "/sugarhero-registration.png",
        },
      ],
    },
    serenity: {
      title: "Serenity Tunisia",
      subtitle: "Plateforme de Bien-être Tunisienne",
      description:
        "Application web complète de méditation et bien-être développée avec les dernières technologies React et Next.js, spécialement conçue pour le marché tunisien",
      tags: ["Next.js", "React", "TypeScript", "IA Conversationnelle", "Tailwind CSS"],
      longDescription:
        "Une application web complète de méditation et bien-être développée avec les dernières technologies React et Next.js, spécialement conçue pour le marché tunisien. Cette plateforme offre une expérience utilisateur immersive avec des sessions de méditation guidées en arabe, un système de coaching personnalisé avec des professionnels locaux, et un assistant IA intelligent nommé 'Ines' qui fournit des recommandations personnalisées basées sur les habitudes et préférences de l'utilisateur.",
      features: [
        { icon: <Activity className="text-blue-600 h-5 w-5" />, text: "Sessions interactives" },
        { icon: <Users className="text-blue-600 h-5 w-5" />, text: "Coaching personnalisé" },
        { icon: <Shield className="text-blue-600 h-5 w-5" />, text: "Assistant IA 'Ines'" },
        { icon: <Clock className="text-blue-600 h-5 w-5" />, text: "Suivi des progrès" },
      ],
      detailedFeatures: [
        {
          title: "Sessions de méditation interactives",
          description:
            "Lecteur audio intégré avec timer en temps réel pour des sessions de méditation guidées en français et arabe, adaptées à la culture tunisienne.",
        },
        {
          title: "Système de réservation avancé",
          description:
            "Sélection de coachs locaux, créneaux horaires flexibles et gestion de calendrier intégrée pour un suivi personnalisé.",
        },
        {
          title: "Tableau de bord personnalisé",
          description:
            "Suivi des progrès en temps réel, objectifs quotidiens personnalisables et métriques de bien-être détaillées.",
        },
        {
          title: "Assistant IA 'Ines'",
          description:
            "Chatbot conversationnel intelligent qui fournit des recommandations personnalisées et des conseils adaptatifs basés sur les habitudes utilisateur.",
        },
        {
          title: "Système de notifications intelligent",
          description:
            "Rappels personnalisés, achievements et notifications push pour maintenir l'engagement et la motivation.",
        },
        {
          title: "Interface multilingue",
          description:
            "Support français/arabe avec adaptation culturelle pour le marché tunisien et expérience utilisateur localisée.",
        },
      ],
      techStack: {
        frontend: [
          { name: "Next.js", description: "Framework React avec App Router et optimisations" },
          { name: "React", description: "Bibliothèque UI avec hooks avancés" },
          { name: "TypeScript", description: "Typage statique pour la robustesse" },
          { name: "Tailwind CSS", description: "Framework CSS utilitaire" },
          { name: "Shadcn/ui", description: "Composants UI modernes et accessibles" },
          { name: "Lucide React", description: "Icônes vectorielles optimisées" },
        ],
        backend: [
          { name: "IA Conversationnelle", description: "Système de chatbot avec NLP" },
          { name: "Web Audio API", description: "Lecture audio native pour méditations" },
          { name: "LocalStorage", description: "Persistance des données utilisateur" },
          { name: "React Hooks", description: "Gestion d'état avec useState, useEffect, useCallback" },
          { name: "Responsive Design", description: "Mobile-first avec support multi-appareils" },
          { name: "Animations CSS", description: "Transitions fluides et feedback visuel" },
        ],
      },
      challenges: [
        {
          title: "Intégration IA avancée",
          description:
            "Développer un système de réponses contextuelles avec apprentissage des préférences utilisateur.",
          solution:
            "Implémentation d'un chatbot conversationnel avec traitement du langage naturel et système de recommandations adaptatif.",
        },
        {
          title: "Gestion complexe de l'état",
          description: "Synchronisation temps réel entre composants avec gestion des sessions et progrès utilisateur.",
          solution:
            "Architecture modulaire avec hooks personnalisés et gestion d'état optimisée pour les performances.",
        },
        {
          title: "Expérience utilisateur culturellement adaptée",
          description:
            "Créer une interface qui respecte les spécificités culturelles tunisiennes tout en restant moderne.",
          solution:
            "Recherche utilisateur approfondie et design centré sur l'utilisateur avec support multilingue natif.",
        },
      ],
      demoScreens: [
        {
          id: "dashboard",
          name: "Tableau de bord",
          icon: <LineChart className="mr-2 h-4 w-4" />,
          image: "/serenity-dashboard.png",
        },
        {
          id: "signup",
          name: "Inscription",
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          image: "/serenity-signup.png",
        },
        {
          id: "login",
          name: "Connexion",
          icon: <Shield className="mr-2 h-4 w-4" />,
          image: "/serenity-login.png",
        },
        {
          id: "sessions",
          name: "Sessions",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/serenity-sessions.png",
        },
        {
          id: "booking",
          name: "Réservation Coach",
          icon: <Users className="mr-2 h-4 w-4" />,
          image: "/serenity-booking.png",
        },
        {
          id: "goals",
          name: "Objectifs",
          icon: <CheckSquare className="mr-2 h-4 w-4" />,
          image: "/serenity-goals.png",
        },
        {
          id: "metrics",
          name: "Métriques",
          icon: <BarChart className="mr-2 h-4 w-4" />,
          image: "/serenity-metrics.png",
        },
        {
          id: "ai-chat1",
          name: "Assistant IA",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/serenity-ai-chat1.png",
        },
        {
          id: "ai-chat2",
          name: "Chat IA Avancé",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/serenity-ai-chat2.png",
        },
      ],
    },
    covid: {
      title: "Analyse COVID-19",
      subtitle: "Data Science & Analyse de Données",
      description: "Analyse du COVID-19 et des facteurs de risque avec visualisations interactives",
      tags: ["Python", "Pandas", "NumPy", "Plotly", "Seaborn"],
      longDescription:
        "Projet d'analyse de données sur le COVID-19 utilisant des techniques de data science pour identifier les corrélations clés et les facteurs de risque. Inclut des visualisations interactives et des analyses statistiques avancées.",
      features: [
        { icon: <Database className="text-blue-600 h-5 w-5" />, text: "Analyse exploratoire" },
        { icon: <Activity className="text-blue-600 h-5 w-5" />, text: "Visualisations 3D" },
        { icon: <LineChart className="text-blue-600 h-5 w-5" />, text: "Modélisation statistique" },
        { icon: <BarChart className="text-blue-600 h-5 w-5" />, text: "Indicateurs stratégiques" },
      ],
      detailedFeatures: [
        {
          title: "Exploration de données",
          description:
            "Analyse approfondie d'un dataset synthétique pour identifier des corrélations clés entre différentes variables.",
        },
        {
          title: "Nettoyage de données",
          description:
            "Prétraitement et nettoyage des données avec Pandas et NumPy pour assurer la qualité des analyses.",
        },
        {
          title: "Visualisations interactives",
          description:
            "Création de cartes choroplèthes, graphiques 3D et autres visualisations interactives avec Plotly et Seaborn.",
        },
        {
          title: "Calcul d'indicateurs",
          description:
            "Développement d'indicateurs stratégiques comme les taux de mortalité et les facteurs de risque pour le diabète.",
        },
      ],
      techStack: {
        frontend: [],
        backend: [
          { name: "Python", description: "Langage principal pour l'analyse de données" },
          { name: "Pandas", description: "Manipulation et analyse de données" },
          { name: "NumPy", description: "Calculs numériques et traitement de tableaux" },
          { name: "Plotly", description: "Visualisations interactives" },
          { name: "Seaborn", description: "Visualisations statistiques" },
          { name: "Jupyter Notebook", description: "Environnement de développement interactif" },
        ],
      },
      challenges: [
        {
          title: "Données incomplètes",
          description: "Gérer les données manquantes ou incomplètes dans le dataset COVID-19.",
          solution: "Techniques d'imputation avancées et analyse de sensibilité pour valider les résultats.",
        },
        {
          title: "Visualisation de données multidimensionnelles",
          description: "Représenter efficacement des données avec de nombreuses dimensions.",
          solution: "Utilisation de techniques de réduction de dimensionnalité et visualisations interactives 3D.",
        },
      ],
      demoScreens: [
        {
          id: "timeline",
          name: "Évolution temporelle",
          icon: <LineChart className="mr-2 h-4 w-4" />,
          image: "/covid-timeline.png",
        },
        {
          id: "3d-analysis",
          name: "Analyse 3D",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/covid-3d-analysis.png",
        },
        {
          id: "map",
          name: "Carte mondiale",
          icon: <BarChart className="mr-2 h-4 w-4" />,
          image: "/covid-map.png",
        },
      ],
    },
    todolist: {
      title: "ToDoList",
      subtitle: "Application Mobile (Android)",
      description: "Application de gestion de tâches avec authentification Firebase",
      tags: ["Java", "Android", "Firebase", "Authentication"],
      longDescription:
        "Application mobile Android pour la gestion de tâches quotidiennes avec authentification sécurisée via Firebase. Permet aux utilisateurs de créer, organiser et suivre leurs tâches avec des fonctionnalités avancées.",
      features: [
        { icon: <CheckSquare className="text-blue-600 h-5 w-5" />, text: "Gestion des tâches" },
        { icon: <Shield className="text-blue-600 h-5 w-5" />, text: "Authentification Firebase" },
        { icon: <Clock className="text-blue-600 h-5 w-5" />, text: "Rappels et échéances" },
        { icon: <Users className="text-blue-600 h-5 w-5" />, text: "Profils utilisateurs" },
      ],
      detailedFeatures: [
        {
          title: "Gestion des tâches",
          description: "Création, modification et suppression de tâches avec catégories et priorités personnalisables.",
        },
        {
          title: "Authentification sécurisée",
          description:
            "Système d'authentification robuste avec Firebase Auth, incluant la connexion par email et la récupération de mot de passe.",
        },
        {
          title: "Rappels et notifications",
          description: "Système de rappels pour les tâches importantes avec notifications push personnalisables.",
        },
        {
          title: "Synchronisation cloud",
          description: "Synchronisation des données entre appareils via Firebase Realtime Database.",
        },
      ],
      techStack: {
        frontend: [
          { name: "Java", description: "Langage principal pour le développement Android" },
          { name: "XML", description: "Layouts et interfaces utilisateur" },
          { name: "Material Design", description: "Principes de design pour une expérience utilisateur cohérente" },
        ],
        backend: [
          { name: "Firebase Auth", description: "Authentification sécurisée" },
          { name: "Firebase Realtime Database", description: "Stockage et synchronisation des données" },
          { name: "Firebase Cloud Messaging", description: "Notifications push" },
        ],
      },
      challenges: [
        {
          title: "Expérience utilisateur fluide",
          description: "Créer une interface intuitive et réactive sur différents appareils Android.",
          solution: "Utilisation des principes Material Design et optimisation des performances avec RecyclerView.",
        },
        {
          title: "Gestion hors ligne",
          description: "Permettre l'utilisation de l'application sans connexion internet.",
          solution: "Implémentation d'un système de mise en cache local avec synchronisation différée.",
        },
      ],
      demoScreens: [
        {
          id: "main",
          name: "Interface Principale",
          icon: <CheckSquare className="mr-2 h-4 w-4" />,
          image: "/todolist-main-interface.png",
        },
        {
          id: "login",
          name: "Connexion",
          icon: <Shield className="mr-2 h-4 w-4" />,
          image: "/todolist-login-final.jpg",
        },
        {
          id: "tasks",
          name: "Mes Tâches",
          icon: <Activity className="mr-2 h-4 w-4" />,
          image: "/todolist-tasks-final.jpg",
        },
        {
          id: "details",
          name: "Détails",
          icon: <Clock className="mr-2 h-4 w-4" />,
          image: "/todolist-details-final.jpg",
        },
      ],
    },
    springboot: {
      title: "Système Bibliothèque",
      subtitle: "Application Web (Spring Boot)",
      description: "Solution web complète pour la gestion de bibliothèque avec Spring Boot",
      tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "JPA/Hibernate"],
      longDescription:
        "Application web complète pour la gestion de bibliothèque développée avec Spring Boot. Permet la gestion des livres, des emprunts, des utilisateurs et inclut des fonctionnalités avancées comme la recherche multicritères.",
      features: [
        { icon: <Database className="text-blue-600 h-5 w-5" />, text: "Base de données relationnelle" },
        { icon: <Users className="text-blue-600 h-5 w-5" />, text: "Gestion des utilisateurs" },
        { icon: <Shield className="text-blue-600 h-5 w-5" />, text: "Sécurité robuste" },
        { icon: <Code className="text-blue-600 h-5 w-5" />, text: "API REST complète" },
      ],
      detailedFeatures: [
        {
          title: "API REST complète",
          description:
            "Conception d'une API REST pour l'accès aux ressources de la bibliothèque avec documentation Swagger.",
        },
        {
          title: "Interfaces dynamiques",
          description: "Développement d'interfaces utilisateur dynamiques avec Thymeleaf et Bootstrap.",
        },
        {
          title: "Recherche avancée",
          description: "Fonctionnalité de recherche multicritères optimisée pour trouver rapidement des livres.",
        },
        {
          title: "Gestion des emprunts",
          description: "Système complet de gestion des emprunts avec dates d'échéance et notifications.",
        },
        {
          title: "Sécurité",
          description:
            "Implémentation de Spring Security pour l'authentification et l'autorisation basée sur les rôles.",
        },
      ],
      techStack: {
        frontend: [
          { name: "Thymeleaf", description: "Moteur de templates pour les vues" },
          { name: "Bootstrap", description: "Framework CSS pour le design responsive" },
          { name: "JavaScript", description: "Interactivité côté client" },
        ],
        backend: [
          { name: "Java", description: "Langage principal" },
          { name: "Spring Boot", description: "Framework d'application" },
          { name: "Spring Data JPA", description: "Accès aux données" },
          { name: "Hibernate", description: "ORM pour la persistance" },
          { name: "MySQL", description: "Base de données relationnelle" },
          { name: "Spring Security", description: "Sécurité et authentification" },
          { name: "Maven", description: "Gestion des dépendances" },
        ],
      },
      challenges: [
        {
          title: "Architecture modulaire",
          description: "Concevoir une architecture évolutive et maintenable pour l'application.",
          solution: "Implémentation d'une architecture en couches avec séparation claire des responsabilités.",
        },
        {
          title: "Performance des requêtes",
          description: "Optimiser les requêtes de base de données pour de grands volumes de livres.",
          solution: "Utilisation de requêtes JPQL optimisées et mise en place d'un système de pagination.",
        },
      ],
      demoScreens: [
        {
          id: "books",
          name: "Gestion des livres",
          icon: <BookOpen className="mr-2 h-4 w-4" />,
          image: "/library-books.png",
        },
        {
          id: "loans",
          name: "Emprunts",
          icon: <Clock className="mr-2 h-4 w-4" />,
          image: "/library-loans.png",
        },
        {
          id: "members",
          name: "Adhérents",
          icon: <Users className="mr-2 h-4 w-4" />,
          image: "/library-members.png",
        },
      ],
    },
  }

  const currentProject = projects[project]

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="animate-slideUp">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">{currentProject.title}</h1>
          <p className="text-xl text-blue-600 mb-6">{currentProject.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.tags.map((tag, index) => (
              <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="mb-6">{currentProject.longDescription}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentProject.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Voir le code</Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Démo en ligne
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden shadow-lg animate-fadeIn">
          {project === "guardpet" && (
            <img
              src="/guardpet-logo.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-contain bg-white p-8"
            />
          )}
          {project === "sugarhero" && (
            <img
              src="/sugarhero-hero.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-cover"
            />
          )}
          {project === "covid" && (
            <img
              src="/covid-timeline.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-cover"
            />
          )}
          {project === "todolist" && (
            <img
              src="/todolist-main-interface.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-contain bg-gradient-to-br from-purple-100 to-blue-100 p-8"
            />
          )}
          {project === "springboot" && (
            <img
              src="/library-books.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-cover"
            />
          )}
          {project === "serenity" && (
            <img
              src="/serenity-dashboard.png"
              alt={`${currentProject.title} Application`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <Tabs defaultValue="features" className="mb-12">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
          <TabsTrigger value="tech">Stack Technique</TabsTrigger>
          <TabsTrigger value="challenges">Défis & Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="features" className="animate-fadeIn">
          <div className="grid md:grid-cols-3 gap-6">
            {currentProject.detailedFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-blue-100 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tech" className="animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-8">
            {currentProject.techStack.frontend.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Frontend</h3>
                <ul className="space-y-2">
                  {currentProject.techStack.frontend.map((tech, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 animate-slideRight"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        {tech.name}
                      </Badge>
                      <span>{tech.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                {currentProject.techStack.frontend.length > 0 ? "Backend" : "Technologies"}
              </h3>
              <ul className="space-y-2">
                {currentProject.techStack.backend.map((tech, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 animate-slideRight"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Badge variant="outline" className="border-blue-300 text-blue-700">
                      {tech.name}
                    </Badge>
                    <span>{tech.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="challenges" className="animate-fadeIn">
          <div className="space-y-6">
            {currentProject.challenges.map((challenge, index) => (
              <Card
                key={index}
                className="border-blue-100 animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-blue-700">Défi: {challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{challenge.description}</p>
                  <p className="mt-2 font-medium text-blue-700">Solution: {challenge.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Démonstration Interactive</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {currentProject.demoScreens.map((screen) => (
            <Button
              key={screen.id}
              variant={activeDemo === screen.id ? "default" : "outline"}
              onClick={() => setActiveDemo(screen.id)}
              className={`justify-start ${
                activeDemo === screen.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border-blue-300 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {screen.icon}
              {screen.name}
            </Button>
          ))}
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[400px] relative shadow-lg">
          {currentProject.demoScreens.map(
            (screen) =>
              activeDemo === screen.id && (
                <img
                  key={screen.id}
                  src={screen.image || "/placeholder.svg"}
                  alt={`${screen.name} - ${currentProject.title}`}
                  className="w-full h-full object-contain animate-fadeIn"
                />
              ),
          )}
        </div>
      </div>
    </div>
  )
}

# Portfolio — Ines Charef

Portfolio personnel d'**Ines Charef**, Ingénieure en Génie Logiciel (EPI Digital School, 2026 — Mention Excellent), développé avec Next.js.

🔗 **Site en ligne** : [ines-charef.netlify.app](https://ines-charef.netlify.app)

## ✨ Fonctionnalités

- **Bilingue FR/EN** — bascule de langue persistante, avec CV téléchargeable dans la langue active
- **Projets** — cartes filtrables par catégorie (Web, Mobile, Data Science, UX/UI), avec pages détaillées (fonctionnalités, stack technique, défis & solutions, captures d'écran)
- **Expérience professionnelle**, **Formation**, **Compétences** et **Langues** générées depuis un dictionnaire de traductions centralisé
- **Thème clair/sombre**
- **Formulaire de contact** fonctionnel (via Formspree)
- Design responsive, animations légères

## 🛠️ Stack technique

- [Next.js 15](https://nextjs.org/) (App Router, export statique)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [next-themes](https://github.com/pacocoursey/next-themes) pour le mode sombre
- Déploiement : [Netlify](https://www.netlify.com/)

## 📁 Structure du projet

```
app/                    # Pages Next.js (App Router)
components/             # Sections du portfolio (hero, projets, compétences, expérience...)
  ui/                   # Composants shadcn/ui
lib/
  translations.ts       # Dictionnaire de traductions FR/EN
  language-context.tsx  # Contexte React pour la langue active
public/                 # Images, CV (FR/EN)
```

## 🚀 Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# Build de production (export statique dans /out)
npm run build
```

## 🌍 Ajouter/modifier une traduction

Tous les textes de l'interface viennent de [`lib/translations.ts`](lib/translations.ts), structuré par section (`nav`, `hero`, `projects`, `skills`, `experience`, `education`, `languages`, `contact`, `footer`) avec une clé `fr` et une clé `en`. Modifier ce fichier suffit à mettre à jour les deux langues.

## 📬 Contact

- Email : [charefines4@gmail.com](mailto:charefines4@gmail.com)
- LinkedIn : [linkedin.com/in/ines-charef](https://www.linkedin.com/in/ines-charef)
- GitHub : [@inescharef2002](https://github.com/inescharef2002)

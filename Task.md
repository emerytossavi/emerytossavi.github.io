# Plan Concecption Portfolio Emery TOSSAVI

## Structure des données du CV

Ici se trouve la structure des données du CV au format JSON:

```json

{
  "personalInfo": {
    "name": "Emery TOSSAVI",
    "title": "Développeur Fullstack & Analyste en sécurité",
    "bio": "Spécialiste tech avec un sens du résultat, je prends en main les défis avec assurance et j'apporte des solutions concrètes qui font avancer le projet. J'aime créer un impact réel grâce à une approche claire, méthodique et orientée efficacité.",
    "contact": {
      "phone": "+229 01 66 66 99 23",
      "email": "emery.tossavi@epitech.eu",
      "linkedin": "https://linkedin.com/in/emery-tossavi",
      "github": "https://github.com/emerytossavi"
    }
  },
  "skills": {
    "technical": [
      "Télécommunication",
      "Systèmes d'exploitation",
      "Sécurité des applications",
      "Déploiement",
      "Gestion de projets"
    ],
    "soft": [
      "Adaptation",
      "Esprit d'équipe",
      "Autonomie"
    ]
  },
  "technologies": {
    "languages": [
      "PHP",
      "Javascript",
      "Python",
      "SQL",
      "C",
      "Bash",
      "HTML",
      "CSS"
    ],
    "frameworks": [
      "Laravel",
      "Symfony",
      "Flask",
      "Django",
      "Vue.JS",
      "React Native",
      "Flutter",
      "React.JS",
      "Next.JS",
      "Bootstrap",
      "Tailwind CSS"
    ],
    "tools": [
      "Git",
      "Github",
      "Docker",
      "Trello",
      "Leaflet",
      "Visual Studio Code"
    ]
  },
  "experiences": [
    {
      "title": "Franko",
      "company": "Coding Academy - Epitech",
      "period": "Août 2025 - 2026",
      "description": "Réseau social permettant aux utilisateurs de partager leurs avis avec la communauté.",
      "technologies": [
        "Vue.JS",
        "LARAVEL"
      ]
    },
    {
      "title": "Orienta+",
      "company": null,
      "period": "Mars - Juillet 2025",
      "description": "Annuaire géolocalisé des universités pour l'orientation et l'inscription des nouveaux bacheliers.",
      "technologies": [
        "LARAVEL",
        "Flutter",
        "MySQL"
      ]
    },
    {
      "title": "GASA Free Data",
      "company": "GASA Formation",
      "period": "Janvier - Février 2025",
      "description": "Application de réduction des accès internet (Partenariat MTN & UATM GASA Formation).",
      "technologies": []
    },
    {
      "title": "LocalShare",
      "company": null,
      "period": "Septembre 2024",
      "description": "Plateforme d'échange de fichiers dans un réseau.",
      "technologies": []
    },
    {
      "title": "AHS-ASMN",
      "company": "DigiWeb SARL",
      "period": "Août - Octobre 2024",
      "description": "Inventaire géolocalisé des gestionnaires et experts du patrimoine africain.",
      "technologies": []
    }
  ],
  "education": [
    {
      "degree": "Certification: Développement Web et Mobile Fullstack",
      "institution": "Coding Academy - Epitech Bénin",
      "period": "2025 - 2026"
    },
    {
      "degree": "Certification Postman",
      "institution": "Postman",
      "period": "Novembre 2025"
    },
    {
      "degree": "Certificat MIABE HACKATHON",
      "institution": "MIABE HACKATHON",
      "period": "Juillet 2025"
    },
    {
      "degree": "Licence: Système Informatique et Logiciel",
      "institution": "UATM GASA Formation - Porto-novo",
      "period": "2022 - 2025"
    },
    {
      "degree": "Attestation: Sécurité des applications web",
      "institution": "ASIN - Bénin",
      "period": "Juin 2024"
    },
    {
      "degree": "Baccalauréat série scientifique",
      "institution": null,
      "period": "2021-2022"
    }
  ],
  "interests": [
    "Technologies",
    "Lecture"
  ],
  "languages": [
    "Français",
    "Anglais"
  ]
}


```

## Style du portfolio

### Proposition de Style : "Fusion Tech"

Ce style est conçu pour représenter visuellement la dualité de vos compétences (Backend/Frontend, Développeur/Analyste) en utilisant une palette de couleurs contrastées mais harmonieuses sur un fond sombre et professionnel.

**1. Concept : La Dualité des Couleurs**

L'idée est d'assigner un rôle à chaque couleur pour qu'elle raconte une histoire sur vos compétences :
*   **Bleu Cyan :** Représente le côté logique, structuré et technique. Il sera associé au **backend**, aux bases de données, à l'infrastructure et à la **sécurité**. C'est la couleur de la précision et de l'analyse.
*   **Rouge :** Représente le côté dynamique, interactif et créatif. Il sera associé au **frontend**, à l'expérience utilisateur (UI/UX) et aux appels à l'action. C'est la couleur de l'interaction et de l'impact visible.

**2. Palette de Couleurs Détaillée :**
*   **Arrière-plan :** Toujours un fond anthracite ou bleu nuit (`#1a1a1a` ou `#0d1117`) pour le sérieux et le contraste.
*   **Texte principal :** Blanc cassé (`#e6f1ff`).
*   **Texte secondaire :** Gris neutre (`#8892b0`).
*   **Accent Backend/Sécurité (Bleu Cyan) :** Une teinte vive comme `#00ffff` ou `#64ffda`.
*   **Accent Frontend/Action (Rouge) :** Un rouge énergique mais pas agressif, comme un rouge "tomate" (`#ff6347`) ou un rouge "vermillon" (`#e34234`).

**3. Application dans le Design :**

*   **Typographie :** On conserve l'idée d'une police **monoespacée** (`Fira Code`, `Source Code Pro`) pour les titres pour le côté "tech", et une police **sans-serif** (`Inter`, `Nunito Sans`) pour le texte pour la lisibilité.

*   **Hero Section (En-tête) :**
    *   Le titre `Développeur Fullstack` pourrait être affiché avec un curseur clignotant **rouge**.
    *   Le sous-titre `& Analyste en sécurité` pourrait avoir une subtile surbrillance **cyan**.

*   **Section Compétences :**
    *   Divisez visuellement la section en deux. Par exemple, deux colonnes ou deux listes distinctes.
    *   La liste "Backend & Sécurité" utiliserait des puces ou des icônes **cyan**.
    *   La liste "Frontend & Design" utiliserait des puces ou des icônes **rouges**.
    *   Les badges des technologies suivraient la même logique (ex: `Laravel` en cyan, `Vue.js` en rouge).

*   **Cartes de Projet :** C'est ici que la fusion opère.
    *   Le titre du projet peut rester neutre (blanc).
    *   Les badges des technologies respectent la dualité des couleurs.
    *   Proposez deux boutons d'action distincts :
        1.  Un bouton "Voir le code" (lien GitHub) avec une icône et un contour **cyan**.
        2.  Un bouton "Visiter le site" (lien live) avec une icône et un contour **rouge**.

*   **Chronologie (Expériences / Formations) :**
    *   Utilisez une ligne verticale pour marquer le temps. Les points sur la ligne pourraient être blancs, mais au survol, ils s'illuminent de la couleur dominante du projet (par exemple, un projet majoritairement backend s'illuminerait en cyan).

**4. Micro-interactions :**
*   Les liens hypertextes pourraient être soulignés en **cyan**.
*   Au survol, le soulignement ou le texte pourrait passer au **rouge** pour montrer l'interactivité.

Ce style "Fusion Tech" crée une identité visuelle forte et mémorable. Il communique instantanément que vous êtes un développeur polyvalent avec une maîtrise équilibrée du frontend et du backend, tout en intégrant vos couleurs préférées de manière significative.

## Technologies à utiliser

- Vue.js 3 (latest version)
- Tailwind CSS (latest version)
- Vite
- Axios
- Font Awesome
- GitHub Pages (pour le déploiement)
- CI/CD avec GitHub Actions
- JSON (pour les données du CV) : @/data/cv.json

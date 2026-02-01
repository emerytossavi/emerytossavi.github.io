### Prompt pour le développeur

**Objectif :** Transformer le contenu d'un CV (fourni sous forme de texte) en une structure JSON claire, bien organisée et facilement exploitable par une application web (par exemple, un portfolio en Vue.js, React ou Angular).

**Tâche :**

En te basant sur le contenu textuel du CV ci-dessous, crée une structure de données au format JSON. Cette structure servira de source de données unique pour alimenter dynamiquement les différentes sections d'un site web de portfolio.

**Contenu du CV à structurer :**

```
Emery TOSSAVI
Développeur Fullstack & Analyste en sécurité
Spécialiste tech avec un sens du résultat, je prends en main les défis avec assurance et j'apporte des solutions concrètes qui font avancer le projet. J'aime créer un impact réel grâce à une approche claire, méthodique et orientée efficacité.

COORDONNÉES
Tel: +229 01 66 66 99 23
Email: emery.tossavi@epitech.eu
LinkedIn: emery-tossavi
Github: emerytossavi

COMPÉTENCES TECHNIQUES
Télécommunication, Systèmes d'exploitation, Sécurité des applications, Déploiement, Gestion de projets

COMPÉTENCES TRANSVERSALES
Adaptation, Esprit d'équipe, Autonomie

TECHNOLOGIES
Langages: PHP, Javascript, Python, C
Frameworks: Laravel, Symfony, Flask, Django, Flutter, React Native, Vue.JS, React.JS, Next.JS, Bootstrap, Tailwind CSS
Outils: Git, Github, Docker, Trello, Leaflet, Visual Studio Code

EXPÉRIENCES
- Franko (Coding Academy - Epitech | Août 2025 - 2026): Réseau social permettant aux utilisateurs de partager leurs avis avec la communauté, fait avec Vue.JS et LARAVEL.
- Orienta+ (Mars - Juillet 2025): Annuaire géolocalisé des universités pour l'orientation et l'inscription des nouveaux bacheliers, fait avec LARAVEL, Flutter, MySQL.
- GASA Free Data (GASA Formation | Janvier - Février 2025): Application de réduction des accès internet (Partenariat MTN & UATM GASA Formation).
- LocalShare (Septembre 2024): Plateforme d'échange de fichiers dans un réseau.
- AHS-ASMN (DigiWeb SARL | Août - Octobre 2024): Inventaire géolocalisé des gestionnaires et experts du patrimoine africain.

FORMATIONS
- Certification: Développement Web et Mobile Fullstack (2025 - 2026 | Coding Academy - Epitech Bénin)
- Certification Postman (Novembre 2025 | Postman)
- Certificat MIABE HACKATHON (Juillet 2025)
- Licence: Système Informatique et Logiciel (2022 - 2025 | UATM GASA Formation - Porto-novo)
- Attestation: Sécurité des applications web (Juin 2024 | ASIN - Bénin)
- Baccalauréat série scientifique (2021-2022)

CENTRES D'INTÉRÊTS
Technologies, Lecture

LANGUES
Français, Anglais
```

**Exigences pour la structure JSON :**

1.  **Clarté et Hiérarchie :** Organise les données en objets et tableaux logiques. Par exemple, un objet principal `cvData` pourrait contenir des clés comme `personalInfo`, `skills`, `experiences`, `education`, etc.
2.  **Détail des Expériences et Formations :** Pour les expériences et les formations, utilise un tableau d'objets. Chaque objet doit contenir des champs distincts comme `title`, `company` (ou `institution`), `period`, `description` et éventuellement `technologiesUsed`.
3.  **Catégorisation des Compétences :** Sépare clairement les différentes catégories de compétences (techniques, transversales, langages, frameworks, outils).
4.  **Facilité d'itération :** La structure doit permettre de parcourir facilement les listes (comme les projets ou les diplômes) avec une boucle (`v-for` en Vue.js, `.map()` en React) pour les afficher dans l'interface utilisateur.

**Exemple de structure de départ (à améliorer et compléter) :**

```json
{
  "personalInfo": {
    "name": "Emery TOSSAVI",
    "title": "Développeur Fullstack & Analyste en sécurité",
    "bio": "Spécialiste tech avec un sens du résultat...",
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
      "Sécurité des applications"
    ],
    "soft": [
      "Adaptation",
      "Esprit d'équipe",
      "Autonomie"
    ]
  },
  "technologies": {
    "languages": ["PHP", "Javascript", "Python", "C"],
    "frameworks": ["Laravel", "Symfony", "Flask", "Django"],
    "tools": ["Git", "Github", "Docker", "Trello"]
  },
  "experiences": [
    {
      "title": "Franko",
      "company": "Coding Academy - Epitech",
      "period": "Août 2025 - 2026",
      "description": "Réseau social permettant aux utilisateurs de partager leurs avis avec la communauté.",
      "technologies": ["Vue.JS", "LARAVEL"]
    }
  ],
  "education": [
    {
      "degree": "Certification: Développement Web et Mobile Fullstack",
      "institution": "Coding Academy - Epitech Bénin",
      "period": "2025 - 2026"
    }
  ],
  "interests": ["Technologies", "Lecture"],
  "languages": ["Français", "Anglais"]
}
```

Le but est d'obtenir un fichier `cv.json` propre et complet que l'on pourra importer directement dans l'application pour construire l'interface du portfolio.
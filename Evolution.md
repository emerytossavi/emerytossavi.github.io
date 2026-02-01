# Evolution - Plan de conception Portfolio Emery TOSSAVI

## Phase 1 : Initialisation du projet

1. Créer le projet Vue.js 3 avec Vite
2. Installer et configurer Tailwind CSS
3. Installer les dépendances nécessaires (Axios, Font Awesome)
4. Configurer la structure des dossiers du projet
5. Copier le fichier cv.json dans le dossier data/
6. Configurer les alias de chemin (@/ pour src/)
7. Nettoyer les fichiers de démarrage par défaut de Vite

## Phase 2 : Configuration de la base

8. Créer le fichier de configuration Tailwind avec la palette "Fusion Tech"
9. Configurer les polices personnalisées (Fira Code, Inter)
10. Créer les variables CSS globales pour les couleurs
11. Créer un service pour charger les données du CV depuis cv.json
12. Définir la structure de composants de base

## Phase 3 : Développement des composants UI

13. Créer le composant Header/Navigation
14. Créer le composant Hero Section avec effet curseur clignotant
15. Créer le composant PersonalInfo avec les informations de contact
16. Créer le composant Skills avec la dualité cyan/rouge
17. Créer le composant Technologies (langages, frameworks, outils)
18. Créer le composant ProjectCard avec badges de technologies
19. Créer le composant Timeline pour Expériences et Formations
20. Créer le composant Interests et Languages
21. Créer le composant Footer

## Phase 4 : Assemblage et mise en page

22. Intégrer tous les composants dans App.vue
23. Implémenter le système de navigation smooth scroll
24. Ajouter les transitions et animations
25. Implémenter les micro-interactions (hover, focus)
26. Optimiser la responsive design (mobile, tablette, desktop)

## Phase 5 : Enrichissement visuel

27. Intégrer Font Awesome pour les icônes
28. Ajouter les effets de survol sur les cartes de projet
29. Implémenter les boutons d'action "Voir le code" (cyan) et "Visiter le site" (rouge)
30. Ajouter les animations au scroll (reveal effects)
31. Créer les effets de background (grille, particules optionnelles)

## Phase 6 : Tests et optimisation

32. Tester la responsivité sur différents appareils
33. Optimiser les performances (lazy loading, code splitting)
34. Vérifier l'accessibilité (WCAG)
35. Tester le chargement des données depuis cv.json
36. Corriger les bugs identifiés

## Phase 7 : Déploiement

37. Configurer le fichier de build pour GitHub Pages
38. Créer le workflow GitHub Actions pour CI/CD
39. Tester le build de production en local
40. Déployer sur GitHub Pages
41. Vérifier le déploiement et la configuration DNS si nécessaire

## Phase 8 : Documentation et finition

42. Créer le README.md du projet
43. Documenter la structure du projet
44. Ajouter les instructions de développement local
45. Documenter le processus de mise à jour des données (cv.json)
46. Créer un guide de contribution si nécessaire

## Notes importantes

- Respecter le style "Fusion Tech" avec la dualité cyan (backend/sécurité) et rouge (frontend/action)
- Maintenir un fond sombre (#1a1a1a ou #0d1117)
- Utiliser les polices monoespacées pour les titres tech
- Assurer une excellente expérience utilisateur sur mobile
- Garder le code modulaire et réutilisable

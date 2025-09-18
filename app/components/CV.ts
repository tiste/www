interface Mission {
  date: string;
  description: string;
  title: string;
  slug: string;
  customer: string;
}

export const CV: Mission[] = [
  {
    title: "Technical Leader",
    customer: "Adeo",
    slug: "adeo",
    date: "Octobre 2022 - À présent",
    description: `
  Face à une équipe confrontée à des difficultés méthodologiques et de développement (délais de livraison prolongés, revues de code superficielles, manque de cohésion et de communication), mon intervention a été axée sur la refonte des pratiques de développement et l'implantation de méthodes agiles. 

  Les résultats sont probants : réduction des temps de delivery par 2, prise en considération et traitement de la dette, instauration d'une culture de bienveillance et de communication efficace, et un recentrage des corps business sur le management de produit. L'intégration de pratiques de développement modernes et d'un suivi personnalisé en mentoring pour les membres de l'équipe a permis d'améliorer significativement la performance et l'agilité du groupe.

  Création du RAG produit (notices d'utilisation des produits, variants, caractéristiques, etc.) dans le but de fournir une expérience utilisateur augmentée sur les plateformes e-commerce du groupe.
`,
  },
  {
    title: "Freelance Software Engineer",
    customer: "Bardahl",
    slug: "bardahl",
    date: "Janvier 2024 - À présent",
    description: `
  Création d'un système d'information intégré pour gérer et exploiter les données de transmission de véhicules automatiques, dans le but de proposer des services de maintenance aux garages professionnels.

  Le système est basé sur une architecture microservices permettant de gérer les différentes plateformes de communication (web, machine physique, mobile) et de garantir une scalabilité et une robustesse du système.

  Gestion du projet en méthode agile, nouveauté chez Bardahl, avec un accompagnement des équipes en proximité.
`,
  },
  {
    title: "Technical Leader",
    customer: "Adeo",
    slug: "adeo-kg",
    date: "Mars 2020 - Septembre 2022",
    description: `
  Accompagnement des équipes dans un environnement Javascript sur l'acculturation aux pratiques de dev (TDD, pair programming, code reviews, pyramide des tests, etc.) et aux pratiques devops.

  Tech lead de la brique transverse Knowledge Graph.
`,
  },
  {
    title: "Freelance Software Engineer",
    customer: "Cyclavet",
    slug: "cyclavet",
    date: "Septembre 2021 - À présent",
    description: `
  Développement de l'application mobile permettant aux transporteurs d'être conforme au transport TrackDéchets. Cette application React Native suit les règles d'une expérience utilisateur simple et un mode hors-connexion, dans le but de garder le geste métier fluide en toutes conditions.
`,
  },
  {
    title: "Freelance Software Engineer",
    customer: "Pumpkin",
    slug: "pumpkin",
    date: "Juillet 2020 - Septembre 2022",
    description: `
  Construction du site institutionnel Pumpkin, permettant de mettre en avant les offres et avantages du service. Sur un socle Gatsby/Prismic, le site respecte les principes d'accessibilité, rapidité, et d'expérience utilisateur fluide.
`,
  },
  {
    title: "Ingénieur Études et Développement",
    customer: "Adeo (via OCTO)",
    slug: "adeo-octo",
    date: "Septembre 2018 - Février 2020",
    description: `
  Refonte des briques de publication omnicanal d'Adeo. Les mots d'ordre : user centric et craftsmanship. Mise en place d'ateliers sur les besoins utilisateurs, de DDD, et description d'un modèle C4. Accompagnement des équipes dans un environnement Javascript sur l'acculturation aux pratiques de dev (TDD, pair programming, code reviews, pyramide des tests, etc.) et aux pratiques devops.

  Création d'un nouveau produit de gestion des offres de la Marketplace Leroy Merlin, actuellement en production respectant les SLO (99% des requêtes en moins de 60ms).
`,
  },
  {
    title: "Enseignant",
    customer: "FGES (La Catho)",
    slug: "fges",
    date: "Septembre 2019 - Février 2020",
    description: `
  Avec une vingtaine d'étudiants, nous avons travaillé sur les concepts du "web avancé" : pratiques de dev (tests, SOLID, DRY, etc.), pratiques devops (CI/CD), Javascript, outils web (React).
`,
  },
  {
    title: "Consultant confirmé",
    customer: "OCTO",
    slug: "octo",
    date: "Septembre 2018 - Février 2020",
    description: `
  Accompagnement d'équipes sur le craftsmanship.
  Formateur TDD.
  Formateur "Donner et recevoir des feedback efficaces".
`,
  },
  {
    title: "Professional Scrum Master I",
    customer: "Scrum.org",
    slug: "scrum.org",
    date: "Mars 2018",
    description: `
  Obtention de la certification.
`,
  },
  {
    title: "Developer Circle Lead",
    customer: "Facebook",
    slug: "facebook",
    date: "Octobre 2017 - Septembre 2018",
    description: `
  Les Developer Circles sont un nouveau programme de Facebook, composé d'un réseau international de communautés de développeurs venus du monde entier. Motivés par la volonté globale de Facebook de connecter le monde, les Developer Circles sont un nouveau programme conçu pour connecter les développeurs, en vue d'encourager la collaboration et le partage des connaissances.

  Je travaille en tant que Lead du Developer Circle de Lille, en organisant des évènements, en gérant notre communauté en ligne et en faisant la liaison avec Facebook en tant que conseiller général du programme.
`,
  },
  {
    title: "Ingénieur Études et Développement",
    customer: "Adeo (via Ineat)",
    slug: "adeo-ineat",
    date: "Septembre 2016 - Septembre 2018",
    description: `
  Placé au début de la refonte du projet Opus, brique de publication omnicanal d'Adeo, le travail était principalement de mettre en place l'équipe Scrum ainsi que de bâtir le coeur de l'application (API et back office).

  C'est en collaboration avec les business units du groupe que le produit a été incrémenté autour des meilleures pratiques de développement : articulation du gitflow autour des besoins de la Quality Assurance, pair coding, collective reviews, tests unitaires/fonctionnels/perf complets.
  La montée en compétence sur les services de search (Elasticsearch) était indispensable afin de fournir un produit répondant aux exigences métier pointues.

  Lors du passage en feature team, le rôle de Scrum Master m'a été attribué.
`,
  },
  {
    title: "Ingénieur Études et Développement",
    customer: "Ineat",
    slug: "ineat",
    date: "Août 2016 - Septembre 2018",
    description: ``,
  },
  {
    title: "Développeur",
    customer: "Vékia (via Ineat)",
    slug: "vekia",
    date: "Avril 2016 - Septembre 2016",
    description: `
  Conseil et mise en place de l'architecture de l'application supply-chain Provisia. Le respect des bonnes pratiques est important : mise en place d'une convention de code, génération de documentation, tests (unitaires et fonctionnels), qualité de code. Le concept "offline-first" était un besoin très important qui a pu être respecté.

  Ces choix, stratégiques, devaient s'adapter à un court et long terme, tout en respectant la politique et les ressources de l'entreprise.

  Création de maquettes fonctionnelles mettant en évidence les concepts d'une "user-experience" efficace.
`,
  },
  {
    title: "Développeur",
    customer: "Ineat",
    slug: "ineat-2",
    date: "Octobre 2014 - Août 2016",
    description: `
  Contrat de professionnalisation de 2 ans.
`,
  },
  {
    title: "Développeur",
    customer: "Zodio (via Ineat)",
    slug: "zodio",
    date: "Février 2016 - Avril 2016",
    description: `
  Conseil et développement de la partie backend des applications fidélité de Zodio. Mise en place d'un plan d'actions de bonnes pratiques en ce qui concerne l'environnement technique : qualité de code (eslint), guide de contribution, conventions de code, outil de versioning avec formations (git), déploiements automatisés (pm2).

  En étroite collaboration avec l'équipe mobilité, la réalisation de l'API Node.js permettait d'alimenter les applications Android.

  Mise en place du serveur de production avec liaison directe et sécurisée vers les locaux d'Ineat.
`,
  },
  {
    title: "Développeur",
    customer: "La Compagnie des Vétérinaires (via Ineat)",
    slug: "la-compagnie-des-veterinaires",
    date: "Août 2015 - Janvier 2016",
    description: `
  Création du nouveau site Internet de la partie "Bulle Bleue" avec une vision très modulaire, de manière à étendre le besoin aux autres parties de "La Compagnie des Vétérinaires".

  En charge des développements front et back, mais aussi de la partie réseau avec la mise en place des serveurs d'intégration et de recette, des certificats SSL (auto-signés ou non) permettant l'intégrité et la sécurité des données. Développements intensifs sur la partie "création de devis". Mise en place d'une qualité de code importante (entrainant de nombreuses revues de code).
  Le projet est suivi sous le framework Scrum.

  Environnement technique : Express.js (Node.js), AngularJS, gulp, Nuxeo, JWT, Jenkins, Git/GitLab.
`,
  },
  {
    title: "Développeur",
    customer: "Ineat",
    slug: "ineat-3",
    date: "Mars 2015 - Juillet 2015",
    description: `
  Développement d'une plateforme d'e-mailing responsive pour un client.

  Réalisation d'un PoC en Javascript permettant d'apporter des solutions à une interface web incluant du Drag'n'Drop.

  Participation sous le framework Scrum aux développements backend avec Symfony 2, ainsi que frontend à l'aide d'AngularJS.
`,
  },
  {
    title: "Développeur",
    customer: "Leroy Merlin (via Ineat)",
    slug: "leroy-merlin",
    date: "Juin 2015 - Juin 2015",
    description: `
  Développements autour du robot Nao dans le but d'animer une conférence.

  À l'aide de l'outil Chorégraphe, Nao était capable de suivre une conversation, de se déplacer, d'être gardien du temps (entre les différents animateurs) mais aussi d'animer certains jeux définis à l'avance.
`,
  },
  {
    title: "Développeur",
    customer: "CITC-EuraRFID (via Ineat)",
    slug: "citc-eurarfid",
    date: "Février 2015 - Février 2015",
    description: `
  Mise en place d'interactions vocales avec la Smarthome, la maison connectée d'Euratechnologies.
  La conception d'une application Node.js permettait la traduction de la voix en requêtes HTTP, émises vers la Smarthome.

  Il est désormais possible d'actionner les volets, la porte, la lumière, et aussi la température et les taux de qualité d'air.
`,
  },
  {
    title: "Scrum master",
    customer: "Ineat",
    slug: "ineat-4",
    date: "Octobre 2014 - Février 2015",
    description: `
  Développement d'une application web capable d'améliorer le suivi de projet pour chaque collaborateur de la société. Création d'un PoC en AngularJS permettant d'obtenir une interface Gantt afin d'imputer les tâches.

  Travail en guide Scrum (Scrum master d'une équipe interne de 4 personnes).

  Utilisation d'outils et technologies innovants afin de pouvoir former d'autres collaborateurs (Stylus, Jade, CoffeeScript, Symfony 2, AngularJS, Git).
`,
  },
  {
    title: "Développeur",
    customer: "Codegent",
    slug: "codegent",
    date: "Juin 2014 - Octobre 2014",
    description: `
  Conception d'applications AngularJS, NodeJS et Laravel au sein d'une entreprise Londonienne. Le travail effectué améliorait les applications internes telles que Twilert et BATN, mais aussi externes telles que 1Stream (BBC) et Ilumi (Tanfield Food). Utilisation d'outils de versioning tel que git mais aussi d'outils d'automatisation : gulp et Grunt. La gestion de projet était dirigée par Scrum.

  Découverte d'une nouvelle culture et immergé dans la langue anglaise.
`,
  },
  {
    title: "Développeur",
    customer: "Silicon Salad",
    slug: "silicon-salad",
    date: "Mai 2013 - Août 2013",
    description: `
  Développement d'applications Ruby on Rails sur différents projets web : SOCAM, Potatomobile, Jef Chaussures.

  Conception de gems et utilisation de Git / GitHub ainsi que d'outils d'intégration continue (Travis / Coverall).
`,
  },
  {
    title: "Développeur",
    customer: "Roquette Frères",
    slug: "roquette-freres",
    date: "Mai 2012 - Août 2012",
    description: `
  Lancement d'un service informatique (infrastructure et hiérarchie) ainsi que la conception de logiciels informatiques à l'aide de WinDev.
`,
  },
];

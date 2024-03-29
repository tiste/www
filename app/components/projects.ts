interface Project {
  slug: string;
  title: string;
  type: string;
  ios: string;
  android: string;
  web: string;
  featuredImage: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "swunitch",
    title: "Pacevisor",
    type: "project",
    ios: "https://apps.apple.com/fr/app/swunitch/id1488948143",
    android: "https://play.google.com/store/apps/details?id=io.tiste.Swunitch",
    web: "https://pacevisor.com",
    featuredImage: "/images/projects/pages/swunitch.jpeg",
    description: `
<p>Marre de convertir les minutes par kilomètres en km/h ? Vos amis vous demandent souvent combien 50min sur 10km rendent en allure ? Cette application sera utile pour vous.</p>
<p>Sports : en plus de la course, il y a la prédiction de nage et de vélo, dans toutes les distances triathlon.</p>
<p>Vous pouvez aussi moduler votre allure en pourcentage, afin d'estimer vos temps sur vos distances favorites. Exemple : 90% de 4:30min/km sur 3km donne 15 minutes.</p>
<p>Nouveauté : vous pouvez désormais, à partir d'un temps, visualiser le rythme et la vitesse nécessaires !</p>
<hr>
<h3>Je prends au sérieux votre vie privée.</h3>
<p>L'application Pacevisor (ex Convertisseur temps course) tient compte de votre vie privée et ne collecte absolument aucune donnée sur vous et vos activités.</p>
    `,
  },
];

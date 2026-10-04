export interface Customer {
  name: string;
  slug: string;
  missionSlug?: string;
}

export const customers: Customer[] = [
  {
    name: "Bardahl",
    slug: "bardahl",
    missionSlug: "bardahl-centre-expert",
  },
  {
    name: "Adeo",
    slug: "adeo",
  },
  {
    name: "Leroy Merlin",
    slug: "leroy-merlin",
  },
  {
    name: "OCTO",
    slug: "octo",
  },
  {
    name: "Roquette Frères",
    slug: "roquette-freres",
  },
  {
    name: "Zodio",
    slug: "zodio",
  },
];

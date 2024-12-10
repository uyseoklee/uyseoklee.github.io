export interface Publication {
  title: string;
  description: string;
  link: string;
}


export interface SectionDefinition {
    title: string;
    description: string;
    publications: Publication[];
}

export const SectionConfigs: SectionDefinition[] = [
    {
      title: "Reviews and Perspectives",
      description: "A collection of reviews and perspectives exploring the boundaries of morality, cognitive behavior, and economic insights.",
      publications: [
        {
          title: "Moral Boundaries",
          description: "Annual Review of Economics, 2024, vol. 16 (1), pp. 133-157.",
          link: "https://example.com/moral-boundaries.pdf",
        },
        {
          title: "'Morality and Political Economy' from the Vantage Point of Economics",
          description: "PNAS Nexus, 2024, vol. 3 (10).",
          link: "https://example.com/morality-political-economy.pdf",
        },
      ],
    },
    {
      title: "Publications and Accepted Papers",
      description: "A curated list of published and accepted papers focusing on universalism, political behavior, and economic studies.",
      publications: [
        {
          title: "Universalism: Global Evidence",
          description: "(with Alexander Cappelen and Bertil Tungodden). Forthcoming, American Economic Review.",
          link: "https://example.com/universalism-global-evidence.pdf",
        },
        {
          title: "Values as Luxury Goods and Political Behavior",
          description: "(with Mattias Polborn and Alex Wu). Conditionally accepted, Journal of the European Economic Association.",
          link: "https://example.com/values-luxury-goods.pdf",
        },
      ],
    },
    {
      title: "Working Papers",
      description: "Research in progress addressing complex topics in economics and behavioral studies.",
      publications: [
        {
          title: "Herding, Warfare and a Culture of Honor: Global Evidence",
          description: "(with Yiming Cao, Armin Falk, Paola Giuliano, and Nathan Nunn). Revise and resubmit, American Economic Review.",
          link: "https://example.com/herding-warfare.pdf",
        },
        {
          title: "Behavioral Attenuation",
          description: "(with Thomas Graeber, Ryan Oprea, and Jeffrey Yang). Working Paper.",
          link: "https://example.com/behavioral-attenuation.pdf",
        },
      ],
    },
  ];
  
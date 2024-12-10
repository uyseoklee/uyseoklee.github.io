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
      title: "Publications",
      description: "",
      publications: [
        {
          title: "Paper 1",
          description: "(with nobody). Forthcoming, nowhere.",
          link: "https://uyseoklee.github.io",
        },
        {
          title: "Paper 2",
          description: "(Nobody). Conditionally accepted, nowhere.",
          link: "https://uyseoklee.github.io",
        },
      ],
    },
    {
      title: "Working Papers",
      description: "",
      publications: [
        {
          title: "WP 1",
          description: "(with nobody). Revise and resubmit, nowhere Economic Review.",
          link: "https://uyseoklee.github.io",
        },
        {
          title: "WP 2",
          description: "(with Nobody). Working Paper.",
          link: "https://uyseoklee.github.io",
        },
      ],
    },
  ];
  
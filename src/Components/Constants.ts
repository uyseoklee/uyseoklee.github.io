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
    //{
    //  title: "Publications",
    //  description: "",
    //  publications: [
    //    {
    //      title: "Paper 1",
    //      description: "(with nobody). Forthcoming, nowhere.",
    //      link: "https://uyseoklee.github.io",
    //    },
    //  ],
    //},
    {
      title: "Working Papers",
      description: "",
      publications: [
        {
          title: "Internal Versus Institutional Barriers to Gender Equality: Evidence From British Politics",
          description: "(with Noor Kumar, Matt Lowe, and Olaitan Ogunnote)",
          link: "https://github.com/uyseoklee/uyseoklee.github.io/raw/main/papers/Kumar-Lee-Lowe-Ogunnote-25may24-PMQs_compressed.pdf",
        },
      ],
    },
    {
      title: "Work in Progress",
      description: "",
      publications: [
        {
          title: "The Unintended Consequences of Technical Change: Evidence from the Green Revolution in Indonesia",
          description: "(with Yeonha Jung and Gedeon Lim)",
          link: "",
        },
      ],
    },
  ];
  
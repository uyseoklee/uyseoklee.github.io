export interface Publication {
  title: string;
  description: string | { name: string; link?: string }[];
  links?: { label: string, url: string }[]; // Custom links for each publication
}

export interface WorkInProgress {
  title: string;
  description: string | { name: string; link?: string }[];
}

export interface SectionDefinitionPublication {
    title: string;
    description: string;
    publications: Publication[];
}

export interface SectionDefinitionWorkInProgress {
  title: string;
  description: string;
  publications: WorkInProgress[];
}

export type SectionDefinition = SectionDefinitionPublication | SectionDefinitionWorkInProgress;

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
          description: [
            { name: "Noor Kumar", link: "" },
            { name: "Matt Lowe", link: "https://mattlowe.site/" },
            { name: "Olaitan Ogunnote", link: "" },
          ],
          links: [
            { label: "Draft (Sept 2024) ", url: "https://github.com/uyseoklee/uyseoklee.github.io/raw/main/papers/Kumar-Lee-Lowe-Ogunnote-25may24-PMQs_compressed.pdf" },
            { label: "SSRN", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4991906" },
            { label: "CESifo", url: "https://www.cesifo.org/en/publications/2024/working-paper/internal-versus-institutional-barriers-gender-equality-evidence" }
          ]
        },
      ],
    },
    {
      title: "Work in Progress",
      description: "",
      publications: [
        {
          title: "The Unintended Consequences of Technical Change: Evidence from the Green Revolution in Indonesia",
          description: [
            { name: "Yeonha Jung", link: "https://sites.google.com/site/yhjungecon" },
            { name: "Gedeon Lim", link: "https://sites.google.com/a/bu.edu/gedeonlim/home" },
          ],
        },
      ],
    },
  ];
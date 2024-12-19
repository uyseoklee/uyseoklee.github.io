export interface WorkingPaper {
  title: string;
  description: string | { name: string; link?: string }[];
  links?: { label: string, url: string }[];
}

export interface SectionDefinition {
    title: string;
    workingpapers: WorkingPaper[];
}

export const WPSectionConfigs: SectionDefinition[] = [
    {
      title: "Working Papers",
      workingpapers: [
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
  ];
  
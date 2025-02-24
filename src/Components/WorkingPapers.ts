export interface WorkingPaper {
  title: string;
  description: string | { name: string; link?: string }[];
  revise?: string; 
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
            { name: "Matt Lowe", link: "https://mattjlowe.github.io" },
            { name: "Olaitan Ogunnote", link: "" },
          ],
          revise: "Revise & Resubmit, American Economic Review", // <-- Ensure this exists
          links: [
            { label: "Draft (Sept 2024) ", url: "/files/Kumar-Lee-Lowe-Ogunnote-25may24-PMQs_compressed.pdf" },
            { label: "SSRN", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4991906" },
            { label: "CESifo", url: "https://www.cesifo.org/en/publications/2024/working-paper/internal-versus-institutional-barriers-gender-equality-evidence" }
          ]
        },
      ],
    },
  ];
  
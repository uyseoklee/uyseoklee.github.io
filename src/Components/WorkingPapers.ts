export interface WorkingPaper {
  title: string;
  description: string | { name: string; link?: string }[];
  link: string;
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
          link: "https://github.com/uyseoklee/uyseoklee.github.io/raw/main/papers/Kumar-Lee-Lowe-Ogunnote-25may24-PMQs_compressed.pdf",
        },
      ],
    },
  ];
  
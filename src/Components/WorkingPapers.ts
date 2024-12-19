export interface WorkingPaper {
  title: string;
  description: string;
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
          description: "(with Noor Kumar, Matt Lowe, and Olaitan Ogunnote)",
          link: "https://github.com/uyseoklee/uyseoklee.github.io/raw/main/papers/Kumar-Lee-Lowe-Ogunnote-25may24-PMQs_compressed.pdf",
        },
      ],
    },
  ];
  
export interface WorkInProgress {
  title: string;
  description: string;
}

export interface SectionDefinition {
    title: string;
    worksinprogress: WorkInProgress[];
}

export const WIPSectionConfigs: SectionDefinition[] = [
    {
      title: "Work In Progress",
      worksinprogress: [
        {
          title: "Internal Versus Institutional Barriers to Gender Equality: Evidence From British Politics",
          description: "(with Noor Kumar, Matt Lowe, and Olaitan Ogunnote)",
        },
      ],
    },
  ];
  
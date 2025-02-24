export interface WorkInProgress {
  title: string;
  description: string | { name: string; link?: string }[];
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
          title: "The Green Revolution and Cultural Change: Evidence from Indonesia",
          description: [
            { name: "Yeonha Jung", link: "https://sites.google.com/site/yhjungecon" },
            { name: "Gedeon Lim", link: "https://sites.google.com/a/bu.edu/gedeonlim/home" },
          ],
        },
      ],
    },
  ];
  
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
          title: "The Unintended Consequences of Technical Change: Evidence from the Green Revolution in Indonesia",
          description: [
            { name: "Yeonha Jung", link: "https://sites.google.com/a/bu.edu/gedeonlim/home" },
            { name: "Gedeon Lim", link: "https://sites.google.com/site/yhjungecon" },
          ],
        },
      ],
    },
  ];
  
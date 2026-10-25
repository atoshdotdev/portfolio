export type ExperienceRole = {
  title: string;
  employmentType: string;
  period: string;
  description?: string;
};

export type ExperienceEntry = {
  company: string;
  roles: ExperienceRole[];
};

export const experience = [
  {
    company: "GrabIT",
    roles: [
      {
        title: "Software Engineer",
        employmentType: "Full-time",
        period: "Oct 2025 – Present",
        description:
          "Developing and maintaining software applications across the frontend and backend.",
      },
      {
        title: "Full-Stack Developer Intern",
        employmentType: "Internship",
        period: "Jun 2025 – Oct 2025",
      },
    ],
  },
  {
    company: "COLOURS European University Alliance",
    roles: [
      {
        title: "Student Employee",
        employmentType: "Part-time",
        period: "Apr 2025 – Mar 2026",
      },
    ],
  },
  {
    company: "GrabIT",
    roles: [
      {
        title: "Full-Stack Developer Intern",
        employmentType: "Internship",
        period: "Jul 2024 – Aug 2024",
      },
    ],
  },
] satisfies ExperienceEntry[];

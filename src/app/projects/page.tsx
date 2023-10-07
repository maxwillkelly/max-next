import ProjectCard, { Project } from "./_components/ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Personal Website",
    name: "max-next",
    body: "This website using Next.js, Tailwind CSS and NextUI",
    language: "TypeScript",
    frameworks: ["React", "Next.js", "Tailwind CSS", "NextUI"],
  },
  {
    id: "2",
    title: "Previous Personal Website",
    name: "max-promo",
    body: "Personal website written in Svelte and Tailwind CSS.",
    language: "TypeScript",
    frameworks: ["Svelte", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "EV Charging Analyser",
    body: "",
    language: "TypeScript",
    frameworks: ["React Native", "Expo", "NestJS"],
  },
  {
    id: "4",
    title: "Containment",
    body: "Electron/React demo game",
    language: "TypeScript",
    frameworks: ["React", "Electron"],
  },
  {
    id: "5",
    title: "Reversi 2",
    body: "A new version of Reversi rewritten from my original Java terminal based code for my first major project at university. Written in C and GTK for a challenge.",
    language: "C",
    frameworks: ["GTK"],
  },
  {
    id: "6",
    title: "Crazy Checkers",
    body: "Checkers written in C#",
    language: "C#",
    frameworks: ["Windows Form Application"],
  },
  {
    id: "7",
    title: "BabyMaker",
    body: "A Simulation of the Manchester Baby Computer also called the Small-Scale Experimental Machine (SSEM) from 1948",
    language: "C++",
  },
  {
    id: "8",
    title: "First year personal website",
    name: "maxwillkelly.github.io",
    body: "A personal website written in HTML, CSS and Jekyll.",
    language: "HTML",
    frameworks: ["Jekyll"],
  },
  {
    id: "9",
    title: "trackpro",
    body: "A basic versioning control system written in Bash",
    language: "Bash",
  },
  {
    id: "10",
    title: "Reversi",
    body: "A reversi clone written poorly in Java",
    language: "Java",
  },
];

const ProjectPage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          Check out what I&apos;ve been up to
        </p>
        <div className="flex flex-1 pt-2">
          <div className="container flex flex-wrap justify-center gap-9">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

const projects = [
  {
    id: "1",
    title: "Personal Website",
    name: 'max-next',
    body: "This website using Next.js, Tailwind CSS and NextUI",
    languages: ["TypeScript"],
    frameworks: ["Next.js", "Tailwind CSS", "NextUI"],
  },
  {
    id: "2",
    title: "Previous Personal Website",
    name: 'max-promo',
    body: "Personal website written in Svelte and Tailwind CSS.",
  },
  {
    id: "3",
    title: "EV Charging Analyser",
    body: "",
  },
  {
    id: "4",
    title: "Containment",
    body: "Electron/React demo game",
  },
  {
    id: "5",
    title: "Reversi 2",
    body: "A new version of Reversi rewritten from my original Java terminal based code for my first major project at university. Written in C and GTK for a challenge.",
  },
  {
    id: "6",
    title: "Crazy Checkers",
    body: "Checkers written in C#",
  },
  {
    id: "7",
    title: "BabyMaker",
    body: "A Simulation of the Manchester Baby Computer also called the Small-Scale Experimental Machine (SSEM) from 1948",
  },
  {
    id: "8",
    title: "First year personal website (maxwillkelly.github.io)",
    body: "A personal website written in HTML, CSS and Jekyll.",
  },
  {
    id: "9",
    title: "trackpro",
    body: "A basic versioning control system written in Bash",
  },
  {
    id: "10",
    title: "Reversi",
    body: "A reversi clone written poorly in Java",
  },
];

const ProjectPage = () => {
  return (
    <div className="container flex flex-wrap justify-center gap-9">
      {projects.map((project) => (
        <Card className="flex w-96 overflow-hidden border-none" radius="lg" isFooterBlurred key={project.id} fullWidth={true}>
          <Image
            as={NextImage}
            className="h-48 w-full rounded-b-none object-cover"
            src="/hero-card-complete.jpeg"
            width={384}
            height={192}
            shadow="sm"
            alt="Placeholder"
            />
          <CardFooter className="flex-col items-start">
            <div className="inline-flex w-full place-content-between">
            <h3 className="text-left text-xl font-medium leading-6 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-left text-sm text-gray-500 dark:text-gray-400">
              {project.name}
            </p>
            </div>
            <div className="mb-2 mt-4 flex flex-wrap items-center gap-3">
              {project.languages?.map((language) => (
                <Chip key={language} color="danger">
                  {language}
                </Chip>
              ))}
              {project.frameworks?.map((framework) => (
                <Chip key={framework} variant="dot" color="danger">
                  {framework}
                </Chip>
              ))}
            </div>
            <p className="text-left text-sm text-gray-500 dark:text-gray-400">
              {project.body}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectPage;

import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export type Project = {
  id: string;
  title: string;
  name?: string;
  body: string;
  language: string;
  frameworks?: string[];
};

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { title, name, body, language, frameworks } = project;

  return (
    <Card
      className="flex w-96 overflow-hidden border-none"
      radius="lg"
      isFooterBlurred
      fullWidth={true}
    >
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
            {title}
          </h3>
          <Chip key={language} color="danger">
            {language}
          </Chip>
        </div>
        {name && (
          <p className="text-left text-sm text-gray-500 dark:text-gray-400">
            {name}
          </p>
        )}
        <div className="mb-2 mt-4 flex flex-wrap items-center gap-3">
          {frameworks?.map((framework) => (
            <Chip key={framework} variant="dot" color="danger">
              {framework}
            </Chip>
          ))}
        </div>
        <p className="text-left text-sm text-gray-500 dark:text-gray-400">
          {body}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

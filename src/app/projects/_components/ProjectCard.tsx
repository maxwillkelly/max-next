import { Card, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { q, Selection, type TypeFromSelection } from "groqd";
import NextImage from "next/image";
import NextLink from "next/link";

export const projectSelection = {
  _id: q.string().uuid(),
  title: q.string().nullable(),
  name: q.string().nullable(),
  body: q.string().nullable(),
  language: q.string().nullable(),
  frameworks: q.string().array().nullable(),
} satisfies Selection;

type Project = TypeFromSelection<typeof projectSelection>;

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { title, name, body, language, frameworks } = project;

  return (
    <Card
      as={NextLink}
      className="flex w-96 overflow-hidden border-none"
      radius="lg"
      isFooterBlurred
      fullWidth={true}
      isPressable
      href={`/projects/${project._id}`}
    >
      <Image
        as={NextImage}
        className="w-full rounded-b-none object-cover"
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
          {/* {frameworks?.map((framework) => (
            <Chip key={framework} variant="dot" color="danger">
              {framework}
            </Chip>
          ))} */}
        </div>
        <p className="text-left text-sm text-gray-500 dark:text-gray-400">
          {body}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

import { Project } from "../types";
import CombinedImage from "@/app/_components/CombinedImage";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import NextLink from "next/link";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { slug, title, name, body, languageIcon } = project;

  return (
    <Card
      as={NextLink}
      className="flex w-96 overflow-hidden border-none"
      radius="lg"
      isFooterBlurred
      fullWidth={true}
      isPressable
      href={`/projects/${slug}`}
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
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="inline-flex flex-row items-center justify-between w-full">
          <div>
            <h3 className="text-left text-xl font-medium leading-6 text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {name && (
              <p className="text-left text-sm text-gray-500 dark:text-gray-400">
                {name}
              </p>
            )}
          </div>
          <CombinedImage
            radius="none"
            src={languageIcon?.asset.url}
            width={32}
            height={32}
          />
        </div>
        <p className="text-left text-sm text-gray-500 dark:text-gray-400">
          {body}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

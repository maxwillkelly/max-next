import { Project } from "../types";
import CombinedImage from "@/app/_components/CombinedImage";
import { Card, CardFooter } from "@nextui-org/card";
import NextLink from "next/link";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { slug, title, subtitle, name, body, languageIcon } = project;

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
      {/* <Image
        as={NextImage}
        className="w-full rounded-b-none object-cover"
        src="/hero-card-complete.jpeg"
        width={384}
        height={192}
        shadow="sm"
        alt="Placeholder"
      /> */}
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="inline-flex flex-row items-center justify-between w-full">
          <div>
            <h3 className="text-left text-xl font-medium leading-6 text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          </div>
          <CombinedImage
            radius="none"
            src={languageIcon?.asset.url}
            width={32}
            height={32}
          />
        </div>
        <p className="text-left text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

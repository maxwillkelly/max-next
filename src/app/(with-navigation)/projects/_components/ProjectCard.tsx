import { type ProjectSummary } from "../types";
import CombinedImage from "@/app/_components/CombinedImage";
import { Card, CardFooter } from "@heroui/card";
import NextLink from "next/link";

interface Props {
  project: ProjectSummary;
}

const ProjectCard = ({ project }: Props) => {
  const { slug, title, subtitle, language, languageIcon } = project;

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
        <div className="inline-flex w-full flex-row items-center justify-between">
          <div>
            <h2 className="text-left text-xl font-medium leading-6 text-gray-900 dark:text-gray-100">
              {title}
            </h2>
          </div>
          <CombinedImage
            alt={`${language} logo`}
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

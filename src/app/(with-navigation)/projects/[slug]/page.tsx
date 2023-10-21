import { projectSelection } from "../types";
import ArrayButtonDropdown from "./_components/ArrayButtonDropdown";
import CombinedImage from "@/app/_components/CombinedImage";
import { runQuery } from "@/sanity/lib/fetch";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { PortableText } from "@portabletext/react";
import { q } from "groqd";
import {
  ArrowLeft,
  Figma,
  FileDown,
  GithubIcon,
  Link as LinkIcon,
} from "lucide-react";
import { groq } from "next-sanity";
import NextLink from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = params;

  const project = await runQuery(
    q(groq`*[_type == "project" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        language,
        languageIcon,
        subtitle,
        releaseDate,
        content,
        name,
        deployedUrl,
        githubRepos,
        linkedDesigns,
        linkedDocuments[]{
          name,
          "url": file.asset->url
        },
        frameworks,
    }`).grab(projectSelection),
  );

  const {
    title,
    content,
    languageIcon,
    language,
    frameworks,
    githubRepos,
    deployedUrl,
    linkedDesigns,
    linkedDocuments,
  } = project;

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col gap-4 px-6 sm:px-12 md:px-24 lg:px-48">
        <div className="flex flex-col items-start">
          <Button
            as={NextLink}
            href="/projects"
            color="danger"
            variant="light"
            startContent={<ArrowLeft />}
            className="p-0 data-[hover=true]:bg-transparent"
          >
            Projects
          </Button>
          <div className="flex w-full items-center gap-2 md:gap-4">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <CombinedImage
              alt={`${language} logo`}
              radius="none"
              src={languageIcon?.asset.url}
              width={32}
              height={32}
              className="h-full w-auto"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center justify-start gap-2">
            {frameworks?.map((framework) => (
              <Chip variant="dot" color="danger" key={framework}>
                {framework}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 pb-4">
            {deployedUrl && (
              <Tooltip content="Launch site" placement="bottom">
                <Button
                  isExternal
                  isIconOnly
                  as={Link}
                  color="danger"
                  variant="shadow"
                  href={deployedUrl}
                >
                  <LinkIcon className="p-0.5" />
                </Button>
              </Tooltip>
            )}
            {/* <LinkedDesignsButtons linkedDesigns={linkedDesigns} /> */}
            {/* <LinkedDocumentsButtons linkedDocuments={linkedDocuments} /> */}
            {/* <GithubRepoButtons githubRepos={githubRepos} /> */}
            <ArrayButtonDropdown
              items={linkedDesigns}
              dropdownAriaLabel="Designs"
              buttonTooltipTitle="Figma"
            >
              <Figma className="p-0.5" />
            </ArrayButtonDropdown>
            <ArrayButtonDropdown
              items={linkedDocuments}
              dropdownAriaLabel="Files"
              buttonTooltipTitle="Dissertation"
            >
              <FileDown className="p-0.5" />
            </ArrayButtonDropdown>
            <ArrayButtonDropdown
              items={githubRepos}
              dropdownAriaLabel="Github repositories"
              buttonTooltipTitle="Github repository"
            >
              <GithubIcon className="p-0.5" />
            </ArrayButtonDropdown>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {content && (
            <PortableText
              value={content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="max-w-6xl md:text-lg md:leading-8">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

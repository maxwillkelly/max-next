import ExpoIcon from "@/components/about/ExpoIcon";
import ExpressIcon from "@/components/about/ExpressIcon";
import GrpcIcon from "@/components/about/GrpcIcon";
import LanguageCard from "@/components/about/LanguageCard";
import NextjsIcon from "@/components/about/NextjsIcon";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  JavaOriginal,
  JavascriptOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsPlain,
  NodejsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  ScalaOriginal,
  SvelteOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
  VuejsOriginal,
} from "devicons-react";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          About
        </h1>
        <p className="p-4 sm:text-lg sm:leading-8 lg:px-48">
          I am a Software Engineer with a passion for building high quality,
          scalable and maintainable software. I have a keen interest in learning
          new technologies and applying them to solve real world problems.
        </p>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-3 pt-16 text-center sm:gap-9 md:px-32">
        <div className="grid h-28 w-40 place-items-center">
          <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
            2+
          </h2>
          <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            Years experience
          </p>
        </div>
        <div className="grid h-28 w-40 place-items-center">
          <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
            8+
          </h2>
          <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            Languages
          </p>
        </div>
        <div className="grid h-28 w-40 place-items-center">
          <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
            20+
          </h2>
          <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            Tools
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-1 justify-center">
        <Button
          as={Link}
          isExternal
          variant="shadow"
          color="danger"
          endContent={<DownloadCloud />}
          href="/cv-feburary-2022.pdf"
        >
          Download CV
        </Button>
      </div>
      <div className="container flex min-w-full flex-col items-center gap-4 pt-40 text-center">
        <h2 className="text-lg font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Languages and Frameworks
        </h2>
        <p className="p-4 sm:text-lg sm:leading-8 lg:px-48">
          I have experience in a wide range of languages and frameworks, from
          low-level languages like C, to mordern web frameworks like React and
          Next.js.
        </p>
        <h3 className="p-4">
          Built for the front-end and full-stack, my bread and butter
        </h3>
        <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard
            title="JavaScript"
            icon={<JavascriptOriginal size={64} />}
          />
          <LanguageCard
            title="TypeScript"
            icon={<TypescriptOriginal size={64} />}
          />
          <LanguageCard title="React" icon={<ReactOriginal size={64} />} />
          <LanguageCard title="Next.js" icon={<NextjsIcon />} />
          <LanguageCard title="Svelte" icon={<SvelteOriginal size={64} />} />
          <LanguageCard title="Vue.js" icon={<VuejsOriginal size={64} />} />
          <LanguageCard
            title="Tailwind CSS"
            icon={<TailwindcssPlain size={64} />}
          />
        </div>
        <h3 className="">Back-end tools and frameworks</h3>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard title="Node.js" icon={<NodejsOriginal size={64} />} />
          <LanguageCard title="Express" icon={<ExpressIcon />} />
          <LanguageCard title="NestJS" icon={<NestjsPlain size={64} />} />
          <LanguageCard
            title="GraphQL"
            icon={
              <svg width="64" height="64" viewBox="0 0 128 128">
                <g fill="#E434AA">
                  <path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0"></path>
                  <path d="M12.734 87.105H115.23v5.31H12.734zm0 0"></path>
                  <path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0"></path>
                  <path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0"></path>
                  <path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0"></path>
                  <path d="M105.887 34.398h5.312v59.204h-5.312zm0 0"></path>
                  <path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0"></path>
                  <path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68"></path>
                </g>
              </svg>
            }
          />
          <LanguageCard title="gRPC" icon={<GrpcIcon />} />
          <LanguageCard title="C#" icon={<CsharpOriginal size={64} />} />
          <LanguageCard
            title=".NET"
            icon={
              <Image src="/dotnet.svg" alt=".NET logo" width={64} height={64} />
            }
          />
        </div>
        <h3>Databases</h3>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard
            title="PostgresSQL"
            icon={<PostgresqlOriginal size={64} />}
          />
          <LanguageCard title="MySQL" icon={<MysqlOriginal size={64} />} />
          <LanguageCard title="MongoDB" icon={<MongodbOriginal size={64} />} />
        </div>
        <h3>Mobile development</h3>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard
            title="React Native"
            icon={<ReactOriginal size={64} />}
          />
          <LanguageCard title="Expo" icon={<ExpoIcon />} />
        </div>
        <h3>Low-level languages where performance matters most</h3>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard title="C" icon={<COriginal size={64} />} />
          <LanguageCard title="C++" icon={<CplusplusOriginal size={64} />} />
        </div>
        <h3 className="">Other languages I&apos;ve dabbled in</h3>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard title="Scala" icon={<ScalaOriginal size={64} />} />
          <LanguageCard title="Java" icon={<JavaOriginal size={64} />} />
          <LanguageCard title="Python" icon={<PythonOriginal size={64} />} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

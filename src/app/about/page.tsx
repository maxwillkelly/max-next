import LanguageCard from "@/components/about/LanguageCard";
import NextjsIcon from "@/components/about/NextjsIcon";
import { Button } from "@nextui-org/button";
import {
  AngularjsOriginal,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  DotnetcoreOriginal,
  JavaOriginal,
  JavascriptOriginal,
  PythonOriginal,
  ReactOriginal,
  ScalaOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { DownloadCloud } from "lucide-react";

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
            3+
          </h2>
          <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            Years experience
          </p>
        </div>
        <div className="grid h-28 w-40 place-items-center">
          <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
            12+
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
            Projects
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-1 justify-center">
        <Button variant="shadow" color="danger" endContent={<DownloadCloud />}>
          Download CV
        </Button>
      </div>
      <div className="container flex min-w-full flex-col items-center gap-4 pt-40 text-center">
        <h1 className="text-lg font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Languages and Frameworks
        </h1>
        <p className="p-4 sm:text-lg sm:leading-8 lg:px-48">
          I have experience in a wide range of languages and frameworks, from
          low-level languages like C, to mordern web frameworks like React and
          Next.js.
        </p>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
          <LanguageCard title="React" icon={<ReactOriginal size={64} />} />
          <LanguageCard title="Next.js" icon={<NextjsIcon />} />
          <LanguageCard
            title="JavaScript"
            icon={<JavascriptOriginal size={64} />}
          />
          <LanguageCard
            title="TypeScript"
            icon={<TypescriptOriginal size={64} />}
          />
          <LanguageCard
            title="Angular.js"
            icon={<AngularjsOriginal size={64} />}
          />
          <LanguageCard title="C" icon={<COriginal size={64} />} />
          <LanguageCard title="C++" icon={<CplusplusOriginal size={64} />} />
          <LanguageCard title="C#" icon={<CsharpOriginal size={64} />} />
          <LanguageCard title=".NET" icon={<DotnetcoreOriginal size={64} />} />
          <LanguageCard title="Java" icon={<JavaOriginal size={64} />} />
          <LanguageCard title="Scala" icon={<ScalaOriginal size={64} />} />
          <LanguageCard title="Python" icon={<PythonOriginal size={64} />} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

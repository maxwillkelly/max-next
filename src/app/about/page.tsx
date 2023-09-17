import { Button } from "@nextui-org/button";
import { DownloadCloud } from "lucide-react";

const AboutPage = () => {
  return (
    <section>
      <div className="grid place-items-center gap-3 sm:gap-9">
        <h1 className="text-center text-2xl font-semibold leading-normal text-zinc-900 dark:text-zinc-100 sm:text-3xl lg:text-4xl">
          About
        </h1>
        <p className="mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg">
          I am a Software Engineer with a passion for building high quality,
          scalable and maintainable software. I have a keen interest in learning
          new technologies and applying them to solve real world problems.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-3 place-items-center gap-3 text-center sm:gap-9">
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
        <Button endContent={<DownloadCloud />}>Download CV</Button>
      </div>
    </section>
  );
};

export default AboutPage;

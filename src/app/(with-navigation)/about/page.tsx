import AboutHero from "./_components/AboutHero";
import LanguagesAndFrameworks from "./_components/LanguagesAndFrameworks";
import { Button, Link } from "@nextui-org/react";
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
        <AboutHero />
      </div>
      <div className="mt-8 flex flex-1 justify-center">
        <Button
          as={Link}
          isExternal
          variant="shadow"
          color="danger"
          endContent={<DownloadCloud />}
          href="/cv-october-2023.pdf"
        >
          Download CV
        </Button>
      </div>
      <LanguagesAndFrameworks />
    </section>
  );
};

export default AboutPage;

import AboutHero from "./_components/AboutHero";
import LanguagesAndFrameworks from "./_components/LanguagesAndFrameworks";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { DownloadCloud } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
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
      <LanguagesAndFrameworks />
    </>
  );
};

export default AboutPage;

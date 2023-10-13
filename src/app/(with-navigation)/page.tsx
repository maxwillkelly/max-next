import { Button } from "@nextui-org/button";
import { SendHorizontal, Smile } from "lucide-react";
import NextLink from "next/link";

const HomePage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl lg:text-8xl">
          Max Kelly
        </h1>
        <p className="p-4 sm:text-xl sm:leading-8">
          I&apos;m a software engineer based in the UK, that thinks big about
          the small details.
        </p>
        <div className="flex gap-4">
          <Button
            as={NextLink}
            href="/about"
            color="danger"
            variant="shadow"
            endContent={<Smile />}
          >
            See more
          </Button>
          <Button
            as={NextLink}
            href="/contact"
            variant="ghost"
            endContent={<SendHorizontal />}
          >
            Message me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

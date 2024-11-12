import { Button } from "@nextui-org/button";
import { SendHorizontal, Smile } from "lucide-react";
import NextLink from "next/link";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
        <div className="flex min-w-full flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-300 sm:text-4xl md:text-5xl lg:text-5xl">
            Max Kelly
          </h1>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-300 md:text-2xl lg:text-2xl">
            Software Engineer
          </h2>
          <p className="font-light sm:text-lg">
            I build web and mobile applications with cutting-edge technologies.
          </p>
          <div className="flex gap-4">
            <Button
              as={NextLink}
              href="/about"
              color="danger"
              variant="shadow"
              endContent={<Smile />}
            >
              View about
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
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
        <p>
          I am a Software Engineer with a passion for building high quality,
          scalable and maintainable software. I have a keen interest in learning
          new technologies and applying them to solve real world problems.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
          eum itaque vitae fugiat deserunt, dolores totam dolore, magni
          delectus, commodi laudantium. Maiores non ab culpa corporis nobis
          natus at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
          eum itaque vitae fugiat deserunt, dolores totam dolore, magni
          delectus, commodi laudantium. Maiores non ab culpa corporis nobis
          natus at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
          eum itaque vitae fugiat deserunt, dolores totam dolore, magni
          delectus, commodi laudantium. Maiores non ab culpa corporis nobis
          natus at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
          eum itaque vitae fugiat deserunt, dolores totam dolore, magni
          delectus, commodi laudantium. Maiores non ab culpa corporis nobis
          natus at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
          eum itaque vitae fugiat deserunt, dolores totam dolore, magni
          delectus, commodi laudantium. Maiores non ab culpa corporis nobis
          natus at.
        </p>
      </section>
    </div>
  );
};

export default HomePage;

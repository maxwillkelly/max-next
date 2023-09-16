import { Button } from "@nextui-org/button";
import { SendHorizontal, Smile } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
          Max Kelly
        </h1>
        <p className="sm:text-xl sm:leading-8">
          I&apos;m a software engineer based in the UK, that thinks big about
          the small details.
        </p>
        <div className="flex gap-4">
          <Button endContent={<Smile />}>See more</Button>
          <Button endContent={<SendHorizontal />}>Message me</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

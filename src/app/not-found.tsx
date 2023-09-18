"use client";

import { Button } from "@nextui-org/react";
import { Home } from "lucide-react";
import NextLink from "next/link";

const ErrorPage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
          Oops!
        </h1>
        <p className="sm:text-xl sm:leading-8">
          Looks like you&apos;ve gone to a page that doesn&apos;t exist!{" "}
        </p>
        <Button
          as={NextLink}
          href="/about"
          color="danger"
          variant="shadow"
          endContent={<Home />}
        >
          Let&apos;s go home
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;

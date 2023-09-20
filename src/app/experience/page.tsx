"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperiencePage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-40">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Experience
        </h1>
        {/* <p className="mt-2 text-center font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg">
          Here are some of the companies I have worked for
        </p> */}
        <div className="pt-2">
          <Tabs aria-label="Experience type options" color="danger" size="lg">
            <Tab
              key="work"
              title={
                <div className="flex items-center space-x-2">
                  <Briefcase />
                  <span>Work</span>
                </div>
              }
            >
              <div>Work</div>
            </Tab>
            <Tab
              key="education"
              title={
                <div className="flex items-center space-x-2">
                  <GraduationCap />
                  <span>Education</span>
                </div>
              }
            >
              <div>Education</div>
            </Tab>
          </Tabs>
        </div>
        <ol className="relative mt-16 border-l-4 border-rose-600 dark:border-rose-600">
          <li className="mb-10 ml-4">
            <div className="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2018 - June 2022
            </time>
            <p className="mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg">
              University of Dundee
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              BSC (Hons) Computing Science
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              First class honours
            </p>
            <p className="text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
              corrupti placeat ipsam nobis nemo magni enim veritatis, delectus
              quam? Dolorem amet obcaecati nulla porro labore. Rem eos quae
              provident?
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2020 - September 2021
            </time>

            <p className="mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg">
              Udrafter
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              Student Software Developer
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
              corrupti placeat ipsam nobis nemo magni enim veritatis, delectus
              quam? Dolorem amet obcaecati nulla porro labore. Rem eos quae
              provident?
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute -left-3.5 h-6 w-6 rounded-full border bg-rose-600 dark:border-rose-900 dark:bg-rose-600" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2022 - Present
            </time>
            <p className="mt-2 font-medium leading-normal text-zinc-600 dark:text-zinc-300 sm:text-lg">
              The Key Support Services
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              Software Engineer
            </p>
            <p className="mt-2 text-sm font-medium leading-normal text-zinc-600 dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
              corrupti placeat ipsam nobis nemo magni enim veritatis, delectus
              quam? Dolorem amet obcaecati nulla porro labore. Rem eos quae
              provident?
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ExperiencePage;

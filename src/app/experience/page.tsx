"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperiencePage = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Experience
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          Here are some of the companies I have worked for, where I went to
          school and what I have been up to in my spare time.
        </p>
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
              <div className="relative space-y-8 p-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-danger before:to-transparent md:before:mx-auto md:before:translate-x-0">
                <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger text-slate-50 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                    <CardHeader className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        The Key Support Services
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Software Engineer
                      </p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        June 2022 - Present
                      </time>
                    </CardHeader>
                    <CardBody>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger text-slate-50 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                    <CardHeader className="flex flex-col space-y-2">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        Udrafter
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Student Software Developer
                      </p>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2020 - September 2021
                      </time>
                    </CardHeader>
                    <CardBody>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam necessitatibus incidunt ut officiis explicabo
                        inventore.
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
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
              <div className="grid place-items-center p-8">
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <CardHeader className="flex flex-col space-y-2">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                      University of Dundee
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      BSC (Hons) Computing Science
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      First class honours
                    </p>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      September 2018 - June 2022
                    </time>
                  </CardHeader>
                  <CardBody>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam necessitatibus incidunt ut officiis explicabo
                      inventore.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;

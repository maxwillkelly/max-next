"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Key, useCallback } from "react";

type TabOptions = "work" | "education";

const ExperiencePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab") as TabOptions;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleTabChange = (value: Key) => {
    router.push(
      "/experience" + "?" + createQueryString("tab", value as string),
    );
  };

  return (
    <Tabs
      aria-label="Experience type options"
      color="danger"
      size="lg"
      selectedKey={tab}
      onSelectionChange={handleTabChange}
    >
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
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <Chip variant="dot" color="danger">
                    JavaScript
                  </Chip>
                  <Chip variant="dot" color="danger">
                    TypeScript
                  </Chip>
                  <Chip variant="dot" color="danger">
                    React
                  </Chip>
                  <Chip variant="dot" color="danger">
                    Next.js
                  </Chip>
                  <Chip variant="dot" color="danger">
                    Node.js
                  </Chip>
                  <Chip variant="dot" color="danger">
                    GraphQL
                  </Chip>
                  <Chip variant="dot" color="danger">
                    gRPC
                  </Chip>
                  <Chip variant="dot" color="danger">
                    MongoDB
                  </Chip>
                </div>
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
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <Chip variant="dot" color="danger">
                    JavaScript
                  </Chip>
                  <Chip variant="dot" color="danger">
                    Vue.js
                  </Chip>
                  <Chip variant="dot" color="danger">
                    C#
                  </Chip>
                  <Chip variant="dot" color="danger">
                    .NET
                  </Chip>
                  <Chip variant="dot" color="danger">
                    MySQL
                  </Chip>
                  <Chip variant="dot" color="danger">
                    Docker
                  </Chip>
                  <Chip variant="dot" color="danger">
                    React
                  </Chip>
                </div>
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
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Chip variant="dot" color="danger">
                  JavaScript
                </Chip>
                <Chip variant="dot" color="danger">
                  TypeScript
                </Chip>
                <Chip variant="dot" color="danger">
                  React
                </Chip>
                <Chip variant="dot" color="danger">
                  Vue.js
                </Chip>
                <Chip variant="dot" color="danger">
                  C#
                </Chip>
                <Chip variant="dot" color="danger">
                  .NET
                </Chip>
                <Chip variant="dot" color="danger">
                  MySQL
                </Chip>
                <Chip variant="dot" color="danger">
                  PostgresSQL
                </Chip>
                <Chip variant="dot" color="danger">
                  Tailwind CSS
                </Chip>
                <Chip variant="dot" color="danger">
                  Node.js
                </Chip>
                <Chip variant="dot" color="danger">
                  Express
                </Chip>
                <Chip variant="dot" color="danger">
                  NestJS
                </Chip>
                <Chip variant="dot" color="danger">
                  GraphQL
                </Chip>
                <Chip variant="dot" color="danger">
                  Docker
                </Chip>
                <Chip variant="dot" color="danger">
                  React Native
                </Chip>
                <Chip variant="dot" color="danger">
                  Expo
                </Chip>
                <Chip variant="dot" color="danger">
                  Electron
                </Chip>
                <Chip variant="dot" color="danger">
                  C{" "}
                </Chip>
                <Chip variant="dot" color="danger">
                  C++
                </Chip>
                <Chip variant="dot" color="danger">
                  Java
                </Chip>
                <Chip variant="dot" color="danger">
                  Python
                </Chip>
                <Chip variant="dot" color="danger">
                  Scala
                </Chip>
              </div>
            </CardBody>
          </Card>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ExperiencePage;

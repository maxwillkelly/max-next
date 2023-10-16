"use client";

import EducationItems from "./experience-tabs/EducationItems";
import WorkItems from "./experience-tabs/WorkItems";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { Key, useCallback } from "react";

export enum ExperienceTabOptions {
  WORK = "work",
  EDUCATION = "education",
}

interface Props {
  tab: ExperienceTabOptions | undefined;
}

const ExperienceTabs = ({ tab }: Props) => {
  const router = useRouter();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: Key) => {
      const params = new URLSearchParams(tab ? { tab } : undefined);
      params.set(name, value as string);

      return params.toString();
    },
    [tab],
  );

  const handleTabChange = (value: Key) => {
    router.push(
      "/experience" + "?" + createQueryString("tab", value),
    );
  };

  return (
    <Tabs
      aria-label="Experience type options"
      color="danger"
      size="lg"
      selectedKey={tab ? tab : ExperienceTabOptions.WORK}
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
        <WorkItems />
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
        <EducationItems />
      </Tab>
    </Tabs>
  );
};

export default ExperienceTabs;

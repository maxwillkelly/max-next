"use client";

import EducationItems from "./_components/EducationItems";
import WorkItems from "./_components/WorkItems";
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

export default ExperiencePage;

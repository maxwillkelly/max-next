import { sanityFetch } from "@/sanity/lib/fetch";
import { getProjects } from "@/sanity/lib/queries";
import { SanityDocument } from "sanity";

const ProjectPage = async () => {
  const projects = await sanityFetch<SanityDocument[]>({ query: getProjects });

  return (
    <pre>{JSON.stringify(projects, null, 2)}</pre>
  )
}

export default ProjectPage
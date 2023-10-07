import { groq } from "next-sanity";

export const getProjects = groq`
  *[_type == "project"]{
    _id, title, name, body, language, frameworks
  }
`;

export const getProject = groq`
  *[_type == "project" && slug.current == $slug][0]{ 
    _id, title, name, body, language, frameworks
  }
`;

export const getProjectPaths = groq`
  *[_type == "project" && defined(slug.current)] [] {
      "params": { "slug": slug.current }
  }
`;

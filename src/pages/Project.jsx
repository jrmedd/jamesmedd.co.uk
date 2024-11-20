import { useLoaderData } from "react-router-dom";
import { HeadingL } from "../components/Typography";

export const Project = () => {
  const project = useLoaderData()
  return (
  <>
  <HeadingL>
    { project.title }
  </HeadingL>
  </>
)
}
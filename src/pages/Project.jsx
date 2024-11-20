import { useLoaderData } from "react-router-dom";
import { HeadingL, Paragraph } from "../components/Typography";
import Markdown from "react-markdown";

export const Project = () => {
  const project = useLoaderData()
  return (
  <>
  <HeadingL>
    { project.metadata.title }
  </HeadingL>
  <Markdown components={
    {
      h2: HeadingL,
      p: Paragraph
    }
  }>
    { project.markdown }
  </Markdown>
  </>
)
}
import { useLoaderData } from "react-router-dom";
import { RectangularImage } from "../components/RectangularImage";
import { Wiggle } from "../components/Wiggle"
import { ExternalLink, HeadingL, HeadingM, Paragraph } from "../components/Typography"
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
      a: ExternalLink,
      h2: HeadingL,
      h3: HeadingM,
      hr: Wiggle,
      img: RectangularImage,
      p: Paragraph
    }
  }>
    { project.markdown }
  </Markdown>
  </>
)
}
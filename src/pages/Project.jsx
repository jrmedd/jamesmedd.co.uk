import { useLoaderData } from "react-router-dom"
import { RectangularImage } from "../components/RectangularImage"
import { Video } from "../components/Video"
import { Wiggle } from "../components/Wiggle"
import { ExternalLink, HeadingL, HeadingM, Paragraph, UnorderedList } from "../components/Typography"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { useEffect } from "react"

const H2 = props => <HeadingL as='h2'>{props.children}</HeadingL>
const H3 = props => <HeadingL as='h3'>{props.children}</HeadingL>

export const Project = () => {
  const project = useLoaderData()
  useEffect(() => {
    document.title = `${project.metadata.title} – ${document.title}`
  }, [])
  return (
  <>
  <HeadingL>
    { project.metadata.title }
  </HeadingL>
  <Markdown components={
    {
      a: ExternalLink,
      h2: H2,
      h3: H3,
      hr: Wiggle,
      img: RectangularImage,
      p: Paragraph,
      ul: UnorderedList,
      video: Video
    }
  }rehypePlugins={[rehypeRaw]}>
    { project.markdown }
  </Markdown>
  </>
)
}
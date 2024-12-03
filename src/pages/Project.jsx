import { useLoaderData } from "react-router-dom"
import { RectangularImage } from "../components/RectangularImage"
import { Video } from "../components/Video"
import { Wiggle } from "../components/Wiggle"
import { ExternalLink, HeadingL, HeadingM, Paragraph, UnorderedList } from "../components/Typography"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { useEffect } from "react"
import { Lightbox } from "../components/LightBox"

const H2 = props => <HeadingL as='h2'>{props.children}</HeadingL>
const H3 = props => <HeadingL as='h3'>{props.children}</HeadingL>
const Div = props => <Paragraph as={Array.from(props.children).some(child => typeof child === 'string') ? 'p' : 'div'}>{props.children}</Paragraph>

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
  <Markdown 
  unwrapDisallowed={true}
  components={
    {
      a: ExternalLink,
      h2: H2,
      h3: H3,
      hr: Wiggle,
      img: Lightbox,
      p: Div,
      ul: UnorderedList,
      video: Video
    }
  }rehypePlugins={[rehypeRaw]}>
    { project.markdown }
  </Markdown>
  </>
)
}
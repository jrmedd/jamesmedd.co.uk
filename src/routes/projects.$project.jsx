import { useLoaderData } from "react-router"
import { RectangularImage } from "../components/RectangularImage"
import { Video } from "../components/Video"
import { Wiggle } from "../components/Wiggle"
import { ExternalLink, Heading, Paragraph, UnorderedList } from "../components/Typography"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { Lightbox } from "../components/LightBox"

const A = props => <ExternalLink href={props.href}>{props.children}</ExternalLink>
const H2 = props => <Heading as='h2' $size='l'>{props.children}</Heading>
const H3 = props => <Heading as='h3' $size='m'>{props.children}</Heading>
const Div = props => <Paragraph as={Array.from(props.children).some(child => typeof child === 'string') ? 'p' : 'div'}>{props.children}</Paragraph>
const UL = props => <UnorderedList>{props.children}</UnorderedList>

export const Component = () => {
  const project = useLoaderData()
  return (
  <>
  <Heading $size='l'>
    { project.metadata.title }
  </Heading>
  <Markdown 
  components={
    {
      a: A,
      h2: H2,
      h3: H3,
      hr: Wiggle,
      img: Lightbox,
      p: Div,
      ul: UL,
      video: Video
    }
  }rehypePlugins={[rehypeRaw]}>
    { project.markdown }
  </Markdown>
  </>
)
}
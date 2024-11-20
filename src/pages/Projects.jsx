import { useLoaderData } from "react-router-dom"

import { Cluster, Stack } from "../components/Layout"
import { HeadingL, HeadingM, InternalLink, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { CircularImage } from "../components/CircularImage"

export const Projects = props => {
  const  { projects } = useLoaderData()
  return(
  <Stack $alignMobile='center' $gap='3.5rem'>
    <HeadingL id='projects' as='h1'>
      Selected projects
    </HeadingL>
    { projects.map((project, index) => (              
    <Cluster key={`project-${index}`} $gap='1.5rem' $align='center' $justify='center' $reverse={index & 1 === 1}>
      <CircularImage size='8.5rem' src={ project.image } alt={ project.imageAlt } />
        <Stack $alignMobile='center'>
          <HeadingM as='h2'>
            { project.title }
          </HeadingM>
          <Paragraph $width='30rem'>
            { project.description } <InternalLink to={`${project.link}`}>Read more<ScreenReaderOnly> about { project.tile }</ScreenReaderOnly></InternalLink>
          </Paragraph>
        </Stack>
    </Cluster>
    )) }
  </Stack>
  )
}
import { useLoaderData } from "react-router-dom"

import { Cluster, Stack } from "../components/Layout"
import { HeadingL, HeadingM, InternalLink, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { CircularImage } from "../components/CircularImage"
import { TagList } from "../components/Tag"
import { Wiggle } from "../components/Wiggle"

export const Projects = props => {
  const  { projects, tags } = useLoaderData()
  return(
  <Stack $alignMobile='center' $gap='3.5rem'>
    <HeadingL id='projects' as='h1'>
      Projects
    </HeadingL>
    <Paragraph>
      I've worked on a variety of creative projects, across sectors, utilising multiple skills.
      If you think I've worked on something you don't see here and want to talk to me about it,
      feel free to <InternalLink to='contact'>contact me.</InternalLink>
    </Paragraph>
    <Wiggle />
    <TagList interactive name='Project tags' tags={tags} />
    { projects.map((project, index) => (              
    <Cluster key={`project-${index}`} $gap='1.5rem' $align='center' $justify='center' $reverse={index & 1 === 1}>
      <CircularImage size='8.5rem' src={ project.image } alt={ project.imageAlt } />
      <Stack $width='10rem' $alignMobile='center'>
        <HeadingM as='h2'>
          { project.title }
        </HeadingM>
        <Paragraph $width='30rem'>
          { project.description } <InternalLink to={`${project.link}`}>Read more<ScreenReaderOnly> about { project.tile }</ScreenReaderOnly></InternalLink>
        </Paragraph>
        <TagList tags={project.tags} />
      </Stack>
    </Cluster>
    )) }
  </Stack>
  )
}
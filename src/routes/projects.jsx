import { useLoaderData } from "react-router"

import { Cluster, Stack } from "../components/Layout"
import { Heading, InternalLink, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { CircularImage } from "../components/CircularImage"
import { TagList } from "../components/Tag"
import { Wiggle } from "../components/Wiggle"
import { useState } from "react"

export const Component = props => {
  const  { projects, tags } = useLoaderData()
  const [selectedTags, setSelectedTags] = useState([])
  const toggleItemInArray = (array, item) => array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
  const handleFilter = event => {
    setSelectedTags(toggleItemInArray(selectedTags,event.target.value))
  }
  const filteredProjects = projects.filter(project => selectedTags.every(tag => project.tags.includes(tag)))
  return(
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading id='projects' $size='l'>
      Projects
    </Heading>
    <Paragraph>
      I've worked on a variety of creative projects, across sectors, utilising multiple skills.
      If you think I've worked on something you don't see here and want to talk to me about it,
      feel free to <InternalLink to='/contact'>contact me.</InternalLink>
    </Paragraph>
    <Wiggle />
    <TagList checked={selectedTags} interactive onChange={handleFilter} name='Project tags' tags={tags} />
    { filteredProjects.length > 0 ?(filteredProjects.map((project, index) => (              
    <Cluster as='article' key={`project-${index}`} $gap='1.5rem' $align='center' $justify='center' $reverse={index & 1 === 1}>
      <CircularImage size='8.5rem' src={ project.image } alt={ project.imageAlt } />
      <Stack $width='10rem' $alignMobile='center'>
        <Heading as='h2' $size='m'>
          { project.title }
        </Heading>
        <Paragraph $width='30rem'>
          { project.description } <InternalLink to={`${project.link}`}>Read more <ScreenReaderOnly>about { project.title }</ScreenReaderOnly></InternalLink>
        </Paragraph>
        <TagList tags={project.tags} />
      </Stack>
    </Cluster>))) : <Paragraph>No projects found. Try selecting fewer tags.</Paragraph>}
  </Stack>
  )
}
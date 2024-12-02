import { career } from './content/career.json'
import { projects } from './content/projects.json'
import { skills } from './content/skills.json'

const markdownFiles = import.meta.glob('/src/content/*.md', { query: '?raw', import: 'default' });

export const careerLoader = () => ({career, skills})

export const projectsLoader = () => {
  const tags = [...new Set(projects.flatMap(obj => obj.tags))].sort()
  const sortedProjects = projects.sort((a, b) => a.title > b.title ? 1 : -1)
  return ({projects: sortedProjects, tags})
}

export const projectLoader = async ({params}) => {
  const loader = markdownFiles[`/src/content/${params.project}.md`]
  if (!loader) throw new Response("Not Found", { status: 404 })
  const markdown = await loader()
  const metadata = projects.find(project => project.link === params.project)
  return ({markdown, metadata})
}

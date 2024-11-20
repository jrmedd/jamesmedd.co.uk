import { career } from './content/career.json'
import { projects } from './content/projects.json'

export const careerLoader = () => ({career}

)
export const projectsLoader = () => ({projects})

export const projectLoader = params => projects.find(project => project.url === params.projectName)

import { useEffect, useState } from "react"

import { Stack } from "../components/Layout"
import { Heading, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { Timeline } from "../components/Timeline"
import { useLoaderData } from "react-router"
import { Wiggle } from "../components/Wiggle"
import { Skill } from "../components/Skill"

export const Component = props => {
  const { career, skills } = useLoaderData()
  const [earliest, setEarliest] = useState('')
  const [now, setNow] = useState('')
  useEffect(() => {
    setNow(new Date().getFullYear())
    setEarliest(Math.min(...career.map(event => event.year)).toString())
  }, [])
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='l' id='career'>
      Career
    </Heading>
    <Paragraph>
      My career has been a squiggly one, ranging from museum installation work through to design consultancy.
      In that time I've gained a diverse set of creative skills:
    </Paragraph>
    <ScreenReaderOnly as='h2'>My skills:</ScreenReaderOnly>
    <Stack $gap="1.5rem">
    { skills.map((skill, index) => <Skill key={`skill-${index}`} {...skill} />)}
    </Stack>
    <Wiggle />
    <Heading as='h2' $size='l'>
      Experience timeline
    </Heading>
    <Timeline earliest={earliest} now={now} events={career} />
  </Stack>
  )
}

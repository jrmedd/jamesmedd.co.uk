import { useEffect, useState } from "react"

import { Stack } from "../components/Layout"
import { HeadingL } from "../components/Typography"
import { Timeline } from "../components/Timeline"

import { career } from '../careerOverview.json'

export const Career = props => {
  const [earliest, setEarliest] = useState('')
  const [now, setNow] = useState('')
  useEffect(() => {
    setNow(new Date().getFullYear())
    setEarliest(Math.min(...career.map(event => event.year)).toString())
  }, [])
  return (
  <Stack $alignMobile='center' $gap='1.5rem'>
    <HeadingL id="career" as='h2'>
      Career overview
    </HeadingL>
    <Timeline earliest={earliest} now={now} events={career} />
  </Stack>
  )
}

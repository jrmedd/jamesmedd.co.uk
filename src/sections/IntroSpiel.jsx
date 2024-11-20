import { Cluster, Stack } from "../components/Layout"
import { HeadingL, Paragraph } from "../components/Typography"
import { ProfileImage } from "../components/ProfileImage"
import { TimeOfDayGreeting } from "../components/TimeOfDayGreeting"

export const IntroSpiel = props => (
  <Cluster $justify='center' $gap='1.5rem'>
    <ProfileImage alt="A black and white picture of James Medd, smiling with his moustache." />
    <Stack $alignMobile="center">
      <HeadingL as='h1'>
        <TimeOfDayGreeting />
      </HeadingL>
      <Paragraph>
        I’m an artist, designer, technologist, musician, and more, based in Manchester, UK, currently working as a design consultant at SPARCK.
      </Paragraph>
      <Paragraph>
        You’ll find an overview of my career to date here.
      </Paragraph>
    </Stack>
  </Cluster>
)
import { Cluster, Stack } from "../Layout"
import { Heading, Paragraph } from "../Typography"
import { ProfileImage } from "../ProfileImage"
import { TimeOfDayGreeting } from "../TimeOfDayGreeting"

export const IntroSpiel = props => (
  <Cluster $justify='center' $gap='1.5rem'>
    <ProfileImage alt="A black and white picture of James Medd, smiling with his moustache." />
    <Stack $alignMobile="center">
      <Heading $size='l'>
        <TimeOfDayGreeting />
      </Heading>
      <Paragraph $width='28rem'>
        I’m an artist, designer, technologist, musician, and more, based in Manchester, UK, currently working as a design consultant at SPARCK.
      </Paragraph>
      <Paragraph $width='28rem'>
        You’ll find an overview of my career to date here.
      </Paragraph>
    </Stack>
  </Cluster>
)
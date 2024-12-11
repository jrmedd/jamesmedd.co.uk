import { Cluster, Stack } from "../components/Layout"
import { ChatBubble } from "../components/ChatBubble"
import { ExternalLink, Heading, Paragraph } from "../components/Typography"
import { Socials } from "../components/Socials"

export const Component = () => (
  <Stack $alignMobile='center' $gap='1.5rem'>
    <Cluster $justify='center' $align='center' $gap='1.5rem'>
      <ChatBubble size='6rem' />
      <Stack $alignMobile='center' $gap='1.5rem'>
        <Heading id='contact' $size='l'>
          Contact me
        </Heading>
        <Paragraph $width='28rem'>
          If you'd like to discuss working together, I'd suggest you <ExternalLink href="mailto:hello@jamesmedd.co.uk?subject=Hi%20James">send me an email</ExternalLink> otherwise you'll find me in various places:
        </Paragraph>
      </Stack>
    </Cluster>
    <Socials />
  </Stack>
)
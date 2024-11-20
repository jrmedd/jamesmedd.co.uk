import { Cluster, Stack } from "../components/Layout"
import { ChatBubble } from "../components/ChatBubble"
import { HeadingL, Paragraph, Link } from "../components/Typography"
import { Socials } from "../components/Socials"
export const Contact = () => (
  <Stack $alignMobile='center' $gap='1.5rem'>
    <Cluster $justify='center' $align='center' $gap='1.5rem'>
      <ChatBubble size='6rem' />
      <Stack $alignMobile='center' $gap='1.5rem'>
        <HeadingL id='contact' as='h2'>
          Contact me
        </HeadingL>
        <Paragraph>
          If you'd like to discuss working together, I'd suggest you <Link to="mailto:hello@jamesmedd.co.uk?subject=Hi%20James">send me an email</Link> otherwise you'll find me in various places:
        </Paragraph>
      </Stack>
    </Cluster>
    <Socials />
  </Stack>
)
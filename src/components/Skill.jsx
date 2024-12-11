import { Cluster, Stack } from "./Layout"
import { SkillIcon } from "./SkillIcon"
import { Heading, Paragraph, ScreenReaderOnly } from "./Typography"

export const Skill = props => (
  <Stack $gap='.5rem'>
    <Cluster $gap='.5rem' $align='center'>
      <SkillIcon name={props.skillIcon} size='2rem' />
      <Heading as='h3' $size='m'><ScreenReaderOnly>Skill: </ScreenReaderOnly>{ props.skillName }</Heading>
    </Cluster>
    <Paragraph $leftIndent='2.5rem'>{ props.skillDescription }</Paragraph>
  </Stack>
)

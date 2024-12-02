import { Cluster, Stack } from "./Layout"
import { SkillIcon } from "./SkillIcon"
import { HeadingM, Paragraph, ScreenReaderOnly } from "./Typography"

export const Skill = props => (
  <Stack $gap='.5rem'>
    <Cluster as='div' $gap='.5rem' $align='center'>
      <SkillIcon name={props.skillIcon} size='2rem' />
      <HeadingM as='h3'><ScreenReaderOnly>Skill: </ScreenReaderOnly>{ props.skillName }</HeadingM>
    </Cluster>
    <Paragraph $leftIndent='2.5rem'>{ props.skillDescription }</Paragraph>
  </Stack>
)

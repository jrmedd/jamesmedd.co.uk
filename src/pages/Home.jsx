import { useEffect, useState } from 'react'
import { Paragraph } from '../components/Typography'
import { IntroSpiel } from '../components/organisms/IntroSpiel'
import { Wiggle } from '../components/Wiggle'
import { Cluster } from '../components/Layout'
import { FutureEverything } from '../components/logos/FutureEverything'
import { NationalTrust } from '../components/logos/NationalTrust'
import { Noma } from '../components/logos/Noma'
import { DESNZ } from '../components/logos/DESNZ'
import { DVSA } from '../components/logos/DVSA'
import { Scouts } from '../components/logos/Scouts'
import { BA } from '../components/logos/BA'
import { BluePrism } from '../components/logos/BluePrism'

export const Home = () => (
  <>
    <IntroSpiel />
    <Wiggle />
    <Paragraph>
      I design and sometimes build usable and joyful digital experiences for organisations such as:
    </Paragraph>
    <Cluster $gap= '2rem' $justify='center' $alignMobile='center'>
      <FutureEverything />
      <NationalTrust />
      <Noma />
      <BA />
      <Scouts />
      <BluePrism />
      <DVSA />
      <DESNZ />
    </Cluster>
    <Wiggle />
  </>
)
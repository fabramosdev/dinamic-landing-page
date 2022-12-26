import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionAgendaProps } from 'types/api'

const SectionAgenda = ({ title, description }: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <br></br>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)

export default SectionAgenda

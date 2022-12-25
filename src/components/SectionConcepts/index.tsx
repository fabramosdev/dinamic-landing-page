import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = ({
  title,
  concept: concepts
}: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((item) => (
          <S.Item key={item.concept}>{item.concept}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts

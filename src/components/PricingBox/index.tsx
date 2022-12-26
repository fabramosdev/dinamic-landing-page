import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { SectionPriceProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  originalPriceText,
  procionalPriceText,
  courseResources,
  button
}: SectionPriceProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice dangerouslySetInnerHTML={{ __html: originalPriceText }} />
      <S.DiscountPrice>{procionalPriceText}</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      {courseResources.map((item) => (
        <S.BenefitsItem
          key={item.concept}
          dangerouslySetInnerHTML={{ __html: item.concept }}
        />
      ))}
    </S.BenefitsList>

    <Button href={button.url} onClick={onClick} withPrice>
      {button.title}
      <div>
        <S.ButtonDiscountPrice>{procionalPriceText}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox

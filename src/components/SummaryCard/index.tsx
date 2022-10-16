import React from 'react';
import * as S from './styles';
import CardWrapper from '../CardWrapper';

type SummaryCardProps = {
  icon: React.ReactNode;
  negativeVariation?: boolean;
  title: string;
  mainValue: string;
  variation: string;
  elapsedTime: string;
};

const SummaryCard = ({
  icon,
  negativeVariation = false,
  title,
  mainValue,
  variation,
  elapsedTime,
}: SummaryCardProps) => (
  <CardWrapper>
    <S.Wrapper data-testid="summary-card">
      <S.IconWrapper>
        <S.Icon>{icon}</S.Icon>
      </S.IconWrapper>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardValue>{mainValue}</S.CardValue>
      <S.CardDivider />
      <S.Variation>
        <S.VariationValue
          data-testid="variation-value"
          negativeVariation={negativeVariation}
        >
          {variation}
        </S.VariationValue>
        <S.VariationTime>{elapsedTime}</S.VariationTime>
      </S.Variation>
    </S.Wrapper>
  </CardWrapper>
);

export default SummaryCard;

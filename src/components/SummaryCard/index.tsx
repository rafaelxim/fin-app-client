import React from 'react';
import * as S from './styles';
import CardWrapper from '../CardWrapper';
import Divider from '../Divider';

type SummaryCardProps = {
  icon: React.ReactNode;
  negativeVariation?: boolean;
  title: string;
  mainValue: string | 0;
  variation: string;
  elapsedTime: string;
  moneyVariation: string | 0;
};

const SummaryCard = ({
  icon,
  negativeVariation = false,
  title,
  mainValue,
  variation,
  elapsedTime,
  moneyVariation,
}: SummaryCardProps) => (
  <CardWrapper>
    <S.Wrapper data-testid="summary-card">
      <S.IconWrapper>
        <S.Icon>{icon}</S.Icon>
      </S.IconWrapper>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardValue>{mainValue}</S.CardValue>
      <Divider />
      <S.Variation>
        <S.VariationValue
          data-testid="variation-value"
          negativeVariation={negativeVariation}
        >
          {variation}
        </S.VariationValue>
        <S.VariationTime>{elapsedTime}</S.VariationTime>
        <S.MoneyVariation negativeVariation={negativeVariation}>
          {moneyVariation}
        </S.MoneyVariation>
      </S.Variation>
    </S.Wrapper>
  </CardWrapper>
);

export default SummaryCard;

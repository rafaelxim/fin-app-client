import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 4rem;
  position: relative;
  max-width: 40rem;

  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    background: ${lighten(0.1, theme.colors.background.paper)};
    border-radius: 50%;
    padding: 1.2rem;
    position: absolute;
    left: 2.3rem;
    top: -1.3rem;
  `}
`;
export const Icon = styled.div``;

export const CardTitle = styled.div`
  font-size: 1.8rem;
  text-align: right;
`;
export const CardValue = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
  text-align: right;
  margin: 1.3rem 0;
`;

export const Variation = styled.div`
  display: flex;
  font-size: 1.4rem;
  gap: 1rem;
`;

type VariationValueProps = {
  negativeVariation: boolean;
};

export const VariationValue = styled.div<VariationValueProps>`
  ${({ theme, negativeVariation }) => css`
    color: ${!negativeVariation
      ? theme.colors.lighterBlue
      : theme.colors.red100};
  `};
`;
export const VariationTime = styled.div``;

export const MoneyVariation = styled.div<VariationValueProps>`
  ${({ theme, negativeVariation }) => css`
    color: ${!negativeVariation
      ? theme.colors.lighterBlue
      : theme.colors.red100};
    font-size: 1.4rem;
    flex: 1;
    text-align: right;
  `}
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 4rem;
  position: relative;
  max-width: 40rem;

  ${({ theme }) => css`
    color: ${theme.colors.grey100};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary600};
    border-radius: 1rem;
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
export const CardDivider = styled.div`
  margin: 1.3rem 0;
  height: 0.1rem;

  background: linear-gradient(
    270deg,
    rgba(248, 248, 248, 0.0424) 0%,
    rgba(255, 255, 255, 0.53) 49.55%,
    rgba(248, 248, 248, 0.0424) 94.18%
  );
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
    color: ${!negativeVariation ? theme.colors.green100 : theme.colors.red100};
  `};
`;
export const VariationTime = styled.div``;

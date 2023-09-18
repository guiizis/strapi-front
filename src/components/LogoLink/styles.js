import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-itens: center;
    text-deoration: none;
    color: inherit;

    > img {
      max-height: 3rem;
    }
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActive(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

const containerBackgroundActive = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

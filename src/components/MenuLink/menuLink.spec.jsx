import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('should have attribute self', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should have attribute blank', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<MenuLink> Texto </MenuLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

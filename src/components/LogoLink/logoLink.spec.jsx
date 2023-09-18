import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);
    expect(
      screen.getByRole('heading', { name: 'Olá Mundo' }),
    ).toBeInTheDocument();
  });

  it('should render an image', () => {
    renderTheme(
      <LogoLink
        link="#target"
        text="Olá Mundo"
        image="assets/images/logo.svg"
      />,
    );

    const heading = screen.getByRole('heading', { name: 'Olá Mundo' });
    expect(heading.firstChild.firstChild).toHaveAttribute(
      'src',
      'assets/images/logo.svg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink
        link="#target"
        text="Olá Mundo"
        image="assets/images/logo.svg"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

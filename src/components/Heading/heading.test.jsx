import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('heading', () => {
  it('should render with default values', () => {
    renderTheme(<Heading> Texto </Heading>);

    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}> Texto </Heading>);

    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading  sizes', () => {
    renderTheme(<Heading size="small"> Texto </Heading>);

    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render correct font size when screen is mobile', () => {
    renderTheme(<Heading size="huge"> Texto </Heading>);

    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with upperCase letters', () => {
    renderTheme(<Heading upperCase={true}> Texto </Heading>);

    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render a h2 tag', () => {
    renderTheme(<Heading as="h2"> Texto </Heading>);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Texto' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading> Texto </Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponents } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponents />', () => {
  it('should render', () => {
    renderTheme(<TextComponents>Children</TextComponents>);
    const paragraph = screen.getByText('Children');

    expect(paragraph).toBeInTheDocument();
  });

  it('should render with correct font-size', () => {
    renderTheme(<TextComponents>Children</TextComponents>);
    const paragraph = screen.getByText('Children');

    expect(paragraph).toHaveStyle({
      'font-size': `${theme.fonts.sizes.medium}`,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <TextComponents>Children</TextComponents>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: `${theme.colors.primaryColor}`,
    });
  });

  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: `${theme.colors.white}`,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

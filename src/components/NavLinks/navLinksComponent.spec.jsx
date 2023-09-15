import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render none links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <NavLinks links={mock}>Children</NavLinks>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponents } from '.';

describe('<TextComponents />', () => {
  it('should render', () => {
    renderTheme(<TextComponents>Children</TextComponents>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

import P from 'prop-types';
import * as Styled from './styles';

export const TextComponents = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

TextComponents.propTypes = {
  children: P.node.isRequired,
};

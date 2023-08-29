import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  upperCase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      upperCase={upperCase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  as: P.string.isRequired,
  size: P.oneOf(['big', 'medium', 'small', 'huge']),
  upperCase: P.bool.isRequired,
};

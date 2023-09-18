import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const LogoLink = ({ text, image, link }) => {
  return (
    <Heading size="small" upperCase={true}>
      <Styled.Container href={link}>
        {image ? <img src={image} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};

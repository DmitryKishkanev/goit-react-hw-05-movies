import PropTypes from 'prop-types';

import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from 'components/BackLink/BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackLink;

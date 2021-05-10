import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinksContainer = styled.div`
  padding-top: 0.7rem;
  position: absolute;
  top: ${props => props.theme.main.sizes.leftMenu.height};
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  height: calc(100vh - (${props => props.theme.main.sizes.leftMenu.height} + 3rem));
  box-sizing: border-box;
  box-shadow: rgb(40 42 49 / 75%) 0px 1px 2px 0px;
  background-color: rgb(255, 255, 255);
`;

LinksContainer.defaultProps = {
  theme: {
    main: {
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

LinksContainer.propTypes = {
  theme: PropTypes.object,
};

export default LinksContainer;

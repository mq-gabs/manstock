import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    animation-name: rotation;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
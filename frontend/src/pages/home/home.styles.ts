import styled from 'styled-components';

export const StyledHome = styled.div`
  .btns-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
  }

  @media (max-width: 800px) {

    .btns-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .btns-wrapper {
      grid-template-columns: 1fr;
    }
  }
`;
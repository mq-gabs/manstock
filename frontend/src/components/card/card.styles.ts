import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: .5rem;
  display: grid;
  gap: 1rem;
  border-bottom: 1px solid black;

  p {
    font-size: 1.5rem;
  }

  span {
    font-weight: bold;
  }

  img {
    cursor: pointer;
  }

  img:hover {
    filter: brightness(130%);
  }

  .top, .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icons {
    display: flex;
    gap: 2rem;
  }

  .top {
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 1rem;
    }

    .icons {
      gap: 1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .card-code {
    font-size: .8rem;
  }
`;
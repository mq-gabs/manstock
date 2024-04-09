import styled from 'styled-components';

export const StyledSignIn = styled.div`
  widht: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    border: 2px solid black;
    border-radius: .5rem;
    padding: 1rem;
    display: grid;
    gap: 1rem;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: .5rem;
    padding: .5rem 1rem;

    h1 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
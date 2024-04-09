import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 70px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;

    p {
      color: white;
      font-size: .9rem;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;

    h1 {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 400px) {
    padding: 0 .5rem;

    .logo {
      gap: .5rem;
    }
    
    h1 {
      font-size: 1.5rem;
    }
  }
`;
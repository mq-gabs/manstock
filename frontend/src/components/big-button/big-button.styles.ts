import styled from 'styled-components';

export const StyledBigButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 200ms;
  border: none;
  
  &:nth-child(even) {
    background: ${({ theme  }) => theme.colors.primary};
  }

  &:nth-child(odd) {
    background: ${({ theme  }) => theme.colors.secondary};
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  &:hover {
    transform: scale(1.05);
    filter: brightness(120%);
  }

  p {
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
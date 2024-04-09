import styled from 'styled-components';

export const StyledButton = styled.button<{ color: string, isloading: boolean }>`
  border-radius: .5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme, color }) => theme.colors[color]};
  padding: .5rem;
  cursor: pointer;
  transition: 200ms;
  border: none;

  &:hover {
    filter: brightness(130%);
  }

  p {
    color: white;
    text-transform: uppercase;
    text-align: center;
    user-selct: none;
    margin: auto 0;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }

  ${({ isloading }) => isloading && `
    background: grey;
    cursor: default;

    &:hover {
      filter: none;
    }
  `}
`;
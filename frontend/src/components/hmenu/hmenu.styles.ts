import styled from 'styled-components';

export const StyledHMenu = styled.div<{ selected: number, size: number }>`
  display: flex;
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);

  .hmenu-option {
    border: 1px solid black;
    padding: .5rem 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: 300ms;

    &:hover {
      filter: brightness(130%);
      background: ${({ theme }) => theme.colors.primary};
      p {
        color: white;
      }
    }

    p {
      text-transform: uppercase;
      color: black;
    }

    &:nth-child(1) {
      border-radius: .5rem 0 0 .5rem;
      border-right: none;
    }

    &:last-child {
      border-radius: 0 .5rem .5rem 0;
    }

    &:nth-child(${({ selected }) => selected + 1}) {
      background: ${({ theme }) => theme.colors.primary};
      p {
        color: white;
      }
    }
  }
`;
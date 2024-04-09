import styled from 'styled-components';

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-outside {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,.2);
  }

  .modal-window {
    width: fit-content;
    min-height: 100px;
    min-width: 200px;
    max-width: 50%;
    z-index: 100;
    border-radius: .5rem;
    background: white;
  }

  .window-topbar {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .5rem;
    border: 1px solid black;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: .5rem .5rem 0 0;
    
    p {
      color: white;
      font-weight: bold;
    }
  }

  .window-options {
    padding: .5rem;
    border: 1px solid black;
    border-radius: 0 0 .5rem .5rem;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-content: space-evenly;
  }

  .window-body {
    height: 100%;
    padding: .5rem;
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
`;
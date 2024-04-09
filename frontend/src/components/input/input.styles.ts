import styled from 'styled-components';

export const StyledInput = styled.div`
  border: 1px solid black;
  border-radius: .5rem;
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  > input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    padding: .5rem 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
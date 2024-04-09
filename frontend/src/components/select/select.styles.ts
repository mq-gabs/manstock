import styled from 'styled-components';

export const StyledSelect = styled.select`
  outline: none;
  border-radius: .5rem;
  padding: .5rem 1rem;
  background: white;
  cursor: pointer;

  > option {
    cursor: pointer;
    border: 1px solid red;
  }
`;
import styled from 'styled-components';

export const StyledDropdown = styled.div<{ open: boolean }>`
  border: 1px solid black;
  border-radius: .5rem;

  .dropdown-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    background: ${({ theme }) => theme.colors.lightGrey};
    ${({ open }) => open ? `
      border-radius: .5rem .5rem 0 0;
    ` : `
      border-radius: .5rem;
    `}
  }

  .dropdown-head-title {
    display: flex;
    gap: .5rem;
    align-items: center;
  }

  .dropdown-body {
    padding: .5rem;
    ${({ open }) => open ? `
      max-height: 300px;
    ` : `
      height: 0;
    `}
    overflow-y: auto;
  }

  .arrow-wrapper {
    transition: 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ open }) => open && `
      transform: rotate(180deg);
    `}
  }
`;
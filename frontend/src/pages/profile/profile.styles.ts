import styled from 'styled-components';

export const StyledProfile = styled.main<{ isadmin: boolean }>`
  display: grid;
  ${({ isadmin }) => isadmin ? `
    grid-template-columns: 40% 60%;
  ` : `
    grid-template-columns: 1fr;
  `}
  height: calc(100vh - 70px);

  .user-form {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    gap: .5rem;
    margin: 0 auto;
    padding: .5rem;
    overflow-y: auto;
  }

  .users-list {
    border-left: 1px solid black;
    overflow-y: auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 350px auto;

    .users-list {
      border-left: none;
      border-top: 1px solid black;
    }
  }
`
import styled from 'styled-components';

export const StyledUserCard = styled.div<{ isadmin: boolean }>`
  padding: .5rem;
  display: grid;
  gap: 1rem;
  border-bottom: 1px solid black;
  

  .user-card-top, .user-card-bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .info-name {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
  }

  .info-date {
    font-size: .8rem;
  }

  .info-email, .info-profile {
    font-size: .8rem;
  }

  .info-email {
    text-decoration: underline;
  }

  .info-profile {
    ${({ isadmin, theme }) => isadmin ? `
      color: ${theme.colors.secondary};
    `: `
      color: ${theme.colors.primary};
    `}
  }

  .user-info {
    display: grid;
    gap: .5rem;
  }

  .user-card-actions {
    display: flex;
    gap: 1rem;
  }
`;
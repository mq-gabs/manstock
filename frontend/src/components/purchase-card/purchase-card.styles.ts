import styled from 'styled-components';

export const StyledPurchaseCard = styled.div`
  padding: .5rem;
  display: grid;
  gap: .5rem;
  border: 1px solid black;
  border-radius: .5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  .span-total {
    font-size: 1.5rem;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cards-loading {
    padding: .5rem;
  }
`;
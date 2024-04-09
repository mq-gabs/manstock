import styled from 'styled-components';

export const StyledSearchPurchase = styled.div`
  .search-filters {
    display: grid;
    gap: .5rem;
    padding: .5rem;
    border-bottom: 1px solid black;
  }

  .top-filters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
  }

  .bottom-filters {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;
  }

  .filters-actions {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 1fr;
    justify-content: space-evenly;
    align-items: center;

    > * {
      height: 100%;
    }
  }

  .empty-purchase-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.grey};
  }

  .search-list {
    max-width: 800px;
    margin: .5rem auto 0;
    display: grid;
    gap: .5rem;
    padding: .5rem;
  }

  @media (max-width: 800px) {
    .bottom-filters {
      grid-template-columns: repeat(2, 1fr);
    }

    .filters-actions {
      grid-template-columns: repeat(2, 1fr);
      gap: .5rem;
    }
  }

  @media (max-width: 450px) {
    .top-filters, .bottom-filters {
      grid-template-columns: 1fr;
    } 
  }
`;
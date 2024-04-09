import styled from 'styled-components';

export const StyledNewPurchase = styled.div<{ finish: boolean }>`
  display: grid;
  grid-template-columns: 55% 45%;
  height: calc(100vh - 70px);

  .list {
    border-right: 1px solid black;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .options {
    padding: .5rem;
    display: grid;
    gap: 1rem;
    max-height: calc(100vh - 70px);
    grid-template-rows: 30px auto 100px;
  }

  .options-top {
    display: grid;
    gap: .5rem;
  }

  .options-middle {
    padding: .5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    overflow-y: auto;
  }

  .options-bottom {
    padding: .5rem 0;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    ${({ finish }) => finish && `
      border-top: 2px solid black;
    `}
  }

  .options-bottom-text {
    display: flex;
    align-itesm: center;
    justify-content: space-between;

    > p {
      font-size: 1.8rem;
    }

    > h2 {
      text-align: right;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    .list {
      height: calc(50vh - 70px);
      max-height: calc(50vh - 70px);
      border-bottom: 2px solid black;
      border-right: none;
    }

    .options {
      max-height: calc(60vh - 70px);
      overflow-y: auto;
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

  .searched-products {
    height: 300px;
    border: 1px solid black;
    overflow-y: auto;
  }

  .no-product {
    padding: .5rem;
  }

  .finish-purchase-step {
    display: grid;
    gap: .5rem;
  }
`;
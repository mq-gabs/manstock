import styled from 'styled-components';

export const StyledNewProduct = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: calc(100vh - 70px);

  > div {
    height: 100%;
  }

  .product-form {
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .products-list-wrapper {
    display: grid;
    grid-template-rows: calc(100vh - 70px - 60px) 60px;
  }

  .products-list {
    overflow-y: auto;
  }

  .products-options {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: .5rem;
    gap: 2rem;
    text-align: center;

    h4 {
      margin: auto; 
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

  @media (max-width: 650px) {
    grid-template-columns: 1fr;

    .product-form {
      border-right: none;
      border-bottom: 1px solid black;
      height: 250px;
    }

    .products-list-wrapper {
      grid-template-rows: calc(100vh - 70px - 250px - 60px) 60px;
    }
  }
`;
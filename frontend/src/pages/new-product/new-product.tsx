import { useEffect, useState } from "react";
import { Button, Card, Input, Modal } from "../../components";
import { StyledNewProduct } from "./new-product.styles";
import { usePopUp } from "../../hooks";
import { createProduct } from "../../services";
import Icon from "../../components/icon";

interface ICreateProduct {
  name: string;
  code: string;
  price: number;
}

export const NewProduct = () => {
  document.title = 'Manstock - Novo Produto';
  const [code, setCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [products, setProducts] = useState<ICreateProduct[]>([]);
  const { popUp } = usePopUp();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const clearInputs = () => {
    setName('');
    setPrice(undefined);
    setCode('');
  }

  const handleAddProduct = () => {
    if (!name || !price || !code) {
      popUp({
        message: 'Preencha todos os campos!',
        type: 'info',
      });
      return;
    }

    let check = true;

    products.forEach(product => {
      if (product.code === code) {
        check = false;
      }
    })

    if (!check) {
      popUp({
        message: 'Já existe um produto com esse código!',
        type: 'info',
        title: 'Atenção!'
      });
      return;
    }

    setProducts([...products, { code, name, price }]);
    clearInputs();
  }

  const handleRemoveProduct = (code: string) => {
    const newProducts = products.filter(product => product.code !== code);
    setProducts(newProducts);
  }

  const createProducts = async () => {
    if (products.length === 0) {
      popUp({
        message: 'A lista está vazia',
        type: 'info',
      });
      return;
    }

    setIsLoading(true);
    const checks = await Promise.all(
      products.map(async product => (
        await createProduct(product)
      ))
    );
    setIsLoading(false);
    const totalProducts = products.length;
    let newProducts = products;

    checks.map(check => {
      if (check) {
        newProducts = newProducts.filter(product => product.code !== check.product.code);
      }
    })
    

    if (newProducts.length > 0) {
      popUp({
        message: 'Não foi possível criar algum(ns) produto(s)! Eles continuam na lista.',
        type: 'warning',
      });
    }

    if (newProducts.length < totalProducts) {
      popUp({
        message: 'Produtos criados com sucesso!',
        type: 'success',
      });
    }

    clearInputs()
    setProducts(newProducts);
  }

  const handleEdit = (code: string) => {
    const newProducts = products.filter(product => {
      if (product.code === code) {
        setCode(product.code);
        setName(product.name);
        setPrice(product.price);
        return false;
      }
      return true;
    });
    setProducts(newProducts);
  }

  const handleClearList = () => {
    setProducts([]);
    popUp({
      message: 'A lista foi esvaziada!',
      type: 'warning',
      title: 'Aviso!',
    });

    setOpenModal(false);
  }

  const handleClickClearList = () => {
    if (products.length === 0) {
      popUp({
        message: 'A lista já está vazia!',
        type: 'info'
      });
      return;
    }

    setOpenModal(true);
  }

  useEffect(() => {
    if (products.length > 15) {
      popUp({
        message: 'Você adicionou a lista mais de 15 produtos! Recomendamos cadastrá-los agora para continuar adicionando outros produtos.',
        type: 'info'
      });
    } 
  }, [products])

  return (
    <StyledNewProduct>
      <div className="product-form">
        <h4>Cadastro de produtos</h4>
        <Input
          placeholder="Código do produto"
          icon="barCodePrimary"
          value={code}
          setValue={setCode}
        />
        <Input
          placeholder="Nome do produto"
          icon="name"
          value={name}
          setValue={setName}
        />
        <Input
          type="number"
          placeholder="Preço do produto"
          icon="ticket"
          value={price || ""}
          setValue={setPrice}
        />
        <Button
          text="adicionar à lista"
          iconName="addProduct"
          onClick={handleAddProduct}
        />
      </div>
      <div className="products-list-wrapper">
        <div className="products-list">
          {products.length !== 0 && products.map(product => (
            <Card
              key={product.code}
              name={product.name}
              price={product.price}
              onDelete={() => handleRemoveProduct(product.code)}
              code={product.code}
              simple
              onOption={() => handleEdit(product.code)}
              optionIcon="pencil"
            />
          ))}
          {products.length === 0 && (
            <div className="empty-purchase-list">
              <Icon name="carGrey" size={1.5} />
              <h3>Sua lista está vazia...</h3>
            </div>
          )}
        </div>
        <div className="products-options">
            <Button
              text="Limpar lista"
              iconName="cancel"
              onClick={handleClickClearList}
              color="secondary"
            />
            <h4>Total de produtos: {products.length}</h4>
            <Button
              text="cadastrar todos os produtos"
              iconName="registers"
              onClick={createProducts}
              isLoading={isLoading}
            /> 
        </div>
        <Modal
          open={openModal}
          title="Atenção!"
          text="Tem certeza que deseja limpar a lista?"
          onClose={() => setOpenModal(false)}
          onConfirm={handleClearList}
          confirmText="Limpar"
          cancelText="Cancelar"
          confirmColor="secondary"
        />
      </div>
    </StyledNewProduct>
  );
}
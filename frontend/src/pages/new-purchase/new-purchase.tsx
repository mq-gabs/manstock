import { useEffect, useState } from "react";
import { Button, Card, HMenu, Input, Loading, Modal, Select } from "../../components";
import { StyledNewPurchase } from "./new-purchase.styles";
import Icon from "../../components/icon";
import { IFormatedPaymentType, IFormatedProduct, IProduct } from "../../interfaces";
import { createPurchase, getPaymentTypes, getProductByCode, getProducts, getRandomProduct } from "../../services";
import { useAuth } from "../../hooks/auth";
import { usePopUp } from "../../hooks/toast";

export const NewPurchase = () => {
  document.title = 'Manstock - Nova Compra';
  const [products, setProducts] = useState<IFormatedProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState<boolean>(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const [isLoadingRandom, setIsLoadingRandom] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [barCodeInput, setBarCodeInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");
  const [selectedMenuOption, setSelectedMenuOption] = useState<number>(0);
  const { userData } = useAuth();
  const [finishPurchaseStep, setFinishPurchaseStep] = useState<boolean>(false);
  const [paymentTypes, setPaymentTypes] = useState<IFormatedPaymentType[]>([]);
  const [selectedPaymentType, setSelectedPaymentType] = useState<string>("");
  const [payment, setPayment] = useState<number>();
  const [change, setChange] = useState<number | string>();
  const [isLoadingCreatePurchase, setIsLoadingCreatePurchase] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { popUp } = usePopUp();

  const handleSearchProdcut = () => {
    getAllProducts();
  }

  const handleCancelPurchase = async () => {
    setProducts([]);
    popUp({
      message: 'Você cancelou a compra!',
      type: 'warning',
      title: 'Aviso!',
    });

    setOpenModal(false);
  }

  const handleClickCancelPurchase = () => {
    if (products.length === 0) {
      popUp({
        message: 'A lista já está vazia!',
        type: 'info',
      });
      return;
    }

    setOpenModal(true);
  }

  const addProduct = (data: IProduct) => {
    let exists = false;

    let newProducts = products.map(product => {
      if (product.id === data.id) {
        exists = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    })

    if (!exists) {
      newProducts = [...products, {...data, quantity: 1 }];
    }

    setProducts(newProducts);
  }

  const handleAddProduct = async () => {
    if (!barCodeInput) {
      popUp({
        message: 'Preencha o campo do código de barras!',
        type: 'warning',
        title: 'Atenção!',
      });
      return;
    }

    setIsLoadingProduct(true);

    const data = await getProductByCode({ code: barCodeInput });

    setIsLoadingProduct(false);

    if (!data) {
      popUp({
        message: 'Código não encontrado',
        type: 'warning',
        title: 'Atenção!',
      });
      return;
    }

    addProduct(data);
  }

  const handleAddRandomProduct = async () => {
    setIsLoadingRandom(true);

    const data = await getRandomProduct();

    setIsLoadingRandom(false);

    if (!data) {
      popUp({
        message: 'Não foi possível buscar produto aleatório',
        type: "warning"
      });
      return;
    }
    
    addProduct(data);
  }
  
  const handleRemoveProduct = (id: string) => {
    const newProducts = products.filter((product: IFormatedProduct) => product.id !== id);
    setProducts(newProducts);
  }
  
  const handleGoToPayment = () => {
    if (products.length === 0) {
      popUp({
        message: 'Sua lista está vazia!',
        type: 'info',
      });
      return;
    }
    setFinishPurchaseStep(true);
  }

  const handleBackToOptions = () => {
    setFinishPurchaseStep(false);
  }

  const handleFinishPurchase = async () => {
    if (!payment || !change || !selectedPaymentType) {
      popUp({
        message: 'Preencha as informações de pagamento para continuar!',
        type: 'info',
      });
      return;
    }

    const formatedProducts = products.map(({ id, quantity }) => ({ id, quantity }));

    setIsLoadingCreatePurchase(true);

    const data = await createPurchase({
      total,
      change: Number(change),
      payment,
      payment_type_id: selectedPaymentType,
      products: formatedProducts,
    });

    setIsLoadingCreatePurchase(false);

    if (!data) {
      popUp({
        message: 'Erro ao finalizar a compra!',
        type: 'warning',
      });
      return;
    }

    popUp({
      message: 'Compra finalizada com sucesso!',
      type: 'success',
    });

    setFinishPurchaseStep(false);
    setProducts([]);
    setSelectedPaymentType('');
    setPayment(undefined);
    setChange('');
  }
  
  const handleSetQuantity = (id: string, newValue: number) => {
    if (newValue === 0) {
      handleRemoveProduct(id);
      return;
    }
    
    const newProducts = products.map((product: IFormatedProduct) => (
      product.id === id ? { ...product, quantity: newValue } : product
    ));
    setProducts(newProducts);
  }
  
  const getAllProducts = async () => {
    setIsLoadingSearch(true);

    const data = await getProducts({
      name: nameInput,
      code: barCodeInput,
    });

    setIsLoadingSearch(false);

    if (!data) return;

    setSearchedProducts(data[0]);
  }

  const getAllPaymentTypes = async () => {
    if (finishPurchaseStep) {
      const data = await getPaymentTypes();
      
      if (!data) {
        popUp({
          message: 'Erro ao buscar os tipos de pagamento!',
          type: 'warning',
        });
        return;
      }
      
      const formatedPaymentTypes = data.map(({ id, name }) => ({
        id,
        name,
        value: id,
      }));
      
      setPaymentTypes(formatedPaymentTypes);
    }
  }
  
  useEffect(() => {
    let total = 0;
    
    products.forEach((product: IFormatedProduct) => {
      total += product.quantity * product.price;
    });

    setTotal(total);
  }, [products])

  useEffect(() => {
    getAllPaymentTypes()
  }, [finishPurchaseStep]);
    
  useEffect(() => {
    if (payment) {
      const newChange = payment - total;
      if (newChange < 0) {
        setChange('Não é o suficiente');
        return;
      }
      setChange(payment - total);
    }
  }, [payment])

  return (
    <StyledNewPurchase finish={finishPurchaseStep}>
    <div className="list">
      {products.length !== 0 && products.map((product: IFormatedProduct) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          setQuantity={(newValue: number) => handleSetQuantity(product.id, newValue)}
          onDelete={() => handleRemoveProduct(product.id)}
          code={product.code}
          />
        ))}
        
        {products.length === 0 && (
          <div className="empty-purchase-list">
            <Icon name="carGrey" size={1.5} />
            <h3>Sua lista está vazia...</h3>
          </div>
        )}
      </div>

      <div className="options">
        <div className="options-top">
          <Button
            text="cancelar compra"
            iconName="cancel"
            onClick={handleClickCancelPurchase}
            color="secondary"
          />
        </div>

        {!finishPurchaseStep && (
          <div className="options-middle">
            <HMenu
              options={[
                { id: 0, name: 'adicionar produto' },
                { id: 1, name: 'consultar preço' }
              ]}
              selected={selectedMenuOption}
              setSelected={setSelectedMenuOption}
            />
            <Input
              type="number"
              icon="barCodePrimary"
              value={barCodeInput}
              setValue={setBarCodeInput}
              placeholder="123456789"
            />
            {selectedMenuOption === 1 && (
              <Input
                icon="name"
                value={nameInput}
                setValue={setNameInput}
                placeholder="Nome do Produto"
              />
            )}
            <Button
              text={selectedMenuOption === 0 ? "adicionar" : 'pesquisar'}
              onClick={selectedMenuOption === 0 ? handleAddProduct : handleSearchProdcut}
              iconName={selectedMenuOption === 0 ? "addProduct" : "searchWhite"}
              isLoading={selectedMenuOption === 0 ? isLoadingProduct : isLoadingSearch}
            />
            {selectedMenuOption === 0 && userData.user.profile === 'admin' && (
              <Button
                text="adicionar produto aleatório"
                onClick={handleAddRandomProduct}
                iconName="addProduct"
                color="secondary"
                isLoading={isLoadingRandom}
              />
            )}
            {selectedMenuOption === 1 && (
              <div className="searched-products">
              {searchedProducts.length !== 0 && searchedProducts?.map(product => (
                <Card
                  key={product.id}
                  simple
                  name={product.name}
                  price={product.price}
                  code={product.code}
                />
              ))}

              {searchedProducts.length === 0 && (
                <div className="no-product">
                  <p>Nenhum produto encontrado...</p>
                </div>
              )}
              </div>
            )}
          </div>
        )}

        <div className="options-bottom">
          {finishPurchaseStep && (
            <Button
              text="voltar"
              iconName="back"
              color="secondary"
              onClick={handleBackToOptions}
            />
          )}
          <div className="options-bottom-text">
            <p>TOTAL:</p> 
            <h2>R$ {total.toFixed(2)}</h2>
          </div>
          {!finishPurchaseStep && (
            <Button
              text="Ir para pagamentos"
              iconName="checkCar"
              onClick={handleGoToPayment}
            />
          )}
          {finishPurchaseStep && paymentTypes.length !== 0 && (
            <div className="finish-purchase-step">
              <p>Forma de pagamento</p>
              <Select
                options={paymentTypes}
                setSelected={setSelectedPaymentType}
              />
              <p>Valor pago</p>
              <Input
                placeholder="Valor pago"
                value={payment}
                setValue={setPayment}
                type="number"
              />
              <p>Troco</p>
              <Input
                placeholder="Troco"
                value={typeof change === 'number' ? change.toFixed(2) : change}
                setValue={() => {}}
              />
              <Button
                text="finalizar compra"
                onClick={handleFinishPurchase}
                isLoading={isLoadingCreatePurchase}
              />
            </div>
          )}
          {finishPurchaseStep && paymentTypes.length === 0 && (
            <Loading />
          )}
        </div>
      </div>

      <Modal
        open={openModal}
        text="Tem certeza que deseja cancelar a compra?"
        title="Atenção!"
        onClose={() => setOpenModal(false)}
        onConfirm={handleCancelPurchase}
        confirmText="Cancelar compra"
        cancelText="Continuar comprando"
        confirmColor="secondary"
      />
    </StyledNewPurchase>
  );
}
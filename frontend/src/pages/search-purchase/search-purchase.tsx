import { useEffect, useState } from "react";
import { Button, Input, Modal, Pagination, PurchaseCard } from "../../components";
import { StyledSearchPurchase } from "./search-purchase.styles"
import { IPurchase } from "../../interfaces";
import Icon from "../../components/icon";
import { getAllPurchases } from "../../services/purchase/getAllPurchase";
import { usePopUp } from "../../hooks";

export const SearchPurchase = () => {
  document.title = 'Manstock - Buscar Compra'
  const [productCode, setProductCode] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [initDate, setInitDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [initTime, setInitTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const [totalOfPurchases, setTotalOfPurchases] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { popUp } = usePopUp();

  const handleClickClearFilters = () => {
    setOpenModal(true);
  }

  const handleClearFilters = () => {
    setProductCode("");
    setProductName("");
    setInitDate("");
    setEndDate("");
    setInitTime("");
    setEndTime("");
    setOpenModal(false);
    handleSearchFiltering();
  }

  const handleSearchFiltering = async () => {
    setIsLoading(true);

    const data = await getAllPurchases({
      productCode,
      productName,
      page,
      pageSize,
      initDate,
      endDate,
      initTime,
      endTime,
    });

    setIsLoading(false);

    if (!data) {
      popUp({
        message: 'Não foi possível buscar as compras',
        type: 'warning',
        title: 'Aviso!',
      });
      return;
    }

    setPurchases(data[0]);
    setTotalOfPurchases(data[1]);
  }

  useEffect(() => {
    handleSearchFiltering();
  }, [page, pageSize])

  return (
    <StyledSearchPurchase>
      <div className="search-filters">
        <h3>Filtros</h3>
        <div className="top-filters">
          <Input
            value={productCode}
            setValue={setProductCode}
            icon="barCodePrimary"
            placeholder="Código do produto"
          />
          <Input
            value={productName}
            setValue={setProductName}
            icon="name"
            placeholder="Nome do produto"
          />
        </div>
        <div className="bottom-filters">
          <Input
            value={initDate}
            setValue={setInitDate}
            icon="date"
            placeholder="A partir da data"
            type="date"
          />
          <Input
            value={endDate}
            setValue={setEndDate}
            icon="date"
            placeholder="Até a data"
            type="date"
          />
          <Input
            value={initTime}
            setValue={setInitTime}
            icon="time"
            placeholder="A partir do horário"
            type="time"
          />
          <Input
            value={endTime}
            setValue={setEndTime}
            icon="time"
            placeholder="Até o horário"
            type="time"
          />
        </div>
        <div className="filters-actions">
          <Button
            text="Limpar filtros"
            color="secondary"
            iconName="cancel"
            onClick={handleClickClearFilters}
          />
          <Button
            text="Pesquisar"
            color="primary"
            iconName="searchWhite"
            onClick={handleSearchFiltering}
            isLoading={isLoading}
          />
        </div>
      </div>
      <div className="search-list">
        {purchases.length !== 0 && purchases.map(purchase => (
          <PurchaseCard
            key={purchase.id}
            id={purchase.id}
            change={purchase.change}
            payment={purchase.payment}
            payment_type_id={purchase.payment_type_id}
            total={purchase.total}
            created_at={purchase.created_at}
          />
        ))}
        {purchases.length !== 0 && (
          <Pagination
            page={page}
            pageSize={pageSize}
            setPage={setPage}
            setPageSize={setPageSize}
            total={totalOfPurchases}
          />
        )}
        {purchases.length === 0 && (
          <div className="empty-purchase-list">
            <Icon name="carGrey" size={1.5} />
            <h3>Nenhuma compra encontrada...</h3>
          </div>
        )}
      </div>

      <Modal
        open={openModal}
        title="Atenção!"
        text="Tem certeza que deseja limpar os filtros?"
        confirmText="Limpar filtros"
        cancelText="Cancelar"
        confirmColor="secondary"
        onClose={() => setOpenModal(false)}
        onConfirm={handleClearFilters}
      />
    </StyledSearchPurchase>
  );
}
import { Select } from "..";
import Icon from "../icon";
import { StyeldPagination } from "./pagination.styles";

interface IPagination {
  page: number;
  setPage: (arg: number) => void;
  pageSize: number;
  setPageSize: (arg: number) => void;
  pageSizeOptions?: number[];
  total: number;
}

export const Pagination = ({
  page,
  setPage,
  pageSize,
  setPageSize,
  pageSizeOptions = [2,10,50],
  total,
}: IPagination) => {
  const totalOfPages = Math.ceil(total / pageSize);
  const isLastPage = (page + 1) === totalOfPages;
  const isFirstPage = page === 0;
  
  const handleNextPage = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  }

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      setPage(page - 1);
    }
  }

  return (
    <StyeldPagination>
      <p>Itens por página</p>
      <Select
        options={pageSizeOptions.map((size, id) => ({ id, name: String(size), value: String(size) }))}
        setSelected={(value) => setPageSize(Number(value))}
        selected={pageSize}
        defaultValue={pageSizeOptions[1]}
      />
      <p>{(page * pageSize) + 1} - {!isLastPage ? (page * pageSize) + pageSize : total} de {total}</p>
      <Icon name="arrowLeft" size={1.5} onClick={!isFirstPage ? handlePreviousPage : undefined} />
      <p>{page + 1}/{totalOfPages}</p>
      <Icon name="arrowRight" size={1.5} onClick={!isLastPage ? handleNextPage : undefined} />
    </StyeldPagination>
  );
}
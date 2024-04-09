import { useState } from "react";
import { StyledToast, StyledToaster } from "./toaster.styles";
import Icon from "../icon";
import { IToastElement, TToastTypes } from "../../interfaces";

interface IToast {
  message: string;
  type: TToastTypes;
  title?: string;
  onDelete: () => void;
}

interface IToaster {
  toasts: IToastElement[];
  setToasts: (arg: any) => void;
}

const toastTitles = {
  warning: 'Erro!',
  info: 'Aviso!',
  success: 'Sucesso!',
};

const Toast = ({ 
  message,
  title,
  type = 'info',
  onDelete,
}: IToast) => {
  const [animationState, setAnimationState] = useState<'pop-up' | 'pop-out'>('pop-up');
  
  const handleDelete = () => {
    setAnimationState('pop-out');
    setTimeout(() => {
      onDelete();
    }, 300)
  }

  setTimeout(() => {
    handleDelete();
  }, 5300)

  return (
    <StyledToast animationstate={animationState} type={type}>
      <div className="toast-head">
        <div className="toast-head-title">
          <Icon name={type} />
          <p>{title || toastTitles[type]}</p>
        </div>
        <Icon onClick={handleDelete} name="cancel" />
      </div>
      {/* <div className="toast-loadbar-wrapper">
        <div className="toast-loadbar"></div>
      </div> */}
      <div className="toast-body">
        <p>{message}</p>
      </div>
    </StyledToast>
  );
}

export const Toaster = ({
  toasts,
  setToasts,
}: IToaster) => {

  const handleDelete = (id: IToastElement["id"]) => {
    setToasts((prev: any) => prev.filter((t: any) => t.id !== id));
  }

  return(
    <StyledToaster>
      {toasts?.map((toast: IToastElement) => (
        <Toast 
          key={toast.id}
          message={toast.message}
          type={toast.type}
          title={toast.title}
          onDelete={() => handleDelete(toast.id)}
        />
      ))}
    </StyledToaster>
  );
}
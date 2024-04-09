import { ReactElement } from "react";
import { Button, IButton } from "..";
import Icon from "../icon";
import { StyledModal } from "./modal.styles";

interface IModal {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  children?: ReactElement | ReactElement[];
  text?: string;
  confirmColor?: IButton['color'];
}

export const Modal = ({
  open,
  title = 'Título',
  onClose,
  onConfirm,
  onCancel,
  confirmText = 'Ok',
  cancelText = 'Cancelar',
  children,
  text = 'Nada para exibir aqui...',
  confirmColor = 'primary',
}: IModal) => {
  return (
    <>
    {open && (
      <StyledModal>
          <div className="modal-outside" onClick={onClose} />
          <div className="modal-window">
            <div className="window-topbar">
              <p>{title}</p>
              <Icon name="cancel" onClick={onClose} />
            </div>
            <div className="window-body">
              {!!children && (
                <>{children}</>
              )}
              {!children && (
                <p>{text}</p>
              )}
            </div>
            <div className="window-options">
              {(!!onCancel || cancelText) && (
                <Button
                  text={cancelText}
                  color="grey"
                  onClick={onCancel || onClose}
                />
              )}
              <Button
                text={confirmText}
                color={confirmColor}
                onClick={onConfirm || onClose}
              />
            </div>
          </div>
      </StyledModal>
    )}
    </>
  );
}
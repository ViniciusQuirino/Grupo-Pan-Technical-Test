import { ReactNode } from "react";
import { StyledModal } from "./styled";

interface IModalProps {
  children: ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <StyledModal>
      <div>{children}</div>
    </StyledModal>
  );
};

export default Modal;

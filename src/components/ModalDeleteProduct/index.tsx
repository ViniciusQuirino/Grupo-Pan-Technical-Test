import { useContext, useEffect, useRef } from "react";
import Modal from "../Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../contexts/ProductContext";
import { schemaCreateProduct } from "../../validations";
import { DeleteProductStyled } from "./styled";

const ModalDeleteProduct = () => {
  const { setClosedModalDeleteProduct, deleteProduct, idProduct } =
    useContext(ProductContext);

  return (
    <Modal>
      <DeleteProductStyled>
        <h3>Tem certeza que deseja deletar esse produto ?</h3>

        <button
          type="button"
          onClick={() => {
            setClosedModalDeleteProduct(false);
            deleteProduct(idProduct);
          }}
        >
          DELETAR
        </button>
        <button
          type="button"
          onClick={() => setClosedModalDeleteProduct(false)}
        >
          FECHAR
        </button>
      </DeleteProductStyled>
    </Modal>
  );
};

export default ModalDeleteProduct;

import React, { useContext } from "react";
import { StyleCard } from "./styled";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductContext } from "../../contexts/ProductContext";

const Card = (product) => {
  const token = localStorage.getItem("@GrupoPan:userid");

  const {
    setIdProduct,
    closedModalDeleteProduct,
    setClosedModalDeleteProduct,
    setClosedModalEditProduct,
    setEditObjProduct,
  } = useContext(ProductContext);

  return (
    <StyleCard>
      <div>
        <img src={product.product.image} alt="Imagem do produto" />
      </div>
      <h3>{product.product.name}</h3>
      <p className="description">{product.product.description}</p>
      <div className="center-card">
        <p>{product.product.brand}</p>
        <p>{product.product.voltage}</p>
      </div>
      <div className="bottom-card">
        <p>R$ {product.product.price}</p>
        <div>
          {token == product.product.user_id && (
            <>
              <RiEdit2Line
                onClick={() => {
                  setEditObjProduct(product.product);
                  setClosedModalEditProduct(true);
                }}
              />
              <RiDeleteBin6Line
                onClick={() => {
                  setIdProduct(product.product.id);
                  setClosedModalDeleteProduct(true);
                }}
              />
            </>
          )}
        </div>
      </div>
    </StyleCard>
  );
};

export default Card;

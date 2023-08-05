import React, { useContext, useState } from "react";
import { StyleCard } from "./styled";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductContext } from "../../contexts/ProductContext";
import img from "../../../public/placeholder.svg";

const CardComponent = (product) => {
  const token = localStorage.getItem("@GrupoPan:userid");
  const [imageError, setImageError] = useState(false);
  const {
    setIdProduct,
    closedModalDeleteProduct,
    setClosedModalDeleteProduct,
    setClosedModalEditProduct,
    setEditObjProduct,
  } = useContext(ProductContext);

  const handleImageError = () => {
    setImageError(true);
  };

  const priceInBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.product.price);

  return (
    <StyleCard>
      <div>
        <img
          src={imageError ? img : product.product.image}
          alt="Imagem do produto"
          onError={handleImageError}
        />
      </div>
      <h3>{product.product.name}</h3>
      <p className="description">{product.product.description}</p>
      <div className="center-card">
        <p>{product.product.brand}</p>
        <p>{product.product.voltage}</p>
      </div>
      <div className="bottom-card">
        <p>R$ {priceInBRL}</p>

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

export default CardComponent;

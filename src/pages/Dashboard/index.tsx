import React, { useContext } from "react";
import Card from "../../components/Card";
import { DashboardStyled, DivStyled } from "./styled";
import Header from "../../components/Header";
import ModalCreateProduct from "../../components/ModalCreateProduct";
import { ProductContext } from "../../contexts/ProductContext";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import ModalEditProduct from "../../components/ModalEditProduct";

const Dashboard = () => {
  const {
    closedModalCreateProduct,
    products,
    closedModalDeleteProduct,
    closedModalEditProduct,
  } = useContext(ProductContext);

  return (
    <>
      <Header />
      <DivStyled>
        {closedModalDeleteProduct && <ModalDeleteProduct />}
        {closedModalCreateProduct && <ModalCreateProduct />}
        {closedModalEditProduct && <ModalEditProduct />}
        {!closedModalDeleteProduct &&
          !closedModalCreateProduct &&
          !closedModalEditProduct && (
            <DashboardStyled>
              {products.map((elem, index) => (
                <Card key={index} product={elem} />
              ))}
            </DashboardStyled>
          )}
      </DivStyled>
    </>
  );
};

export default Dashboard;

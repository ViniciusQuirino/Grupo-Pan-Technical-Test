import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { DashboardStyled, DivStyled } from "./styled";
import Header from "../../components/Header";
import ModalCreateProduct from "../../components/ModalCreateProduct";
import { ProductContext } from "../../contexts/ProductContext";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import ModalEditProduct from "../../components/ModalEditProduct";
import { VerifyEmail } from "../../components/VerifyEmail";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const {
    closedModalCreateProduct,
    products,
    closedModalDeleteProduct,
    closedModalEditProduct,
  } = useContext(ProductContext);

  const { checkingVerifiedEmailBoolean, verifyEmail } = useContext(UserContext);
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const tokenLocalStorage = localStorage.getItem("@GrupoPan:token");
  const hasVerifyEmail = location.pathname.includes("verify-email");

  const { token } = useParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarComponente(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  if (hasVerifyEmail) {
    useEffect(() => {
      verifyEmail(token);
    }, []);
  }

  return (
    <>
      <Header />

      {!checkingVerifiedEmailBoolean &&
        tokenLocalStorage &&
        mostrarComponente && <VerifyEmail />}

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

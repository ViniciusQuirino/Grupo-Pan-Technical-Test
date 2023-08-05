import React, { useContext, useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import { DashboardStyled, DivStyled } from "./styled";
import ModalCreateProduct from "../../components/ModalCreateProduct";
import { ProductContext } from "../../contexts/ProductContext";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import ModalEditProduct from "../../components/ModalEditProduct";
import { VerifyEmail } from "../../components/VerifyEmail";
import { UserContext } from "../../contexts/UserContext";
import Header from "../../components/Header";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import placeholder from "../../../public/placeholder.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const {
    closedModalCreateProduct,
    products,
    closedModalDeleteProduct,
    closedModalEditProduct,
    placeholderCard,
  } = useContext(ProductContext);

  const { checkingVerifiedEmailBoolean } = useContext(UserContext);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  console.log(checkingVerifiedEmailBoolean)
  const tokenLocalStorage = localStorage.getItem("@GrupoPan:token");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarComponente(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Header />

      {!checkingVerifiedEmailBoolean &&
        tokenLocalStorage &&
        mostrarComponente && <VerifyEmail />}

      {placeholderCard && (
        <DivStyled>
          {closedModalDeleteProduct && <ModalDeleteProduct />}
          {closedModalCreateProduct && <ModalCreateProduct />}
          {closedModalEditProduct && <ModalEditProduct />}
          {!closedModalDeleteProduct &&
            !closedModalCreateProduct &&
            !closedModalEditProduct && (
              <DashboardStyled>
                {products.map((elem, index) => (
                  <CardComponent key={index} product={elem} />
                ))}
              </DashboardStyled>
            )}
        </DivStyled>
      )}

      {!placeholderCard && (
        <DivStyled>
          {Array.from({ length: 12 }).map((_, index) => (
            <Card
              key={index}
              style={{ width: "14rem", border: "1px solid var(--grey-1)" }}
            >
              <Card.Img variant="top" src={placeholder} />
              <Card.Body style={{ backgroundColor: "var(--grey-1)" }}>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} />{" "}
                </Placeholder>
                {/* <Placeholder.Button variant="primary" xs={6} /> */}
              </Card.Body>
            </Card>
          ))}
        </DivStyled>
      )}
    </>
  );
};

export default Dashboard;

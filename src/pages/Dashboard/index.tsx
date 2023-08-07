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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const tokenLocalStorage = localStorage.getItem("@GrupoPan:token");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarComponente(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpe o evento de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      {!checkingVerifiedEmailBoolean &&
        tokenLocalStorage &&
        mostrarComponente && <VerifyEmail />}

      {closedModalCreateProduct && <ModalCreateProduct />}
      {closedModalDeleteProduct && <ModalDeleteProduct />}
      {closedModalEditProduct && <ModalEditProduct />}
      {placeholderCard && windowWidth > 768 && (
        <DivStyled>
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

      {placeholderCard && windowWidth <= 768 && (
        <DivStyled>
          {!closedModalDeleteProduct &&
            !closedModalCreateProduct &&
            !closedModalEditProduct && (
              <DashboardStyled>
                {products
                  .slice(0, Math.ceil(products.length / 2))
                  .map((elem, index) => (
                    <CardComponent key={index} product={elem} />
                  ))}
              </DashboardStyled>
            )}
        </DivStyled>
      )}

      {placeholderCard && windowWidth <= 768 && (
        <DivStyled>
         
          {!closedModalDeleteProduct &&
            !closedModalCreateProduct &&
            !closedModalEditProduct && (
              <DashboardStyled>
                {products
                  .slice(Math.ceil(products.length / 2), products.length)
                  .map((elem, index) => (
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

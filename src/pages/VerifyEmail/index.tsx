import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";
import { Container } from "./styled";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const VerifyEmailPage = () => {
  const hasVerifyEmail = location.pathname.includes("verify-email");

  const { token } = useParams();

  const { checkingVerifiedEmailBoolean, verifyEmail } = useContext(UserContext);

  if (hasVerifyEmail && token) {
    useEffect(() => {
      verifyEmail(token);
    }, []);
  }

  return (
    <>
      <Header />
      {checkingVerifiedEmailBoolean && (
        <Container>
          <HiOutlineHandThumbUp className="positive" />
          <p>EMAIL VERIFICADO!</p>
          <Link to="/">Dashboard</Link>
        </Container>
      )}
      {!checkingVerifiedEmailBoolean && (
        <Container>
          <HiOutlineHandThumbDown className="negative" />
          <p>ALGO DEU ERRADO NA VERIFICAÇÃO DO EMAIL!</p>
          <Link to="/">Dashboard</Link>
        </Container>
      )}
    </>
  );
};

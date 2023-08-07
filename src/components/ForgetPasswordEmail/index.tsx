import React, { useContext } from "react";
import { StyledForgetPasswordEmail } from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForgetPasswordEmail } from "../../validations";
import { UserContext } from "../../contexts/UserContext";
import Header from "../Header";

const ForgetPasswordEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForgetPasswordEmail),
  });

  const { forgetPasswordEmail } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledForgetPasswordEmail>
        <form onSubmit={handleSubmit(forgetPasswordEmail)}>
          <h3>Nos informe seu email</h3>
          <div className="input">
            <label htmlFor="email">E-mail</label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Digite seu email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <button type="submit">Enviar email</button>
        </form>
      </StyledForgetPasswordEmail>
    </>
  );
};

export default ForgetPasswordEmail;

import { useState, ReactNode, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { General } from "./styled";
import { schemaSignup } from "../../validations";
import { UserContext, iFormSignup } from "../../contexts/UserContext";

const Signup = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignup),
  });

  const [passwordOne, setPasswordOne] = useState(false);
  const [passwordTwo, setpasswordTwo] = useState(false);
  const [borderClient, setBorderClient] = useState(false);
  const [borderSeller, setBorderSeller] = useState(false);

  const { registerUser } = useContext(UserContext);

  return (
    <General $borderClient={borderClient} $borderSeller={borderSeller}>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="top">
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa!</span>
        </div>
        <div>
          <label htmlFor="signup-name">Nome</label>
          <input
            {...register("name")}
            type="text"
            id="signup-name"
            placeholder="Digite seu nome"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-email">E-mail</label>
          <input
            {...register("email")}
            type="text"
            id="signup-email"
            placeholder="Digite seu email"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-password">Senha</label>
          <input
            {...register("password")}
            type={passwordOne ? "text" : "password"}
            id="signup-password"
            placeholder="Digite sua senha"
          />
          <BsEyeFill onClick={() => setPasswordOne(!passwordOne)} />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="signup-age">Idade</label>
          <input
            {...register("age")}
            type="text"
            id="signup-age"
            placeholder="Quantos anos você tem ?"
          />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-cpf">CPF</label>
          <input
            {...register("cpf")}
            type="text"
            id="signup-cpf"
            placeholder="Digite o seu CPF"
          />
          <p>{errors.cpf?.message}</p>
        </div>

        <div>
          <label>Tipo de conta</label>
          <div className="type">
            <button
              type="button"
              {...register("type")}
              value="cliente"
              onClick={() => {
                setBorderClient(true);
                setBorderSeller(false);
              }}
            >
              CLIENTE
            </button>
            <button
              type="button"
              {...register("type")}
              value="vendedor"
              onClick={() => {
                setBorderSeller(true);
                setBorderClient(false);
              }}
            >
              VENDEDOR
            </button>
          </div>
          <p>{errors.type?.message}</p>
        </div>

        <button type="submit" className="register">
          CADASTRAR
        </button>
      </form>
    </General>
  );
};

export default Signup;

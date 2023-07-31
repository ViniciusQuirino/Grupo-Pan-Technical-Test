import { useState, useContext, ReactNode } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/index";
import { BsEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Container from "./styled";
import { UserContext } from "../../contexts/UserContext";

interface iLoginProps {
  children: ReactNode;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const [password, setPassword] = useState(false);

  const { signInUser } = useContext(UserContext);

  return (
    <Container>
      <form onSubmit={handleSubmit(signInUser)}>
        <h3>Conecte-se</h3>
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
        <div className="input">
          <label htmlFor="senha">Senha</label>
          <input
            {...register("password")}
            type={password ? "text" : "password"}
            id="senha"
            placeholder="Digite sua senha"
          />
          <BsEyeFill onClick={() => setPassword(!password)} />
          <p>{errors.password?.message}</p>
          <Link to='/forget-password' className="forget-password">Esqueci minha senha</Link>
        </div>
        <button type="submit">Entrar</button>
        <div className="bottom">
          <Link to="/signup" className="link">
            Ainda não possui uma conta?
          </Link>
          <Link to="/signup" className="register">
            Cadastre-se
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default Login;

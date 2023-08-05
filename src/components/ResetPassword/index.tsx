import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResetPassword } from "../../validations";
import { StyledResetPassword } from "./styled";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaResetPassword),
  });

  const { resetPassword } = useContext(UserContext);
  const { token } = useParams();

  const [passwordOne, setPasswordOne] = useState(false);
  const [passwordTwo, setPasswordTwo] = useState(false);

  function handle(data) {
    resetPassword(data, token);
  }

  return (
    <StyledResetPassword>
      <form onSubmit={handleSubmit(handle)}>
        <h3>Digite sua nova senha</h3>
        <div className="input">
          <div>
            <label htmlFor="email">Senha</label>
            <input
              {...register("password")}
              type={passwordOne ? "text" : "password"}
              id="email"
              placeholder="Digite sua senha"
            />
            <BsEyeFill onClick={() => setPasswordOne(!passwordOne)} />
            <p>{errors.password?.message}</p>
          </div>
          <div>
            <label htmlFor="email">Confirmação da senha</label>
            <input
              {...register("confirmPassword")}
              type={passwordTwo ? "text" : "password"}
              id="email"
              placeholder="Confirme a senha"
            />
            <BsEyeFill onClick={() => setPasswordTwo(!passwordTwo)} />
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>

        <button type="submit">Mudar a senha</button>
      </form>
    </StyledResetPassword>
  );
};

export default ResetPassword;

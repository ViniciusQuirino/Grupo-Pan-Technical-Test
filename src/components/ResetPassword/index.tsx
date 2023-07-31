import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResetPassword } from "../../validations";
import { StyledResetPassword } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";

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
  
  function handle(data) {
    resetPassword(data, token);
  }

  return (
    <StyledResetPassword>
      <form onSubmit={handleSubmit(handle)}>
        <h3>Digite sua nova senha</h3>
        <div className="input">
          <label htmlFor="email">Senha</label>
          <input
            {...register("password")}
            type="text"
            id="email"
            placeholder="Digite sua senha"
          />
          <p>{errors.password?.message}</p>
          <label htmlFor="email">Confirmação da senha</label>
          <input
            {...register("confirmPassword")}
            type="text"
            id="email"
            placeholder="Confirme a senha"
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit">Mudar a senha</button>
      </form>
    </StyledResetPassword>
  );
};

export default ResetPassword;

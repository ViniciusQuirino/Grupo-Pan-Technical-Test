import React, { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { BsSignTurnLeftFill } from "react-icons/bs";

interface iProvidersProps {
  children: ReactNode;
}

export interface iFormSignup {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  age?: string;
  cpf?: string;
  type?: string;
}

interface iUserContext {
  signInUser: (data: iFormLogin) => void;
  registerUser: (data: iFormSignup) => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  checkingVerifiedEmailBoolean: boolean;
  setCheckingVerifiedEmailBoolean: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  verifyEmail: (tokenEmail: string) => void;
  forgetPasswordEmail: (data: iFormSignup) => void;
  resetPassword: (data, token) => Promise<void>;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [checkingVerifiedEmailBoolean, setCheckingVerifiedEmailBoolean] =
    useState<boolean>(false);

  const userid = localStorage.getItem("@GrupoPan:userid");
  const token = localStorage.getItem("@GrupoPan:token");

  const navigate = useNavigate();
  useEffect(() => {
    if (userid && token) {
      checkingVerifiedEmail();
    }

    async function checkingVerifiedEmail(): Promise<void> {
      setGlobalLoading(true);
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get(`/auth/user/${userid}`);

        if (response.data.email_verified == 1) {
          setCheckingVerifiedEmailBoolean(true);
        } else {
          setCheckingVerifiedEmailBoolean(false);
        }
      } catch (error) {
        console.log(error.response.data.errors);
        if (error.response.data.errors == "Token expirado") {
          localStorage.removeItem("@GrupoPan:userid");
          localStorage.removeItem("@GrupoPan:token");
        }
        toast.error(error.response.data.errors, {
          theme: "dark",
          toastId: 1,
        });
      } finally {
        setGlobalLoading(false);
      }
    }
  }, []);

  async function verifyEmail(tokenEmail): Promise<void> {
    try {
      const response = await api.get(`/verify-email/${tokenEmail}`);

      if (response.data.email_verified) {
        setCheckingVerifiedEmailBoolean(true);
      } else {
        setCheckingVerifiedEmailBoolean(false);
      }

      toast.success("Email verificado com sucesso!", {
        theme: "dark",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
        toastId: 1,
      });
    }
  }

  async function forgetPasswordEmail(data): Promise<void> {
    setGlobalLoading(true);
    try {
      api.post("/forget-password/email", data);
      toast.success("Email para recuperação de senha enviado!", {
        theme: "dark",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
        toastId: 1,
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  async function resetPassword(data, token): Promise<void> {
    setGlobalLoading(true);
    try {
      api.post(`/forget-password/reset/${token}`, data);
      toast.success("Senha resetada com sucesso", {
        theme: "dark",
        autoClose: 3000,
      });
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
        toastId: 1,
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  async function signInUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await api.post("/login", data);
      navigate(`/`);

      localStorage.setItem("@GrupoPan:token", response.data.token);
      localStorage.setItem("@GrupoPan:userid", response.data.user.id);

      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      const responseTwo = await api.get(`/auth/user/${response.data.user.id}`);

      if (responseTwo.data.email_verified == 1) {
        setCheckingVerifiedEmailBoolean(true);
      } else {
        setCheckingVerifiedEmailBoolean(false);
      }
      toast.success("Login feito com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error("Email ou senha invalido!", {
        theme: "dark",
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  const registerUser = async (data: iFormSignup) => {
    try {
      await api.post("/users", data);
      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
        autoClose: 6000,
        toastId: 1,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        signInUser,
        registerUser,
        globalLoading,
        setGlobalLoading,
        checkingVerifiedEmailBoolean,
        setCheckingVerifiedEmailBoolean,
        verifyEmail,
        forgetPasswordEmail,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;

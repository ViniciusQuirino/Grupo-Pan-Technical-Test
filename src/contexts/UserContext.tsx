import React, { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

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
}

export interface iFormLogin {
  email: string;
  password: string;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  async function signInUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await api.post("/login", data);
      navigate(`/`);

      localStorage.setItem("@GrupoPan:token", response.data.token);
      localStorage.setItem("@GrupoPan:userid", response.data.user.id);
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
      toast.error("Esse usuário já existe!", {
        theme: "dark",
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;

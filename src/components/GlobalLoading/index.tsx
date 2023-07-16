import { UserContext } from "../../contexts/UserContext";
import { useContext, ReactNode } from "react";
import { LoadingStyled } from "./styled";

interface iGlobalLoadingProps {
  children: ReactNode;
}

const GlobalLoading = ({ children }: iGlobalLoadingProps) => {
  const { globalLoading } = useContext(UserContext);

  return <>{globalLoading ? <LoadingStyled /> : <>{children}</>}</>;
};

export default GlobalLoading;

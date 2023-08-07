import { useContext, useState } from "react";
import { HeaderStyled } from "./styled";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { setClosedModalCreateProduct } = useContext(ProductContext);
  const { userData } = useContext(UserContext);

  const token = localStorage.getItem("@GrupoPan:token");

  return (
    <HeaderStyled>
      <div className="container">
        <h2>Seja bem vindo {userData.name} !!!</h2>
        <ul>
          {token && (
            <>
              {userData.type == "VENDEDOR" && (
                <li>
                  <button onClick={() => setClosedModalCreateProduct(true)}>
                    Criar Produto
                  </button>
                </li>
              )}

              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("@GrupoPan:token");
                    localStorage.removeItem("@GrupoPan:userid");
                    window.location.reload();
                  }}
                >
                  Sair
                </button>
              </li>
            </>
          )}
          {!token && (
            <>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Cadastrar</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;

import { useContext, useState } from "react";
import { HeaderStyled } from "./styled";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { toast } from "react-toastify";

const Header = () => {
  const { setClosedModalCreateProduct } = useContext(ProductContext);

  const token = localStorage.getItem("@GrupoPan:token");

  return (
    <HeaderStyled>
      <div className="container">
        <ul>
          {token && (
            <>
              <li>
                <button onClick={() => setClosedModalCreateProduct(true)}>
                  Criar Produto
                </button>
              </li>

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
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/signup">
                  Cadastrar
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;

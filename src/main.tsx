import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Reset from "./reset";
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts/UserContext";
import GlobalLoading from "./components/GlobalLoading";
import ProductProviders from "./contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ProductProviders>
          <GlobalLoading>
            <Reset />
            <App />
          </GlobalLoading>
        </ProductProviders>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

interface iProvidersProps {
  children: ReactNode;
}

export interface iProduct {
  id?: string;
  name?: string;
  description?: string;
  voltage?: string;
  brand?: string;
  image?: string;
  price?: string;
}

interface iProductContext {
  closedModalCreateProduct: boolean;
  setClosedModalCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
  createProduct: (data: iProduct) => Promise<void>;
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  closedModalDeleteProduct: boolean;
  setClosedModalDeleteProduct: React.Dispatch<React.SetStateAction<boolean>>;
  idProduct: string;
  setIdProduct: React.Dispatch<React.SetStateAction<string>>;
  deleteProduct: (productId: string) => Promise<void>;
  closedModalEditProduct: boolean;
  setClosedModalEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
  editProduct: (data: iProduct) => Promise<void>;
  editObjProduct: iProduct;
  setEditObjProduct: React.Dispatch<React.SetStateAction<iProduct>>;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export const ProductContext = createContext({} as iProductContext);

const ProductProviders = ({ children }: iProvidersProps) => {
  const [closedModalCreateProduct, setClosedModalCreateProduct] =
    useState<boolean>(false);
  const [closedModalDeleteProduct, setClosedModalDeleteProduct] =
    useState<boolean>(false);
  const [closedModalEditProduct, setClosedModalEditProduct] =
    useState<boolean>(false);
  const [idProduct, setIdProduct] = useState<string>("");
  const [editObjProduct, setEditObjProduct] = useState<iProduct>({});

  const [products, setProducts] = useState<iProduct[]>([]);

  const { setGlobalLoading } = useContext(UserContext);
  const token = localStorage.getItem("@GrupoPan:token");

  async function createProduct(data: iProduct): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post("/auth/product", data);
      setProducts([...products, response.data]);
      setClosedModalCreateProduct(false);
      toast.success("Produto criado com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  useEffect(() => {
    async function listAllProducts(): Promise<void> {
      setGlobalLoading(true);
      try {
        const response = await api.get("/products");
        function removeBackslashes(array) {
          return array.map((product) => {
            product.image = product.image.replace(/\\/g, "");
            return product;
          });
        }

        const productsWithoutBackslashes = removeBackslashes(response.data);

        setProducts(productsWithoutBackslashes);
      } catch (error) {
        toast.error(error.response.data.errors, {
          theme: "dark",
        });
      } finally {
        setGlobalLoading(false);
      }
    }
    listAllProducts();
  }, []);

  async function editProduct(data: iProduct): Promise<void> {
    setGlobalLoading(true);
    try {
      if (Object.keys(data).length != 0) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.patch(
          `/auth/product/${editObjProduct.id}`,
          data
        );

        toast.success("Produto editado com sucesso!", {
          theme: "dark",
        });

        setClosedModalEditProduct(false);
        const filter = products.filter((elem) => elem.id !== editObjProduct.id);
        setProducts([response.data, ...filter]);
      }
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  async function deleteProduct(productId: string): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete(`/auth/product/${productId}`);
      const filter = products.filter((elem) => elem.id !== productId);
      setProducts(filter);

      toast.success("Produto deletado com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error(error.response.data.errors, {
        theme: "dark",
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        setClosedModalCreateProduct,
        closedModalCreateProduct,
        createProduct,
        products,
        setProducts,
        closedModalDeleteProduct,
        setClosedModalDeleteProduct,
        idProduct,
        setIdProduct,
        deleteProduct,
        closedModalEditProduct,
        setClosedModalEditProduct,
        editProduct,
        editObjProduct,
        setEditObjProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProviders;

import { useContext, useEffect, useRef } from "react";
import Modal from "../Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProductContext, iProduct } from "../../contexts/ProductContext";
import { schemaEditProduct } from "../../validations";
import { EditProductStyled } from "./styled";

const ModalEditProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEditProduct),
  });

  const { setClosedModalEditProduct, editProduct, editObjProduct } =
    useContext(ProductContext);

  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();
  const Window: any = window;

  useEffect(() => {
    cloudinaryRef.current = Window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "ddwk2vst5",
        uploadPreset: "gzfjsim6",
      },
      function (err, result) {
        if (result.event == "success") {
          setValue("image", result.info.url);
        }
      }
    );
  }, []);

  return (
    <Modal>
      <EditProductStyled>
        <h1>Editar Produto</h1>
        <p className="closed" onClick={() => setClosedModalEditProduct(false)}>
          X
        </p>
        <form onSubmit={handleSubmit(editProduct)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Nome do produto"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <input
              {...register("description")}
              type="text"
              id="description"
              placeholder="Descrição do produto"
            />
            <p>{errors.description?.message}</p>
          </div>
          <div>
            <label htmlFor="voltage">Voltagem</label>
            <input
              {...register("voltage")}
              type="text"
              id="voltage"
              placeholder="Voltagem do produto"
            />
            <p>{errors.voltage?.message}</p>
          </div>
          <div>
            <label htmlFor="brand">Marca</label>
            <input
              {...register("brand")}
              type="text"
              id="brand"
              placeholder="Marca do produto"
            />
            <p>{errors.brand?.message}</p>
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              {...register("price")}
              type="text"
              id="price"
              placeholder="Preço do produto"
            />
            <p>{errors.price?.message}</p>
          </div>
          <button
            className="upload"
            type="button"
            onClick={() => widgetRef.current.open()}
          >
            Upload da imagem
          </button>
          <p className="error-image">{errors.image?.message}</p>
          <button type="submit">EDITAR PRODUTO</button>
        </form>
      </EditProductStyled>
    </Modal>
  );
};

export default ModalEditProduct;

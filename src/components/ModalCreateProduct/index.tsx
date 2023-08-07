import { useContext, useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import { CreateProductStyled } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../contexts/ProductContext";
import { schemaCreateProduct } from "../../validations";

const ModalCreateProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCreateProduct),
  });

  const { setClosedModalCreateProduct, createProduct } =
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
      <CreateProductStyled>
        <h1>Criar Produto</h1>
        <p
          className="closed"
          onClick={() => setClosedModalCreateProduct(false)}
        >
          X
        </p>
        <form onSubmit={handleSubmit(createProduct)}>
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
          <button type="submit">CADASTRAR PRODUTO</button>
        </form>
      </CreateProductStyled>
    </Modal>
  );
};

export default ModalCreateProduct;

import * as yup from "yup";

export const schemaSignup = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Preencher o email corretamente"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/.{8,}/, "Deve ter no mínimo 8 digitos"),
  age: yup.string().required("Necessário preencher o campo"),
  cpf: yup
    .string()
    .length(11, "CPF deve conter 11 digitos numéricos")
    .matches(/^[0-9]{11}$/),
  type: yup.string().required("Tipo de conta é obrigatório"),
});

export const schemaLogin = yup.object({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const schemaCreateProduct = yup.object({
  name: yup.string().required("Nome obrigatório"),
  description: yup
    .string()
    .required("Descrição é obrigatório")
    .min(80, "A descrição deve ter no mínimo 80 caracteres"),
  voltage: yup
    .string()
    .required("Voltagem é obrigatório")
    .oneOf(
      ["127v", "110v", "220v"],
      "Por favor, escolha uma voltagem válida (127v, 110v ou 220v)"
    ),
  brand: yup
    .string()
    .required("Marca é obrigatória")
    .oneOf(
      ["Electrolux", "Fischer", "Brastemp", "Samsung", "LG"],
      "Por favor, escolha uma dessas marcas: Electrolux, Fischer, Brastemp, Samsung ,LG"
    ),
  price: yup
    .string()
    .matches(/^[0-9]+$/, "O preço deve conter apenas números")
    .required("Preço é obrigatório"),
  image: yup.string().required("Imagem é obrigatória").url(),
});

export const schemaEditProduct = yup.object({
  name: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup.string().required(),
  }),
  description: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .min(80, "A descrição deve ter no mínimo 80 caracteres")
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup
      .string()
      .min(80, "A descrição deve ter no mínimo 80 caracteres")
      .required(),
  }),
  voltage: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .oneOf(
        ["127v", "110v", "220v"],
        "Por favor, escolha uma voltagem válida (127v, 110v ou 220v)"
      )
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup
      .string()
      .oneOf(
        ["127v", "110v", "220v"],
        "Por favor, escolha uma voltagem válida (127v, 110v ou 220v)"
      )
      .required(),
  }),
  brand: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .oneOf(
        ["Electrolux", "Fischer", "Brastemp", "Samsung", "LG"],
        "Por favor, escolha uma dessas marcas: Electrolux, Fischer, Brastemp, Samsung ,LG"
      )
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup
      .string()
      .oneOf(
        ["Electrolux", "Fischer", "Brastemp", "Samsung", "LG"],
        "Por favor, escolha uma dessas marcas: Electrolux, Fischer, Brastemp, Samsung ,LG"
      )
      .required(),
  }),
  price: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .matches(/^[0-9]+$/, "O preço deve conter apenas números")
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup
      .string()
      .matches(/^[0-9]+$/, "O preço deve conter apenas números")
      .required(),
  }),
  image: yup.string().when({
    is: (val) => !val,
    then: yup
      .string()
      .url()
      .transform(() => undefined)
      .notRequired(),
    otherwise: yup.string().url().required(),
  }),
});

export const schemaForgetPasswordEmail = yup.object({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Preencher o email corretamente"),
});

export const schemaResetPassword = yup.object({
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/.{8,}/, "Deve ter no mínimo 8 dígitos"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória!")
    .oneOf([yup.ref('password')], "A confirmação de senha deve ser igual à senha digitada."),
});


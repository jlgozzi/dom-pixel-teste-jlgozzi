import * as yup from "yup";

export const schemaCreateProduct = yup.object().shape({
  name: yup.string().required("Digite um nome"),
  category: yup.string().required("Digite uma categoria"),
  price: yup.number().required("Digite um preço").typeError("Digite um preço"),
});

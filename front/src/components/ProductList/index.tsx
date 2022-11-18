import { useContext } from "react";
import { useAppContext } from "../../context/appContext";
import ProductCard from "../ProductCard";
import { ListHeader } from "./style";

const ProductList = () => {
  const { products } = useAppContext();

  console.log(products);

  return (
    <>
      {/* <h2>Produtos</h2> */}
      <ListHeader>
        <span>Nome</span>
        <span>Categoria</span>
        <span>Preço</span>
        <span>Data de criação</span>
        <span>Ações</span>
      </ListHeader>
      <ul>
        <ProductCard />
      </ul>
    </>
  );
};

export default ProductList;

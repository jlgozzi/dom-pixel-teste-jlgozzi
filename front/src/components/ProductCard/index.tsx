import { StyledLi } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const ProductCard = () => {
  return (
    <StyledLi>
      <span>Nome</span>
      <span>Categoria</span>
      <span>Preço</span>
      <span>Data de criação</span>
      <div>
        <BsTrashFill />
        <AiFillEdit />
      </div>
    </StyledLi>
  );
};

export default ProductCard;

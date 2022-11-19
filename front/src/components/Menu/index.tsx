import { useAppContext } from "../../context/appContext";
import { StyledMenu } from "./style";

const Menu = () => {
  const { setModalIsOpen, setModalName } = useAppContext();
  return (
    <StyledMenu>
      <h3>Produtos</h3>
      <button
        onClick={() => {
          setModalName("Adicionar Produto");
          setModalIsOpen(true);
        }}
      >
        Adicionar produto
      </button>
    </StyledMenu>
  );
};

export default Menu;

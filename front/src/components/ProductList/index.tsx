import { useAppContext } from "../../context/appContext";
import { ListHeader, StyledLi, ProductListContainer } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const ProductList = () => {
  const {
    products,
    setDeleteModalIsOpen,
    setModalIsOpen,
    setProductId,
    setModalName,
  } = useAppContext();

  console.log(products);

  return (
    <ProductListContainer>
      <ListHeader>
        <span>Nome</span>
        <span>Categoria</span>
        <span>Preço</span>
        <span>Data de criação</span>
        <span>Ações</span>
      </ListHeader>

      <ul>
        {products.length > 0 ? (
          products.map((product, index) => {
            const { name, price, category, created_at, id } = product;
            return (
              <StyledLi key={index}>
                <span>{name}</span>
                <span>{category}</span>
                <span>R$ {price.toFixed(2)}</span>
                <span>
                  {created_at
                    .split("T")[0]
                    .replaceAll("-", "/")
                    .split("/")
                    .reverse()
                    .join("/")}
                </span>
                <div>
                  <BsTrashFill
                    className="button-delete"
                    onClick={() => {
                      setDeleteModalIsOpen(true);
                      setProductId(id);
                    }}
                  />
                  <AiFillEdit
                    className="button-edit"
                    onClick={() => {
                      setModalName("Editar");
                      setModalIsOpen(true);
                      setProductId(id);
                    }}
                  />
                </div>
              </StyledLi>
            );
          })
        ) : (
          <h2 className="empty-products">Sem produtos</h2>
        )}
      </ul>
    </ProductListContainer>
  );
};

export default ProductList;

import { useAppContext } from "../../context/appContext";
import { DeleteModalContainer } from "./style";

const DeleteModal = () => {
  const { deleteModalIsOpen, setDeleteModalIsOpen, handleDelete } =
    useAppContext();

  return deleteModalIsOpen ? (
    <DeleteModalContainer>
      <div>
        <span>Deseja excluir o produto? Essa ação é irreversível.</span>
        <div>
          <button
            className="button-confirm"
            onClick={() => {
              handleDelete();
              setDeleteModalIsOpen(false);
            }}
          >
            Confirmar
          </button>
          <button
            className="button-cancel"
            onClick={() => setDeleteModalIsOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </DeleteModalContainer>
  ) : (
    <></>
  );
};

export default DeleteModal;

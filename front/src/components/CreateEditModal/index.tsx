import { useForm } from "react-hook-form";
import { IProduct, useAppContext } from "../../context/appContext";
import Input from "../Input";
import { EditModalContainer, FormStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateProduct } from "../../schemas/formSchemas";
import { IoMdArrowRoundBack } from "react-icons/io";

const CreateEditModal = () => {
  const { modalIsOpen, setModalIsOpen, handleEdit, handleCreate, modalName } =
    useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(schemaCreateProduct),
  });

  return modalIsOpen ? (
    <EditModalContainer>
      <div>
        <IoMdArrowRoundBack
          className="button-back"
          onClick={() => setModalIsOpen(false)}
        />
        <h3>{modalName}</h3>
        <FormStyled
          onSubmit={
            modalName === "Editar"
              ? handleSubmit(handleEdit)
              : handleSubmit(handleCreate)
          }
        >
          <Input
            type={"text"}
            id={"name"}
            register={register}
            error={errors?.name}
          >
            Nome
          </Input>

          <Input
            type={"text"}
            id={"category"}
            register={register}
            error={errors?.category}
          >
            Categoria
          </Input>

          <Input
            type={"number"}
            id={"price"}
            register={register}
            error={errors?.price}
          >
            Preço
          </Input>
          <button type="submit" className="button-edit">
            {modalName === "Editar" ? <>Editar</> : <>Adicionar</>}
          </button>
        </FormStyled>
      </div>
    </EditModalContainer>
  ) : (
    <></>
  );
};

export default CreateEditModal;

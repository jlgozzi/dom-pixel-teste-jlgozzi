import {
  useContext,
  createContext,
  ReactElement,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

import { toast } from "react-toastify";

interface IChildren {
  children: ReactElement | ReactElement[];
}

interface IAppContext {
  products: IProduct[];
  deleteModalIsOpen: boolean;
  setDeleteModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProductId: React.Dispatch<React.SetStateAction<string>>;
  handleDelete: () => Promise<void>;
  handleEdit: (body: IProduct) => Promise<void>;
  handleCreate: (body: IProduct) => Promise<void>;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalName: string;
  setModalName: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProduct {
  name: string;
  price: number;
  category: string;
  created_at: any;
  id: string;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productId, setProductId] = useState<string>("");
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(`/products`);
        setProducts(() => response.data.products);

        setDeleteModalIsOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, []);

  async function handleDelete() {
    try {
      const deleteProduct = await api.delete(`/products/${productId}`);

      const response = await api.get(`/products`);
      setProducts(() => response.data.products);

      toast.success("Produto deletado!");
    } catch (err) {
      console.log(err);
      toast.error("Não foi possível deletar o produto.");
    }
  }

  async function handleEdit(body: IProduct) {
    try {
      const editProduct = await api.put(`/products/${productId}`, body);

      const response = await api.get(`/products`);
      setProducts(() => response.data.products);

      setModalIsOpen(false);

      toast.success("Produto editado!");
    } catch (err) {
      console.log(err);
      toast.error("Não foi possível editar o produto.");
    }
  }
  async function handleCreate(body: IProduct) {
    try {
      const createProduct = await api.post(`/products`, body);

      const response = await api.get(`/products`);
      setProducts(() => response.data.products);

      setModalIsOpen(false);

      toast.success("Produto adicionado!");
    } catch (err) {
      console.log(err);
      toast.error("Não foi possível adicionar o produto.");
    }
  }

  return (
    <AppContext.Provider
      value={{
        products,
        deleteModalIsOpen,
        setDeleteModalIsOpen,
        setProductId,
        handleDelete,
        handleCreate,
        handleEdit,
        modalIsOpen,
        setModalIsOpen,
        modalName,
        setModalName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext(): IAppContext {
  const context = useContext(AppContext);

  return context;
}

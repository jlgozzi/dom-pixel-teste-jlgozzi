import {
  useContext,
  createContext,
  ReactElement,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

interface IChildren {
  children: ReactElement | ReactElement[];
}

interface IAppContext {
  products: any;
}

interface IProduct {
  name: string;
  price: number;
  category: string;
  created_at: Date;
  id: string;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<any>("[]");

  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       const response = await api.get(`/products`);
  //       setProducts(response.data);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   loadData();
  // }, []);

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

export function useAppContext(): IAppContext {
  const context = useContext(AppContext);

  return context;
}

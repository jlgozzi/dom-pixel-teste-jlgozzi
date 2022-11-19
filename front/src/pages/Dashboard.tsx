import CreateEditModal from "../components/CreateEditModal";
import DeleteModal from "../components/DeleteModal";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductList from "../components/ProductList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <Menu />
        <ProductList />
      </main>

      <DeleteModal />
      <CreateEditModal />
    </>
  );
};

export default Dashboard;

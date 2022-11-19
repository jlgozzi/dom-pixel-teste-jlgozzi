import React from "react";

import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./Global";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <GlobalStyle />
        <Dashboard />
        <ToastContainer />
      </AppProvider>
    </div>
  );
}

export default App;

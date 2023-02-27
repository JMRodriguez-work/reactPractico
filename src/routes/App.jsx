import React from "react";
import { Layout } from "../containers/index";
import { Checkout, CreateAccount, Home, Login, MyAccount, Orders, SendEmail } from "../pages/index";
import { NotFound, NewPassword, RecoveryPassword } from "../pages/index";
import "../styles/global.css";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {

  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

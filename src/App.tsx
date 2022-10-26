import React from "react";
import Header from "./components/Header/Header";
import SignUp from "./components/Auth/SignUp";
import ForgetPass from "./components/Auth/ForgetPass";
import DisplayPage from "./components/Body/DisplayPage";
import Verified from "./components/Auth/Verified";
import AccountDetail from "./components/Body/AccountDetail";
import Home from "./components/Home/Home";
import {BrowserRouter, Routes, Router, Route} from "react-router-dom"

const App: React.FC = (): any => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/history" element={ <DisplayPage />} />
          <Route path="/verified" element={ <Verified />} />
          <Route path="/accountDetail" element={ <AccountDetail />} />
          <Route path="/signUp" element={ <SignUp />} />
          <Route path="/forgetPass" element={ <ForgetPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

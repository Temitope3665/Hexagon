import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import DashboardHome from "../pages";
import VerificationHome from "../pages/verification";
import InformationHome from "../pages/information";

const AppRoute = () => {

  return render(
    <BrowserRouter>
     <ChakraProvider theme={theme} resetCSS>
      <Routes>
        <Route index path="/" element={<DashboardHome />} />
        <Route index path="/verification" element={<VerificationHome />} />
        <Route index path="/information" element={<InformationHome />} />
      </Routes>
     </ChakraProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default AppRoute;

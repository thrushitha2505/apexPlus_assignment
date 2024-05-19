import { Box } from "@chakra-ui/react";
import "./App.css";
import Root from "./Pages/Root";

import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddScenario from "./Components/AddScenario";
import AllScenarios from "./Components/AllScenarios";
import AddVehicles from "./Components/AddVehicles";
import ResponseModal from "./Components/ResponseModal";

export const BASE_URL = `http://localhost:7000`;

export const AppContext = createContext();

function App() {
  const [modalPopup, setModalPopup] = useState(null);

  return (
    <AppContext.Provider value={{ modalPopup, setModalPopup }}>
      <Box height={"100vh"} width="100%">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Dashboard />} />
              <Route path="add-scenario" element={<AddScenario />} />
              <Route path="all-scenarios" element={<AllScenarios />} />
              <Route path="add-vehicles" element={<AddVehicles />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {modalPopup ? <ResponseModal /> : null}
      </Box>
    </AppContext.Provider>
  );
}

export default App;

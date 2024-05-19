import { Box } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const Root = () => {
  
  const appContext = useContext(AppContext);
  const { modalPopup, setModalPopup } = appContext;

  return (
    <Box height={"100%"} width="100%" display={"flex"}>
      <Sidebar />
      <Box
        backgroundColor={"black"}
        width={"85%"}
        color={"white"}
        padding={"3rem 5rem"}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;

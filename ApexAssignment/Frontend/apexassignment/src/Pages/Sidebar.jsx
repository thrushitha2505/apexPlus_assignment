import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sideNavList = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "Add Scenario",
    path: "/add-scenario",
  },
  {
    id: 3,
    text: "All Scenarios",
    path: "/all-scenarios",
  },
  {
    id: 4,
    text: "Add Vehicles",
    path: "/add-vehicles",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("Home");

  const handleRedirect = (clickedItem) => {
    setSelectedItem(clickedItem?.text);
    navigate(clickedItem?.path);
  };

  return (
    <Box
      width="15%"
      height={"100%"}
      backgroundColor={"#a7c2d9"}
      padding="5rem 2rem"
      display={"flex"}
      flexDirection={"column"}
      gap={5}
    >
      {sideNavList?.map((each, index) => (
        <Text
          key={`side-nav-${index}`}
          onClick={() => handleRedirect(each)}
          cursor={"pointer"}
          color={selectedItem === each?.text ? "#21b1d1" : ""}
        >
          {each?.text}
        </Text>
      ))}
    </Box>
  );
};

export default Sidebar;

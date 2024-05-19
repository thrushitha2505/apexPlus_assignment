import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const inputsDetails = [
  {
    id: 1,
    label: "Scenarios List",
    inputType: "select",
    placeholder: "Select Scenario",
    name: "scenariosList",
  },

  {
    id: 2,
    label: "Vehicle Name",
    inputType: "text",
    placeholder: "10",
    name: "vehicleName",
  },

  {
    id: 3,
    label: "Speed",
    inputType: "text",
    placeholder: "2",
    name: "speed",
  },

  {
    id: 4,
    label: "Position X",
    inputType: "text",
    placeholder: "10",
    name: "positionX",
  },

  {
    id: 5,
    label: "Position Y",
    inputType: "text",
    placeholder: "10",
    name: "positionY",
  },

  {
    id: 6,
    label: "Direction",
    inputType: "select",
    placeholder: "Select Direction",
    name: "direction",
    optionsList: ["Towards", "Backwards", "Upwards", "Downwards"],
  },
];

const buttonsList = [
  {
    id: "1",
    text: "Add",
    color: "#46a341",
  },

  {
    id: "2",
    text: "Reset",
    color: "#ed8d0e",
  },
  {
    id: "3",
    text: "Go Back",
    color: "#1ca8c7",
  },
];

const AddVehicles = () => {
  const handleChange = (event) => {};

  const handleClick = (clickedButton) => {
    addScenario();
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Text>Vehicle / add</Text>
      <Heading>Add Vehicle</Heading>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        width="100%"
        padding={"3rem"}
        backgroundColor={"#494c4f"}
      >
        {inputsDetails?.map((each, index) => (
          <GridItem key={`add-scenario-${index}`}>
            <Text>{each?.label}</Text>
            <Input
              type={each?.inputType}
              placeholder={each?.placeholder}
              name={each?.name}
              onChange={handleChange}
            />
            {/* {errors && (
            <Box
              w="50%"
              margin={"auto"}
              marginTop={2}
              borderRadius={5}
              textAlign={"center"}
              backgroundColor={"#800a0e"}
            >
              <Text color={"white"}>{errors[each?.name]}</Text>
            </Box>
          )} */}
          </GridItem>
        ))}
      </Grid>

      <Flex alignItems={"center"} gap={5}>
        {buttonsList?.map((each, index) => (
          <Button
            width="8rem"
            key={`buttons-add-scenarion-${index}`}
            color="#ffffff"
            backgroundColor={each?.color}
            onClick={() => handleClick(each)}
          >
            {each?.text}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default AddVehicles;

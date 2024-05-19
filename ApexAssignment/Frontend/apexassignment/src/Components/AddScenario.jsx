import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useContext, useState } from "react";
import { VALIDATION_OBJ } from "../Validation/FormValidationFile";
import { AppContext, BASE_URL } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const inputsDetails = [
  {
    id: 1,
    label: "Scenario Name",
    inputType: "text",
    placeholder: "Test Scenario",
    name: "scenarioName",
  },

  {
    id: 2,
    label: "Scenario Time (seconds)",
    inputType: "text",
    placeholder: "10",
    name: "scenarioTime",
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

const AddScenario = () => {
  const appContext = useContext(AppContext);
  const { modalPopup, setModalPopup } = appContext;

  const navigate = useNavigate();

  const initialScenarioDetails = {
    scenarioName: "",
    scenarioTime: "",
  };

  const [scenarioDetails, setScenarioDetails] = useState(
    initialScenarioDetails
  );

  const [errors, setErrors] = useState({});

  function handleSubmit(payload) {
    let errorsObj = VALIDATION_OBJ(payload);

    if (Object.keys(errorsObj).length) {
      setErrors((prevState) => ({ ...prevState, ...errorsObj }));
    } else {
      setErrors({});
    }
  }

  const addScenario = async () => {
    const config = {
      method: "post",
      url: `${BASE_URL}/api/scenarios`,
      data: scenarioDetails,
    };

    try {
      const result = await axios(config);

      const response = await result?.data;

      console.log(response, "responseee======== add");

      if (response?.status === 200) {
        setModalPopup(response?.message);
        setScenarioDetails(initialScenarioDetails);
      }
    } catch (error) {
      console.log(error, "api error====== add");
    }
  };

  const handleChange = (event) => {
    setScenarioDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
    handleSubmit({ [event.target.name]: event.target.value });
  };

  const handleClick = (clickedButton) => {
    if (clickedButton?.text === "Reset") {
      setScenarioDetails(initialScenarioDetails);
    } else if (clickedButton?.text === "Go Back") {
      navigate("/");
    } else {
      addScenario();
    }
  };

  console.log(errors, "error");

  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Text>Scenario / add</Text>
      <Heading>Add Scenario</Heading>

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
              value={scenarioDetails[each?.name]}
              onChange={handleChange}
            />
            {errors && (
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
            )}
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

export default AddScenario;

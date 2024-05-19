import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

import React, { useEffect, useState } from "react";

import axios from "axios";
import { BASE_URL } from "../App";

const buttonsList = [
  {
    id: "1",
    text: "New Scenario",
    color: "#46a341",
  },

  {
    id: "2",
    text: "Add Vehicle",
    color: "#ed8d0e",
  },
  {
    id: "3",
    text: "Delete All",
    color: "#1ca8c7",
  },
];

const tableHeadersList = [
  "Scenaro id",
  "Scenario Name",
  "Scenario Time",
  "Number of Vehicles",
  "Add Vehicle",
  "Edit",
  "Delete",
];

const tableBody = [];

const AllScenarios = () => {
  const [allScenariosList, setAllScenariosList] = useState([]);

  const getAllScenarios = async () => {
    const config = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${BASE_URL}/api/scenarios`,
    };

    try {
      const result = await axios(config);

      if (result?.status === 200) {
        const response = await result?.data;

        setAllScenariosList(response);
      }
    } catch (error) {
      console.log(error, "api error");
    }
  };

  useEffect(() => {
    getAllScenarios();
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>All Scenarios</Heading>

        <Flex alignItems={"center"} gap={5}>
          {buttonsList?.map((each, index) => (
            <Button
              width="8rem"
              key={`buttons-all-scenarion-${index}`}
              color="#ffffff"
              backgroundColor={each?.color}
              onClick={() => handleClick(each)}
            >
              {each?.text}
            </Button>
          ))}
        </Flex>
      </Flex>

      <TableContainer h="auto" maxH={"30rem"} overflow={"auto"}>
        <Table>
          <Thead bg={"#494c4f"}>
            <Tr>
              {tableHeadersList?.map((each, index) => (
                <Th
                  color={"#ffffff"}
                  key={`all-scenario-table-heading${index}`}
                >
                  {each}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {allScenariosList?.length
              ? allScenariosList?.map((each) => (
                  <Tr key={`${each?.id}`} bg="#bdc5c7" color="black">
                    <Td>{each?.id.slice(0, 5)}</Td>
                    <Td>{each?.scenarioName}</Td>
                    <Td>{each?.scenarioTime}</Td>
                    <Td>0</Td>
                    <Td>{<IoMdAddCircle size={20} />}</Td>
                    <Td>{<MdModeEditOutline size={20} />}</Td>
                    <Td>{<MdDelete size={20} />}</Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllScenarios;

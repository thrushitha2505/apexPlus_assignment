import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

const buttonsList = [
  {
    id: "1",
    text: "Start Simulation",
    color: "#46a341",
  },

  {
    id: "2",
    text: "Stop Simulation",
    color: "#ed8d0e",
  },
];

const tableHeadersList = [
  "Vehicle id",
  "Vehicle Name",
  "Position X",
  "Position Y",
  "Speed",
  "Direction",
  "Edit",
  "Delete",
];

const scenariosOptionsList = ["Test Scenario", "My Scenario"];

const Dashboard = () => {
  const handleClick = (clickedButton) => {};
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Flex flexDirection={"column"} gap={2} w="15rem">
        <Text>Scenario</Text>
        <Select>
          {scenariosOptionsList?.map((each, index) => (
            <option key={`scenarios-options-${index}`}>{each}</option>
          ))}
        </Select>
      </Flex>

      <TableContainer h="auto" maxH={"30rem"} overflow={"auto"}>
        <Table>
          <Thead bg={"#494c4f"}>
            <Tr>
              {tableHeadersList?.map((each, index) => (
                <Th
                  color={"#ffffff"}
                  key={`all-dashboard-table-heading${index}`}
                >
                  {each}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {/* {allScenariosList?.length
            ? allScenariosList?.map((each) => ( */}
            <Tr key={`jjj`} bg="#bdc5c7" color="black">
              <Td>11122</Td>
              <Td>Bus</Td>
              <Td>20</Td>

              <Td>10</Td>
              <Td>10</Td>

              <Td>Towards</Td>
              <Td>{<MdModeEditOutline size={20} />}</Td>
              <Td>{<MdDelete size={20} />}</Td>
            </Tr>
            {/* ))
            : null} */}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justifyContent={"flex-end"} alignItems={"center"} gap={5}>
        {buttonsList?.map((each, index) => (
          <Button
            width="12rem"
            key={`buttons-all-scenarion-${index}`}
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

export default Dashboard;

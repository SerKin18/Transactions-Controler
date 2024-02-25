// @flow
import { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Users from "./Users";
import { IUser } from "./Types";

interface ListItemProps {
  openModal: () => void;
}

const ListItem: FC<ListItemProps> = ({ openModal }) => {
  const userList: IUser[] = [
    {
      id: 1,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 100.0,
    },
    {
      id: 2,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 200.0,
    },
    {
      id: 3,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 300.0,
    },
    {
      id: 1,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 100.0,
    },
    {
      id: 2,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 200.0,
    },
    {
      id: 3,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 300.0,
    },
    {
      id: 1,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 100.0,
    },
    {
      id: 2,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 200.0,
    },
    {
      id: 3,
      name: "Viktor Bulkin",
      status: "Pending",
      type: "Type",
      amount: 300.0,
    },
  ];
  return (
    <>
      <TableContainer mt="50px" border="1px">
        <Table size="sm" variant="striped" colorScheme="gray">
          <TableCaption>PAGINATION</TableCaption>
          <Thead>
            <Tr bg="gray.500" color="white">
              <Th color="white" isNumeric>
                Id
              </Th>
              <Th color="white">Status</Th>
              <Th color="white">Type</Th>
              <Th color="white">Client name</Th>
              <Th color="white" isNumeric>
                Amount
              </Th>
              <Th color="white" textAlign="center">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Users userList={userList} openModal={openModal} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ListItem;

import { FC } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  Stack,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import { ITransactions } from "../types";

interface ListItemProps {
  transactions: ITransactions | null;
  setDeletedItem: (value: ITransactions[number]) => void;
  setEditItem: (value: ITransactions[number]) => void;
}

const ListItem: FC<ListItemProps> = ({
  transactions,
  setDeletedItem,
  setEditItem,
}) => {
  if (!transactions) {
    return (
      <Box mt="20px" textAlign="center">
        Add a transaction file...
      </Box>
    );
  }
  return (
    <>
      <TableContainer mt="5px" border="1px">
        <Table size="sm" variant="striped" colorScheme="gray">
          <Thead>
            <Tr bg="gray.500" color="white">
              <Th color="white" textAlign="center">
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
            {transactions.map((transaction, i) => {
              return (
                <Tr key={i}>
                  <Td textAlign="center">{transaction[0]}</Td>
                  <Td>{transaction[1]}</Td>
                  <Td>{transaction[2]}</Td>
                  <Td>{transaction[3]}</Td>
                  <Td isNumeric>{transaction[4]}</Td>
                  <Td>
                    <Stack direction="row" spacing={4} align="center">
                      <Button
                        colorScheme="cyan"
                        variant="solid"
                        size="sm"
                        onClick={() => setEditItem(transaction)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="blue"
                        variant="solid"
                        size="sm"
                        onClick={() => setDeletedItem(transaction)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ListItem;

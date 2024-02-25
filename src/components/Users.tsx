// @flow
import { FC } from "react";
import { Tr, Td, Button, Stack } from "@chakra-ui/react";
import { IUser } from "./Types";

interface UserListItemProps {
  userList: IUser[];
  openModal: () => void;
}
const Users: FC<UserListItemProps> = ({ userList, openModal }) => {
  return (
    <>
      {userList.map((user, i) => {
        return (
          <Tr key={i}>
            <Td isNumeric>1</Td>
            <Td>{user.status}</Td>
            <Td>{user.type}</Td>
            <Td>{user.name}</Td>
            <Td isNumeric>{user.amount}</Td>
            <Td>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="cyan"
                  variant="solid"
                  size="sm"
                  onClick={openModal}
                >
                  Edit
                </Button>
                <Button colorScheme="blue" variant="solid" size="sm">
                  Delete
                </Button>
              </Stack>
            </Td>
          </Tr>
        );
      })}
    </>
  );
};
export default Users;

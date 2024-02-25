import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex, FormControl, Textarea } from "@chakra-ui/react";
import ListItem from "./components/ListItem";
import ModalWindow from "./components/Modal";
import Selects from "./components/Selects";
import { Button, ButtonGroup } from "@chakra-ui/react";

// import ModalWindow from "./modal";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalWindow titleModal={"qwerty"} modalOpen={isOpen} onClose={onClose} />
      <Box bg="white" h="100vh" w="100%">
        <Box w="100%" h="50px" bg="gray.500" />
        <Flex p="30px">
          <Box w="20%">
            <Box
              h="40px"
              border="1px"
              borderRadius="8px"
              bg="gray.600"
              color="white"
              textAlign="center"
              p="8px"
            >
              Transaction
            </Box>
            {/* <Box h="150px" border="1px" borderRadius="8px"></Box> */}
            <Textarea
              h="150px"
              border="1px"
              borderRadius="8px"
              placeholder="Here is a sample placeholder"
            />
          </Box>
          <FormControl
            w="80%"
            pl="30px"
            bg="white"
            justify="center"
            direction="column"
          >
            <Flex w="100%" bg="white" align="center" justify="space-between">
              <Selects />
              <ButtonGroup pl="20px">
                <Button colorScheme="gray" variant="outline" size="md">
                  Import
                </Button>
                <Button colorScheme="gray" variant="outline" size="md">
                  Export
                </Button>
              </ButtonGroup>
            </Flex>
            <ListItem openModal={onOpen} />
          </FormControl>
        </Flex>
      </Box>
    </>
  );
}
export default App;

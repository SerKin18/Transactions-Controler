import { Select } from "@chakra-ui/react";
import { Box, Button, Flex } from "@chakra-ui/react";
import ListItem from "./components/ListItem";
import ModalWindow from "./components/Modal";
import { ButtonGroup } from "@chakra-ui/react";
import ImportCVSButton from "./components/ImportCVSButton";
import { useEffect, useState } from "react";
import { ITransactions } from "./types";
import Paginations from "./components/Pagination";
import DeleteModal from "./components/DeleteModal";

const LIMIT = 10;
const INITIAL_CURRENT_PAGE = 1;

function App() {
  const [transactions, setTransactions] = useState<ITransactions | null>(null);
  const [curPage, setCurPage] = useState(INITIAL_CURRENT_PAGE);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [deletedItem, setDeletedItem] = useState<ITransactions[number] | null>(
    null
  );
  const [editedItem, setEditedItem] = useState<ITransactions[number] | null>(
    null
  );

  const onCloseEditModal = () => {
    setEditedItem(null);
  };

  const onEditedSelectedItem = (newStatus: string) => {
    setTransactions((prevTransactions) => {
      const updatedItemIndex =
        prevTransactions?.findIndex((item) => {
          return item[0] === editedItem?.[0];
        }) || -1;
      if (updatedItemIndex > -1 && editedItem) {
        const updatedItem = editedItem.slice();
        updatedItem[1] = newStatus;
        prevTransactions?.splice(updatedItemIndex, 1, updatedItem);
      }
      return prevTransactions?.slice() || [];
    });
    onCloseEditModal();
  };

  const onDeleteSelectedElement = () => {
    setTransactions((prevTransactions) => {
      const res =
        prevTransactions?.filter((item) => {
          return item[0] !== deletedItem?.[0];
        }) || null;
      return res;
    });
    setDeletedItem(null);
  };

  const onCloseDeleteModal = () => {
    setDeletedItem(null);
  };
  const startIndex = (curPage - 1) * LIMIT;

  let filteredTransactions = transactions?.slice() || null;
  if (filteredTransactions && statusFilter) {
    filteredTransactions = filteredTransactions.filter(
      (item) => item[1] === statusFilter
    );
  }

  if (filteredTransactions && typeFilter) {
    filteredTransactions = filteredTransactions.filter(
      (item) => item[2] === typeFilter
    );
  }

  const preparedTransactions =
    filteredTransactions?.slice(startIndex, startIndex + LIMIT) || null;

  useEffect(() => {
    setCurPage(INITIAL_CURRENT_PAGE);
  }, [statusFilter, typeFilter]);
  return (
    <>
      <DeleteModal
        titleModal={"Delete file"}
        modalOpen={!!deletedItem}
        onClose={onCloseDeleteModal}
        onDeleted={onDeleteSelectedElement}
        transactionId={deletedItem?.[0] || ""}
      />
      <ModalWindow
        titleModal={"Edit file"}
        modalOpen={!!editedItem}
        onClose={onCloseEditModal}
        onSave={onEditedSelectedItem}
      />
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
            <Box h="150px" border="1px" borderRadius="8px"></Box>
          </Box>
          <Box w="80%" pl="30px" bg="white">
            <Flex
              mb="30px"
              w="100%"
              bg="white"
              align="center"
              justify="space-between"
            >
              <Box display="flex">
                <Select
                  mr="20px"
                  variant="outline"
                  placeholder="Status"
                  size="md"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setStatusFilter(e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Canceled</option>
                </Select>
                <Select
                  variant="outline"
                  placeholder="Type"
                  size="md"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setTypeFilter(e.target.value)
                  }
                >
                  <option value="Refill">Refill</option>
                  <option value="Withdrawal">Withdrawal</option>
                </Select>
              </Box>
              <ButtonGroup pl="20px">
                <ImportCVSButton setTransactions={setTransactions} />
                <Button colorScheme="gray" variant="outline" size="md">
                  Export
                </Button>
                {/* <ExportCvSButton exportTransactions={preparedTransactions} /> */}
              </ButtonGroup>
            </Flex>
            <ListItem
              setEditItem={setEditedItem}
              transactions={preparedTransactions}
              setDeletedItem={setDeletedItem}
            />
            <Paginations
              curPage={curPage}
              setCurPage={setCurPage}
              pagesQuantity={
                filteredTransactions?.length
                  ? Math.ceil(filteredTransactions?.length / 10)
                  : 0
              }
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default App;

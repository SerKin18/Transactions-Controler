import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
interface DeleteModalProps {
  titleModal: string;
  modalOpen: boolean;
  onClose: () => void;
  onDeleted: () => void;
  transactionId:string;
}
const DeleteModal: FC<DeleteModalProps> = ({
  titleModal,
  modalOpen,
  transactionId,
  onClose,
  onDeleted,
}) => {
  return (
    <Modal isOpen={modalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Do you want to delete "{transactionId}" transaction?</ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onDeleted}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;

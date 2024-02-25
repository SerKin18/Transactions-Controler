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
interface ModalProps {
  titleModal: string;
  modalOpen: boolean;
  onClose: () => void;
}
const ModalWindow: FC<ModalProps> = ({ titleModal, modalOpen, onClose }) => {
  return (
    <Modal isOpen={modalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Change transaction status?</ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;

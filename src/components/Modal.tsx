import { FC, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
} from "@chakra-ui/react";
interface ModalProps {
  titleModal: string;
  modalOpen: boolean;
  onClose: () => void;
  onSave: (status: string) => void;
}
const ModalWindow: FC<ModalProps> = ({
  titleModal,
  modalOpen,
  onClose,
  onSave,
}) => {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <Modal isOpen={modalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Change transaction status?
          <Select
            mr="20px"
            variant="outline"
            placeholder="Status"
            size="md"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setStatus(e.target.value)
            }
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="gray"
            mr={3}
            onClick={() => onSave(status || "")}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;

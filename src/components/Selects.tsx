// @flow
import { FC } from "react";
import { Box, Select } from "@chakra-ui/react";
interface SelectsProps {
  titleModal: string;
  modalOpen: boolean;
  onClose: () => void;
}
const Selects: FC<SelectsProps> = () => {
  return (
    <Box display="flex">
      <Select mr="20px" variant="outline" placeholder="Status" size="md">
        <option value="option0">Pending</option>
        <option value="option1">Completed</option>
        <option value="option3">Canceled</option>
      </Select>
      <Select variant="outline" placeholder="Type" size="md">
        <option value="option2">Refill</option>
        <option value="option3">Withdrawal</option>
      </Select>
    </Box>
  );
};
export default Selects;

import { FC } from "react";
import { Button } from "@chakra-ui/react";
import Papa from "papaparse";
import { ITransactions } from "../types";

interface ExportCvSButtonProps {
  exportTransactions: ITransactions | null;
}

const ExportCvSButton: FC<ExportCvSButtonProps> = ({ exportTransactions }) => {
  function saveCSVFile() {
    const filename = "newFile.csv";
    const addSignString = ["id", "status", "type", "client name", "amount"];
    if (exportTransactions) {
      const newTransitionFile = exportTransactions;
      newTransitionFile.unshift(addSignString);
      const content = Papa.unparse(newTransitionFile);
      console.log(content);
      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/csv;charset=utf-8," + encodeURIComponent(content)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
    return;
  }

  return (
    <Button
      colorScheme="gray"
      variant="outline"
      size="md"
      onClick={saveCSVFile}
    >
      Export
    </Button>
  );
};
export default ExportCvSButton;

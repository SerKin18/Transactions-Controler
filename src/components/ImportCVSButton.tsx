import { ITransactions } from "../types";
import styles from "./ImportCVSButton.module.css";
import Papa from "papaparse";

interface ImportCVSProps {
  setTransactions: (value: ITransactions) => void;
}

const ImportCVSButton = ({ setTransactions }: ImportCVSProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    const file = files?.[0];
    if (!file) {
      return;
    }

    Papa.parse(file, {
      complete: function (results: { data: ITransactions }) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, ...data] = results.data;
        data.splice(-2);
        setTransactions(data);
      },
    });
  };

  return (
    <label html-for="file-button" className={styles["import-button"]}>
      Import
      <input type="file" id="file-button" onChange={onChange} />
    </label>
  );
};

export default ImportCVSButton;

import {Row} from "./Row";
import {getNestedRows} from "../utils";

export const SubRow = ({row, tableData}) => {
  return (
    <Row data={row} nestedRows={getNestedRows(row.id, tableData)}/>
  );
};

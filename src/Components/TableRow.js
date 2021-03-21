import { useState } from 'react'
import {SubRow} from "./SubRow";
import {Row} from "./Row";

export const TableRow = ({row, nestedRows, tableData}) => {
  const [isOpen, toggleOpen] = useState(false);

  const clickHandler = () => {
    toggleOpen(!isOpen)
  }

  const renderMoreButton = () => {
    if(nestedRows.length && isOpen) {
      return '-'
    }
    if(nestedRows.length && !isOpen) {
      return '+'
    }
  }

  const renderNestedRows = () => {
    if(nestedRows.length) {
      return nestedRows.map(row => <tr key={row.id} className='nested'><SubRow tableData={tableData} row={row}/></tr>)
    }
  }

  return (
    <>
      <tr className='no-parent' onClick={clickHandler}>
        <Row data={row} icon={renderMoreButton()}/>
      </tr>
      {isOpen && renderNestedRows()}
    </>
  );
};

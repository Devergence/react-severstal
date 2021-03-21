import {useEffect, useState} from 'react'
import {TableRow} from "./TableRow";
import {getNestedRows} from "../utils";

export const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("default.json")
      .then(res => res.json())
      .then(data => setTableData(data));
  }, []);


  const renderTableRows = () => {
    if(tableData.length) {
      const withNoParents = tableData.filter(el => el.parentId === 0);
      return withNoParents.map(
        row => {
          return (
            <TableRow key={row.id} tableData={tableData} row={row} nestedRows={getNestedRows(row.id, tableData)}/>
          )
        }
      )
    }
    return 'No data'
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>parentId</th>
          <th>isActive</th>
          <th>balance</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
      {renderTableRows()}
      </tbody>
    </table>
  );
};

// Задание:
//   Исходя из приложенных данных(прикреплены к письму) постройте таблицу с
//   возможностью раскрытия строк, имеющих дочерние элементы, а также фильтрацией по
//   свойству "isActive", “balance” и “email”. Порядок элементов в данных не гарантирован.

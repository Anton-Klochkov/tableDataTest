import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArrowUp from '../SVG/arrow-up';
import ArrowDown from '../SVG/arrow-down';
import DetailInfo from '../DetailInfo/DetailInfo';

// структуризация вместо пропсов 
const Table = ({ sortData, contactData, directionSort, detailRow, detailInfoData, isRowClicked }) => {

  const [fieldData, setFieldData] = useState('')


  const Arrow = () => {
    return (
      directionSort ? <ArrowDown /> : <ArrowUp />
      //если значение true адресовывай таблицу ? ArrowDown  :если false ArrowUp 
    )
  }


  const fieldSortData = (field) => {
    sortData(field)
    setFieldData(field)
  }




  return (
    <div>
      <table className='table'>{/* выравнивает по человечески таблицу (все было в одной куче) */}
        <thead>
          <tr>
            <th onClick={() => { fieldSortData('id') }}>{/* onClick обработчик события,sortData сортировка */}
              id {fieldData === 'id' ? <Arrow /> : null}
            </th>
            <th onClick={() => { fieldSortData('firstName') }}>
              firstName {fieldData === 'firstName' ? <Arrow /> : null}
            </th>
            <th onClick={() => { fieldSortData('lastName') }}>
              lastName {fieldData === 'lastName' ? <Arrow /> : null}
            </th>
            <th onClick={() => { fieldSortData('email') }}>
              email {fieldData === 'email' ? <Arrow /> : null}
            </th>
            <th onClick={() => { fieldSortData('phone') }}>
              phone {fieldData === 'phone' ? <Arrow /> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {contactData.map(
            item => (
              <tr key={uuidv4()} onClick={() => detailRow(item)} >{/* уникальный ключ 'id' */}
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
      
      {isRowClicked ? <DetailInfo detailInfoData={detailInfoData} /> : null}

    </div>
  );
}

export default Table;
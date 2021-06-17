import './App.css';
import React, { useState } from 'react'
import useServerData from  './useServerData/useServerData';
import Switcher from './Switcher/switcher';
import TableBody from './TableBody/tableBody';



function App() {


//const [contactData, setContactData] = useState([]);сейчас используются в 17 строке в кастомном хуке
//const [isLoading, setIsLoading] = useState(true);
//const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem, setRowItem] = useState('');
  const [url, setUrl] = useState('');
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [{ contactData, isLoading, setContactData,}, ] = useServerData({url, isButtonClick});

  const buttonHandler = (url) =>{
    setUrl(url)
    setIsButtonClick(true)
    console.log(url)
  }

  const sortData = (field) => {
    console.log(field)
    
    const copyData = contactData.concat();

    let sortData;

    if (directionSort) {         /* сортировка по стобцу */
      sortData = copyData.sort(
        (a, b) => {return a[field] > b[field] ? 1 : -1 } 
      )
    } sortData = copyData.reverse(
      (a, b) => {return a[field] > b[field] ? 1 : -1 } 
    )
    
    setContactData(sortData)
    setDirectionSort(!directionSort) 
  }

  
const detailRow = (row) =>{
  setIsRowClicked(true)
  setRowItem(row)
}

  return (
    <div className="container">

      {
        !isButtonClick? <Switcher buttonHandler = {buttonHandler}/>
        :
        <TableBody 
        contactData={contactData}
        sortData={sortData}
        rowItem={rowItem}
        detailInfoData={rowItem}
        directionSort={directionSort}
        detailRow = {detailRow} 
        isLoading = {isLoading}
        isRowClicked = {isRowClicked} />

      }
      
    </div>
  );
}

export default App;

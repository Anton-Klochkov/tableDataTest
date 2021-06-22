import './App.css';
import React, { useState, useEffect } from 'react'
import useServerData from './components/useServerData/useServerData';
import Switcher from './components/Switcher/switcher';
import TableBody from './components/TableBody/tableBody';
import Pagination from './components/Pagination/pagination';



function App() {


  //const [contactData, setContactData] = useState([]);сейчас используются в 17 строке в кастомном хуке
  //const [isLoading, setIsLoading] = useState(true);
  //const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem, setRowItem] = useState('');
  const [url, setUrl] = useState('');
  const [totalCountRow, setTotalCountRow] = useState(0);
  const [totalCountPage, setTotalCountPage] = useState(0);
  const [isRowClicked, setIsRowClicked] = useState(false);
  const limiteCountPage = 50;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [buttonPreviousDisabled, setButtonPreviousDisabled] = useState('page-item');
  const [buttonNextDisabled, setButtonNextDisabled] = useState('page-item');
  const [currentPageActive, setCurrentPageActive] = useState('page-item');
  const [searchText, setSearchText] = useState('')
  const [newRow, setNewRow] = useState({})


  const [{ contactData, isLoading, setContactData, isLoaded },] = useServerData({ url, isButtonClick });

  const buttonHandler = (url) => {
    setUrl(url)
    setIsButtonClick(true)
  }

  const getFiltredData = () => {
    if(!searchText){
      return contactData
    }
    return contactData.filter(
      el=>{
    return (el['firstName'].toLowerCase().includes(searchText.toLowerCase())
    || el['lastName'].toLowerCase().includes(searchText.toLowerCase())
    || el['email'].toLowerCase().includes(searchText.toLowerCase()))
      }
    )
  }

  const filtredData = getFiltredData()



  const lastBlockRow = currentPageNumber * limiteCountPage
  const firstBlockRow = lastBlockRow - limiteCountPage + 1
  const currentBlockRows = filtredData.slice(firstBlockRow, lastBlockRow)

  const currentPage = (pg) => {
    setCurrentPageNumber(pg)
    setButtonPreviousDisabled('')
    setButtonNextDisabled('')
    setCurrentPageActive('active')
  }

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    setTotalCountRow(filtredData.length)
    const getTotalCountPage = Math.ceil(totalCountRow / limiteCountPage)/* кол-во страниц, определяет кол-во строк, деленое на переменную */
    setTotalCountPage(getTotalCountPage)/* колличество страниц */

  }, [ isLoaded, setTotalCountRow, filtredData.length, totalCountRow])


  let pages = []
  for (let i = 1; i <= totalCountPage; i++) {
    pages.push(i)
  }
  
  const onSearchSend = (text)=>{
    setSearchText(text)
    //console.log(searchText)
  }
  //console.log(searchText)

  const getAddFormData =({id, firstName, lastName, email, phone})=>{
    setNewRow({id, firstName, lastName, email, phone})
  }
  console.log(newRow)
  currentBlockRows.unshift(newRow)

  const sortData = (field) => {
    // console.log(field)

    const copyData = contactData.concat();

    let sortData;

    if (directionSort) {         /* сортировка по стобцу */
      sortData = copyData.sort(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      )
    } sortData = copyData.reverse(
      (a, b) => { return a[field] > b[field] ? 1 : -1 }
    )

    setContactData(sortData)
    setDirectionSort(!directionSort)
  }


  const detailRow = (row) => {
    setIsRowClicked(true)
    setRowItem(row)
  }

  const onNextClick = () => {
    if (currentPageNumber > totalCountPage - 1) {
      setButtonNextDisabled('disabled')
      return
    }
    setCurrentPageNumber(currentPageNumber + 1)
    setButtonPreviousDisabled('')
  }

  const onPreviousClick = () => {
    if (currentPageNumber < 2) {
      setButtonPreviousDisabled('disabled')
      return
    }
    setCurrentPageNumber(currentPageNumber - 1)
    setButtonNextDisabled('')
  }



  return (
    <div className="container">

      {
        !isButtonClick ? <Switcher buttonHandler={buttonHandler} />
          :
          <TableBody
            getAddFormData={getAddFormData}
            contactData={currentBlockRows}
            sortData={sortData}
            rowItem={rowItem}
            detailInfoData={rowItem}
            directionSort={directionSort}
            detailRow={detailRow}
            isLoading={isLoading}
            isRowClicked={isRowClicked}
            onSearchSend = {onSearchSend} />
      }

      
      {isLoaded&&(totalCountRow > limiteCountPage)&&
          <Pagination 
          pages={pages}
          onPreviousClick={onPreviousClick}
          currentPage={currentPage}
          onNextClick={onNextClick}
          buttonPreviousDisabled={buttonPreviousDisabled}
          buttonNextDisabled={buttonNextDisabled}
          currentPageActive={currentPageActive}
          currentPageNumber={currentPageNumber} />
      }
      
      

    </div>
  );
}

export default App;

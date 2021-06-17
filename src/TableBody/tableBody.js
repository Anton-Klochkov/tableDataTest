import React, {Fragment} from 'react';
import Loader from '../Loader/loader';
import Table from '../Table/table';


const TableBody = ({contactData, sortData, detailInfoData, directionSort, detailRow, isLoading, isRowClicked}) =>{
    return(
        
            
            isLoading? <Loader /> : 
        <Fragment>
            <Table contactData = {contactData} 
            sortData = {sortData}
            directionSort = {directionSort}
            detailRow = {detailRow}
            detailInfoData = {detailInfoData}
            isRowClicked = {isRowClicked} />{/* окно для вывода информации о выбранной строке */} 
        </Fragment>  
    )
}

export default TableBody;
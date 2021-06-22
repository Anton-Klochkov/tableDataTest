import React, { Fragment } from 'react';
import Loader from '../Loader/loader';
import Table from '../Table/table';
import AddForm from '../AddForm/addForm';


const TableBody = ({
    contactData,
    sortData,
    detailInfoData,
    directionSort,
    detailRow, isLoading,
    isRowClicked,
    onSearchSend,
    getAddFormData }) => {
    return (


        isLoading ? <Loader /> :
            <Fragment>
                <AddForm getAddFormData={getAddFormData} />
                <Table contactData={contactData}
                    sortData={sortData}
                    directionSort={directionSort}
                    detailRow={detailRow}
                    detailInfoData={detailInfoData}
                    isRowClicked={isRowClicked}/* окно для вывода информации о выбранной строке */
                    onSearchSend={onSearchSend}/>
                    </Fragment>
    )
}


export default TableBody;
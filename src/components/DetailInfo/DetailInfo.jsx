import React from 'react'

const DetailInfo = ({ detailInfoData }) => {

    const AddressStreetAddress = detailInfoData && detailInfoData.address ? detailInfoData.address.streetAddress : null
    const AddressCity = detailInfoData && detailInfoData.address ? detailInfoData.address.city : null
    const AddresState = detailInfoData && detailInfoData.address ? detailInfoData.address.state : null
    const AddressZip = detailInfoData && detailInfoData.address ? detailInfoData.address.zip : null
    /* константры для доусупа к недоступным свойствам */


    return (
        <div>
            <div>
                <b>id:</b> {detailInfoData.id}
            </div>
            <div>
                <b>firstName:</b> {detailInfoData.firstName}
            </div>
            <div>
                <b>lfstName:</b> {detailInfoData.lastName}
            </div>
            <div>
                <b>phone:</b> {detailInfoData.phone}
            </div>
            <div>
                <b>email:</b> {detailInfoData.email}
            </div>
            {/* приблема к доступу внутренним свойствам объекта. Необъодимо создать доп. констатны к тем свойствам
объекта которые не доступны сейчас */}
            <div>
                <div>
                    <b>streetAddress:</b> {AddressStreetAddress}
                </div>
                <div>
                    <b>city:</b> {AddressCity}
                </div>
                <div>
                    <b>state:</b> {AddresState}
                </div>
                <div>
                    <b>zip:</b> {AddressZip}
                </div>
                <div>
                    <b>description:</b> <p>{detailInfoData.description}</p>
                </div>
            </div>
        </div>
    )
}
/* окно для вывода информации о строке */
export default DetailInfo;
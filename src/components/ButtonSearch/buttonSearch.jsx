import React, {useState} from 'react';



const ButtonSearch = ({onSearchSend}) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" 
                type="button"
                onClick = {() =>onSearchSend(searchValue)} >Search for</button>
            </div>
            <input 
            type="text" 
            className="form-control mt-3" 
            placeholder="Enter First Name/Last Name/ Email" 
            aria-label="" 
            aria-describedby="basic-addon1" 
            value = {searchValue}
            onChange = {(event) =>{setSearchValue(event.target.value)}} />
        </div>
    )
}

export default ButtonSearch;

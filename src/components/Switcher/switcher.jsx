import React from 'react';

const Switcher =({buttonHandler})=>{

    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'; 
    return(
        <div style = {{display: 'flex', justifyContent: 'center', padding:'100px',}}>
            <button className="btn btn-primary" onClick = {() => (buttonHandler(smallUrl))}>32 ROW</button>
            <button className="btn btn-danger"  onClick = {() => (buttonHandler(bigUrl))}>1000 ROW</button>
        </div>
    )
}
export default Switcher;
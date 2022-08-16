import React from "react";
import '../css/MyBalance.css';
function MyBalance(){

    return (
        <div className="myBalance">
            <div className="myBalance__item">
                <p className="item__1">My balance</p>
                <p className="item__2">$921.48</p>
            </div>
            <div className="myBalance__item">
                <img className='logo' src='images/logo.svg' alt='logo' />
            </div>
        </div>
    );
}

export default MyBalance;

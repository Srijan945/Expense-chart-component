import React from "react";
import '../css/SpendTotal.css';
function SpendTotal(){

    return (
        <div className="spendTotal">
            <div className="spendTotal__item left">
                <p className="left__1">Total this month</p>
                <p className="left__2">$478.33</p>
            </div>
            <div className="spendTotal__item right">
                <p className="right__1">+2.4%</p>
                <p className="right__2">from last month</p>
            </div>
        </div>
    );
}

export default SpendTotal;

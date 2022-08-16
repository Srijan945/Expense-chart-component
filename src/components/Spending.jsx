import React from "react";
import BarChart from './BarChart';
import SpendTotal from './SpendTotal';
import '../css/Spending.css';
function Spending(){

    return (
        <div className="spending">
            <p className="spending__heading">Spending - Last 7 days</p>
            <BarChart />
            <hr />
            <SpendTotal />
        </div>
    );
}

export default Spending;
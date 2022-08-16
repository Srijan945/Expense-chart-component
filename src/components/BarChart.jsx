import React from "react";
import data from '../assets/data.json';
import Bar from './Bar';
import '../css/BarChart.css';

function BarChart(){

    return (
        <div className="barChart">
            {data.map(function(ele){
                return <Bar key={ele.day} amount={ele.amount} day={ele.day}/>
            })}
        </div>
    );
}

export default BarChart;
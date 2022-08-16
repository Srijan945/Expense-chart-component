import React from "react";
import data from '../assets/data.json';
import Bar from './Bar';

function BarChart(){

    return (
        <div className="barChart">
            {data.map(function(ele,index){
                return <Bar className='barChart__item' key={ele.day} amount={ele.amount} />
            })}
        </div>
    );
}

export default BarChart;
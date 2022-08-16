import React from "react";
import '../css/Bar.css';

function Bar({amount,day}){

    const value = 100*(amount/52.36);
    const styles= {
        height: `${value}px`,
        backgroundColor: day ==='wed' ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
    }
    return ( 
        <div className="bar">
            <div className="bar__block" style={styles}></div>
            <p className="bar__day">{day}</p>
        </div>
    ); 
}

export default Bar;
import React from "react";
import '../css/Bar.css';

function Bar({amount}){

    const value = 100*(amount/52.36);
    const styles= {
        height: `${value} + px`
    }
    return ( <div className="Bar" style={styles}></div>);
}

export default Bar;
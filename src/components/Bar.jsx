import React,{useState} from "react";
import '../css/Bar.css';

function Bar({amount,day}){
    const days=['sun','mon','tue','wed','thu','fri','sat'];
    const [isHover,setIsHover]=useState(false);
    const today = new Date().getDay();
    const value = 100*(amount/52.36);
    const styles= {
        height: `${value}px`,
        backgroundColor: day === days[today] ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
    }
   
    return ( 
        <div className="bar">
            <p className="bar__hover" style={{visibility: isHover ? 'visible' : 'hidden'}}>{`$${amount}`}</p>
            <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} 
            className="bar__block" 
            style={styles}>
            </div>
            <p className="bar__day">{day}</p>
        </div>
    ); 
}

export default Bar;
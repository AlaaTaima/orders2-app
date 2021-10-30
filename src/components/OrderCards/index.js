
import React from 'react';
import './style.css';
import OutGoingCard from './OutGoingCards';
import IncomingCard from './IncomingCards';
import ReadyCard from './ReadyCards';



const MainSection = ()=>{

    return(

        <div className="main-section">
        <IncomingCard />
        <OutGoingCard />
        <ReadyCard />
        </div>
    )
}

export default MainSection
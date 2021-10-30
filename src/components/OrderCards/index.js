
import React from 'react';
import './style.css';
import OutGoingCard from './OutGoingCards';
import IncomingCard from './IncomingCards';
import ReadyCard from './ReadyCards';
import { DragDropContext, Droppable,Draggable   } from 'react-beautiful-dnd';



const MainSection = ()=>{

    return(

        <div className="main-section">
        <DragDropContext>
        <IncomingCard />
        <OutGoingCard />
        <ReadyCard />
        </DragDropContext>
        </div>
    )
}

export default MainSection
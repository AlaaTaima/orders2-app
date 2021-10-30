

import React, {useState} from 'react';
import './style.css';
import Card from './Card'
import SubCard from './SubCard'

import { DragDropContext, Droppable,Draggable } from 'react-beautiful-dnd';



const outList = [
    [{id:'card-1',
    avg:5}],
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
  
    destClone.splice(droppableDestination.index, 0, removed);
  
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
  
    return result;
  };
  
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    margin: `0 0 ${0}px 0`,
    background: isDragging ? "white" : "#F7F7F7",
    ...draggableStyle
  });


const OutGoingCard = ()=>{

    const [state, setState] = useState(outList);

    function onDragEnd(result) {
        const { source, destination } = result;
    
        if (!destination) {
          return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
    
        if (sInd === dInd) {
          const items = reorder(state[sInd], source.index, destination.index);
          const newState = [...state];
          newState[sInd] = items;
          setState(newState);
        } else {
          const result = move(state[sInd], state[dInd], source, destination);
          const newState = [...state];
          newState[sInd] = result[sInd];
          newState[dInd] = result[dInd];
    
          setState(newState.filter(group => group.length));
        }
      }

  
    return(
        <div className="out-card-container" 
        >  
            <p className="out-card-title"> Outgoing 1</p>

            <DragDropContext onDragEnd={onDragEnd}>
                
            {state.map((el, index) => (
            <Droppable key={index} droppableId={`${index}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                 {el.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection:"column",
                              justifyContent: "space-around"
                            }}
                          >
                            <Card average={item.avg} />
                           
                          </div>                     
                   
                        </div>
                      )}
                    
                    </Draggable>
                  ))}
                   
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
                </DragDropContext>

                <SubCard />
                      <SubCard />
        </div>
    )
}

export default OutGoingCard

import React, {useState} from 'react';
import './style.css';
import Card from './Card';
import { DragDropContext, Droppable,Draggable   } from 'react-beautiful-dnd';

const allList = [

    [{id:'card-1',
    avg:5}],
    [{id:'card-2',
    avg:7}],
    [{id:'card-3',
    avg:20}],
   [ {id:'card-4',
    avg:50}],
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
    margin: `0 0 ${0}px 0`,
  
    background: isDragging ? "lightgreen" : "#F7F7F7",
  
    ...draggableStyle
  });

  

const IncomingCard = ()=>{

    const [state, setState] = useState(allList);

    
  function onDragEnd(result) {
    const { source, destination } = result;
    console.log({result})

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
        <div className="card-container"
           >  
            <p className="card-title"> Incoming 2</p>


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

        </div>
    )
}

export default IncomingCard
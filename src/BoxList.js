import React, { useState } from 'react'
import Box from './Box'
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm'


const BoxList = () => {
  // const INITIAL_STATE = [
  //   { id: uuid(), width: "50px", height: "50px", backgroundColor: "teal" },
  //   { id: uuid(), width: "40px", height: "50px", backgroundColor: "coral" }
  // ]
  const INITIAL_STATE = []
  const [boxes, setBoxes] = useState(INITIAL_STATE)
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
  }
  return (
    <div>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(box => <Box id={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} key={box.id} boxes={boxes} setBoxes={setBoxes} />)}
      </div>
    </div>
  )
}

export default BoxList;

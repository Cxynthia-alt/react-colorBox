import React from 'react';
import './Box.css'

const Box = ({ id, width, height, backgroundColor, boxes, setBoxes }) => {
  const handleRemove = () => {
    const fileterdBoxes = boxes.filter((box) => box.id !== id)
    setBoxes(fileterdBoxes)
  }
  return (
    <div>
      <div id={id} style={{ width: width, height: height, backgroundColor: backgroundColor }} />
      <button data-testid="removeBtn" onClick={handleRemove}>X</button>
    </div>
  )
}

export default Box

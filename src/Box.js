import React from 'react';

const Box = ({ id, width, height, backgroundColor }) => {

  return (
    <div id={id} style={{ width: width, height: height, backgroundColor: backgroundColor }}>
    </div>
  )
}

export default Box

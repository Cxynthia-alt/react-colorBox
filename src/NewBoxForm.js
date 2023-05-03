import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: ""
  }
  const [boxData, setBoxData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setBoxData(data => ({
      ...data,
      [name]: value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBox({ ...boxData })
    setBoxData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="width">Width: </label>
        <input id="width" type="text" name="width" value={boxData.width} onChange={handleChange} />

      </div>

      <div>
        <label htmlFor="height">Height: </label>
        <input id="height" type="text" name="height" value={boxData.height} onChange={handleChange} />
      </div>


      <div>
        <label htmlFor="backgroundColor">Background Color: </label>
        <input id="backgroundColor" type="text" name="backgroundColor" value={boxData.backgroundColor} onChange={handleChange} />
      </div>


      <button>Add me!</button>
    </form>
  )
}

export default NewBoxForm;

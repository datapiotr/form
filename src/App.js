import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [type, setType] = useState('')
  const [pizzaSlices, setPizzaSlices] = useState('')
  const [diameter, setDiameter] = useState('')
  const [spiciness, setSpiciness] = useState('')
  const [breadSlices, setBreadSlices] = useState('')

  const spicinessScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChangeName = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  const handleChangeTime = (e) => {
    setTime(e.target.value)
    console.log(time)
  }
  const handleChangeType = (e) => {
    setType(e.target.value)
    console.log(type)
  }
  const handleChangePizzaSlices = (e) => {
    setPizzaSlices(e.target.value)
    console.log(pizzaSlices)
  }
  const handleChangeDiameter = (e) => {
    setDiameter(e.target.value)
    console.log(diameter)
  }
  const handleChangeSpiciness = (e) => {
    setSpiciness(e.target.value)
    console.log(spiciness)
  }
  const handleChangeBreadSlices = (e) => {
    setBreadSlices(e.target.value)
    console.log(breadSlices)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, time, type, pizzaSlices, diameter, spiciness, breadSlices)
  }

  return (
    <div className="App">
      <form>
        <label>Name: <input type="text" placeholder="dish name" value={name} onChange={handleChangeName}></input></label>
        <label>Preparation time: <input type="number" placeholder="00:00:00" value={time} onChange={handleChangeTime}></input></label>
        <label>Type: <select value={type} onChange={handleChangeType}><option></option><option>pizza</option><option>soup</option><option>sandwich</option></select></label>
        {type === 'pizza' && (
          <>
            <label>Number of slices: <input type="number" value={pizzaSlices} onChange={handleChangePizzaSlices}></input></label>
            <label>Diameter: <input type="number" value={diameter} onChange={handleChangeDiameter}></input></label>
          </>
        )}
        {type === 'soup' && (
          <label>Spiciness scale: <select value={spiciness} onChange={handleChangeSpiciness}>{spicinessScale.map((number, index) => { return <option key={index}>{number}</option> })}</select></label>
        )}
        {type === 'sandwich' && (
          <label>Slices of bread: <input type="number" value={breadSlices} onChange={handleChangeBreadSlices}></input></label>
        )}
        <button type="submit" onClick={handleSubmit}>Order</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [preparation_time, setPreparation_time] = useState('')
  const [type, setType] = useState('')
  const [no_of_slices, setNo_of_slices] = useState('')
  const [diameter, setDiameter] = useState('')
  const [spiciness_scale, setSpiciness_scale] = useState('')
  const [slices_of_bread, setSlices_of_bread] = useState('')
  const [is_added, setIs_added] = useState(false)

  const spicinessScaleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleSubmit = (e) => {
    e.preventDefault()
    const dish = { name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread }

    fetch('https://frosty-wood-6558.getsandbox.com/dishes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dish)
    }).then(() => {
      setIs_added(true)
    })

    setName('')
    setPreparation_time('')
    setType('')
    setNo_of_slices('')
    setDiameter('')
    setSpiciness_scale('')
    setSlices_of_bread('')
  }

  return (
    <div className="App">
      <h2>Make a new order</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" required placeholder="dish name" value={name} onChange={(e) => setName(e.target.value)}></input></label>
        <label>Preparation time: <input type="time" step="2" required placeholder="00:00:00" value={preparation_time} onChange={(e) => setPreparation_time(e.target.value)}></input></label>
        <label>Type: <select required value={type} onChange={(e) => setType(e.target.value)}><option></option><option>pizza</option><option>soup</option><option>sandwich</option></select></label>
        {type === 'pizza' && (
          <>
            <label>Number of slices: <input type="number" min="0" required value={no_of_slices} onChange={(e) => setNo_of_slices(+e.target.value)}></input></label>
            <label>Diameter: <input type="number" min="0" step="0.01" required value={diameter} onChange={(e) => setDiameter(+e.target.value)}></input></label>
          </>
        )}
        {type === 'soup' && (
          <label>Spiciness scale: <select required value={spiciness_scale} onChange={(e) => setSpiciness_scale(+e.target.value)}>{spicinessScaleArray.map((number, index) => { return <option key={index}>{number}</option> })}</select></label>
        )}
        {type === 'sandwich' && (
          <label>Slices of bread: <input type="number" min="0" required value={slices_of_bread} onChange={(e) => setSlices_of_bread(+e.target.value)}></input></label>
        )}
        <button>Order</button>
      </form>
      <h3>{is_added ? `Your order has been added` : ''}</h3>
    </div>
  );
}

export default App;

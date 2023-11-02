import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Product from './components/Product/Product'

function App() {
  const [data, setData] = useState([])
  const [checkData, setCheckData] = useState([])

  //fetching data from local folder
  useEffect(() => {
    fetch("images.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const dragItem = React.useRef(null)
  const dragOverItem = React.useRef(null)
  //data sorting
  const handleSort = () => {

    //duplicating data
    let editedData = [...data];

    //recording the draging process
    const draggedData = editedData.splice(dragItem.current, 1)[0]

    //updating new array according to the drag data
    editedData.splice(dragOverItem.current, 0, draggedData)
    dragItem.current = null;
    dragOverItem.current = null;

    //updating state
    setData(editedData);
  }

  //handling check data
  const handleCheck = (e, data, index) => {

    console.log(data);

    //taking the status of data
    const activeData = document.getElementById(index).checked;
    console.log(activeData);

    //checking the active data condition and update array
    if (activeData == true) {
      setCheckData(oldData => [...oldData, data])
    }

    //checking inactive data condition and update array
    if(activeData == false) {
      let newData = [...checkData];
      newData.pop()
      setCheckData(newData)
    }
  }
  console.log(checkData);
  // const onDragStart = (e, index) => {
  //   console.log("Drag started",index);
  // }
  // const onDragEnter = (e, index) => {
  //   console.log("Drag entered",index);
  // }



  return (
    <div>
      
        
      
      <div className='flex m-5'>
        {
          checkData.length == 0 ? <h1 className='text-2xl'>Gallery</h1> : <h1 className='bg-blue-700 text-white px-3 py-2 rounded-xl'>Selected({checkData.length}) </h1>
        }
      </div>

      <div className='firstProduct px-5'>
        {
          //mapping image data and passing as props into Product component
          data.map((image, index) => <Product index={index} dragItem={dragItem} dragOverItem={dragOverItem} handleSort={handleSort} handleCheck={handleCheck} key={index} data={image}></Product>)
        }
      </div>
    </div>
  )
}

export default App

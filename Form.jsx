import React, { useReducer, useRef, useState } from 'react'
import { formReducer, INITIAL_STATE } from './formReducer'

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const tagRef = useRef()

  const handleChange = e => {
    dispatch({type:"CHANGE_INPUT", payload:{name:e.target.name, value:e.target.value}})
  }

  const handleTags = () => {
    const tags = tagRef.current.value.split(",")
    tags.forEach((tag) => {
      dispatch({type: "ADD_TAG", payload: tag});
    })
  }

  console.log(state);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="price"
      />
      <p>Catrgory:</p>
      <select onChange={handleChange} name="category">
        <option value="snaekers">Sneakers</option>
        <option value="tshirts">tshirts</option>
        <option value="jeans">jeans</option>
      </select>
      <p>Tags:</p>
      <textarea ref={tagRef} placeholder="seperate tags with ,"/>
      <button onClick={handleTags} type="button">Add Tags</button>
      <div className='tags'>
        {state.tags.map((tag)=>(
          <small onClick={()=>dispatch({type:"REMOVE_TAG", payload: tag})} key={tag}>
            {tag}
          </small>
        ))}
      </div>
      <div className='quantity'>
        <button onClick={()=>dispatch({type:"DECREASE"})} type="button">-</button>
        <span>Quantity ({state.quantity})</span>
        <button onClick={()=>dispatch({type:"INCREASE"})} type='button'>+</button>
      </div>
    </div>
  )
}

export default Form
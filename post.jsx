import React, { useReducer, useState } from 'react'
import { ACTION_TYPES } from './postActionTypes';
import { INITIAL_STATE, postReducer } from './postReducer';

const post = () => {

//if two and more setState, better to use setReducer

const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

const handleFetch = () => {
  dispatch({type:ACTION_TYPES.FETCH_START})
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    return res.json();
  })
  .then((data)=>{
    //{type:"FETCH_SUCCESS", payload: data}
    dispatch({type:ACTION_TYPES.FETCH_SUCCESS, patload:data})
  })
  .catch((err) => {
    dispatch({type:ACTION_TYPES.FETCH_ERROR})
  });
};


  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading? "wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  )
}

export default post
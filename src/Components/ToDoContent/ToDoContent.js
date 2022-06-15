import React, { createContext, useReducer, useState } from 'react'
import Output from './Output/Output'
import './ToDoContent.css'

export const NameContext = createContext()

function ToDoContent() {
  const [name, setName] = useState('')

  const reducer = (state, action) =>{

    switch(action.type){
      case 'ADD':
        return [...state, {id: Date.now(), name: action.payload.name, complete: false }]
      case 'toggle': 
      return state.map(item =>{
        if(item.id === action.payload.id){
          return {...item, complete: !item.complete}
        }
        return item
      })
      case 'Del':
        return state.filter(item => item.id !== action.payload.id)
    default: return state
    }
    
  }

  const [todos, dispatch] = useReducer(reducer,[])
  
  const handleSubmit = () =>{
    dispatch({type: 'ADD', payload: {name: name}})
  }


  return (
    <section>
      <div className="wrapper">
        <h2 className="list__title">todo List</h2>
        <div className="input-wrapper mb-3">
          <input
            onChange={(e) => setName(e.target.value)}
            className="list-input" 
            type="text"
            name="search" placeholder="Add task" required />
          <button onClick={handleSubmit} className="button" type="submit"><i className='bx  bx-plus'></i></button>
        </div>
        
        <ul className='list m-0 p-0'>
          {todos.map(item =>{
            return (
            <NameContext.Provider key={item.id} value={{item, dispatch}}>
              <Output/>
            </NameContext.Provider>
            )
          })}
        </ul>

      </div>
    </section>
  )
}

export default ToDoContent
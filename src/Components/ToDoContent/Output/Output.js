import React, { useContext } from 'react'
import { NameContext } from '../ToDoContent'
import './Output.css'



function Output() {
  const Name = useContext(NameContext)
  console.log(Name);
  return (
    <li onClick={() => Name.dispatch({type: 'toggle', payload: {id: Name.item.id, }})} className='d-flex justify-content-between'>
      <div>
        <h6 style={{textDecoration: Name.item.complete ? 'line-through' : 'none', color: Name.item.complete ? 'green' : ''}}>
          {Name.item.name}
        </h6> 
      </div>
      <button onClick={() => Name.dispatch({type: 'Del', payload: {id: Name.item.id}})}>
        <i className='bx bxs-trash-alt' ></i>
      </button>
    </li>    
  )
}

export default Output
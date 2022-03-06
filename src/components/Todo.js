import React, {useState} from 'react'
import './todo.css'


export default function Todo(props) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    props.addTodo(value)
    setValue('')
  }
  console.log('form')
  return (
    <form onSubmit={handleSubmit}>
      

      <div  className='container'>
          <h1>To Do App</h1>
          <div className="input">
              <input type="text" name="" id="" value={value} onChange={e => setValue(e.target.value)} />
              <button>Add</button>
          </div>
      </div>
    </form>
  )
}

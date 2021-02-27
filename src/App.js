import React, {useState} from 'react'
import TodoList from "./Todo/TodoList"


function App() {
  let [todos, setTodos] = useState(
    [
      {
        id: 1,
        editable: false,
        title: 'Lorem 1',
        showContent: false,
        content: 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: 2,
        editable: false,
        title: 'Lorem 2',
        showContent: false,
        content: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: 3,
        editable: false,
        title: 'Lorem 3',
        showContent: false,
        content: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit.'
      },
    ])

  function toggleTodo(id) {
    setTodos
      (todos.map(todo => {
        if (todo.id === id) {
          todo.showContent = !todo.showContent
        }
        return todo
      })
    )
  }


  return <div className='wrapper'>
    <h1 className='page-title'>Fusionsoft test-task</h1>
    <div className="pages-link">
      <a className='link link-active' href="#">lorems-readonly</a>
      <a className='link' href="#">lorems-edit</a>
    </div>


    <TodoList todos={todos} onToggle={toggleTodo}/>
  </div>
}

export default App;

import React, {useState} from 'react'
import TodoList from "./Todo/TodoList"


function App() {
  const [todos, setTodos] = useState(
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

  function editItem({id, title, content}) {
    setTodos
      (todos.map(todo => {
        if (todo.id === id) {
          todo.title = title
          todo.content = content
        }
        return todo
      })
    )
  }

  function deleteItem(ids) {
    console.log(ids)
    let temp = []
    ids.forEach(id =>
      (todos.map(todo => {
        if (todo.id != id) {
          temp.push(todo)
        }
      })
    )
  )
    setTodos(temp)
  }

  return <div className='wrapper'>
    <h1 className='page-title'>Fusionsoft test-task</h1>
    <div className="pages-link">
      <a className='link link-active' href="#">lorems-readonly</a>
      <a className='link' href="#">lorems-edit</a>
    </div>


    <TodoList todos={todos} editItem={editItem} deleteItem={deleteItem} edit={false}/>

    <TodoList todos={todos} editItem={editItem} deleteItem={deleteItem} edit={true}/>
  </div>
}

export default App;

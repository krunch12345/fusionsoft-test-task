import React, {useState} from 'react'
import TodoList from './Todo/TodoList'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

function App() {

  const [currentPath, setCurrentPath] = useState('default')
  console.log(currentPath)

  const [todos, setTodos] = useState(
    [
      {
        id: 'py7sdbe1t4',
        title: 'Lorem 1',
        content: 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: 'x2qxscrglf',
        title: 'Lorem 2',
        content: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: '1maegz4jn8',
        title: 'Lorem 3',
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
    todos.forEach(todo => {
      if ( !ids.includes(todo.id)) {
        temp.push(todo)
        console.log(todo.id, ids.includes(todo.id))
      }}
    )
    setTodos(temp)
  }

  function addItem() {
    let tempItems = todos
    console.log(tempItems)
    setTodos([...todos, {id: Math.random().toString(36).substr(2, 10), title: 'default', content: 'default'}]
    )
  }

  return (
    <Router>
      <div className='wrapper'>
        <h1 className='page-title'>
          Fusionsoft test-task
        </h1>
        <div className='pages-link'>
          <Link className={`link ${currentPath === 'view' ? 'link-active' : ''}`} to='/'>
            lorems-readonly
          </Link>
          <Link className={`link ${currentPath === 'edit' ? 'link-active' : ''}`} to='/edit'>
            lorems-edit
          </Link>
        </div>
        <Switch>
          <Redirect exact from='/' to='/view'/>
          <Route exact path='/view'>
            <TodoList
                     todos={todos}
                     editItem={editItem}
                     deleteItem={deleteItem}
                     addItem={addItem}
                     setCurrentPath={setCurrentPath}
                     edit={false}
            />
          </Route>
          <Route exact path='/edit'>
            <TodoList
                     todos={todos}
                     editItem={editItem}
                     deleteItem={deleteItem}
                     addItem={addItem}
                     setCurrentPath={setCurrentPath}
                     edit={true}
            />
          </Route>
        </Switch>
      </div>
    </Router>
)}

export default App;

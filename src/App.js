import React, {useState} from 'react'
import TodoList from './Todo/TodoList'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'

function App() {

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
    const dataIndex = todos.findIndex(item=>item.id === id)
    setTodos([...todos.slice(0, dataIndex), {id, title, content}, ...todos.slice(dataIndex + 1)])

    // setTodos
    //   (todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.title = title
    //       todo.content = content
    //     }
    //     return todo
    //   })
    // )
  }

  function deleteItem(ids) {
    if (Object.values(ids).length === 1) {
      const dataIndex = todos.findIndex(item => item.id === Object.values(ids)[0])
      setTodos([...todos.slice(0, dataIndex), ...todos.slice(dataIndex + 1)])
    } else {
      let temp = []
      todos.forEach(todo => {
            if (!ids.includes(todo.id)) {
              temp.push(todo)
            }
      })
      setTodos(temp)
    }
  }

  function addItem() {
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
          <NavLink to='/view' className='link' activeClassName='link-active'>
            lorems-readonly
          </NavLink>
          <NavLink to='/edit' className='link' activeClassName='link-active'>
            lorems-edit
          </NavLink>
        </div>
        <Switch>
          <Redirect exact from='/' to='/view'/>
          <Redirect exact from='/index.html' to='/view'/>
          <Route exact path='/view'>
            <TodoList
                     todos={todos}
                     editItem={editItem}
                     deleteItem={deleteItem}
                     addItem={addItem}
                     edit={false}
            />
          </Route>
          <Route exact path='/edit'>
            <TodoList
                     todos={todos}
                     editItem={editItem}
                     deleteItem={deleteItem}
                     addItem={addItem}
                     edit={true}
            />
          </Route>
        </Switch>
      </div>
    </Router>
)}

export default App;

import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {useLocation} from 'react-router-dom'

function TodoList({todos = [], id, edit, editItem, deleteItem, addItem, setCurrentPath}) {

  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname.split('/').slice(-1).pop())
  })

  const [check, setCheck] = useState(
    {}
  )

  const onSetActiveItems = (id) => {
    setCheck({...check, [id]: !check[id]})
  }

  return (
    <section className='list'>
      {todos.map((todo) => {
        return <TodoItem
          todo={todo}
          key={id}
          onSetActiveItems={onSetActiveItems}
          edit={edit}
          check={check}
          editItem={editItem}
        />
      })}
      {edit && <div className='list-btn'>
        <div className='checkbox-btn'>
          {Object.values(check).includes(true) && <>
            <button
                   onClick={() => setCheck({})}
            >сбросить
            </button>
            <button
                   onClick={() => {
                     deleteItem(Object.keys(check));
                     setCheck({})
                   }}
            >удалить
            </button>
          </>}
        </div>
        <div className='edit-btn'>
          <button
                 onClick={addItem}
          >добавить
          </button>
        </div>
      </div>}
    </section>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSetActiveItems: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
}

export default TodoList
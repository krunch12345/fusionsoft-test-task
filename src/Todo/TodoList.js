import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList({todos = [], edit, editItem, deleteItem, addItem}) {

  const [check, setCheck] = useState(
      {}
  )

  const onSetActiveItems = (id) => {
    setCheck({...check, [id]: !check[id]})
  }

  const onSetAllActiveItems = () => {
    const tempObj = {}
    todos.forEach(item => {
      tempObj[item.id] = true
    })
    setCheck(tempObj)
  }

  const [allActiveItemsBtn, setAllActiveItemsBtn] = useState(true)

  return (
      <section className='list'>
        {todos.map((todo) => {
          return <TodoItem
              todo={todo}
              key={`${edit ? 'edit' : 'view'}-${todo.id}`}
              onSetActiveItems={onSetActiveItems}
              edit={edit}
              check={check}
              editItem={editItem}
              setAllActiveItemsBtn={setAllActiveItemsBtn}
              allActiveItemsBtn={allActiveItemsBtn}
          />
        })}
        {edit && <div className='list-btn'>
          <div className='checkbox-btn'>

            <button
                onClick={() => {
                  onSetAllActiveItems();
                  setAllActiveItemsBtn(!allActiveItemsBtn)
                }}
            >выделить все
            </button>

            {Object.values(check).includes(true) && <>

              <button
                  onClick={() => {
                    setCheck({});
                    setAllActiveItemsBtn(true)
                  }}
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
  onSetActiveItems: PropTypes.func,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
}

export default TodoList
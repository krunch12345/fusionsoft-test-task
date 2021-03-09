import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo = {}, onSetActiveItems, edit, check, editItem, allActiveItemsBtn, setAllActiveItemsBtn}) {

  const {id, content, title} = todo
  const [showEdit, setShowEdit] = useState(false)
  const [tempTodoTitle, setTempTodoTitle] = useState('')
  const [tempTodoContent, setTempTodoContent] = useState('')
  // const [tempTodo, setTempTodo] = useState({})
  const [showContent, setShowContent] = useState(true)
  const [showCancelBtn, setCancelBtn] = useState(false)
  const [showEditBtn, setEditBtn] = useState(true)
  const isChanged = tempTodoTitle !== todo.title || tempTodoContent !== todo.content
  // const isChanged = tempTodo.title !== todo.title || tempTodo.content !== todo.content

  useEffect(() => {
    setTempTodoTitle(todo.title)
    setTempTodoContent(todo.content)
  }, [])

  // useEffect(() => {
  //   setTempTodo(todo)
  // }, [])

  return (
      <div className='item'>

        {edit &&
        <input
            className='checkbox-item'
            type='checkbox'
            checked={check[id] ? true : false}
            onChange={() => {
              onSetActiveItems(id);
              setAllActiveItemsBtn(true)
            }}
        />
        }

        <div className='item-text'>
        <span className='item-title'>
          {title}
        </span>

          {showContent === true &&
          <details className='details-description'>
            <summary className='summary-title'>Описание</summary>
            <p className='summary-description'>
              {content}
            </p>
          </details>
          }

          <div className={`edit-container ${showEdit ? 'show-desk' : 'item-description'}`}>
            <input
                value={tempTodoTitle}
                // value={tempTodo.title}
                onChange={(e) => setTempTodoTitle(e.target.value)}
                // onChange={(e) => setTempTodo({id, title: e.target.value, content: tempTodo.content})}
                type='text'
            /><br/>
            <textarea
                rows={5}
                value={tempTodoContent}
                // value={tempTodo.content}
                onChange={(e) => setTempTodoContent(e.target.value)}
                // onChange={(e) => setTempTodo({id, title: tempTodo.title, content: e.target.value})}
            />
          </div>
        </div>

        {edit &&
        <div className='item-btn'>

          {showEditBtn === true &&
          <button
              onClick={() => {
                setShowEdit(!showEdit);
                setCancelBtn(!showCancelBtn);
                setEditBtn(!showEditBtn);
                setShowContent(!showContent)
              }}
          >редактировать
          </button>
          }

          {showCancelBtn === true &&
          <button
              onClick={() => {
                setTempTodoTitle(todo.title);
                setTempTodoContent(todo.content);
                // setTempTodo(todo);
                setShowEdit(false);
                setCancelBtn(!showCancelBtn);
                setEditBtn(!showEditBtn);
                setShowContent(!showContent)
              }}
          >отменить
          </button>
          }

          {/*{JSON.stringify(todo) !== JSON.stringify(tempTodo) && <>*/}
          {isChanged &&
          <button
              onClick={() => {
                editItem({id:todo.id, title: tempTodoTitle, content: tempTodoContent});
                // editItem(tempTodo);
                setShowEdit(false)
                setCancelBtn(!showCancelBtn);
                setEditBtn(!showEditBtn);
                setShowContent(!showContent)
              }}
          >сохранить
          </button>
          }
        </div>
        }
      </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onSetActiveItems: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  check: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired
}

export default TodoItem
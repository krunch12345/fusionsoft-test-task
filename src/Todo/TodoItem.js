import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo = {}, onSetActiveItems, edit, check, editItem}) {

  const {id, content, title} = todo
  const [showEdit, setShowEdit] = useState(false)
  const [tempTodo, setTempTodo] = useState({})
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTempTodo(todo)
  }, [])

  return (
    <div className='item'>
      {edit &&
      <input
            type='checkbox'
            checked={check[id]}
            onChange={() => onSetActiveItems(id)}
      />}
      <div className='item-text'>
        <span className='item-title'>
          {title}
        </span>
        <p className={`${showContent ? 'show-desk' : 'item-description'}`}>
          {content}
        </p>
        <div className={`edit-container ${showEdit ? 'show-desk' : 'item-description'}`}>
          <input
                value={tempTodo.title}
                onChange={(e) => setTempTodo({id, title: e.target.value, content: tempTodo.content})}
                type='text'
          /><br/>
          <textarea
                   rows={5} value={tempTodo.content}
                   onChange={(e) => setTempTodo({id, title: tempTodo.title, content: e.target.value})}
          />
        </div>
      </div>
      <div className='item-btn'>
        <button
               onClick={() => setShowContent(!showContent)}
               className='btn'
               disabled={showEdit}
        >описание
        </button>
        {edit && <>
          <button
                 onClick={() => setShowEdit(!showEdit)}
                 disabled={showContent}
          >редактировать
          </button>
          {JSON.stringify(todo) !== JSON.stringify(tempTodo) && <>
            <button
                   onClick={() => {setTempTodo(todo); setShowEdit(false)}}
            >отменить
            </button>
            <button
                   onClick={() => {editItem(tempTodo); setShowEdit(false)}}
            >сохранить
            </button>
          </>}
        </>}
      </div>
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
import React, {useState} from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo={}, onSetActiveItems, edit, check, editItem}) {
  // const classes = []
  //
  // if (todo.showContent) {
  //   classes.push('show-desk')
  // }

  const {id, content, title} = todo

  const [showEdit, setShowEdit] = useState(false)

  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className='item'>
      {edit && <input type="checkbox" checked={check[id]} onChange={() => onSetActiveItems(id)}/>}
      <div className="item-text">
        <span className="item-title">
          {title}
        </span>
        <p className={`${showDescription ? 'show-desk' : 'item-description'}`}>
          {content}
        </p>
        <div className={`${showEdit ? 'show-desk' : 'item-description'}`}>
          <input value={title} onChange={(e) => editItem({id, title : e.target.value, content})} type="text"/><br/>
          <textarea rows={5} value={content} onChange={(e) => editItem({id, title, content : e.target.value})}/>
        </div>
      </div>
      <div className="item-btn">
        <button onClick={() => setShowDescription(!showDescription)} className='btn' disabled={showEdit}>описание</button>
        {edit && <button onClick={() => setShowEdit(!showEdit)} disabled={showDescription}>редактировать</button>}
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onSetActiveItems: PropTypes.func.isRequired
}

export default TodoItem
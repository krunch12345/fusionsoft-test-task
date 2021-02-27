import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, onClick}) {
  const classes = []

  if (todo.showContent) {
    classes.push('show-desk')
  }

  return (
    <div className='item'>
      <div className="item-text">
        <span className='item-title'>
          {todo.title}
        </span>
        <p className={'item-description' + classes.join(' ')}>
          {todo.content}
        </p>
      </div>
      <button onClick={() => onClick(todo.id)} className='btn'>описание</button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TodoItem
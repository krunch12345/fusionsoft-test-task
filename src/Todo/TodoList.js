import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <section className='list'>
      {props.todos.map((todo) => {
        return <TodoItem
          todo={todo}
          key={todo.id}
          onClick={props.onToggle}/>
      })}
    </section>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
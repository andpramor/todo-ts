import { useState } from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import type { ListOfTodos, TodoId, Todo as TodoType } from '../types.d.ts'
import { Todo } from './Todo.tsx'

interface Props {
  todos: ListOfTodos
  onTodoRemove: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  setTitle: (params: Omit<TodoType, 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onTodoRemove,
  onToggleCompleteTodo,
  setTitle
}) => {
  const [isEditing, setIsEditing] = useState('')
  const [parent] = useAutoAnimate()

  return (
    <ul className='todo-list' ref={parent}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id)
          }}
          className={`${todo.completed ? 'completed' : ''} ${
            isEditing === todo.id ? 'editing' : ''
          }`}
        >
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoRemove={onTodoRemove}
            onToggleCompleteTodo={onToggleCompleteTodo}
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  )
}

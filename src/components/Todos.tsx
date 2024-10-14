import type { ListOfTodos } from '../types.d.ts'
import { Todo } from './Todo.tsx'

interface Props {
  todos: ListOfTodos
  onTodoRemove: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onTodoRemove }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoRemove={onTodoRemove}
          />
        </li>
      ))}
    </ul>
  )
}

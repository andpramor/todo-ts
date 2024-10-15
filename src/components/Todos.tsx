import type { ListOfTodos, TodoId, Todo as TodoType } from '../types.d.ts'
import { Todo } from './Todo.tsx'

interface Props {
  todos: ListOfTodos
  onTodoRemove: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onTodoRemove,
  onToggleCompleteTodo
}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoRemove={onTodoRemove}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}

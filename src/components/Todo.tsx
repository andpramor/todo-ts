import type { TodoId, Todo as TodoType } from '../types'

interface Props extends TodoType {
  onTodoRemove: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onTodoRemove,
  onToggleCompleteTodo
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={handleChange}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onTodoRemove({ id })
        }}
      />
    </div>
  )
}

import type { Todo as TodoType } from '../types'

interface Props extends TodoType {
  onTodoRemove: (id: string) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onTodoRemove
}) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onTodoRemove(id)
        }}
      />
    </div>
  )
}

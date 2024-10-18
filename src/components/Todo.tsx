import { useEffect, useRef, useState } from 'react'
import type { TodoId, Todo as TodoType } from '../types'

interface Props extends TodoType {
  id: string
  title: string
  completed: boolean
  onTodoRemove: ({id}: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  setTitle: (params: { id: string; title: string }) => void
  isEditing: string
  setIsEditing: (completed: string) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onTodoRemove,
  onToggleCompleteTodo,
  setTitle,
  isEditing,
  setIsEditing
}) => {
  const [editedTitle, setEditedTitle] = useState(title)

  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if(editedTitle.trim() !== title) {
        setTitle({ id, title: editedTitle.trim()})
      }

      if(editedTitle.trim() === '') {
        onTodoRemove({id})
      }

      setIsEditing('')
    }

    if (event.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
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
            onTodoRemove({id})
          }}
        />
      </div>
      <input
        className='edit'
        ref={inputEditTitle}
        value={editedTitle}
        onChange={(event) => {
          setEditedTitle(event.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing('')
        }}
      />
    </>
  )
}

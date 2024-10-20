import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useTodos } from './hooks/useTodos'

const App = (): JSX.Element => {
  const {
    handleAddTodo,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleRemoveAllCompleted,
    handleUpdateTitle,
    activeCount,
    completedCount,
    filterSelected,
    todos
  } = useTodos()

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        onTodoRemove={handleRemove}
        onToggleCompleteTodo={handleCompleted}
        setTitle={handleUpdateTitle}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App

import TodosList from './components/TodosList'
import TodosProvider from './components/TodosProvider'
import './index.css'
function App() {

  return (
    <>
      <header>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </header>
      <div>
        <TodosProvider>
          <TodosList />
        </TodosProvider>
      </div>
    </>
  )
}

export default App

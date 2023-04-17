import { DishesProvider } from './context/DishesContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DishesList from './pages/DishesList'
import DishDetail from './pages/DishDetail'
import EditDish from './pages/EditDish'
import CreateDish from './pages/CreateDish'

function App() {


  return (
    <DishesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DishesList />} />
          <Route path='/dish' element={< DishDetail />} />
          <Route path='/create' element={< CreateDish />} />
          <Route path='/edit' element={< EditDish />} />
        </Routes>
      </BrowserRouter>
    </DishesProvider>
  )
}

export default App

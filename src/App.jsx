import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductContextProvider from './context/ProductContextProvider'
import ProductDashboard from './Pages/ProductDashboard'
import About from './Pages/About'

const App = () => {
  return (
    <Router>
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<ProductDashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ProductContextProvider>
    </Router>
  )
}

export default App

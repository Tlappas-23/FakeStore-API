import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

/**
 * App
 * Central layout + routing
 */
function App() {
  return (
    <Router>
      {/* Full-width navbar */}
      <NavigationBar />

      {/* Centered page content */}
      <Container className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

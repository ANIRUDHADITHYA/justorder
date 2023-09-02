import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Products from './Pages/Products';
import Product from './Pages/Products/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/products/" element={<Products />} />
          <Route exact path="/products/:product_id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

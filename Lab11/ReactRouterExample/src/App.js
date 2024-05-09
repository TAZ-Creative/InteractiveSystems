import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './components/Home'
import {ProductList} from './components/ProductList'
import { Contact } from './components/Contact'; // Import the Contact component
import './App.css';
import { Header } from './components/Header';
import { Admin } from './components/Admin';
import { ProductDetail } from './components/ProductDetail';
import { NotFound } from './components/Notfound';

function App() {

  const isAdmin =  true;

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/" />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <footer>FOOTER</footer>  
    </div>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Navbar from './layout/Navbar';
import Product from './pages/Products';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Products from './pages/Products';

export type Product = {
  id:	number;	
  title: string;	
  price: number;	
  description: string;	
  images: string[];
  category : {
    id: number;
    name: string;
    image: string;
  }
};


function App() {

  const [products, setProducts] = useState<Product[]>([]);

  const URL = "https://api.escuelajs.co/api/v1";
  // "https://api.escuelajs.co/api/v1/users"
  


  const getUsers = async () => {
    const response = await fetch(`${URL}/users`);
    const result = await response.json();
    console.log("users result", result);
  };

  const getAuth = async () => {
    const response = await fetch(`${URL}/auth/login`);
    const result = await response.json();
    console.log("login result", result);
  };

    const getProducts = async () => {
    const response = await fetch(`${URL}/products`);
    const result = await response.json();
    console.log("products result", result);
    if (result) {
      setProducts(result);
    }
  };

  useEffect(() => {
    getUsers();
    getProducts();
    getAuth();
  }, []);


  function handleClick(arg0: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="container">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products products={products} onClickProps={() => handleClick(1)} />}/>

              <Route element={<ProtectedRoute/>}>
                <Route path="/users" element={<Profile />} />
              </Route>

              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App

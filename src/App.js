import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import ProductDetails from './Products';
import NewProductForm from './NewProduct';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation/>
     <BrowserRouter>
     <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route  path="/Products" element={<ProductDetails/>}/>
      <Route path="/products/new" element={<NewProductForm/>} />

     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;



import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar"
import Nosotros from "./components/Nosotros";
import './index.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import  CartProvider  from "./context/CartContext";
import Carrito from "./components/Carrito"
import CheckOut from "./components/CheckOut";

function App() {

 


  return (
    <CartProvider>
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />}/>
        <Route path="/productos/:categoria" element={ <ItemListContainer />}/>
        <Route path="/productos" element={ <ItemListContainer />}/>
        <Route path="/item/:id" element={ <ItemDetailContainer/>}/>
        <Route path="/nosotros" element={ <Nosotros />}/>
        <Route path="/contacto" element={ <Contacto/>}/>
        <Route path="/carrito" element={ <Carrito/>}/>
        <Route path="/checkout" element={ <CheckOut/>}/>


      </Routes>
     
    </BrowserRouter>
    </CartProvider>
    
  )
}

export default App

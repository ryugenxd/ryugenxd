import Instroduction from "./components/Introduction"
import About from "./components/about";
import { useEffect } from "react";
import ProductList from "./components/productList";
import Contact from "./components/contact";

const App  = ()=>{
  useEffect(()=>{
    window.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  },[]);
  return (
  <div>
    <Instroduction/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
}

export default App;
import Home from './componet/home/Home'
import './App.css'
import Product_listing_page from './componet/product_listing_page/product_listing_page'
import {Routes ,Route} from "react-router-dom"
import Shopping_cart from './componet/Shopping_cart/Shopping_cart'
import OrderConfirmation from './componet/Order/OrderConfirmation'

function App() {
    

  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/product" element={<Product_listing_page/>}/>
          <Route path ='/product/cart' element={<Shopping_cart/>}/>
          <Route path='/product/OrderConfirmation' element={<OrderConfirmation/>} />
         
        </Routes>
      
    </>
  )
}

export default App

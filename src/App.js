import {useEffect, useState} from "react"
import './App.css';
import Cart from  "./components/Cart"
import logo from "./logo.png"
import Products from "./components/Products";
import filterList from "./components/filterList";


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  console.log(JSON.parse(localStorage.getItem("cart")))

  useEffect(() => {
    setProducts(filterList([], null))
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }, [])

  const addToCart = (item) => {
    const productList = [...cart]
    if (!productList.includes(item)){
      productList.push(item)
    }
    const index = productList.indexOf(item)
    productList[index].quantity++
    setCart(productList)
    localStorage.setItem("cart", JSON.stringify(productList))

    alert("Pizza added")
    console.log(index)
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart]
    const index = productList.indexOf(item)

    if (e === "+"){
      productList[index].quantity++
    } else {
      if (productList[index].quantity > 1){
        productList[index].quantity--
      } else{
        productList.splice(index, 1)
      }
    }
    localStorage.setItem("cart", JSON.stringify(productList))
    setCart(productList)
  }

  return (
      <div>
          <div className="header">
            <img src={logo} className="brand" alt=""/>
              <Cart products={cart} changeQuantity={changeQuantity} />
          </div>
        <Products products={products} addToCart={addToCart} />
      </div>
  );
}

export default App;

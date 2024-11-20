import { useState } from 'react';
import './App.css';
import Card1 from './component/Card1/Card1';
import Counter from './component/Counter/Counter';
import ProductForm from './component/ProductForm/ProductForm';
import Productlist from './component/Productlist/Productlist';

function App() {
  let productListInitial = [
    {productName: "Shampoo", price: 12, quantity: 100},
    {productName: "toys1", price: 20, quantity: 10},
    {productName: "food1", price: 10, quantity: 1000},
  ] 

  const [productList, setProductList] = useState (productListInitial)

  function addProduct (newProduct) {
    setProductList ([...productList, newProduct])
    console.log (productList)
  }
  

  return (
    <div className="App">
     This is React Component   
     <ProductForm addProduct={addProduct}/>
     <Productlist productList={productList} />
    </div>
  );
}

export default App;

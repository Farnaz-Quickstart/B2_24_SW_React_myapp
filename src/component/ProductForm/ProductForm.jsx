import React, { useState } from 'react'

export default function ProductForm({addProduct}) {

  const [product, setProduct] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  let handleClick = (e) => {
    e.preventDefault();
    let newProduct = {
      productName: product, 
      price: price, 
      quantity: quantity
    }
    console.log (newProduct)

    addProduct (newProduct)

  }
  return (
    <form method="get">
      <label>Product List: <input type="text" id="product" name="product" onChange={(e)=>setProduct (e.target.value)}  ></input></label><br/>
      <label>Product Price: <input type="text" id="price" name="price" onChange={(e)=>setPrice (e.target.value)} ></input></label><br/>
      <label>Product Quantity: <input type="text" id="quantity" name="quantity" onChange={(e)=>setQuantity (e.target.value)}></input></label><br/>
      <button type="submit" onClick={handleClick}>Add Product</button>
    </form>
  )
}

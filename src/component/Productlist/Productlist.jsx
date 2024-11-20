import React from 'react'

export default function Productlist({productList}) {

  return (
    <table>
      <tbody>
      {productList.map ((product, index)=>(
        <tr key={index}>
          <td>{product.productName}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
        </tr>      
      ))
    }
    </tbody>
    </table>
  )
}

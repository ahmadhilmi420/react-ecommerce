import React from 'react'
import {Product} from '../App'


function Products({products}: {products: Product[], onClickProps: () => void}) {
  return (
    <div >
        {products.map((product) => (
            <div key={product.id} style={{display:"flex", flexDirection:"row", gap: 10}}>
                <img src={product.images[0]} alt={product.title} />
                <h2>{product.title}</h2>
            </div>
        ))}
    </div>
  )
}

export default Products

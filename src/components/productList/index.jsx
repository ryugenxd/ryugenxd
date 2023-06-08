import React from 'react'
import './productList.css'
import Product from '../product'

const ProductList = () => {
  return (
    <div className='product-list'>
        <div className="product-list-texts">
            <h1 className="product-list-title">Lorem, ipsum dolor.</h1>
            <p className="product-list-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia fugiat laboriosam optio tenetur repudiandae sit?
            </p>
        </div>
        <div className="product-list-wrapper">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default ProductList
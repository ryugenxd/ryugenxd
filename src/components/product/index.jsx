import React from 'react'
import './product.css'
import portofolio from "../../assets/portofolio.png"

const Product = () => {
  return (
    <div className='product'>
      <div className="product-browser">
        <p className="product-cirle"></p>
        <p className="product-cirle"></p>
        <p className="product-cirle"></p>
      </div>
      <a href="http://github.com/ryugenxd" target='_blank' rel='noreferrer'>
        <img src={portofolio} alt="myimage" className='product-image' />
      </a>
    </div>
  )
}

export default Product
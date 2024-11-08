import React from 'react';
import './PopularProducts.css';
import tshirts from '../../assets/catalog/tshirts.png';
import sweatshirts from '../../assets/catalog/sweatshirts.png';
import hoodies from '../../assets/catalog/hoodies.png';
import blankets from '../../assets/catalog/blankets.png';
import babycloth from '../../assets/catalog/babycloth.png';
import supplements from '../../assets/catalog/supplements.png';

const PopularProducts = () => {
  return (
    <section className="popular-products">
      <div className='container'>
          <h2>Explore Printify's best</h2>
          <p className='description'>Here are some of the most popular product categories in our catalog.</p>
          <div className="product-list">
            <div className="product-item">
              <img src={tshirts} alt="T-shirts" />
              <p className="product-name">T-shirts</p>
            </div>
            <div className="product-item">
              <img src={sweatshirts} alt="Sweatshirts" />
              <p className="product-name">Sweatshirts</p>
            </div>
            <div className="product-item">
              <img src={hoodies} alt="Hoodies" />
              <p className="product-name">Hoodies</p>
            </div>
            <div className="product-item">
              <img src={blankets} alt="Blankets" />
              <p className="product-name">Blankets</p>
            </div>
            <div className="product-item">
              <img src={babycloth} alt="Baby Clothing" />
              <p className="product-name">Baby Clothing</p>
            </div>
            <div className="product-item">
              <img src={supplements} alt="Supplements" />
              <p className="product-name">Supplements</p>
              <span className="badge new">New!</span>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PopularProducts;

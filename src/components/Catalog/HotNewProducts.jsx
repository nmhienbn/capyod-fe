import React from 'react';
import './HotNewProducts.css';
import img1 from '../../assets/catalog/tough.jpg';
import img2 from '../../assets/catalog/slim.jpg';
import img3 from '../../assets/catalog/toughp.jpg';
import img4 from '../../assets/catalog/flexi.jpg';

const HotNewProducts = () => {
  return (
    <section className="hot-new-products">
      <div className='container'>
        <h2>Hot new products</h2>
        <p>Get ahead of the game with our newest offering of products that just hit our catalog.</p>
        <div className="product-list">
          <div className="hot-new-item">
            <img src={img1} alt="Slim Phone Cases" />
            <p className="product-name">Slim Phone Cases</p>
            <span className="badge new">New</span>
          </div>
          <div className="hot-new-item">
            <img src={img2} alt="Tough Cases" />
            <p className="product-name">Tough Cases</p>
            <span className="badge bestseller">Bestseller</span>
          </div>
          <div className="hot-new-item">
            <img src={img3} alt="Tough Phone Cases" />
            <p className="product-name">Tough Phone Cases</p>
            <span className="badge new">New</span>
          </div>
          <div className="hot-new-item">
            <img src={img4} alt="Lightweight Hoodie" />
            <p className="product-name">Unisex Lightweight Hooded Sweatshirt</p>
            <span className="badge new">New</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotNewProducts;

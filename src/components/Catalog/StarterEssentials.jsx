import React from 'react';
import './StarterEssentials.css';
import img1 from '../../assets/catalog/tshirt1.jpg';
import img1Hover from '../../assets/catalog/tshirt2.jpg';
import img2 from '../../assets/catalog/blanket1.png';
import img2Hover from '../../assets/catalog/blanket2.jpg';
import img3 from '../../assets/catalog/tshirt3.jpg';
import img3Hover from '../../assets/catalog/tshirt4.png';
import img4 from '../../assets/catalog/sticker1.jpg';
import img4Hover from '../../assets/catalog/sticker2.png';

const StarterEssentials = () => {
  return (
    <section className="starter-essentials">
      <div className='container'>
        <h2>Starter essentials</h2>
        <p>Kickstart your business with these handpicked products that are ideal for new sellers.</p>
        <div className="product-list">
          <div className="starter-item">
            <img src={img1} alt="T-shirt" className="main-image" />
            <img src={img1Hover} alt="T-shirt hover" className="hover-image" />
            <p className="product-name">Unisex Heavy Blend™ Crewneck Sweatshirt</p>
            <span className="badge bestseller">Bestseller</span>
            <p className="additional-info">By Comfort Colors® • 1566</p>
            <p className="price">From USD 29.72</p>
            <p className="premium-price">From USD 22.99 with Printify Premium</p>
            <p className="additional-info">6 sizes • 20 colors • 4 print providers</p>
          </div>
          <div className="starter-item">
            <img src={img2} alt="Hooded Sweatshirt" className="main-image" />
            <img src={img2Hover} alt="Hooded Sweatshirt hover" className="hover-image" />
            <p className="product-name">Velveteen Plush Blanket</p>
            <span className="badge bestseller">Bestseller</span>
            <p className="additional-info">By Generic brand</p>
            <p className="price">From USD 12.91</p>
            <p className="premium-price">From USD 9.49 with Printify Premium</p>
            <p className="additional-info">3 sizes • 2 print providers</p>
          </div>
          <div className="starter-item">
            <img src={img3} alt="Short Sleeve Tee" className="main-image" />
            <img src={img3Hover} alt="Short Sleeve Tee hover" className="hover-image" />
            <p className="product-name">Unisex Heavy Blend™ Hooded Sweatshirt</p>
            <span className="badge bestseller">Bestseller</span>
            <p className="additional-info">By Gildan • 18500</p>
            <p className="price">From USD 21.34</p>
            <p className="premium-price">From USD 15.72 with Printify Premium</p>
            <p className="additional-info">8 sizes • 38 colors • 16 print providers</p>
          </div>
          <div className="starter-item">
            <img src={img4} alt="Kiss-Cut Stickers" className="main-image" />
            <img src={img4Hover} alt="Kiss-Cut Stickers hover" className="hover-image" />
            <p className="product-name">Kiss-Cut Stickers</p>
            <span className="badge bestseller">Bestseller</span>
            <p className="additional-info">By Generic brand</p>
            <p className="price">From USD 1.45</p>
            <p className="premium-price">From USD 1.07 with Printify Premium</p>
            <p className="additional-info">4 sizes • SPOKE Custom Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterEssentials;

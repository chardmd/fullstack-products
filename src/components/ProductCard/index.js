/**
 *
 * ProductCard
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./ProductCard.css";

class ProductCard extends React.Component {
  render() {
    const { imageUrl, title, description, price } = this.props;
    return (
      <div className="ProductCard">
        <div className="card">
          <div className="card-content">
            <figure className="image is-4by3">
              <img src={imageUrl} alt="product" className="imageUrl" />
            </figure>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <p className="title">{title}</p>
              <p className="description">{description}</p>
              <p className="price">{price}</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;

/**
 *
 * ProductList
 *
 */

import React from "react";
import { connect } from "react-redux";
import { getProducts } from "./actions";
import "./ProductList.css";

//components
import Header from "../../components/Header";
import SelectFilter from "../../components/SelectFilter";
import ProductCard from "../../components/ProductCard";
import Paginate from "../../components/Paginate";
export class ProductList extends React.Component {
  componentDidMount() {
    const { limit, activePage } = this.props;
    const pageNumber = this.props.match.params.pageNumber || activePage;
    this.props.onGetProducts(pageNumber, limit);
  }

  render() {
    const { products, totalCount, activePage, limit } = this.props;
    return (
      <div className="ProductList container">
        <div className="header">
          <Header title="All Products" subheading={`${totalCount} Products`} />
          <div>
            <SelectFilter
              onGetData={this.props.onGetProducts}
              activePage={activePage}
            />
          </div>
        </div>
        <hr className="divider" />
        <div className="items">
          {products.map(product => (
            <ProductCard
              key={product.id}
              imageUrl={product.product_image}
              title={product.product_name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <div className="bottom">
          <Paginate
            totalItemsCount={totalCount}
            activePage={activePage}
            itemsCountPerPage={limit}
            onGetData={this.props.onGetProducts}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productList.data,
  totalCount: state.productList.total,
  activePage: state.productList.page,
  limit: state.productList.limit,
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: (pageNumber, limit) =>
    dispatch(getProducts(pageNumber, limit)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

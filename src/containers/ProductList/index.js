/**
 *
 * ProductList
 *
 */

import React from "react";
import { connect } from "react-redux";
import parseQueryString from "query-string";
import { getProducts } from "./actions";
import "./ProductList.css";

//components
import Header from "../../components/Header";
import SelectFilter from "../../components/SelectFilter";
import ProductCard from "../../components/ProductCard";
import Paginate from "../../components/Paginate";
export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.getFilterParam = this.getFilterParam.bind(this);
  }

  getFilterParam() {
    const queryString = this.props.location.search;
    const queryParams = parseQueryString.parse(queryString);
    const filter = isNaN(queryParams.filter)
      ? this.props.limit
      : queryParams.filter;
    return filter;
  }

  componentDidMount() {
    const pageNumber =
      this.props.match.params.pageNumber || this.props.activePage;
    const filter = this.getFilterParam();
    this.props.onGetProducts(pageNumber, filter);
  }

  render() {
    const { products, totalCount, activePage } = this.props;
    const filter = this.getFilterParam();
    return (
      <div className="ProductList container">
        <div className="header">
          <Header title="All Products" subheading={`${totalCount} Products`} />
          <div>
            <SelectFilter
              onGetData={this.props.onGetProducts}
              filter={parseInt(filter, 10)}
              selectedValue={activePage}
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
            itemsCountPerPage={parseInt(filter, 10)}
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

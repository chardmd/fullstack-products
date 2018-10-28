/**
 *
 * Paginate
 *
 */

import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

import "./Paginate.css";

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber }, () => {
      this.props.onGetData(pageNumber, this.props.itemsCountPerPage);
    });
  }

  render() {
    const { totalItemsCount, activePage, itemsCountPerPage } = this.props;
    return (
      <div className="Paginate">
        <Pagination
          activePage={activePage}
          prevPageText="< Previous page"
          nextPageText="Next page >"
          hideFirstLastPages
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

Paginate.propTypes = {
  activePage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onGetData: PropTypes.func.isRequired,
};

export default Paginate;

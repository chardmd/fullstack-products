/**
 *
 * SelectFilter
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./SelectFilter.css";

class SelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const selectedValue = this.props.selectedValue;
    const limit = parseInt(e.target.value, 10);
    this.setState(
      {
        filter: limit,
      },
      () => {
        this.props.onGetData(selectedValue, limit);
      }
    );
  }
  render() {
    return (
      <div className="SelectFilter">
        <select onChange={this.handleChange} value={this.state.filter}>
          <option value="8">8 per page</option>
          <option value="16">16 per page</option>
          <option value="32">32 per page</option>
          <option value="64">64 per page</option>
        </select>
      </div>
    );
  }
}

SelectFilter.propTypes = {
  onGetData: PropTypes.func.isRequired,
  filter: PropTypes.number,
  selectedValue: PropTypes.number,
};

export default SelectFilter;

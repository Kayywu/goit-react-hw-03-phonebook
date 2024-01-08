import React, { Component } from 'react';
import styles from './Filter.module.css'; 

class Filter extends Component {
  state = {
    filterValue: '',
  };

   /* componentDidMount() {
    const storedFilter = localStorage.getItem('filterValue');
    if (storedFilter) {
      this.setState({ filterValue: storedFilter });
      this.props.onChange(storedFilter);
    }
  } */

  componentDidUpdate(prevProps, prevState) {
    const { filterValue } = this.state;
    if (prevState.fliterValue !== filterValue) {
      this.props.onChange(filterValue);
  } 
}

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ filterValue: value });
  };


  render() {
    const { filterValue } = this.state;

    return (
      <input
        type="text"
        value={filterValue}
        onChange={this.handleChange}
        className={styles.searchInput}
        placeholder="Search contacts..."
      />
    );
  }
}

export default Filter;
import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import { getFilter } from '../../redux/phonebook/contacts-selectors';

const Filter = ({ valueState, filterByName }) => {
  return (
    <label className="filter">
      Filter by name:
      <input type="text" value={valueState} onChange={filterByName} />
    </label>
  );
};

const mapStateToProps = state => ({
  valueState: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  filterByName: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {SortingTypes} from '../../consts';

function Sorting(props) {
  const {activeSorting, onSortingChange} = props;

  const [isSortingOpen, setisSortingOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={
          () => setisSortingOpen((prevState) => !prevState)
        }
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isSortingOpen ? ' places__options--opened' : ''}`}>
        {Object.values(SortingTypes).map((sortingType) => (
          <li
            className={`places__option${sortingType === activeSorting ? ' places__option--active' : ''}`}
            key={sortingType}
            tabIndex="0"
            onClick={
              () => {
                onSortingChange(sortingType);
                setisSortingOpen(false);
              }
            }
          >
            {sortingType}
          </li>
        ))}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingChange(sortingType) {
    dispatch(ActionCreator.changeSorting(sortingType));
  },
});

export {Sorting};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

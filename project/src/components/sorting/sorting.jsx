import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeSorting} from '../../store/action';
import {SortingTypes} from '../../consts';
import {getActiveSorting} from '../../store/offers/selectors';

function Sorting() {
  const activeSorting = useSelector(getActiveSorting);

  const dispatch = useDispatch();

  const onSortingChange = (sortingType) => {
    dispatch(changeSorting(sortingType));
  };

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

export default Sorting;

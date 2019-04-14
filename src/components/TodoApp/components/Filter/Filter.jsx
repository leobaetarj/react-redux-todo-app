/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

export const Filter = ({ filter, onSetVisibilityFilter }) => {
  const filters = [
    {
      label: 'Show All',
      value: SHOW_ALL,
    },
    {
      label: 'Show Completed',
      value: SHOW_COMPLETED,
    },
  ];

  const setClassNames = value => classNames('filter', {
    'filter-active': value === filter,
  });

  return (
    <>
      <h4>Filter</h4>
      <ul>
        {filters.map(f => (
          <li
            key={f.value}
            className={setClassNames(f.value)}
            onClick={() => onSetVisibilityFilter(f.value)}
          >
            {f.label}
          </li>
        ))}
      </ul>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetVisibilityFilter: PropTypes.func.isRequired,
};

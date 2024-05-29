import React from 'react';
import PropTypes from 'prop-types';
import useComponentOverrides from '../../hooks/useComponentOverrides';
import useStaticSelectStyles from './StaticSelect.styles';

const StaticSelect = ({
  className = '',
  style = {},
  options = [],
  placeholder = '',
  onChange,
  ...props
}) => {
  const { classNames, styleOverrides } = useComponentOverrides('StaticSelect');
  const styles = useStaticSelectStyles();
  return (
    <select
      css={styles.main}
      className={`ec-static-select ${className} ${classNames}`}
      style={{ ...styleOverrides, ...style }}
      onChange={onChange}
      {...props}
    >
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

StaticSelect.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

export default StaticSelect;

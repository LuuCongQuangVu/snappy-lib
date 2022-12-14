import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  style: PropTypes.object,
  styleTab: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arrayActive: PropTypes.array,
};

const defaultProps = {
  options: [
    { value: 1, label: 'SnappyExpress1' },
    { value: 2, label: 'SnappyExpress2' },
    { value: 3, label: 'SnappyExpress3' },
    { value: 4, label: 'SnappyExpress4' },
  ],
  onClick: (value, label) => console.log(value, label),
  style: {},
  styleTab: {},
  className: '',
  value: 1,
  arrayActive: [],
};

const SnyTabs = ({
  options,
  onClick,
  style,
  styleTab,
  className,
  value,
  arrayActive,
}) => {
  return (
    <div className={`sny-tabs ${className}`} style={style}>
      {options.map((item, idx) => (
        <div
          key={idx}
          onClick={() => onClick(item.value, item.label)}
          className={`tab ${
            (item.value === value || arrayActive.includes(item.value)) &&
            'tab-active'
          }`}
          style={styleTab}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

SnyTabs.propTypes = propTypes;

SnyTabs.defaultProps = defaultProps;

export default SnyTabs;

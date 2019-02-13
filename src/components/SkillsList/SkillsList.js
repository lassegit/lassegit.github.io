import PropTypes from 'prop-types';
import React from 'react';

const SkillsList = ({ title, list }) => (
  <div className="skills-list">
    <h4 className="title">{title}</h4>
    <ul>
      {list.map((item, index) => (
        <li key={index} className="item">
          {item.icon && <img alt="" src={item.icon} className="item-logo" />}
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

SkillsList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ).isRequired,
};

export default SkillsList;

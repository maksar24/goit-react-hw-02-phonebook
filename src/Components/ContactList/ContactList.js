import React from "react";
import PropTypes from "prop-types";

export const ContactList = ({ options, searchValue }) => {
  return (
    <ul>
      {options
        .filter((el) => {
          return el.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
};

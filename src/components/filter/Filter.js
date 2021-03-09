import React from "react";
import s from "./filter.module.css";

const Filter = ({ changeFilter, filter }) => {
  return (
    <>
      <label>
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </>
  );
};

export default Filter;

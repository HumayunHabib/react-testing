import React from "react";

const Input = (props) => {
  const { id, label, onChange, help } = props;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input id={id} onChange={onChange} className="form-control" />
      <span>{help}</span>
    </div>
  );
};

export default Input;

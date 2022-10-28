import React from "react";

const Input = (props) => {
  const { id, label, onChange, help } = props;

  let inputClass = "form-control";
  if (help) {
    inputClass += " is-invalid";
  }
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className={inputClass} onChange={onChange} />
      <span data-testid="custom-element" className={"invalid-feedback"}>
        {help}
      </span>
    </div>
  );
};

export default Input;

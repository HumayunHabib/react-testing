import React from "react";

const Input = (props) => {
  const { id, label, onChange, help, type } = props;

  let inputClass = "form-control";
  if (help) {
    inputClass += " is-invalid";
  }
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={inputClass}
        onChange={onChange}
        type={type || "text"}
      />

      <span data-testid="custom-element" className={"invalid-feedback"}>
        {help}
      </span>
    </div>
  );
};

export default Input;

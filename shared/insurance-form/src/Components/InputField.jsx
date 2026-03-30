import React from "react";

const InputField = ({ label, type = "text", id, name, placeholder, options = [], rows = 4 }) => {
    return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      {type === "textarea" ? (
        <textarea id={id} name={name} placeholder={placeholder} rows={rows} />

      ) : type === "select" ? (
        <select id={id} name={name}>
          {options.map((option, index) => (
            <option key={index} value={option.value !== undefined ? option.value : option}>
              {option.label || option}
            </option>
          ))}
        </select>
 
      ) : (
        <input type={type} id={id} name={name} placeholder={placeholder} />
      )}

    </div>

    )
};

export default InputField;
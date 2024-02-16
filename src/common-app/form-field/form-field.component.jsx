import './form-field.styles.css';



export const FormField = ({
  type,
  customStyles,
  required,
  idName,
  txtLabel,
  handleChange,
  value,
  pl
}) => {
  return (
    <div className={`containerFormField ${customStyles}`}>
      <label htmlFor={idName}>{txtLabel}</label> 
      <input
        type={type}
        id={idName}
        name={idName}
        required={required}
        onChange={handleChange}
        placeholder={pl}
        value={value}
      />
    </div>
  );
};

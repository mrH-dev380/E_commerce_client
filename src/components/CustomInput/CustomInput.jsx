/* eslint-disable react/prop-types */
const CustomInput = ({
  type,
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        className={`form-control`}
        id={id}
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CustomInput

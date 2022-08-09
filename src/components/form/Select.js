import styles from "./Select.module.css";
function Select({options, text, name, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select  value={value || ''} required name={name} id={name} onChange={handleOnChange}>
      <option>Selecione uma opção</option>
        {options.map(
          (option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))}
      </select>
    </div>
  );
}

export default Select;

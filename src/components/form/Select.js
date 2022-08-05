import styles from "./Select.module.css";
function Select({options, text, name, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} defaultValue="default">
        <option disabled value="default">Selecione uma opção</option>
        {options.map(
          (option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))}
      </select>
    </div>
  );
}

export default Select;
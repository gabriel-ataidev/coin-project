import styles from "./Select.module.css";
function Select({options, text, name, placeholder, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option disabled selected>Selecione uma opção</option>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
}

export default Select;

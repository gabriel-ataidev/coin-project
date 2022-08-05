import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <span>Costs &copy; 2021</span>
      </footer>
    </div>
  );
}

export default Footer;

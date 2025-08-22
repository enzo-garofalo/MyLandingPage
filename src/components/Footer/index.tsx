import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>Made with love by</p>
        <p className={styles.name}>Enzo Garofalo</p>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/19983484407" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

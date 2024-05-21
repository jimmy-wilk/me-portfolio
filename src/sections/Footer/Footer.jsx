import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.footerBottom}>
      <p>&copy; {new Date().getDate().toString().padStart(2, '0')}/{(new Date().getMonth() + 1).toString().padStart(2, '0')}/{new Date().getFullYear()}</p>

      </div>
    </section>
  );
}

export default Footer;

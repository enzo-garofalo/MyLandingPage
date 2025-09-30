import styles from "./Funil.module.scss";

const Funil = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.first }`}>
        <span>Speaking</span>
      </div>
      <div className={`${styles.card} ${styles.second}`}>
        <span>Writing</span>
      </div>
      <div className={`${styles.card} ${styles.third}`}>
        <span>Grammar</span>
      </div>
    </div>
  );
};

export default Funil;

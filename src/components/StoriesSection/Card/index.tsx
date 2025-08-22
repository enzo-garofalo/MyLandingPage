import styles from "./Card.module.scss";

type CardProps = {
  studentName: string;
  story: string;
}

const Card = ({ studentName, story }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{studentName}</h3>
      <p className={styles.story}>{story}</p>
    </div>
  )
}

export default Card
import MainTitle from "../../common/MainTitle"
import stylesSpan from "../../common/MainTitle/MainTitle.module.scss"
import Card from "./Card"
import styles from "./StoriesSection.module.scss"

const StoriesSection = () => {
  return (
    <div className={styles.section}>
      <MainTitle className={`${stylesSpan.mainTitleLeft} ${styles.title}`}>
        Histórias Reais:
      </MainTitle>
      <p className={styles.subtitle}>
        Descubra como nossos alunos evoluíram no inglês e alcançaram seus objetivos.
      </p>
      <div className={styles.cardContainer}>
        <Card studentName="Cássio" story="Melhorei minha fluência em 6 meses.Melhorei minha fluência em 6 meses.Melhorei minha fluência em 6 meses." />
        <Card studentName="Sócrates" story="Consegui minha primeira entrevista em inglês.primeira entrevista em inglês.primeira entrevista em inglês." />
        <Card studentName="Ronaldo" story="Hoje consigo dar aulas particulares em inglês!primeira entrevista em inglês.primeira entrevista em inglês." />
      </div>
    </div>
  )
}

export default StoriesSection
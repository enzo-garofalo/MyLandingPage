import MainTitle from '../../common/MainTitle'
import stylesSpan from "../../common/MainTitle/MainTitle.module.scss"
import SecondTitle from '../../common/SecondTitle'
import SubtitleText from '../../common/SubTitleText'
import Funil from './Funil'
import styles from "./MetodologySection.module.scss"

const MetodologySection = () => {
    return (
        <>
            <MainTitle className={`${stylesSpan.mainTitleRight} ${styles.mainTitle}`} >
                METODOLOGIA <br />
                <span className={stylesSpan.highlight}>INOVADORA!</span>
            </MainTitle>

            <div className={styles.contentWrap}>
                <Funil />

                <div className={styles.textWrap}>
                    <SecondTitle> 
                        Do <span className={stylesSpan.highlight}>básico</span> à <span className={stylesSpan.highlight}> fluência.</span>
                    </SecondTitle>
                    <SubtitleText>
                        conversação, escrita e gramática aplicadas de forma natural e prática.
                    </SubtitleText>   
                </div>
            </div>   
        </>
    )
}

export default MetodologySection
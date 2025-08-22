import MainTitle from "../MainTitle"
import stylesSpan from "../MainTitle/MainTitle.module.scss"
import Form from "./Form"
import styles from "./SignUpSection.module.scss"

const SignUpSection = () => {
    return (
        <>
            <div className={styles.sectionWrap}>
                <MainTitle className={stylesSpan.mainTitleLeft} >
                    SEU INGLÊS  <br />
                    FLUENTE     <br />
                    COMEÇA      <br />
                    <span className={stylesSpan.highlight}>AGORA!</span>
                </MainTitle>
                <Form />
            </div>
        </>
    )
}

export default SignUpSection
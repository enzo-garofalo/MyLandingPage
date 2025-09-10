import Styles from "../components/common/StudentForm/Form.module.scss"
import StudentForm from "../components/common/StudentForm/StudentForm"

export default function StudentFormPage() {
    return (
        <>

            <div className={Styles.textWrapper}>
                <span className={Styles.title}>Quanto tempo heim?</span>
                <span className={Styles.SecondTitle}>Hello, My dear student! 😃</span>
                <span className={Styles.thirdText}>
                    Estou preparando um mural especial enzo para vocês.
                </span>
                <span className={Styles.thirdText}>
                    Quer participar? É só preencher o formulário!
                </span>
            </div>
            <StudentForm />
        </>
    )
}
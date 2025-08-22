import Button from '../../Button'
import Input from '../../Input/Input'
import styles from './Form.module.scss'

const Form = () => {
    return (
        <form className={styles.customForm}>
            <span className={styles.title}>Inscreva-se</span>
            <span className={styles.SecondTitle}>Ganhe uma aula experimental e descubra seu potencial</span>
            <div className={styles.inputWrap}>
                <Input placeholder='Nome' />
                <Input placeholder='Telefone' />
                <Button>Let`s Go!</Button>
            </div>
        </form>
    )
}

export default Form
import Button from '../Button';
import Styles from './Alert.module.scss';

type AlertProps = {
    message: string;
    onClose: () => void;
}


const Alert = ({ message, onClose }: AlertProps) => {
    if (!message) return null;

    return (
        <div className={Styles.alertContainer}>
            <span className={Styles.title}>Opa, Tem algo de errado...</span>
            <span className={Styles.message}>{message}</span>
            <Button onClick={onClose}>X</Button>
        </div>
    )
}

export default Alert
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Styles from './ThankYouPage.module.scss';

const ThankYouPage = () => {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>Obrigado por responder!</h1>
            <p className={Styles.message}>Sua resposta foi enviada com sucesso.</p>
            <Link to="/">
                <Button>Voltar para a Home</Button>
            </Link>
        </div>
    );
}

export default ThankYouPage;
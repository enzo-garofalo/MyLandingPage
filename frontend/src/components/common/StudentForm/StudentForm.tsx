import { useState } from 'react';
import Button from '../Button';
import Styles from './Form.module.scss';
import FormInput from './FormInput';
import FormRadioButton from './FormRadioButton';
import FormTextArea from './FormTextArea';
const StudentForm = () => {
	const [selected, setSelected] = useState('opcao1');

	return (
		<>
			<div className={Styles.textWrapper}>
				<span className={Styles.title}>Quanto tempo heim?</span>
				<span className={Styles.SecondTitle}>Hello, My dear student! 😃</span>
				<span className={Styles.thirdText}>
					Estou preparando um mural especial para vocês.
				</span>
				<span className={Styles.thirdText}>
					Quer participar? É só preencher o formulário!
				</span>
			</div>

			<form className={Styles.formContainer}>
				<span className={Styles.title}>Qual é o seu nome?</span>
				<span className={Styles.thirdText}>
					Para que eu possa te identificar 💡
				</span>
				<FormInput placeholder="Nome" />

				<span className={Styles.title}>O que você achou das aulas?</span>
				<span className={Styles.thirdText}>
					Conte se foi divertido, difícil, tranquilo... 🤔
				</span>
				<FormTextArea name="aulas" id="aulas" />

				<span className={Styles.title}>O que você mais gostou?</span>
				<span className={Styles.thirdText}>
					Pode ser uma atividade, um tema, até um momento especial. ✨
				</span>
				<FormTextArea name="gostou" id="gostou" />

				<span className={Styles.title}>O que achou da metodologia?</span>
				<span className={Styles.thirdText}>
					Queremos saber se a forma de ensinar funcionou bem para você 📚
				</span>
				<FormTextArea name="metodologia" id="metodologia" />

				<span className={Styles.title}>Você recomendaria para um amigo?</span>
				<span className={Styles.thirdText}>Sim ou não, seja sincero 😉</span>
				<FormRadioButton
					name="grupo1"
					value="opcao1"
					checked={selected === "opcao1"}
					onChange={setSelected}
					label="Sim"
				/>
				<FormRadioButton
					name="grupo1"
					value="opcao2"
					checked={selected === "opcao2"}
					onChange={setSelected}
					label="Não"
				/>

				<Button>Let's Go!</Button>
			</form>

		</>
	)
}

export default StudentForm
import { useState } from 'react';
import type { AnswerData } from '../../../services/studentFormService';
import { submitForm } from '../../../services/studentFormService';
import Alert from '../Alert';
import Button from '../Button';
import Styles from './Form.module.scss';
import FormInput from './FormInput';
import FormRadioButton from './FormRadioButton';
import FormTextArea from './FormTextArea';


const validateForm = (formData: AnswerData): string | null => {
	if (!formData.name.trim()) return "Por favor, preencha o campo Nome.";
	if (!formData.HowWereClasses.trim()) return "Por favor, conte o que achou das aulas.";
	if (!formData.WhatDidYouLikeMost.trim()) return "Por favor, diga o que mais gostou.";
	if (!formData.OpnionOnMetodology.trim()) return "Por favor, dê sua opinião sobre a metodologia.";
	return null; // tudo ok
};


const StudentForm = () => {
	const [alertMessage, setAlertMessage] = useState<string>("");
	const [selected, setSelected] = useState<string>('opcao1');
	const [formData, setFormData] = useState<AnswerData>({
		name: "",
		HowWereClasses: "",
		WhatDidYouLikeMost: "",
		OpnionOnMetodology: "",
		WouldRecommend: true,
		SubmissionDate: new Date().toISOString(),
	});

	const handleChange = <K extends keyof AnswerData>(field: K, value: AnswerData[K]) => {
		setFormData(prev => ({ ...prev, [field]: value } as AnswerData));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const errorMessage = validateForm(formData);
		if (errorMessage) {
			setAlertMessage(errorMessage);
			console.log(errorMessage) 
			return; 
		}

		try {
			const response = await submitForm(formData);
			setAlertMessage(`Formulário enviado com sucesso! ID: ${response.id}`);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error);
				setAlertMessage(error.message || "Erro ao enviar formulário. Tente novamente.");
			} else {
				console.error("An unexpected error occurred");
				setAlertMessage("Ocorreu um erro inesperado. Tente novamente.");
			}
		}
	};

	return (
		<>
			<Alert message={alertMessage} onClose={() => setAlertMessage("")} />

			<form className={Styles.formContainer} onSubmit={handleSubmit}>
				<span className={Styles.title}>Qual é o seu nome?</span>
				<span className={Styles.thirdText}>
					Para que eu possa te identificar 💡
				</span>
				<FormInput placeholder="Nome"
					value={formData.name}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleChange("name", e.target.value)}

				/>

				<span className={Styles.title}>O que você achou das aulas?</span>
				<span className={Styles.thirdText}>
					Conte se foi divertido, difícil, tranquilo... 🤔
				</span>
				<FormTextArea name="aulas" id="aulas"
					value={formData.HowWereClasses}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						handleChange("HowWereClasses", e.target.value)}
				/>

				<span className={Styles.title}>O que você mais gostou?</span>
				<span className={Styles.thirdText}>
					Pode ser uma atividade, um tema, até um momento especial. ✨
				</span>
				<FormTextArea name="gostou" id="gostou"
					value={formData.WhatDidYouLikeMost}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						handleChange("WhatDidYouLikeMost", e.target.value)}
				/>

				<span className={Styles.title}>O que achou da metodologia?</span>
				<span className={Styles.thirdText}>
					Queremos saber se a forma de ensinar funcionou bem para você 📚
				</span>
				<FormTextArea name="metodologia" id="metodologia"
					value={formData.OpnionOnMetodology}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						handleChange("OpnionOnMetodology", e.target.value)
					}
				/>

				<span className={Styles.title}>Você recomendaria para um amigo?</span>
				<span className={Styles.thirdText}>Sim ou não, seja sincero 😉</span>
				<FormRadioButton
					name="grupo1"
					value="opcao1"
					checked={selected === 'opcao1'}
					onChange={() => {
						setSelected('opcao1');
						handleChange('WouldRecommend', true);
					}}
					label="Sim"
				/>
				<FormRadioButton
					name="grupo1"
					value="opcao2"
					checked={selected === 'opcao2'}
					onChange={() => {
						setSelected('opcao2');
						handleChange('WouldRecommend', false);
					}}
					label="Não"
				/>

				<Button>Let's Go!</Button>
			</form>
		</>
	)
}

export default StudentForm
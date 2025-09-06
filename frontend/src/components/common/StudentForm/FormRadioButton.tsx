import Styles from './Form.module.scss';

type RadioButtonProps = {
    name: string;
    value: string;
    checked?: boolean;
    onChange: (value: string) => void;
    label?: string;
};

const FormRadioButton = ({ name, value, checked, onChange, label }: RadioButtonProps) => {
    const handleChange = () => {
        console.log(value);
        onChange(value);
    }

    const labelClass = `${Styles.inputLabel} ${checked ? Styles.checked : ''}`;

    return (
        <label className={labelClass}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            {label && <span>{label}</span>}
        </label>
    )
}

export default FormRadioButton
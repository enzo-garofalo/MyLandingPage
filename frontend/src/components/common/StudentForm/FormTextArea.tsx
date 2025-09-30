import React from "react";
import Styles from './Form.module.scss';

type FormTextAreaProps = Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "className"
> & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextArea: React.FC<FormTextAreaProps> = ({
    value, onChange, ... rest
}) => {
    return (
        <textarea
            className={Styles.customTextArea}
            value={value}
            onChange={onChange}
            {...rest}
        />
    );
};

export default FormTextArea
import React from "react";
import Styles from './Form.module.scss';

type textAreaProps = {
    name: string;
    id: string;
    children?: React.ReactNode;
}

const FormTextArea = ({name, id, children} :textAreaProps) => {
    return (
        <textarea className={Styles.customTextArea} name={name} id={id}>{children}</textarea>
    )
}

export default FormTextArea
import React from 'react'
import styles from './Form.module.scss'

const FormInput = ({...rest} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.customInput} {...rest} />
  )
}

export default FormInput
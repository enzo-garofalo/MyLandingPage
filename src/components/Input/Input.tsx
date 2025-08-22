import React from 'react'
import styles from './Input.module.scss'

const Input = ({...rest} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.customInput} {...rest} />
  )
}

export default Input
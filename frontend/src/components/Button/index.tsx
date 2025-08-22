import React from 'react'
import styles from './Button.module.scss'


const Button = ({children, ...rest} : React.ButtonHTMLAttributes<HTMLButtonElement> ) => {
  return (
    <button className={styles.btn} {...rest}> {children} </button>
  )
}

export default Button
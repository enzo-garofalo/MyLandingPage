import styles from "./SecondTitle.module.scss"

const SecondTitle = ({ children, ...rest} : React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
        <h2 className={styles.SecondTitle} {...rest}>
            {children}
        </h2>
  )
}

export default SecondTitle
import styles from "./SubtitleText.module.scss"

const SubtitleText = ({ children, ...rest} : React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
        <h4 className={styles.SubTitleText} {...rest}>
            {children}
        </h4>
  )
}

export default SubtitleText
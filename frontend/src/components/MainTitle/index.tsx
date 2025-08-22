import React from 'react'
import styles from './MainTitle.module.scss'

const MainTitle = ({ children, ...rest }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 className={styles.mainTitle} {...rest}>
            {children}
        </h1>
    )
}

export default MainTitle
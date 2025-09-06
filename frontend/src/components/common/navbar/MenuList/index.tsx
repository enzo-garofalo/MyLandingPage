import type React from "react"
import styles from './MenuList.module.scss'

const MenuList = ({children} : React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
        <ul className={styles.nav}>{children}</ul>
    </nav>    
  )
}

export default MenuList
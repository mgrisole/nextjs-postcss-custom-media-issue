import { ReactElement } from 'react'
import styles from '../styles/Layout.module.scss'

export default function Layout ({ children }): ReactElement {
  return <div className={styles.container}>{children}</div>
}

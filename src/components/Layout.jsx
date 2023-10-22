import Homepage from './Home/Homepage'
import Filter from './Filter/Filter'
import styles from './Layout.module.css'

const Layout = () => {
  return (
      <div className={styles.layout}>
      <Filter />
        <Homepage />
      </div>
  )
}

export default Layout

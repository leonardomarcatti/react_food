import styles from './Header.module.css'

const Header = () => {
   return <header id={styles.main_header}>
      <div id={styles.title}>
         <img src='logo.jpg' alt="" />
         <h1>react Food</h1>
      </div>
      <button type="button">Cart (0)</button>
   </header>
}

export default Header
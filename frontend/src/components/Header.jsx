import logoImg from '../assets/logo.jpg'

const Header = () => {
   return <header id="main-header">
      <div id="title">
         <img src={logoImg} alt="" />
         <h1>react Food</h1>
      </div>
      <button type="button">Cart (0)</button>
   </header>
}

export default Header
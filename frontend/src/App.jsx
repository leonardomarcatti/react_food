import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from './store/CartContext'
import { UserProgressProvider } from './store/userProgress'
import Cart from "./components/Cart";

const App = () => {
  return <UserProgressProvider>
   <CartContextProvider>
      <Cart/>
      <Header/>
      <Meals/>
    </CartContextProvider>
  </UserProgressProvider> 
}

export default App;

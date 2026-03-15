import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from './store/CartContext'
import { UserProgressProvider } from './store/userProgress'
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  return <UserProgressProvider>
   <CartContextProvider>
      <Cart/>
      <Checkout/>
      <Header/>
      <Meals/>
    </CartContextProvider>
  </UserProgressProvider> 
}

export default App;

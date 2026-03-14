import { createContext, useState } from "react";

const UserContext = createContext({
   progress: '',
   showCart: () => null,
   hideCart: () => null,
   showCheckout: () => null,
   hideCheckout: () => null,

});

const UserProgressProvider = ({children}) => {
   const [userProgress, setUserProgress] = useState('')   
   const showCart = () => setUserProgress('cart')
   const hideCart = () => setUserProgress('')
   const showCheckout = () => setUserProgress('chekout')
   const hideCheckout = () => setUserProgress('cart')

   const userProgressCtx = {
      progress: userProgress,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout
   }
   return <UserContext.Provider value={userProgressCtx}>{children}</UserContext.Provider>
}



export { UserContext, UserProgressProvider }
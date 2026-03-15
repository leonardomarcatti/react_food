import { createContext, useReducer } from "react";

const CartContext = createContext({
   items: [],
   add: (item) => { },
   remove: (id) => { },
   clear: () => { },
});

const cartReducer = (state, action) => {   
   if (action.type === "add") {

      const itemIndex = state.items.findIndex(el => el.id === action.item.id);
      const updatedItems = [...state.items];

      if (itemIndex > -1) {

         const foundItem = state.items[itemIndex];

         const updatedItem = {
            ...foundItem,
            quantity: foundItem.quantity + 1
         };

         updatedItems[itemIndex] = updatedItem;

      } else {

         updatedItems.push({
            ...action.item,
            quantity: 1
         });

      }

      return { ...state, items: updatedItems };
   }

   if (action.type === "remove") {
      
      const itemIndex = state.items.findIndex(el => el.id === action.id);
      const updatedItems = [...state.items];
      const foundItem = state.items[itemIndex];

      if (foundItem.quantity === 1) {
         updatedItems.splice(itemIndex, 1);
      } else {
         const updatedItem = {
            ...foundItem,
            quantity: foundItem.quantity - 1
         };

         updatedItems[itemIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };
   }

   if (action.type == 'clear') {
         return {...state, items: []}
   }

   return state;
};



const CartContextProvider = ({ children }) => {

   const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

   const addItem = (item) => {
      dispatchAction({ type: "add", item });
   };

   const removeItem = (id) => {
      dispatchAction({ type: "remove", id });
   };

   const clearCart = () => dispatchAction({type: 'clear'})

   const cartContext = {
      items: cart.items,
      add: addItem,
      remove: removeItem,
      clear: clearCart
   };
   

   return (
      <CartContext.Provider value={cartContext}>
         {children}
      </CartContext.Provider>
   );
};

export { CartContextProvider, CartContext };
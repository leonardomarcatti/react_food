import {createPortal} from 'react-dom'
import { useEffect, useRef } from 'react'

const Modal = ({children, open, className = ''}) => {
   const dialog = useRef()
   useEffect(() => {
      const modalStatus = dialog.current
      if (open) {
         modalStatus.showModal()
      }

      return () => modalStatus.close()
   }, [open])
   
   return createPortal(<dialog className={`modal ${className}`} ref={dialog}>
      {children}
   </dialog>, document.querySelector('#modal'))
}

export default Modal
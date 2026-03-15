const Button = ({children, textOnly, className, onClick, type='button'}) => {
   let cssClass = textOnly? 'text-button' : 'button' 
   cssClass += ' ' + className
   return <button type={type} className={cssClass} onClick={onClick}>{children}</button>
}

export default Button
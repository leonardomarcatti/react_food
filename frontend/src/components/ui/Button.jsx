const Button = ({children, textOnly, className, onClick}) => {
   let cssClass = textOnly? 'text-button' : 'button' 
   cssClass += ' ' + className
   return <button type="button" className={cssClass} onClick={onClick}>{children}</button>
}

export default Button
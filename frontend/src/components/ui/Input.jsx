const Input = ({label, type, id}) => {
   return <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} required />
   </p>
}

export default Input
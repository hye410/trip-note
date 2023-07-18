const Button = ({role,type,onClick}) => {
  return(
    <button 
      className={
      ["btn_wrapper",`btn_wrapper_${type}`].join(" ")
      }
      onClick={onClick}
    >
      {role}
    </button>
  )
}

Button.defaultProps = {
  type : "default"
};

export default Button;
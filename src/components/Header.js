
const Header = ({main_title,left_button,right_button}) => {
  return(
    <header>
      <p className="left_btn_wrapper">
        {left_button}
      </p>      
      <h1>{main_title}</h1>
      <p className="right_btn_wrapper">
        {right_button}
      </p>
    </header>
  )
}

export default Header;
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {

  const navigate = useNavigate();

  return(
    <div className="Home">
      <Header main_title={"나의 여행 기록"}/>
      <div className="menu_wrapper">
        <p onClick={() => navigate('/domestic')}>
          국내
        </p>
        <p onClick={() => navigate('/overseas')}>
          해외
        </p>
      </div> 
    </div>
  )
}

export default Home;

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StateContent } from '../App';
import Header from "../components/Header";
import Button from "../components/Button";

const Travel = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const travelList = useContext(StateContent);

  const travelContent = travelList.find (it =>
      parseInt(it.id) === parseInt(id)
    );
  

  return(
    <div className="Travel">
      <Header
        left_button={
          <Button
            role={"< 뒤로가기"}
            onClick={() => navigate(-1)}
          />
        }
        main_title={travelContent.location}
        right_button={
          <Button
            role={"수정하기"}
            onClick={() => navigate('/edit')}
          />
        }
      />
      
    </div>
  )
}

export default Travel;
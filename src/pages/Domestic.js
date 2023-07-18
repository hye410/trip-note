import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import TravelList from '../components/TravelList';
import MyDate from '../components/MyDate';
import { useContext, useState } from 'react';
import { StateContent } from '../App';
import Sort from '../components/Sort';

const Domestic = () => {

  const travel_data = useContext(StateContent);
 
  const navigate = useNavigate();

  const [travelList, setTravelList] = useState(travel_data);

  const [sortBy,setSortBy] = useState('latest');

  const compare = (a, b) => {
    switch (sortBy) {
      case "latest" : {
        return b["startDate"] - a["startDate"];
      }
      case "oldest": {
        return a["startDate"] - b["startDate"];
      }
      case "title": {
        return( 
          a["title"].toLowerCase() < b["title"].toLowerCase() ? -1 
        : a["title"].toLowerCase() > b["title"].toLowerCase() ? 1 
        : 0
        )
      }
      case "rating" : {
        return b["rating"] - a["rating"]
      }
      default: {
        return b["startDate"] - a["startDate"]
      }
    }
  };
 
 const sortedList = travelList.sort(compare);
 console.log(sortedList)

  return(
    <div className="Domestic">
      <Header 
        main_title={"국내여행"}
        left_button={
          <Button 
            role={"< 뒤로가기"}
            onClick={() => navigate(-1)}
          />
        }
      />
        <MyDate travel_data={travel_data} setTravelList={setTravelList}/>
      <div className="Sort_Btn_Wrapper">
        <Sort
          sortBy ={sortBy}
          setSortBy = {setSortBy}
        />
        <Button
          role = {"작성하기"}
          type = {"positive"}
          onClick={() => navigate('/new')}
        />
      </div>
      <TravelList travelList={travelList} />
    </div>
  )
}

export default Domestic;
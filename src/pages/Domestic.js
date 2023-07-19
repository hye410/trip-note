import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import TravelList from '../components/TravelList';
import MyDate from '../components/MyDate';
import { useContext, useEffect, useState } from 'react';
import { StateContent } from '../App';
import Sort from '../components/Sort';

const Domestic = () => {

  const travel_data = useContext(StateContent);
  
  const navigate = useNavigate();

  const [travelList, setTravelList] = useState([]);
  
  const current_date = new Date().toISOString().slice(0,7);
  
  const [selectedDate,setSelectedDate] = useState(current_date);
  
  useEffect(() =>{
    const date = new Date(selectedDate);
    const firstDay = 
      new Date(date.getFullYear(),date.getMonth(),1).getTime();
    const lastDay =
      new Date(date.getFullYear(),date.getMonth()+1,0).getTime();

    const list = travel_data.filter(it => 
      firstDay <= it.startDate && it.startDate <= lastDay);
    setTravelList(list)
  }, [selectedDate]);

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
        <MyDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      <div className="Sort_Btn_Wrapper">
        <Sort
          travelList={travelList}
          setTravelList={setTravelList}
        />
        <Button
          role = {"작성하기"}s
          type = {"positive"}
          onClick={() => navigate('/new')}
        />
      </div>
      <TravelList
        travelList={travelList}       
      />
    </div>
  )
}

export default Domestic;
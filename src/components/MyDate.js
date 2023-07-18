import { useEffect, useState } from "react";


const MyDate = ({setTravelList,travel_data}) => {

  const current_date = new Date().toISOString().slice(0,7);
  const [date, setDate] = useState(current_date);
  

  useEffect(() => {
    const trans_date = new Date(date);
    const firstDay = new Date(
      trans_date.getFullYear(),
      trans_date.getMonth(),
      1
    ).getTime();
    
    const lastDay = new Date(
      trans_date.getFullYear(),
      trans_date.getMonth() + 1,
      0
    ).getTime();

      setTravelList(
      travel_data.filter(({startDate}) => 
      (firstDay <= startDate) && (startDate <= lastDay))
      );

  },[date,setTravelList,travel_data])

  
 

  return(
    <div className="MyDate"> 
      <input 
        type="month"
        defaultValue={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  ) 
}

export default MyDate;
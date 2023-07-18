

const getDate = (date) => {
  const change_date = new Date(date);
  return `${change_date.getFullYear()}-${change_date.getMonth() + 1}-${change_date.getDate()}`;
}


const TravelList = ({travelList}) => {  

  return(
    <div className="TravelList">
      <ul className="list-title">
        <li>여행지</li>
        <li>출국일</li>
        <li>귀국일</li>
        <li>점수</li>
      </ul>
      {
        travelList.map(it =>
          <ul key={it.id} className="list">
            <li>{it.title}</li>
            <li>{getDate(it.startDate)}</li>
            <li>{getDate(it.endDate)}</li>
            <li>{it.rating}</li>
          </ul>
        )
      }
    </div>
  )
}

export default TravelList;


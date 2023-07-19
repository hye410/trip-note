import { useEffect, useState } from "react";

const sortList = [
  {
    id : 1,
    name : "최신순",
    value : "latest"
  },
  {
    id : 2,
    name : "오래된순",
    value : "oldest"
  },
  {
    id : 3,
    name : "여행지순",
    value : "title"
  },
  {
    id : 4,
    name : "평점순",
    value : "rating"
  }
]

const Sort = ({travelList,setTravelList}) => {

  const copy_data = travelList.map(arr => arr);
  const [sortBy,setSortBy] = useState('latest');

  useEffect(() =>{
    const sortedList = copy_data.sort((a,b) => {
      switch(sortBy) {
        case "latest" : {
          return b.startDate - a.startDate;
        }
        case "oldest" : {
          return a.startDate - b.startDate;
        }
        case "title" : {
          return (
            b.title > a.title ? -1
            : a.title > b.title ? 1
            : 0
          );
        }
        case "rating" : {
          return b.rating - a.rating;
        }
        default :
          return b.startDate - a.startDate;
      }
    }
    );
    setTravelList(sortedList);
  },[sortBy])
  
  return(
    <select
      onChange={(e) => setSortBy(e.target.value)}
    >
      {
        sortList.map( it =>
          <option 
            key={it.id}
            value={it.value}              
          >
            {it.name}
          </option>
        )
      }
    </select>
  )
}

export default Sort;
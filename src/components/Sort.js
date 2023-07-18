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

const Sort = ({setSortBy}) => {

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
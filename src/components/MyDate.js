const MyDate = ({selectedDate,setSelectedDate}) => { 

  return(
    <div className="MyDate"> 
      <input 
        type="month"
        value={selectedDate}
        onChange={(e) => {setSelectedDate(e.target.value)
        }}
      />
    </div>
  ) 
}

export default MyDate;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Domestic from './pages/Domestic';
import Overseas from './pages/Overseas';
import Travel from './pages/Travel'
import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case "INIT" : {
      return action.data;
    }
    case "CREATE" : {
      newState = [action.data,...state];
      break;
    }
    case "EDIT" : {
      newState = state.map( it => 
        it.id === action.data.id ?
        {...action.data}
        : it
      );
      break;
    }
    case "REMOVE" : {
      newState = state.filter( it =>
        it.id !== action.targetId
      );
      break;
    }

    default :
      return state;
  }
  return newState;
}

const dummyList = [
  {
    id : 1,
    startDate : 1689379200000,
    endDate : 1689724800000,
    title : "대만 여행",
    rating : 5,
    content : "대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~",
    price : 1200000,
    location : "대만",
  },
  {
    id : 2,
    startDate : 1686355200000,
    endDate : 1686700800000,
    title : "베트남 여행",
    rating : 4,
    content : "베트남ㅁ먇럼;ㅣㅇㄴ라ㅓㅁ니;ㅇ라ㅓㅁㄴ;ㅣㅇ라ㅓㅁ이나ㅓㄻㅇ",
    price : 1000000,
    location : "나트랑"
  },

  {
    id : 3,
    startDate : 1682953200000,
    endDate : 1683212400000,
    title : "싱가포르 여행",
    rating : 3,
    content : "싱가포르ㅁ먇럼;ㅣㅇㄴ라ㅓㅁ니;ㅇ라ㅓㅁㄴ;ㅣㅇ라ㅓㅁ이나ㅓㄻㅇ",
    price : 1800000,
    location : "창이"
  },
  {
    id : 4,
    startDate : 1678114800000,
    endDate : 1678546800000,
    title : "괌 여행",
    rating : 5,
    content : "괌ㅁ먇럼;ㅣㅇㄴ라ㅓㅁ니;ㅇ라ㅓㅁㄴ;ㅣㅇ라ㅓㅁ이나ㅓㄻㅇ",
    price : 2000000,
    location : "괌"
  },
  {
    id : 5,
    startDate : 1688137200000,
    endDate : 1688742000000,
    title : "미국 여행",
    rating : 2,
    content : "LA 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~대만 여행 너무 즐거웠당 짱짱~",
    price : 3000000,
    location : "미국",
  },
];

export const StateContent = React.createContext();
export const DispatchContent = React.createContext();



function App() {

  const [data, dispatch] = useReducer(reducer,dummyList);

  const dataId = useRef(0);

  // CREATE
  
  const onCreate = (
    title, 
    startDate, 
    endDate, 
    rate, 
    content,
    price, 
    location
    ) => {
    dispatch(
      {
        type : "CREATE",
        data : {
          id : dataId.current,
          title,
          startDate : new Date(startDate).getTime(),
          endDate : new Date(endDate).getTime(),
          rate,
          content,
          price,
          location
        }
      }
    )
    dataId.current += 1;
  };

  // EDIT 
  
  const onEdit = (
    targetId,
    title, 
    startDate, 
    endDate, 
    rate, 
    content, 
    price, 
    location
  ) => {
    dispatch({
      type : "EDIT",
      data : {
        id : targetId,
        title,
        startDate : new Date(startDate).getTime(),
        endDate : new Date(endDate).getTime(),
        rate,
        content,
        price,
        location
      }
    })
  };

  // onRemove

  const onRemove = (targetId) => {
    dispatch({
      type : "REMOVE",
      targetId
    })
  }

  return (
    <StateContent.Provider value={data}>
      <DispatchContent.Provider value={{onCreate, onEdit, onRemove}}>
        <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/domestic">
              <Route index element={<Domestic />} />
              <Route path=":id" element={<Travel />} />
            </Route>
            <Route path="/overseas" element={<Overseas />} />
          </Routes>
        </div>
        </BrowserRouter>
      </DispatchContent.Provider>
    </StateContent.Provider>
  );
}

export default App;

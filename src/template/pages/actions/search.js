import React, { useEffect,useState } from 'react'
import Icon from '../../component/icon';
import {gameData} from '../../data/data';
const Search = () => {
  const gameDataSearch = []
  gameData.map((item,index)=> {
      gameDataSearch.push(item.name)
  })
  const [keyword, setKeyword] = useState("");
  const [gameDataResult, setGameDataResult] = useState(new Set());
  const [gameDataResultArray, setGameDataResultArray] = useState([]);
  useEffect(() => {
       if(keyword != "" && keyword != " "){
        gameDataSearch.map((item) => {
            if(item.indexOf(keyword.toString()) != -1){
                 setGameDataResult(
                    gameDataResult.add(item)
                 );
                 setGameDataResultArray(Array.from(gameDataResult));
             }else if(gameDataResult.delete(item)==true){
                 gameDataResult.delete(item)
                 setGameDataResultArray(Array.from(gameDataResult));
             }
        })
       }else{
        gameDataResult.clear();
        setGameDataResultArray(Array.from(gameDataResult));
       }
  },[keyword])
  if(gameDataResultArray.length>0){
      return (
        <div className="search-container">
          <div className="icon-container">
            <Icon name="search" />
          </div>
          <div className="input-container">
            <input 
            type="text" 
            placeholder="Search Games"
            value={keyword} 
            onChange= {(e) => {
                setKeyword(e.target.value)
            }}
            />
          </div>
          <div className="result-area">
              <ul>
                  {gameDataResultArray.map((item)=> (
                      <li key={item}>
                          <a href="#!">{item}</a>
                      </li>
                  ))}
              </ul>
          </div>
          <div className="icon-close" onClick={(e)=> {
                  setGameDataResultArray([])
                  setKeyword("")
              }}>
              <Icon name="times"/>
          </div>
        </div>
      )
  }else {
    return (
        <div className="search-container">
          <div className="icon-container">
            <Icon name="search" />
          </div>
          <div className="input-container">
            <input 
            type="text" 
            placeholder="Search Games"
            value={keyword} 
            onChange= {(e) => {
                setKeyword(e.target.value)
            }}
            />
          </div>
        </div>
      )
  }
 
}

export default Search
import React, { useState,useEffect } from 'react'
import FilterContainer from './components/filter-container'
import ShowcaseContainer from './components/showcase-container'
import {gameData} from '../../data/data';

const List = () => {
  const [listDataGame, setListDataGame] = useState({});
  const [filterData,setFilterData] = useState({state:[],genre:[]});
  const showcaseConverData = (gameData) => {
       const listData = {};
       const hasChar = (char) => !!listData[char];
       const getFirstChar = (str) => str.charAt(0);
       gameData.forEach((element) => {
           const firstChar = getFirstChar(element.name.toUpperCase());
           if (!hasChar(firstChar)) {
            listData[firstChar] = [element];
          } else {
            listData[firstChar] = [...listData[firstChar], element];
          }
       });
       setListDataGame(listData);
  }
  const filterProcess = (filteredItems) => {
    const hasFilter = (filterType,value) => {
      const isEmpty = filteredItems[filterType].length == 0;
      const hasItem = filteredItems[filterType].some((filterItem) => filterItem === value);
      return hasItem || isEmpty;
    };

    let newGameList = [];
    if (filteredItems.state.length > 0 || filteredItems.genre.length > 0) {
      newGameList = gameData.filter(
        (item) => {
          const hasGenre = hasFilter('genre', item.genre);
          const hasState = hasFilter('state', item.state);
          return hasGenre && hasState;
        },
      );
    } else {
      newGameList = gameData;
    }

    showcaseConverData(newGameList);

    setFilterData(filteredItems);
  };

  const getFiltered = (filterAction) => {
    const newFiltered = { ...filterData };
    if (filterAction.action === 'add') {
      newFiltered[filterAction.filterType] = [
        ...newFiltered[filterAction.filterType],
        filterAction.filterName,
      ];
    } else {
      newFiltered[filterAction.filterType] = [
        ...newFiltered[filterAction.filterType].filter(
          (item) => item !== filterAction.filterName,
        ),
      ];
    }

    return newFiltered;
  };

  const onFilter = (filterAction) => {
    const filtered = getFiltered(filterAction);
    filterProcess(filtered);
  };

  useEffect(() => {
    showcaseConverData(gameData);
  }, []);

  const shortOnChage = (e) => {
    const sortObject = obj => Object.keys(obj).reverse().reduce((res, key) => (res[key] = obj[key], res), {});
      let arr = sortObject(listDataGame);
      setListDataGame(arr)
  }

  return (
    <div id="list-content" className="list-content">
        <div className="container">
            <div className="list-head-area">
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <h2>Browse Games</h2>
                    </div>
                    <div className="col-auto">
                        <select 
                            className="form-select" 
                            aria-label="Default select example"
                            onChange={shortOnChage}
                        >
                            <option value="1">Title A-Z</option>
                            <option value="2">Title Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="list-body">
                <div className="row">
                    <div className="col-lg-4">
                        <FilterContainer onFilter={onFilter}/>
                    </div>
                    <div className="col-lg-8">
                        <ShowcaseContainer data={listDataGame}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List
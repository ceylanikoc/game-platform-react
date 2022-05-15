import React from 'react'
import {filterData} from '../../../data/data'
import Icon from '../../../component/icon'


const FilterContainer = ({onFilter}) => {
  return (
    <div className="left-block">
        <div className="filter-container">
            {filterData.map((item,index) => (
                <div className="filter" key={`${item.filterId}-${index}`}>
                    <div className="filter-head-area">
                        <h4>{item.filterName}</h4>
                        <Icon name="arrowUp" />
                    </div>
                    <div className="filter-body">
                        {item.filterItems.map((filterItem,subIndex) => (
                            <div className="filter-item" key={`${filterItem.value}-${subIndex}`}>
                                <div className="input-group">
                                    <div className="input-group-area d-flex align-items-center">
                                        <input 
                                        className="form-check-input mt-0" 
                                        type="checkbox" 
                                        key={`${filterItem.value}-${subIndex}`}
                                        title={filterItem.label}
                                        value={filterItem.value}
                                        onChange={(e) => {
                                            onFilter({
                                                action: e?.target?.checked ? 'add' : 'remove',
                                                filterName: e?.target?.value,
                                                filterType: item.filterId,
                                            })
                                        }}
                                        />
                                        <span>
                                            {filterItem.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FilterContainer
import React from 'react'

const Showcase = ({list,char}) => {
  return (
    <div className="showcase-inside">
        <div className="showcase">
            <div className="showcase-top">
                <div className="showcase-char-title">
                    {char}
                </div>
            </div>
            <div className="showcase-content">
                <div className="row">
                    {list.map((item,index)=> (
                        <a href="#!" className="col-6" key={`${item.id}-${index}`}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase
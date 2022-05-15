import React from 'react'
import Showcase from './showcase'

const ShowcaseContainer = ({data}) => {
  return (
    <>
         {Object.entries(data).map(([key, value], index) => (
            <Showcase key={`${key}-${index}`} char={key} list={value} />
        ))}
    </>
  )
}

export default ShowcaseContainer
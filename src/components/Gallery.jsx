import React from 'react'

const Gallery = ({data,index}) => {
  return (
    <div key={index} className="">
        <img  src={data.links.download} alt="" />
        <p className='text-sm'>{data.description}</p>
    </div>
  )
}

export default Gallery
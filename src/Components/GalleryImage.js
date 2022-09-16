import React from 'react'

const GalleryImage = (props) => {
  return (
    <>
        <img src={props.imgSrc} className="img-fluid gallery-image" alt="" />
    </>
  )
}

export default GalleryImage
import React from 'react'
import GalleryImage from './GalleryImage'

const Gallery = () => {
    const imgUrls = [];
    imgUrls.push('https://www.w3schools.com/w3images/atrium.jpg');
    imgUrls.push('https://www.w3schools.com/w3images/atrium.jpg');
    imgUrls.push('https://www.w3schools.com/w3images/atrium.jpg');
    imgUrls.push('https://www.w3schools.com/w3images/atrium.jpg');
    return (
        <>
            <div className="row" id='SHOWCASES'>

                {/* <GalleryImage imgSrc="https://www.w3schools.com/w3images/atrium.jpg"/> */}
                {
                    imgUrls.map(function (imgUrl,index) {
                        return (
                            <div key={index} className="col-sm-12 col-md-6 mt-2">
                                <GalleryImage imgSrc={imgUrl} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery
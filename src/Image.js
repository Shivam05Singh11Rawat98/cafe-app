import React from 'react';
import photo1 from './images/item-1.jpeg'
import photo2 from './images/item-2.jpeg'

function Image({image,title}) {
  return <img src={image} alt={title} className="photo" onClick={()=>console.log(image) }/> ;
}

export default Image;

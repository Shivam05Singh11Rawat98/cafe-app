import React from 'react'
import photo1 from './images/item-1.jpeg'
import photo2 from './images/item-2.jpeg'

function Menu({items}) {
    console.log(photo1);
    console.log(photo2);
    return (
    <div className="section-center">
     {items.map((item,index)=>{
         const {image,desc,title,price} = item;
         return (
            <article className='menu-item' key={index}>
            <img src={image} alt={title} className="photo" onClick={()=>console.log(image) }/>
            <div  style={{ backgroundImage:{image} }}></div>
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4>₹{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </article>
         );
     })}
    </div>
    )
}

export default Menu

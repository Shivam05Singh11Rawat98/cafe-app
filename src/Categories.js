import React from 'react'

function Categories({categories, filterCategories}) {
    return (
        <div className="btn-container">
            {categories.map((category,index)=>{
                return <button 
                key={index}
                onClick={()=>filterCategories(category)}
                className="filter-btn">{category}</button>;
            })}
            
        </div>
    )
}

export default Categories

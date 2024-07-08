import React from 'react'
import "./ExploreMenu"
function ExploreMenu() {

    const menu=[
        {
            image: <img src="./Assets/ pic4.jpg" alt="Description" />, 
            name: "barasasll", 
        }
    ]
    return (
        <>
        <div className='ExploreMenu'>
            <h1>Explore our menu</h1>
            <p>Choose from a diverse menu feature</p>
            <div className="exploreMenuList">
                {menu.map((food, index) => (
                    <div key={index} className="menuItem">
                        <div className='w-32'>{food.image}</div>
                        <div className='bg-blue'>{food.name}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};


export default ExploreMenu

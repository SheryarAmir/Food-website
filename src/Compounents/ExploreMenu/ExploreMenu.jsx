import React from 'react';
import "./ExploreMenu.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ExploreMenu({category , setCategory}) {
    const menu = [
        {
            image: "https://img.goodfon.com/original/1920x1080/1/3e/gamburger-burger-mcdonald-s-perets.jpg",
            name: "barasasll",
        },
        {
            image: "https://img.goodfon.com/original/1920x1080/e/fc/maslo-orehi-lukoshko.jpg",
            name: "Chicken Brost",
        },
        {
            image: "https://lh3.googleusercontent.com/p/AF1QipMaN2NSJ1k8LdR0rBrvjy0aJfx-AvTHr_mkIu_S=w1024-k",
            name: "barasasll",
        },
        {
            image: "https://img.goodfon.com/original/1920x1080/1/3e/gamburger-burger-mcdonald-s-perets.jpg",
            name: "barasasll",
        },
        {
            image: "https://i.pinimg.com/originals/2c/c8/36/2cc836f251b5ab525e299a872226dbf4.jpg",
            name: "barasasll",
        },
        {
            image: "https://cdn.shopify.com/s/files/1/2007/1723/products/chicken_kabobs_iStock-913058752.jpg?v=1661258978",
            name: "barasasll",
        },
        {
            image: "https://sadhyafoodie.com/wp-content/uploads/2022/03/Chapli-kabab-recipe.jpeg",
            name: "barasasll",
        },
        {
            image: "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2023/12/Samosa@indianhealthyrecipes.jpg",
            name: "barasasll",
        },]

        const settings = {
           
            infinite: true,
            speed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            pauseOnHover: true,
           
        };
    
        return (
            <div className='ExploreMenu w-[89%] mx-auto'>
                <h1 className='text-[#26262] font-medium text-3xl my-3'>Explore our menu</h1>
                <p className='my-3 max-w-[60%] '>Choose from a diverse menu feature Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque fuga nulla quo aperiam quae velit, earum laboriosam possimus minus ea facere deleniti nisi molestiae in officia assumenda ut similique?</p>
                <Slider {...settings} className="exploreMenuList">
                    {menu.map((food, index) => (
                        <div  key={index} className="menuItem cursor-pointer transition-transform transform hover:scale-105 p-4">
                            <img
                                src={food.image}
                                alt={food.name}
                                className='foodImage w-[100%] min-w-[60px] h-[150px] object-cover rounded-full my-10  '
                            />
                            <div className='mt-3 text-lg  text-center'>{food.name}</div>
                            <div className='mt-3 text-lg text-[#747474] text-center'>{food.discription}</div>
                        </div>
                    ))}
                </Slider>
            
            </div>
        );
    }
    
    export default ExploreMenu;
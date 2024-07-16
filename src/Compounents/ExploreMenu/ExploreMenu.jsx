import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../Assest/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ExploreMenu() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ExploreMenu w-full mx-auto sm:items-center px-4 md:px-8" id="explore-menu">
      <h1 className="font-medium text-2xl md:text-3xl my-3 text-center">
        Explore our menu
      </h1>
      <p className="Explore-menu-text my-3 text-center md:max-w-[60%] mx-auto">
        Choose from a diverse menu featuring various delicacies. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A atque fuga nulla quo aperiam quae velit,
        earum laboriosam possimus minus ea facere deleniti nisi molestiae in
        officia assumenda ut similique?
      </p>
      <Slider {...settings}>
        {menu_list.map((item, index) => (
          <div
            className="Explore_menu-list-item cursor-pointer transition-transform transform hover:scale-105 p-2 md:p-4"
            key={index}
          >
            <img className="h-auto mx-auto" src={item.menu_image} alt={item.menu_name} />
            <p className="text-center mt-2">{item.menu_name}</p>
          </div>
        ))}
      </Slider>
      <hr className="my-3 mx-0 bg-black" />
    </div>
  );
}

export default ExploreMenu;

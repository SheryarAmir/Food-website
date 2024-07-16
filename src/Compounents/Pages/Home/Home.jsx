import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import Header from "../../Header/Header";
import AppDownload from "../../AppDownload/AppDownload"
import { useState } from "react";
import LoginPop from "../../LoginPopUp/LoginPop";




export const Home = ( {showLogin}) =>{

  // const [category, setCategory] = useState("All");
    return (
      <div>
     
       <Header/>
    <ExploreMenu />
    <FoodDisplay/>
    <AppDownload/>
      </div>
    );
  };
  
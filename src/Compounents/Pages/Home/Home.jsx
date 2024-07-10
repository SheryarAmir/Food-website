import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import Header from "../../Header/Header";
import { useState } from "react";





export const Home = () =>{

  // const [category, setCategory] = useState("All");
    return (
      <div>
    <Header/>
    <ExploreMenu />
    <FoodDisplay/>
      </div>
    );
  };
  
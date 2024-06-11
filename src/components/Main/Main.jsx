import Image from "next/image";
import Products from "../Products/Products";
import Slider from "../HomeSlider/Slider";
import OneAdsset from "../Homeads/OneAdsset";
import Twoadset from "../Homeads/Twoadset";
import SingleAdset from "../Homeads/SingleAdset";
import Tabproducts from "../Products/Tabproducts";
import Explore from "../Explore/Explore";
const Main = () => {
  return (
    <>
    
    <Slider />
   
    <main className="md:px-24 pb-24">
      <Twoadset />
      <OneAdsset  />
      <Explore />
      <Products />
      <SingleAdset />
      <Tabproducts />
    </main>
    </>
  )
}
 

export default Main
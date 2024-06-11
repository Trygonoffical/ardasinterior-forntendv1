import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import SingleProduct from "./SingleProduct"


const page = ({params}) => {
  const {slug} = params;
  return (
    <>
    
   {/* <Navbar /> */}
    <SingleProduct slugValue={slug} />
   {/* <Footer /> */}
    </>
  )
}

export default page
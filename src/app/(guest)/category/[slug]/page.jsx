import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import SingleCategory from "./SingleCategory"


const page = ({params}) => {
  const {slug} = params;
  return (
    <>
      {/* <Navbar /> */}
      < SingleCategory  slugValue={slug} />
      {/* <Footer /> */}
    </>
  )
}

export default page
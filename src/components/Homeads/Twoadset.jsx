import Link from "next/link"


const Twoadset = () => {
  return (
    <div className='md:flex justify-between mt-10 gap-5 '>
        <div className="p-2">
            <Link href='#'  >
                <img src="https://ii1.pepperfry.com/assets/ca9ab1d9-7a65-4d35-b8e9-a600313a25d9.jpg" alt="Oneadset" style={{width: "100%"}} />
            </Link>
        </div>
        <div className="p-2">
        <Link href='#' >
            <img src="https://ii1.pepperfry.com/assets/a71821bc-4ce4-4160-b3bb-41a49e210c08.jpg" alt="Oneadset" style={{width: "100%"}} />
        </Link>
        </div>
        <div className="p-2">
        <Link href='#' >
            <img src="https://ii1.pepperfry.com/assets/c756b1a3-3935-4076-9044-725cffdfff26.jpg" alt="Oneadset" style={{width: "100%"}} />
        </Link>
        </div>

        
       
    </div>
  )
}

export default Twoadset
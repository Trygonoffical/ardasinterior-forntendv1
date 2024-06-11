

const Notice = ({title , talk=false , secondcontent='Share your Feedback with Us ->'}) => {
  return (
    <div className='bg-gray-100 py-4 my-6 flex flex-col md:flex-raw  justify-center  items-center'>
        <h2 className='font-bold text-md mr-3 pb-3'>{title}</h2>
           {talk==='true' ? (
            <div className='border border-gray-900 bg-white text-gray-900 px-4 py-2'>
                <a href="#" className='text-sm mt-4'>
                    Talk to our Expert 022-6116-7373
                </a> 
            </div>
           ) : (
            <h2 className='font-medium text-md '>
             <a href="#">
              {secondcontent}
              </a> 
            </h2>
           )} 
    </div>
  )
}

export default Notice
import girl_image from '../../assets/bg_rem_girl.png'

const OurVision = () => {
  return (
    <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <div className="our_vision_shape h-[570px] md:w-[100%] lg:w-[86%] bg-[#0896D8] flex flex-col justify-center pl-14">
            <div className="text_shadow roboto_font text-white text-[50px] sm:text-[100px]">
                ABOUT US
            </div>
            <div className="text_shadow roboto_font text-white text-[40px] md:text-[70px] mt-[-10px] md:mt-[-25px]">
                Our Vision
            </div>
            <p className='text-white roboto_font leading-7 mt-4'>
                We Strive to become an integral <br />
                part of every organizations <br />
                bussiness promotion plan. We are <br />
                committed to achieving our vision <br />
                through a three-pronged strategy: <br />
                Deliver, Create, Advance. 
            </p>
        </div>
        <div className="border-4 border-yellow-500 flex justify-center">
            <img src={girl_image} alt="" />
        </div>
    </div>
  )
}

export default OurVision
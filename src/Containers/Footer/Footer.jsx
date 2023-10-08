import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="sm:h-[100%] md:h-[100%] lg:h-[100%] cursor-pointer flex flex-col justify-between pl-[50px]  pr-[50px] lg:flex-row  gap-[40px] roboto_font">
        <div className="flex flex-col  lg:w-1/4 md:w-1/2">
          <div className="flex sm:mt-[10px] lg:mt-[50px] md:mt-[10px]   uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            hOME
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[40px]  md:mt-[10px]  uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            aBOUT US
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[40px] md:mt-[10px]  uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            SERVICES
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[40px] md:mt-[10px] uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            case study
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[40px] md:mt-[10px] uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            cONTACT US
          </div>
        </div>
        <div className="flex flex-col sm:mt-[10px] lg:w-1/4 md:w-full">
          <div className="flex sm:mt-[10px] lg:mt-[50px] md:mt-[20px]  uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Our Office
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[20px] md:mt-[20px]   text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Saadabad Cooperative Housing Society, 4, Block 4
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[100px] md:mt-[20px]  uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Mailing Address
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[20px]  text-[#FFF] md:mt-[20px]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Saadabad Cooperative Housing Society, 4, Block 4
          </div>
        </div>
        <div className="flex flex-col lg:w-1/4 md:w-1/2">
          <div className="flex sm:mt-[10px] lg:mt-[50px] md:mt-[20px]  uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Contact us
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px]  text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            support@designhenge.com
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            (021) 34661461
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            facebook
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            twitter
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            instagram
          </div>
        </div>
        <div className="flex flex-col lg:w-1/4 md:w-1/2">
          <div className="flex sm:mt-[10px] lg:mt-[50px] md:mt-[20px] uppercase text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            Get All updates
          </div>
          <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
            support@designhenge.com
          </div>
          <button className="lg:mt-[30px] sm:mt-[10px] w-[150px] md:mt-[20px] bg-pink-50	 hover:bg-pink-60	 font-bold py-2 px-2 rounded">
            SERVICES
          </button>
        </div>
      </div>
      <hr />
      <div className="sm:h-[100%] md:h-[100%] lg:h-[100%] cursor-pointer flex flex-col justify-between pl-[50px]  pr-[50px] lg:flex-row  gap-[40px] roboto_font">
        <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
          Design Henge Your Next big thing
        </div>
        <div className="flex sm:mt-[10px] lg:mt-[30px] md:mt-[20px] text-[#FFF]  leading-relaxed text-[20px] md:text-[20px] font-medium">
          2023 Design Henge All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import WhoWeAreImage from "../../assets/2.png";
import StarRating from "../../Components/StarRating/StarRating";

const ClientFeedback = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className="who_we_are pt-20">
      <div className="sm:h-[100%] md:h-[100%] lg:h-[550px]  cursor-pointer flex flex-col justify-between pl-[50px]  pr-[50px] lg:flex-row lg:items-center gap-[25px]">
        <div className=" lg:w-1/2 md:w-[100%]">
          <img src={WhoWeAreImage} alt="" />
        </div>
        <div className="flex justify-center flex-col lg:w-1/2 md:w-[100%] roboto_font">
          <div className="roboto_font text-[#0896D8] uppercase text-[30px] md:text-[50px] mt-[-10px] md:mt-[-25px]">
            WHAT THEY SAY
          </div>
          <div className="roboto_font font-medium text-[12px] md:text-[14px] mt-[-5px] mb-[70px] ">
            A variety of creative capabilities under one roof
          </div>
          <StarRating setRating={(val) => setRate(val)} ratingValue={rate} />
          <div className="text-[#000000]  leading-loose pt-[20px] font-medium	text-[12px] md:text-[14px] sm:text-[16px] roboto_font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            arcu tellus ultricies sem at diam, et dolor justo. Praesent rhoncus
            lacinia lacus porta.
          </div>
          <h3 className="flex pt-[20px] roboto_font font-regular sm:text-[40px]	md:text-[36px] lg:text-[35px]">
            dellon thomas
          </h3>
          <div className="flex  pt-[0px] leading-relaxed	 roboto_font font-normal sm:text-[20px]	md:text-[24px] lg:text-[20px]">
            Marketing Manager
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;

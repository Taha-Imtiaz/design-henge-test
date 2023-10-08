import WhoWeAreImage from "../../assets/2.png";

const WhoWeAre = () => {
  return (
    <div className="who_we_are pt-20">
      <div className="flex justify-center w-full">
        <div className="text_shadow_who_we_are roboto_font text-[#0896D8] text-[40px] md:text-[70px] mt-[-10px] md:mt-[-25px]">
          Who We Are
        </div>
      </div>
      <div className="sm:h-[100%] md:h-[100%] lg:h-[550px]  cursor-pointer flex flex-col justify-between pl-[50px]  pr-[50px] lg:flex-row lg:items-center gap-[25px]">
        <div className=" lg:w-1/2 md:w-[100%]">
          <img src={WhoWeAreImage} alt="" />
        </div>
        <div className="flex justify-center flex-col lg:w-1/2 md:w-[100%] roboto_font">
          <div className="flex justify-center items-center  text-[#0896D8]  leading-relaxed text-[18px] md:text-[20px] sm:text-[25px] font-medium">
            We At Qreate Are A Team Of Enthusiasts Who Love To Ideate And Create
            For You.
          </div>
          <div className="text-[#000000]  leading-loose pt-[20px] font-medium	text-[12px] md:text-[14px] sm:text-[16px] roboto_font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditdiam
            ullamcorper urna sit quisque tincidunt hendrerit mattis.Dictum
            lectus magnis phasellus dictumst eu, enim, at id non.Metus diam quis
            interdum morbi mi velit commodo, malesuada.Velit lacinia donec
            aliquam nunc volutpat.
          </div>
          <h3 className="flex pt-[40px] roboto_font font-bold	 sm:text-[40px]	md:text-[36px] lg:text-[36px]">
            mision
          </h3>
          <div className="flex  pt-[20px] leading-relaxed	 roboto_font font-normal sm:text-[20px]	md:text-[24px] lg:text-[20px]">
            Design Henge's mission is to provide the endless opportunities with
            a pinch of innovation, a twist of creativity and a dash of passion.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

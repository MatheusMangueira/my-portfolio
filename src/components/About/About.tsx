import { FileArrowDown } from "phosphor-react";
import { B } from "../../assets/image/B";
import { FormattedMessage } from "react-intl";

export const About = () => {
  return (
    <div
      id="About"
      className="flex lg:flex-row flex-col justify-between py-10 lg:py-32 h-full w-full bg-page-2"
    >
      <div className="w-full h-full block xl:flex xl:justify-center xl:items-center  ">
        <div className=" px-5 xl:px-20 mb-10 xl:mb-0 h-full flex justify-center flex-col">
          <div>
            <div className="flex justify-center mb-[-20px]">
              <B hight="124px" width="124px" />
            </div>
            <h1 className="text-center text-[62px] font-inter lg:mb-10 mb-10">
              {/* Hello */}
              <FormattedMessage id="about" />
            </h1>
          </div>

          <div className="xl:block flex justify-center flex-col items-center ">
            <p className="text-[24px] font-roboto font-bold">
              <FormattedMessage id="aboutTitle" />
            </p>
            <p className="font-inter text-[18px]">
              <FormattedMessage id="aboutDescription" />
            </p>
          </div>

          <div
            className=" 
                   mt-10"
          >
            <a
              href="/CurriculoMatheus.pdf"
              download="matheus"
              className="p-2
              max-w-[200px]
              bg-accent rounded-sm font-inter text-primary text-[16px] duration-500 hover:bg-secondary hover:text-accent flex justify-center items-center"
            >
              Download CV
              <FileArrowDown className="ml-2" size={18} />
            </a>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex justify-center items-center h-full">
            <div
              className=" 
          border-l-8
          xl:border-b-8
          border-accent
        shadow-2xl
          bg-cover bg-no-repeat
          bg-[url('https://media.discordapp.net/attachments/933803674994618498/1070536695109394432/WhatsApp_Image_2022-12-15_at_15.42_1.png')]
           lg:h-[700px] lg:w-[500px] h-[300px] w-[100%]
           xl:block hidden
           bg-top
                        "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

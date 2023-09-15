import { FormattedMessage } from "react-intl";

export const Initial = () => {
  return (
    <div
      className="w-full lg:h-[calc(100vh-72px)] 
    h-[calc(100vh-64px)]   
    bg-black
    bg-no-repeat
    bg-[url('https://media.discordapp.net/attachments/933803674994618498/1070158013471674468/WhatsApp_Image_2023-01-14_at_00.06_1.png?width=640&height=676')]
    bg-cover
    bg-top
    flex justify-start items-end 
    "
    >
      <div className="mb-36 ml-5">
        <h1
          className="text-white font-inter
          text-xl md:text-4xl xl:text-6xl uppercase"
        >
          <FormattedMessage id="myName" /> <br />
          <span className="font-roboto font-bold">Matheus Mangueira</span>
        </h1>

        <div
          className="md:w-[50%] w-[100%] xl:h-[57px] md:h-[47px] h-[27px] mt-5 bg-accent hover:bg-secondary duration-500  text-secondary hover:text-accent
        text-sm md:text-lg xl:text-xl uppercase font-inter font-bold rounded-md"
        >
          <a
            href="#About"
            className="w-full text-center h-full flex justify-center items-center"
          >
            <FormattedMessage id="buttonHome" />
          </a>
        </div>
      </div>
    </div>
  );
};

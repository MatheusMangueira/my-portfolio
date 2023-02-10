import { FileArrowDown } from "phosphor-react";
import { B } from "../../assets/image/B";

export const About = () => {
  const PDF_FILE_URL = "http://localhost:3000/CurriculoMatheus.pdf";

  const handleDownload = (url: any) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between py-10 lg:py-32 h-full w-full bg-page-2">
      <div className="w-full h-full flex justify-center items-center  ">
        <div className=" px-5 xl:px-20 mb-10 xl:mb-0 h-full flex justify-center flex-col">
          <div>
            <div className="flex justify-center mb-[-20px]">
              <B hight="124px" width="124px" />
            </div>
            <h1
              id="About"
              className="text-center text-[62px] font-inter lg:mb-10 mb-10"
            >
              Hello
            </h1>
          </div>

          <div className="">
            <p className="text-[24px] font-roboto font-bold">Who am i?</p>
            <p className="font-inter text-[18px]">
              I am a passionate front-end developer who loves creating
              innovative and high-quality web solutions. I am always looking for
              new ways to enhance my skills and knowledge. With experience in
              working in a team and collaborating with designers, back-end
              developers and product managers, I understand the importance of
              working efficiently and collaboratively to achieve common project
              goals.
              <br />
              <br />I keep up-to-date with the latest trends and technologies in
              web development and have a strong commitment to creating
              accessible, responsive, and high-performance solutions. I am eager
              to put my knowledge and skills into action on exciting and
              challenging projects. If you are looking for a dedicated and
              passionate front-end developer, please do not hesitate to contact
              me.
            </p>
          </div>
          <div className="mt-10">
            <button
              onClick={() => handleDownload(PDF_FILE_URL)}
              className="p-2 bg-accent rounded-sm font-inter text-primary text-[16px] duration-500 hover:bg-secondary hover:text-accent flex justify-center items-center"
            >
              <p className="mr-2">Download CV</p>
              <FileArrowDown size={18} />
            </button>
          </div>
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
           bg-top
                        "
          />
        </div>
      </div>
    </div>
  );
};

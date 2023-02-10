import AnchorLink from "react-anchor-link-smooth-scroll"

export const PageInitial = () => {
  return (
    <div className="w-full lg:h-[calc(100vh-72px)] 
    h-[calc(100vh-64px)]   
    bg-black
    bg-no-repeat
    bg-[url('https://media.discordapp.net/attachments/933803674994618498/1070158013471674468/WhatsApp_Image_2023-01-14_at_00.06_1.png?width=640&height=676')]
    bg-cover
    bg-top
    flex justify-start items-end 
    " >

      <div className="mb-36 ml-5">
        <h1 id="Home" className="text-white font-inter
          text-xl md:text-4xl xl:text-6xl uppercase">
          My name is <br />
          <span className="font-roboto font-bold">
            Matheus Mangueira
          </span>
        </h1>

        <div className="md:w-[50%] w-[100%] xl:h-[57px] md:h-[47px] h-[27px] mt-5 bg-accent hover:bg-secondary duration-500  text-secondary hover:text-accent
        text-sm md:text-lg xl:text-xl uppercase font-inter font-bold rounded-md">
          <AnchorLink href="#About"
            offset={200}
            className="w-full text-center h-full flex justify-center items-center">
            I´m a developer
          </AnchorLink>
        </div>

      </div>

    </div>
  )
}
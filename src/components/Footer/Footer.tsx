import { Copyright, InstagramLogo, LinkedinLogo } from "phosphor-react"

export const Footer = () => {
  return (
    <div className="py-10 lg:py-5 w-full h-full
    bg-primary border-t-2 border-accent
    
    flex flex-col justify-around items-center 
    lg:flex-row lg:justify-around lg:items-center
    
     

    ">


      <div>
        <div className="w-full flex justify-center items-center">
          <h1 className="text-white font-inter text-[16px] mb-5"
          >My Social Media</h1>

        </div>

        <div className="mb-5 w-full flex justify-around items-center">
          <a href="https://www.linkedin.com/in/matheus-mangueira-504130230/"
            target="_blank" rel="noreferrer">
            <LinkedinLogo
              className="cursor-pointer
              hover:text-white duration-700
        text-accent"
              size={32} />
          </a>

          <a href="https://www.instagram.com/theu_mangueira/" target="_blank" rel="noreferrer">
            <InstagramLogo className="cursor-pointer
             hover:text-white duration-700
        text-accent" size={32} />
          </a>
        </div>
      </div>

      <div className="opacity-20 text-[12px] sm:text-[16px] text-white flex justify-center items-center">
        <Copyright size={18} />
        <span className="ml-2">2023</span>
        <span className="ml-2">Matheus Mangueira. All reserved</span>


      </div>


    </div>
  )
}
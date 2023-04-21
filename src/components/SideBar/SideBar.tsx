import { Points } from "../../assets/image/Points";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const SideBar = () => {
  return (
    <div
      className=" 
    hidden lg:block
    bg-primary w-[40%] h-[100vh] "
    >
      <div className="w-full flex justify-center items-center h-[86px]">
        <p className="text-white text-[12px] md:text-[16px] lg:text-[24px] uppercase font-Roboto font-medium">
          Matheus Mangueira
        </p>
      </div>
      <div className="w-full h-full gap-72 flex justify-start items-start mt-10 flex-col">
        <Points hight="424px" width="424px" />
        <div className="w-full flex gap-16 justify-center flex-row">
          <a
            target="_blank"
            href="https://github.com/MatheusMangueira"
            rel="noreferrer"
          >
            <GithubLogo
              size={44}
              weight="fill"
              className="text-white hover:text-accent transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matheus-mangueira-504130230/"
          >
            <LinkedinLogo
              className="text-white hover:text-accent transition-all duration-300 ease-in-out"
              size={44}
              weight="fill"
            />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/theu_mangueira/"
          >
            <InstagramLogo
              className="text-white hover:text-accent transition-all duration-300 ease-in-out"
              size={44}
              weight="fill"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

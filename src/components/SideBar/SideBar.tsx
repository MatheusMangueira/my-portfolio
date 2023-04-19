import { Points } from "../../assets/image/Points";

export const SideBar = () => {
  return (
    <div
      className=" 
    hidden lg:block
    bg-primary w-[40%] h-screen"
    >
      <div className="w-full flex justify-center items-center h-[86px]">
        <p className="text-white text-[12px] md:text-[16px] lg:text-[24px] uppercase font-Roboto font-medium">
          Matheus Mangueira
        </p>
      </div>
      <div className="w-full h-full flex justify-start items-start mt-10">
        <Points hight="424px" width="424px" />
      </div>
    </div>
  );
};

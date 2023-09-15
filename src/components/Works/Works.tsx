import { CardsWorks } from "./components/CardsWorks/CardsWorks";
import { MainCard } from "./components/MainCard";
import { TitleWorks } from "./components/TitleWork";

export const Works = () => {
  return (
    <div aria-label="works" className="pt-10 lg:py-32 h-full w-full">
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <TitleWorks />
      </div>

      <div className=" flex flex-col lg:flex-row justify-between px-5 xl:px-20 pt-20 gap-10">
        <div>
          <MainCard />
        </div>

        <div>
          <CardsWorks />
        </div>
      </div>
    </div>
  );
};

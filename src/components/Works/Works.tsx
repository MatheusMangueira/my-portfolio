import { SectionWorks } from "./components/SectionWorks";
import { TitleWorks } from "./components/TitleWork";



export const Works = () => {
  return (
    <div className="py-10 lg:py-32 h-full w-full">
      <div className="px-5 xl:px-20 xl:mb-0 h-full ">
        <TitleWorks />
        <div className="mt-[50px]">
          <SectionWorks />
        </div>
      </div>

    </div>
  )
}
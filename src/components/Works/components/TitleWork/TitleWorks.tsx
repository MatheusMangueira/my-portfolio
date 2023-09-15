import { FormattedMessage } from "react-intl";
import { Eclipse } from "../../../../assets/image/Eclipse";

export const TitleWorks = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <h1
          id="Works"
          className="text-[38px] lg:text-[48px] relative flex font-inter text-primary items-center justify-center "
        >
          <FormattedMessage id="workOne" />
   
          <span className="mt-1 ml-[-1px]">
            <Eclipse hight="34px" width="34px" />
          </span>
          <FormattedMessage id="workTwo" />
        
        </h1>
      </div>
      <div className="w-full flex justify-center items-start">
        <h3 className=" font-inter text-primary text-[18px] lg:text-[24px] border-t-4 border-accent pl-28">
        <FormattedMessage id="bestWork" />
        </h3>
      </div>
    </div>
  );
};

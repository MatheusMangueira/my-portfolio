import { ButtonLink } from "../ButtonLink";
import work from "../../main-work.json";

export const MainCard = () => {
  return (
    <div className="max-w-[900px]">
      <div
        className="border-4 border-yellow-500 rounded-2xl
        shadow-md shadow-gray-400
        mb-10
        w-[full]
         h-full
         "
      >
        <img
          className="rounded-xl w-[100%] h-full object-cover"
          src={work.image}
          alt=""
        />
      </div>

      <div className=" max-w-[600px]">
        <p
          className="
        text-[24px] lg:text-[45px] font-bold font-inter text-primary
        "
        >
          See featured project
        </p>

        <p className="">
          I am proud to present a significant project that is the result of hard
          work and collaboration, delivering high-quality results. I am open to
          discussing details and answering any questions.
        </p>
      </div>
      <div className="mt-5 w-[200px]">
        <ButtonLink tittle={work.title} link={work.router} />
      </div>
    </div>
  );
};

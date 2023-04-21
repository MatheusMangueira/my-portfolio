import { ButtonLink } from "../ButtonLink";
import works from "../../works-posts.json";

export const CardsWorks = () => {
  return (
    <div className="max-w-[489px] h-full flex flex-col gap-10 ">
      {works.map((work) => {
        return (
          <div
            key={work.id}
            className="rounded-xl shadow-md shadow-gray-400 relative "
          >
            <img
              className="rounded-lg h-[285px] w-[489px] "
              src={work.image}
              alt=""
            />
            <div className="absolute bottom-0 w-[300px]">
              <ButtonLink tittle={work.title} link={work.router} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

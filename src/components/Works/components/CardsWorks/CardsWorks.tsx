import { ButtonLink } from "../ButtonLink";
import works from "../../works-posts.json";
import { AiOutlineLink } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

export const CardsWorks = () => {
  return (
    <div className="flex gap-5 flex-col max-w-[700px]">
      {works.map((work) => (
        <div
          key={work.id}
          className="p-4 flex gap-4 flex-col shadow-md border-accent border-b-2 border-r-2 rounded-xl"
        >
          <div
            style={{ backgroundImage: `url(${work.image})` }}
            className="w-full h-[100px] rounded-md bg-no-repeat bg-cover"
          />

          <h1 className="text-2xl font-bold text-black capitalize ">
            <FormattedMessage id={work.title} />
          </h1>
          <p className="text-black font-normal text-sm text-justify">
            <FormattedMessage id={work.description} />
          </p>

          {work.router !== "" && (
            <a
              target={"_blank"}
              rel="noreferrer"
              href={work.router}
              className="flex items-center gap-2 text-primary w-fit p-4 hover:text-secondary transition-all"
            >
              <AiOutlineLink size={18} />
              <FormattedMessage id="previewProject" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

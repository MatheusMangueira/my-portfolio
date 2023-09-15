import { FormattedMessage } from "react-intl";
import { ButtonLink } from "../ButtonLink";
// import work from "../../main-work.json";

export const MainCard = () => {
  return (
    <div className="max-w-[900px] sticky top-4">
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
          src={
            "https://media.discordapp.net/attachments/949389628413206589/1152308955561857164/227803992-09fc26e2-d943-415b-9a90-b46731ed5bb1.png?width=1086&height=622"
          }
          alt=""
        />
      </div>

      <div className=" max-w-[600px]">
        <p
          className="
        text-[24px] lg:text-[45px] font-bold font-inter text-primary
        "
        >
        <FormattedMessage id="titleProjecMain" />
        </p>

        <p className="">
        <FormattedMessage id="descriptionProjectMain" />
        </p>
      </div>
      <div className="mt-5 w-[200px]">
        <ButtonLink
          tittle={(<FormattedMessage id="titleButtonProjectMain" />) as any}
          link={"https://github.com/MatheusMangueira/radio__world"}
        />
      </div>
    </div>
  );
};

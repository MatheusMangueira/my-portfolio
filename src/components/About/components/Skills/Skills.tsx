import { FormattedMessage } from "react-intl";
import { skills } from "../../data";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Skills = () => {
  return (
    <div className="max-w-[450px] w-full">
      <div className="flex gap-4 flex-col">
        <p className="text-xl font-medium text-primary border-2 border-accent p-2 rounded-md">
          <FormattedMessage id="skill" />
        </p>
        <div className="grid grid-cols-5 grid-rows-3 gap-4 lg:w-fit ">
          {skills.map((skill) => (
            <Tippy content={skill.name}>
              <div
                className="
                  flex
                  justify-center
                  items-center
                  bg-secondary
                  text-accent
                  rounded-full
                  p-2
                  w-[50px]
                  h-[50px]
                  duration-500
                  hover:bg-accent
                  hover:text-primary
                  text-2xl
                  "
              >
                {skill.icon}
              </div>
            </Tippy>
          ))}
        </div>
      </div>
    </div>
  );
};

import brazil from "../../assets/image/brazil.svg";
import use from "../../assets/image/use.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Language = () => {
  return (
    <div aria-label="language" className="flex gap-2">
      <Tippy content="Brasil">
        <div>
          <img src={brazil} alt="icon brazil" />
        </div>
      </Tippy>
      <Tippy content="English">
        <div>
          <img src={use} alt="icon use" />
        </div>
      </Tippy>
    </div>
  );
};

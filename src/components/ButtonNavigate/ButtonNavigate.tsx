import { ArrowCircleUp } from "phosphor-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const ButtonNavigate = () => {
  return (
    <AnchorLink href="#Home" offset={600}>
      <ArrowCircleUp
        className="cursor-pointer
        right-14
        animate-bounce
        bottom-6 
        fixed
        text-accent
        hover:text-secondary
        duration-500
        z-50
       "
        size={58}
      />
    </AnchorLink>
  );
};

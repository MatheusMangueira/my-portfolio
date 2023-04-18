import { ArrowCircleUp } from "phosphor-react";
// import AnchorLink from "react-anchor-link-smooth-scroll";

export const ButtonNavigate = () => {
  return (
    <a href="#Home">
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
    </a>
  );
};

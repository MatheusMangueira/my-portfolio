import { ArrowCircleUp } from "phosphor-react"
import AnchorLink from "react-anchor-link-smooth-scroll"


export const ButtonNavigate = () => {

  return (
    <AnchorLink
      href="#Home"
      offset={600}
    >
      <ArrowCircleUp
        className="cursor-pointer
        right-14
        bottom-6 
        fixed
        text-accent
        hover:text-secondary
        duration-500
       "
        size={58} />
    </AnchorLink>
  )
}
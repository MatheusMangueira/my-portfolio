import { IPropsSVG } from "../../types/IPropsSVG"

export const Eclipse = ({ width, hight }: IPropsSVG) => {
  return (
    <svg width={width} height={hight} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="27" stroke="#FFC700" strokeWidth="10" />
    </svg>

  )
}
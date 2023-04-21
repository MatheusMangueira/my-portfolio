import { Link } from "phosphor-react";

type ButtonLinkProps = {
  link: string;
  tittle?: string;
};

export const ButtonLink = ({ link, tittle }: ButtonLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="
          p-2 
          duration-500 hover:bg-secondary
         hover:text-accent
          font-inter font-bold rounded-md
          flex items-center gap-2 bg-accent w-[100%] "
      href={link}
    >
      <Link size={24} className=" hover:text-accent text-bg-secondary" />
      <p className="text-[14px]">{tittle}</p>
    </a>
  );
};

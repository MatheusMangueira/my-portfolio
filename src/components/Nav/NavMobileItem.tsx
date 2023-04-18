interface INavMobileItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavMobileItem = ({ href, children }: INavMobileItemProps) => {
  return (
    <a href={href} className="m-3 flex items-center rounded-lg">
      <div 
      area-label="nav mobile"
      className="ml-4 text-base font-medium dark:text-white text-gray-900">
        {children}
      </div>
    </a>
  );
};

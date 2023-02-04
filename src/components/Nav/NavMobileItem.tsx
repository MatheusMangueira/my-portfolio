import { FC } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface INavMobileItemProps {
  href: string;
  children: React.ReactNode;
};

export const NavMobileItem: FC<INavMobileItemProps> = 
  ({ href, children }) => {
    return (
      <AnchorLink
        href={href}

        className="m-3 flex items-center rounded-lg"
      >
        <div className="ml-4 text-base font-medium dark:text-white text-gray-900">
          {children}
        </div>
      </AnchorLink>
    )
}

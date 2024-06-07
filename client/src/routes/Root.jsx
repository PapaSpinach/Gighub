import { useEffect } from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Root() {



  const links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Contractors',
      path: '/contractors',
    },
  ];

  return (
    <div>
      <nav className="p-4 bg-black">
        <div className="flex gap-5">
          {links.map((link) => {
            return (
              <Link
                color={'white'}
                key={link.path}
                to={link.path}
                as={ReactRouterLink}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

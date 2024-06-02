import { Link} from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';

export default function Root() {
  const links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Sign Up',
      path: '/signup',
    },
  ];

  return (
    <div>
      <nav className="p-4 bg-black">
        <div className="flex gap-5">
          {links.map((link) => {
            return (
              <Link color={'white'} key={link.path} href={link.path}>
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
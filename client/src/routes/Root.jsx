import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

export default function Root() {
  const { isLoggedIn, logOut } = useAuth();

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
      <nav className="p-4 bg-black flex justify-between">
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

        {isLoggedIn && (
          <Link color="white" onClick={logOut}>
            Log Out
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

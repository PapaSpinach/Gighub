import { Button, Heading, Link } from '@chakra-ui/react';
import homeImage from '/home.jpeg';
import Signup from '../components/SignUp';
import LogIn from '../components/LogIn';
import { useState } from 'react';
import { useAuth } from '../hooks';
import JobsTable from '../components/JobsTable';

export default function Home() {
  const [showSignup, setShowSignup] = useState(true);
  const { isLoggedIn } = useAuth();

  const links = [];

  if (isLoggedIn) {
    links.push({
      label: 'Post a Job',
      path: '/jobs/create',
    });
  }

  return (
    <main>
      <div
        className="bg-center bg-cover flex flex-col gap-8 items-center justify-center"
        style={{ backgroundImage: `url("${homeImage}")`, height: '50vh' }}
      >
        <Heading fontFamily={'Anton'} size="3xl" color="#D4A017">
          GigHub
        </Heading>

        <nav className="flex items-center gap-8">
          {links.map((link) => {
            return (
              <a key={link.path} href={link.path}>
                <Button variant="solid" colorScheme="blue">
                  {link.label}
                </Button>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="p-8 space-y-16 max-w-3xl mx-auto">
        {!isLoggedIn && (
          <div>
            {showSignup ? <Signup /> : <LogIn />}

            <div>
              {showSignup ? (
                <>
                  Already have an account?{' '}
                  <Link onClick={() => setShowSignup(false)}>Log In</Link>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{' '}
                  <Link onClick={() => setShowSignup(true)}>Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
        <div>
          <Heading size="lg" mb="8px">
            Jobs
          </Heading>
          <JobsTable />
        </div>
      </div>
    </main>
  );
}

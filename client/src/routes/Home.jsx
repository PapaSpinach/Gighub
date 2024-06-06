import {
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from '@chakra-ui/react';
import homeImage from '/home.jpeg';
import Signup from '../components/SignUp';
import LogIn from '../components/LogIn';
import { useState } from 'react';
import { useAuth } from '../hooks';

export default function Home() {
  const [showSignup, setShowSignup] = useState(true);
  const { isLoggedIn } = useAuth();

  const links = [
    {
      label: 'Find a Job',
      path: '/jobs',
    },
    {
      label: 'Post a Job',
      path: '/jobs/create',
    },
  ];

  const jobs = [
    {
      title: 'My job',
      postedBy: 'Aaron',
      description: 'This is a job',
      hourlyPay: 10,
      email: 'aaron@example.com',
      phoneNumber: 1234567890,
    },
    {
      title: 'Another job',
      postedBy: 'Bob',
      description: 'This is another job',
      hourlyPay: 20,
      email: 'bob@example.com',
      phoneNumber: 1234567890,
    },
  ];

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
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Posted By</Th>
                  <Th isNumeric>Hourly Pay</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {jobs.map((job) => {
                  return (
                    <Tr key={job.title}>
                      <Td>{job.title}</Td>
                      <Td>{job.postedBy}</Td>
                      <Td isNumeric>${job.hourlyPay}</Td>
                      <Td>{job.email}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </main>
  );
}

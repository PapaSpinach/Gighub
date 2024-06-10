import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useAuth } from '../hooks';
import { useState } from 'react';

export default function LogIn() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <CardHeader>
        <Heading>Log In</Heading>
      </CardHeader>

      <CardBody>
        <Stack direction="column" spacing="24px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button onClick={() => auth.logIn({ email, password })}>Log In</Button>
      </CardFooter>
    </Card>
  );
}

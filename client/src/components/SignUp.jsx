import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useAuth } from '../hooks';
import { useState } from 'react';

export default function Signup() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialties, setSpecialties] = useState('');

  return (
    <Card>
      <CardHeader>
        <Heading>Sign Up</Heading>
      </CardHeader>

      <CardBody>
        <Stack direction="column" spacing="24px">
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="email"
              value={fullName}
              onInput={(e) => setFullName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={username}
              onInput={(e) => setUsername(e.target.value)}
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

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onInput={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Specialties</FormLabel>
            <FormHelperText>Put each specialty on its own line</FormHelperText>
            <Textarea
              value={specialties}
              onInput={(e) => setSpecialties(e.target.value)}
            />
          </FormControl>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button
          onClick={() =>
            auth.register({
              email,
              username,
              password,
              fullName,
              phoneNumber,
              specialties,
            })
          }
        >
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  );
}

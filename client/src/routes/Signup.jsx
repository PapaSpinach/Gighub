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
    RadioGroup,
    Radio,
    Stack,
  } from '@chakra-ui/react';
  
  export default function Signup() {
    return (
      <main className="p-8">
        <Card marginX="auto" maxW={'600px'}>
          <CardHeader>
            <Heading>Sign Up</Heading>
          </CardHeader>
  
          <CardBody>
            <Stack direction="column" spacing="24px">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
  
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
  
              <FormControl>
                <FormLabel>I am A...</FormLabel>
                <RadioGroup>
                  <Stack direction="column">
                    <Radio value="client">Client</Radio>
                    <Radio value="contractor">Contractor</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>
          </CardBody>
  
          <CardFooter>
            <Button>Sign Up</Button>
          </CardFooter>
        </Card>
      </main>
    );
  }
  
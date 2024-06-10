/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  Stack,
  Textarea,
  InputGroup,
} from '@chakra-ui/react';

export function JobForm({ job, setJob }) {
  return (
    <Stack direction="column" spacing="24px">
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          value={job.title}
          onInput={(e) => setJob({ title: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={job.description}
          onInput={(e) => setJob({ description: e.target.value })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Hourly Pay</FormLabel>
        <InputGroup>
          <InputLeftAddon>$</InputLeftAddon>
          <Input
            value={job.hourlyPay}
            type="number"
            onInput={(e) => setJob({ hourlyPay: Number(e.target.value) })}
          />
        </InputGroup>
      </FormControl>
    </Stack>
  );
}

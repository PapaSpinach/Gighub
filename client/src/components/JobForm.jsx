import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
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
        <Input
          value={job.hourlyPay}
          type="number"
          onInput={(e) => setJob({ hourlyPay: Number(e.target.value) })}
          prefix="$"
        />
      </FormControl>
    </Stack>
  );
}

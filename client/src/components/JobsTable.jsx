import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';
import { getAllJobs } from '../api/jobs';
import { useQuery } from '@tanstack/react-query';

export default function JobsTable() {
  const { data: jobs, isPending } = useQuery({
    queryKey: ['jobs'],
    queryFn: getAllJobs,
  });

  if (isPending) {
    return (
      <div className="flex justify-center p-8">
        <Spinner />
      </div>
    );
  }

  return (
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
              <Tr key={job._id}>
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
  );
}

import { useMutation } from '@tanstack/react-query';
import { createJob } from '../api/jobs';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useObjectState } from '@uidotdev/usehooks';
import { useAuth } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { JobForm } from '../components/JobForm';
import { Navigate } from 'react-router-dom';

export default function CreateJob() {
  const navigate = useNavigate();

  const postJobMutation = useMutation({
    mutationFn: async (args) => {
      await createJob(args);
      navigate('/');
    },
  });

  const { currentUser } = useAuth();

  const [job, setJob] = useObjectState({
    title: '',
    description: '',
    hourlyPay: 20,
  });

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Card>
        <CardHeader>
          <Heading>Post a Job</Heading>
        </CardHeader>
        <CardBody>
          <JobForm job={job} setJob={setJob} />
        </CardBody>

        <CardFooter>
          <Button onClick={() => postJobMutation.mutate(job)}>
            Create Job
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

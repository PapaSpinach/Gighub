import { useQuery } from '@tanstack/react-query';
import Contractor from '../components/Contractor';
import { getAllContractors } from '../api/contractors';
import { Spinner } from '@chakra-ui/react';

export default function Contractors() {
  const { data, isPending } = useQuery({
    queryKey: ['contractors'],
    queryFn: getAllContractors,
  });

  if (isPending)
    return (
      <div className="flex justify-center p-8">
        <Spinner />
      </div>
    );

  if (data)
    return (
      <main className="max-w-2xl mx-auto space-y-8 p-8">
        {data.map((contractor) => (
          <Contractor key={contractor.fullName} contractor={contractor} />
        ))}
      </main>
    );

  return <div>There was an error</div>;
}

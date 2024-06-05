import Contractor from '../components/Contractor';

export default function Contractors() {
  const contractors = [
    {
      fullName: 'Aaron Beckles',
      email: 'aaron@example.com',
      phoneNumber: 1234567890,
      specialties: ['Plumbing', 'Framing'],
      ratings: [1, 4, 5],
    },
    {
      fullName: 'John Smith',
      email: 'john@example.com',
      phoneNumber: 1234567890,
      specialties: ['Plumbing', 'Framing'],
      ratings: [5, 4, 5],
    },
  ];

  return (
    <main className="max-w-2xl mx-auto space-y-8 p-8">
      {contractors.map((contractor) => (
        <Contractor key={contractor.fullName} contractor={contractor} />
      ))}
    </main>
  );
}

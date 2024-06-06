import { useState, useEffect } from 'react'
import Contractor from '../components/Contractor';

export default function Contractors() {
  //  [ dataset, method to update the dataset] = useState(initialValue)
  const [contractors, setContractors] = useState([])

  // GET ALL CONTRACTORS
  const getContractors = async () => {
    // here we REQUEST data from the BACKEND/DB
    try {
      
      const data = await fetch('/api/contractors/')
      const contractorsArray = await  data.json()
         // console.log('data: ', data)
          // IF successful --> we save that data on the front end
      setContractors(contractorsArray)
    } catch (error) {
      console.log("Err: ", error)
    }
    
  }

  
  useEffect(() => {
    getContractors()
  }, [])

  /*
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
  */

  return (
    <main className="max-w-2xl mx-auto space-y-8 p-8">
      {contractors.map((contractor) => (
        <Contractor key={contractor.fullName} contractor={contractor} />
      ))}
    </main>
  );
}

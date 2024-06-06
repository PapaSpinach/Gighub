/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';

export default function Contractor({ contractor }) {
  const { ratings } = contractor;

  const avgRating = avg(ratings);

  return (
    <Card>
      <CardHeader display="flex" justifyContent="space-between">
        <Heading size="md">{contractor.fullName}</Heading>
        <div>
          {[1, 2, 3, 4, 5].map((rating) => {
            const isHighlighted = rating < avgRating;

            return (
              <StarIcon color={isHighlighted ? 'gold' : 'gray'} key={rating} />
            );
          })}
        </div>
      </CardHeader>

      <CardBody>
        <div className="space-y-4">
          <div className="flex justify-between">
            <Link isExternal href={`mailto:${contractor.email}`}>
              {contractor.email} <ExternalLinkIcon mx="2px" />
            </Link>
            <Link isExternal href={`tel:+1${contractor.phoneNumber}`}>
              {formatPhone(contractor.phoneNumber)}{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </div>

          <div>
            <Heading size="sm" mb="4px">
              Specialties
            </Heading>
            <ul className="space-y-1">
              {contractor.specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function formatPhone(phone) {
  const phoneStr = phone.toString();
  const firstThree = phoneStr.slice(0, 3);
  const nextThree = phoneStr.slice(3, 6);
  const lastFour = phoneStr.slice(-4);

  return `(${firstThree}) - ${nextThree} - ${lastFour}`;
}

function avg(numbers) {
  if (!numbers.length) return 0;

  const sum = numbers.reduce((v, acc) => acc + v);

  return sum / numbers.length;
}

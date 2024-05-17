import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

interface DonateProps {
  title: string;
  description: string;
  buttonLabel: string;
}

const DonateCard: React.FC<DonateProps> = ({ title, description, buttonLabel }) => {
  return (
    <Card>
      <CardHeader >{title}</CardHeader>
      <CardBody>
        <p>{description}</p>
        {title === 'Monthly Donation' ? (
          <Button size="lg" color="secondary">{buttonLabel}</Button>
        ) : (
          <Button size="lg" color="primary">{buttonLabel}</Button>
        )}
      </CardBody>
      <CardFooter>More Info</CardFooter>
    </Card>
  );
};

export default DonateCard;

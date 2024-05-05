import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from '@nextui-org/react';

interface SupportProps {
  supportType: string;
  description: string;
  contactInfo: string;
}

const SupportCard: React.FC<SupportProps> = ({ supportType, description, contactInfo }) => {
  return (
    <Card>
      <CardHeader>{supportType}</CardHeader>
      <CardBody>
        <p>{description}</p>
        <h4>Contact Information:</h4>
        {supportType === 'Message or Chat Support' ? (
          <Button size="md" color="primary">Contact Us</Button>
        ) : (
          <p>{contactInfo}</p>
        )}
      </CardBody>
      <CardFooter>More Info</CardFooter>
    </Card>
  );
};

export default SupportCard;

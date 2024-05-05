import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from '@nextui-org/react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <Card>
      <CardHeader><Image alt='team member' src='https://placehold.co/400'/></CardHeader>
      <CardBody>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{bio}</p>
      </CardBody>
      <CardFooter>More Info</CardFooter>
    </Card>
  );
};

export default TeamMemberCard;

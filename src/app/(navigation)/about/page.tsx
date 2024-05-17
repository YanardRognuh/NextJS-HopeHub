import {Image} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import TeamMemberCard from "@/app/components/TeamMemberCard";

const teamMembers = [
  {
    name: 'Team Member 1',
    role: 'Founder & CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum odio non faucibus consequat.',
  },
  {
    name: 'Team Member 2',
    role: 'Mental Health Counselor',
    bio: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
  },
  {
    name: 'Team Member 3',
    role: 'Community Manager',
    bio: 'Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center space-y-12">
        <div className="w-3/4">
          <h1 className="text-4xl font-bold">About HopeHub</h1>
          <p className="mt-8 text-lg">At HopeHub, we are dedicated to providing support and resources for those affected by mental health challenges, particularly related to suicide prevention. Our mission is to create a safe and compassionate community where individuals can find hope, understanding, and healing.</p>
        </div>
        <div className="flex flex-col justify-between w-3/4 md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold">Our Story</h1>
            <p className="mt-10 text-lg">HopeHub was founded in 2024 by a group of passionate individuals who recognized the need for a supportive platform for those struggling with suicidal thoughts or feelings of hopelessness. Our founders, Yanard, experienced the impact of mental health issues firsthand and wanted to create a space where people could come together to share their stories, find help, and receive the support they deserve.</p>
          </div>
          <Image alt="our story" className="w-full" src="https://placehold.co/500"/>
        </div>
        <div className="flex flex-col justify-between w-3/4 md:flex-row">
          <Image alt="our vision" className="w-full" src="https://placehold.co/500"/>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold">Our Vision</h1>
            <p className="mt-10 text-lg">We envision a world where mental health is destigmatized, and everyone has access to the resources and support they need to thrive. Through education, advocacy, and community engagement, we strive to break down barriers and promote understanding surrounding mental health challenges and suicide prevention.</p>
          </div>
        </div>
        <div className="w-3/4">
          <div>
            <h1 className="text-4xl font-bold">Our Team</h1>
            <p className="mt-10 text-lg">Meet the dedicated individuals behind HopeHub. Our team includes mental health professionals, advocates, and volunteers who are committed to making a difference in the lives of others. Together, we work tirelessly to ensure that our community members feel heard, supported, and empowered on their journey towards healing.</p>
          </div>
        </div>
        <div className="grid w-3/4 grid-cols-1 gap-4 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} />
          ))}
        </div>
      </div>
    </div>
  );
}

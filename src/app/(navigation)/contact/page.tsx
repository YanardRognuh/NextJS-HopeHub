import SupportCard from "@/app/components/SupportCard";

const supportData = [
  {
    supportType: 'Phone Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ligula a libero consectetur, et mattis elit consectetur.',
    contactInfo: '+1 (XXX) XXX-XXXX',
  },
  {
    supportType: 'Message or Chat Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet ligula a libero consectetur, et mattis elit consectetur.',
    contactInfo: '[Insert chat platform details]',
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 height">
      <div className="w-3/4">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg">Have a question or need support? We&apos;re here to help. Feel free to reach out to us using the contact options below.</p>
      </div>
      <div className="w-3/4">
        <h1 className="mb-4 text-4xl font-bold">Contact Information</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {supportData.map((support, index) => (
            <SupportCard key={index} supportType={support.supportType} description={support.description} contactInfo={support.contactInfo} />
          ))}
        </div>
      </div>
    </div>
  );
}

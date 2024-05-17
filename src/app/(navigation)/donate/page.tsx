import DonateCard from "@/app/components/DonateCard";

const donationOptions = [
  {
    title: 'One-Time Donation',
    description: 'Make a one-time donation to support our cause.',
    buttonLabel: 'Donate Now',
  },
  {
    title: 'Monthly Donation',
    description: 'Support us on a monthly basis.',
    buttonLabel: 'Donate Monthly',
  },
];

export default function Donation() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col items-start justify-center space-y-12 md:items-center md:px-20">
        <div className="w-full">
          <h1 className="mb-4 text-4xl font-bold">Support Our Cause</h1>
          <p className="mb-8 text-lg">Your donation helps us continue our mission. Choose a donation method below.</p>
        </div>
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold">Donation Options</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {donationOptions.map((option, index) => (
              <DonateCard key={index} title={option.title} description={option.description} buttonLabel={option.buttonLabel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 height">
      <div className='max-w-2xl p-8 m-10 text-black bg-gray-200 rounded-lg shadow-md'>
        <h1 className="mb-4 text-4xl font-bold text-center">Welcome to Hopehub</h1>
        <p className="mb-4">At HopeHub, we understand that life can be challenging, and sometimes it may feel overwhelming. If you&apos;re struggling with thoughts of suicide or know someone who is, you&apos;re not alone. We&apos;re here to offer support, resources, and a safe space to find help and healing.</p>
        <p className="mb-4">Whether you&apos;re seeking guidance, information, or just someone to listen, our community is here for you. Together, we can navigate through difficult times and find the light at the end of the tunnel.</p>
        <p className="mb-4">Remember, your story matters, and there is hope for a brighter tomorrow. Take a step towards healing today by exploring our articles, accessing resources, or reaching out for assistance. You are valued, and your life is worth living.</p>
        
        <div className="flex justify-center mt-4">
          <Link href="/contact">
            <Button color='primary' className="mt-4">Get Help</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-auto md:h-96 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Master the Art of Music</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam cupiditate alias earum, ullam, minima recusandae nihil blanditiis reprehenderit impedit id perferendis autem voluptas suscipit quae quidem cumque rerum sint?
        </p>
        <div className="mt-4">
             <Link href={"/courses"}>
              Explore Courses
             </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

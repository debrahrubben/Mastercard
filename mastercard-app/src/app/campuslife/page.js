import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Campuslife() {
  const students = [
    {
      name: "Ama Boakye",
      major: "Computer Science",
      quote: "The Mastercard Foundation scholarship has been a game-changer for me. It has not only covered my tuition and living expenses, but also provided me with invaluable opportunities for personal and professional development.",
      image: "/placeholder.svg",
    },
    {
      name: "Kwame Mensah",
      major: "Mechanical Engineering",
      quote: "The Mastercard Foundation has been a true partner in my educational journey. Their support has not only eased my financial burden, but also empowered me to pursue my passions and make a positive impact on my community.",
      image: "/placeholder.svg",
    },
    {
      name: "Adwoa Agyeman",
      major: "Nursing",
      quote: "The Mastercard Foundation has been a true catalyst in my academic and personal growth. Their support has not only allowed me to focus on my studies, but also provided me with opportunities to develop my leadership skills and give back to my community.",
      image: "/placeholder.svg",
    },
    {
      name: "Kofi Amoah",
      major: "Economics",
      quote: "The Mastercard Foundation has been a true partner in my educational journey. Their support has not only eased my financial burden, but also empowered me to pursue my passions and make a positive impact on my community.",
      image: "/placeholder.svg",
    },
    {
      name: "Esi Mensah",
      major: "Business Administration",
      quote: "The Mastercard Foundation scholarship has been a game-changer for me. It has not only covered my tuition and living expenses, but also provided me with invaluable opportunities for personal and professional development.",
      image: "/placeholder.svg",
    },
    {
      name: "Kwasi Appiah",
      major: "Civil Engineering",
      quote: "The Mastercard Foundation has been a true catalyst in my academic and personal growth. Their support has not only allowed me to focus on my studies, but also provided me with opportunities to develop my leadership skills and give back to my community.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforming Lives at KNUST
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hear from KNUST scholars about the life-changing impact of the Mastercard Foundation.
              </p>
            </div>
          </div>
          <Image
            src="https://img.freepik.com/free-photo/cheerful-smiling-african-male-female-sitting-ground-using-laptop-daytime_181624-32938.jpg?t=st=1722349409~exp=1722353009~hmac=ddce27ac2eee628baf1c23041ef6d4faaa2ea7b6a9e3441d828183ae910d073f&w=900"
            width="550"
            height="550"
            alt="KNUST Campus"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <Card key={index} className="p-6 flex flex-col items-start space-y-4 bg-gray-300">
              <Image
                src={student.image}
                width="80"
                height="80"
                alt={`${student.name} Profile`}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-muted-foreground">{student.major}</p>
              </div>
              <blockquote className="text-muted-foreground">
                {student.quote}
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-8">
            Have a question or want to work together? Fill out the form below and we will get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Location</h2>
            <div className="text-muted-foreground">
              <p>KNUST Campus</p>
              <p>Kumasi, Ghana 12345</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
            <div className="text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                <p>+233 (0) 592532564</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5" />
                <p>info@knustmastercardfnd</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Map</h2>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-photo/urban-vector-city-map-guangzhou-china_601748-43869.jpg?w=1060"
                width={600}
                height={400}
                alt="Location Map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define your icon components here...


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}

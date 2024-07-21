/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zGCdvOVVqkn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function complaintdesk() {
  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complaint Desk</CardTitle>
        <CardDescription>
          Use this form to submit a complaint about any issues you are experiencing on campus.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="student-id">Student ID</Label>
            <Input id="student-id" placeholder="Enter your student ID" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select id="category">
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="administrative">Administrative</SelectItem>
                <SelectItem value="facilities">Facilities</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about your complaint"
              className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full text-amber-500 bg-black">
            Submit Complaint
          </Button>
        </form>
      </CardContent>
    </Card>)
  );
}
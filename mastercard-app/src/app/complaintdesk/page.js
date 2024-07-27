'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ComplaintDesk() {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to the server)
    toast.success('Complaint submitted successfully!');
  };

  return (
    <div>
      <div className="background-image">
        <br />
        <Card className="w-full max-w-md mx-auto bg-white">
          <CardHeader>
            <CardTitle>Complaint Desk</CardTitle>
            <CardDescription>
              Use this form to submit a complaint about any issues you are experiencing on campus.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your full name" onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="student-id">Student ID</Label>
                <Input id="student-id" placeholder="Enter your student ID" onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select id="category" onChange={handleChange}>
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
                  className="min-h-[150px]"
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full text-amber-500 bg-black">
                Submit Complaint
              </Button>
            </form>
          </CardContent>
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
}

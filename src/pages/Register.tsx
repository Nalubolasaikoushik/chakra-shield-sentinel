
import React from 'react';
import { Link } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, UserPlus, Lock, FileCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AshokChakra from '@/components/AshokChakra';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  department: z.string().min(1, { message: "Please select your department" }),
  agencyId: z.string().min(3, { message: "Please enter a valid Agency ID" }),
  termsAndConditions: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: "",
      agencyId: "",
      termsAndConditions: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Registration successful",
      description: "Your account has been created",
    });
    // In a real app, this would register the user
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 mx-auto">
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-india-navyBlue/10 p-3 rounded-full">
                  <UserPlus className="h-8 w-8 text-india-saffron" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CardTitle className="text-2xl font-bold text-india-navyBlue">Agency Registration</CardTitle>
                <AshokChakra size="sm" className="ml-2" />
              </div>
              <CardDescription className="text-gray-600">
                Create your secure ChakraShield account
              </CardDescription>
              <div className="flex justify-center">
                <span className="flex items-center px-3 py-1 text-xs font-semibold text-india-navyBlue bg-india-navyBlue/10 rounded-full">
                  <Lock className="mr-1 h-3 w-3" />
                  Secure Registration
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Official Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@department.gov.in" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <FormControl>
                            <Input placeholder="Your department/ministry" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="agencyId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Agency ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Your agency ID" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormDescription className="text-xs">
                            At least 8 characters with numbers and symbols
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="border-india-navyBlue/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <FormField
                      control={form.control}
                      name="termsAndConditions"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pb-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I accept the <Link to="/terms" className="text-india-saffron hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-india-saffron hover:underline">Privacy Policy</Link>
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-india-navyBlue hover:bg-india-navyBlue/90">
                    <FileCheck className="mr-2 h-4 w-4" /> Register Account
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>
              <div className="text-center text-sm">
                <p>Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-india-saffron hover:underline">
                    Login
                  </Link>
                </p>
              </div>

              <div className="w-full pt-4 border-t border-gray-200">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex items-center">
                    <img 
                      src="https://i.postimg.cc/jL7gtYHc/digital-india-logo.png"
                      alt="Digital India Initiative" 
                      className="h-6 mr-2"
                    />
                    <p className="text-xs text-gray-500">
                      A Digital India Initiative
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 text-center max-w-sm">
                    ChakraShield is protected by advanced security protocols. All data is encrypted and secured as per government standards.
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;

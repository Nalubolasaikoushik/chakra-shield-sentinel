
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
import { Shield, UserCheck, Key } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AshokChakra from '@/components/AshokChakra';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Login successful",
      description: "Welcome back to ChakraShield",
    });
    // In a real app, this would handle authentication
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-auto">
          {/* Secure Login Card */}
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-india-navyBlue/10 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-india-saffron" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CardTitle className="text-2xl font-bold text-india-navyBlue">ChakraShield Login</CardTitle>
                <AshokChakra size="sm" className="ml-2" />
              </div>
              <CardDescription className="text-gray-600">
                Access your secure ChakraShield dashboard
              </CardDescription>
              <div className="flex justify-center">
                <span className="flex items-center px-3 py-1 text-xs font-semibold text-india-navyBlue bg-india-navyBlue/10 rounded-full">
                  <Key className="mr-1 h-3 w-3" />
                  Secure Access
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@gov.in" {...field} className="border-india-navyBlue/20" />
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Remember me for 30 days</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-india-navyBlue hover:bg-india-navyBlue/90">
                    <UserCheck className="mr-2 h-4 w-4" /> Login
                  </Button>
                </form>
              </Form>

              <div className="mt-4 text-center text-sm">
                <Link to="/forgot-password" className="text-india-navyBlue hover:underline">
                  Forgot your password?
                </Link>
              </div>
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
                <p>Don't have an account?{" "}
                  <Link to="/register" className="font-semibold text-india-saffron hover:underline">
                    Register
                  </Link>
                </p>
              </div>

              <div className="w-full pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c2ab8b88-6190-49fe-af92-35a0a53524b0.png" 
                    alt="Digital India Initiative" 
                    className="h-6 mr-2"
                  />
                  <p className="text-xs text-gray-500">
                    A Digital India Initiative
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

export default Login;

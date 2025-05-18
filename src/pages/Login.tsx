
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, UserCheck, Key, Eye, EyeOff, Facebook, Twitter, Mail, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AshokChakra from '@/components/AshokChakra';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Focus first input on page load
  useEffect(() => {
    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput) {
      (emailInput as HTMLInputElement).focus();
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: t('success'),
        description: "Welcome back to ChakraShield",
      });
      setIsLoading(false);
      
      // Animated transition to dashboard
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-auto my-auto">
          {/* Secure Login Card */}
          <Card className="border-2 border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-india-navyBlue/5 via-transparent to-india-saffron/5 pointer-events-none"></div>
            <CardHeader className="space-y-2 text-center relative">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-br from-india-navyBlue to-india-navyBlue/70 text-white p-3 rounded-full">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-india-navyBlue to-india-accent3 bg-clip-text text-transparent">
                  ChakraShield {t('login')}
                </CardTitle>
                <AshokChakra size="sm" className="ml-2" />
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {t('headerTitle')}
              </CardDescription>
              <div className="flex justify-center">
                <span className="flex items-center px-3 py-1 text-xs font-semibold text-india-navyBlue dark:text-india-saffron bg-india-navyBlue/10 dark:bg-india-saffron/10 rounded-full">
                  <Key className="mr-1 h-3 w-3" />
                  {t('securityToolsLink')}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="login-form">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          {t('email')}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                            <Input 
                              placeholder="your.email@domain.com" 
                              {...field} 
                              className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-india-navyBlue focus:border-india-navyBlue dark:focus:ring-india-saffron dark:focus:border-india-saffron" 
                              data-testid="email-input"
                            />
                          </div>
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
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          {t('password')}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                            <Input 
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                              className="pl-10 pr-10 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-india-navyBlue focus:border-india-navyBlue dark:focus:ring-india-saffron dark:focus:border-india-saffron"
                              data-testid="password-input"
                            />
                            <button 
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={showPassword ? t('hidePassword') : t('showPassword')}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="remember-me-checkbox"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-600 dark:text-gray-400">
                              {t('rememberMe')}
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <Link 
                      to="/forgot-password" 
                      className="text-sm font-medium text-india-navyBlue hover:text-india-navyBlue/90 dark:text-india-saffron dark:hover:text-india-saffron/90 hover:underline"
                      data-testid="forgot-password-link"
                    >
                      {t('forgotPassword')}
                    </Link>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-india-navyBlue to-india-accent3 hover:from-india-accent3 hover:to-india-navyBlue text-white shadow-md hover:shadow-lg transition-all duration-300" 
                    disabled={isLoading}
                    data-testid="login-button"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('loading')}
                      </>
                    ) : (
                      <>
                        <UserCheck className="mr-2 h-4 w-4" /> {t('loginButton')}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">or</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 w-full">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
                >
                  <Mail className="h-5 w-5 text-red-500" />
                </Button>
              </div>
              
              <div className="text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  {t('dontHaveAccount')}{" "}
                  <Link 
                    to="/register" 
                    className="font-semibold text-india-saffron hover:text-india-saffron/80 dark:text-india-saffron dark:hover:text-india-saffron/90 hover:underline"
                    data-testid="register-link"
                  >
                    {t('registerButton')}
                  </Link>
                </p>
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


import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Info, Eye, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LastProfileData {
  username: string;
  platform: string;
  trustScore: number;
  date: string;
  status: 'safe' | 'suspicious' | 'fake';
}

const Dashboard = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [lastProfile, setLastProfile] = useState<LastProfileData | null>(null);

  // Simulate loading and fetching last profile data
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock data for last analyzed profile
      const mockProfile: LastProfileData = {
        username: 'cyber_officer458',
        platform: 'Twitter',
        trustScore: 85,
        date: new Date().toISOString(),
        status: 'safe'
      };
      
      setLastProfile(mockProfile);
      setLoading(false);
      
      // Show a welcome toast
      toast({
        title: t('welcomeToDashboard'),
        description: t('dashboardUpdated'),
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [toast, t]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        {/* Intro Banner */}
        <div className="bg-gradient-to-br from-india-navyBlue to-india-accent3 text-white">
          <div className="container mx-auto px-4 py-6 md:py-10">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="p-3 bg-white/10 rounded-full w-14 h-14 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{t('welcomeToChakraShield')}</h1>
                <p className="mt-2 text-white/80 max-w-2xl">
                  {t('dashboardDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ChakraShield Description */}
        <section className="py-6 md:py-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Last Analyzed Profile */}
            <Card className="md:col-span-1 bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-india-navyBlue dark:text-india-saffron" />
                  <span>{t('profileAnalyzed')}</span>
                </CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : lastProfile ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{lastProfile.username}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{lastProfile.platform}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{t('trustScore')}</span>
                      <span 
                        className={`text-sm font-medium px-2 py-1 rounded-full ${
                          lastProfile.status === 'safe' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : lastProfile.status === 'suspicious'
                              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {lastProfile.trustScore}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          lastProfile.status === 'safe' 
                            ? 'bg-green-500' 
                            : lastProfile.status === 'suspicious'
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                        }`}
                        style={{ width: `${lastProfile.trustScore}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                    {t('noProfiles')}
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* ChakraShield Overview */}
            <Card className="md:col-span-2 bg-white dark:bg-gray-800 shadow-sm border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-india-navyBlue dark:text-india-saffron" />
                  <span>{t('aboutChakraShield')}</span>
                </CardTitle>
                <CardDescription>
                  {t('chakraShieldDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong>{t('whatIsChakraShield')}:</strong> {t('chakraShieldDefinition')}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <BarChart className="h-4 w-4 mr-1 text-india-navyBlue dark:text-india-saffron" />
                        {t('keyCapabilities')}
                      </h3>
                      <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>{t('capability1')}</li>
                        <li>{t('capability2')}</li>
                        <li>{t('capability3')}</li>
                        <li>{t('capability4')}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1 text-india-navyBlue dark:text-india-saffron" />
                        {t('useCases')}
                      </h3>
                      <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>{t('useCase1')}</li>
                        <li>{t('useCase2')}</li>
                        <li>{t('useCase3')}</li>
                        <li>{t('useCase4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <DashboardOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

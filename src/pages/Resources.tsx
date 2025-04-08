
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, BookOpen, FileCode, Download, Users, Shield, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-india-navyBlue/90 to-india-navyBlue/70 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-india-saffron mr-3" />
              <h1 className="text-4xl font-bold">ChakraShield Resources</h1>
            </div>
            <p className="text-xl text-center">Comprehensive guides and resources for India's digital security infrastructure</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="documentation" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documentation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Documentation</CardTitle>
                    <CardDescription>Comprehensive guides for implementation and usage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border border-india-navyBlue/10">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Shield className="h-5 w-5 text-india-saffron mr-2" />
                              Security Frameworks
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="mb-4">Detailed documentation on ChakraShield's security architecture, threat models, and implementation guides.</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Threat detection algorithms</li>
                              <li>Behavioral analysis frameworks</li>
                              <li>Network security protocols</li>
                              <li>Implementation best practices</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">View Documentation</Button>
                          </CardFooter>
                        </Card>
                        
                        <Card className="border border-india-navyBlue/10">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <BookOpen className="h-5 w-5 text-india-navyBlue mr-2" />
                              User Manuals
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="mb-4">Comprehensive guides for end-users, administrators, and security personnel.</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Administrator guide</li>
                              <li>End-user documentation</li>
                              <li>Security analyst handbook</li>
                              <li>Troubleshooting guides</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">Access Manuals</Button>
                          </CardFooter>
                        </Card>
                      </div>
                      
                      <Card className="border border-india-navyBlue/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Educational Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h3 className="font-medium mb-2">Webinars</h3>
                              <p className="text-sm text-gray-600 mb-3">Regular webinars on threat detection, infrastructure security, and more.</p>
                              <Button variant="link" className="p-0 h-auto text-india-navyBlue">View Schedule</Button>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h3 className="font-medium mb-2">Training Courses</h3>
                              <p className="text-sm text-gray-600 mb-3">Self-paced courses for security personnel and system administrators.</p>
                              <Button variant="link" className="p-0 h-auto text-india-navyBlue">Browse Courses</Button>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h3 className="font-medium mb-2">Case Studies</h3>
                              <p className="text-sm text-gray-600 mb-3">Real-world applications and success stories from across India.</p>
                              <Button variant="link" className="p-0 h-auto text-india-navyBlue">Read Case Studies</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="guidelines" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Guidelines</CardTitle>
                    <CardDescription>Best practices and standard procedures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-india-saffron p-4 bg-india-saffron/5">
                        <h3 className="text-lg font-medium mb-2">National Cybersecurity Policy Integration</h3>
                        <p className="text-gray-700 mb-3">Guidelines for integrating ChakraShield with existing national cybersecurity frameworks.</p>
                        <Button variant="outline" size="sm" className="text-india-navyBlue border-india-navyBlue/30">Download Guidelines</Button>
                      </div>
                      
                      <div className="border-l-4 border-india-navyBlue p-4 bg-india-navyBlue/5">
                        <h3 className="text-lg font-medium mb-2">Data Protection Standards</h3>
                        <p className="text-gray-700 mb-3">Implementation guidance for ensuring compliance with Indian data protection regulations.</p>
                        <Button variant="outline" size="sm" className="text-india-navyBlue border-india-navyBlue/30">View Standards</Button>
                      </div>
                      
                      <div className="border-l-4 border-india-green p-4 bg-india-green/5">
                        <h3 className="text-lg font-medium mb-2">Ethical AI Usage Framework</h3>
                        <p className="text-gray-700 mb-3">Guidelines for ethical use of AI in security applications and monitoring systems.</p>
                        <Button variant="outline" size="sm" className="text-india-navyBlue border-india-navyBlue/30">View Framework</Button>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">Implementation Checklists</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="bg-white">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Government Agencies</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Infrastructure assessment</li>
                                <li>Security clearance procedures</li>
                                <li>Personnel training requirements</li>
                                <li>Implementation timeline</li>
                                <li>Regulatory compliance checklist</li>
                              </ul>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-white">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Public Institutions</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Public data handling protocols</li>
                                <li>Transparency requirements</li>
                                <li>Citizen privacy safeguards</li>
                                <li>Audit procedures</li>
                                <li>Public reporting guidelines</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="api" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>API Reference</CardTitle>
                    <CardDescription>Integration tools and developer resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-medium">ChakraShield API Documentation</h3>
                            <p className="text-gray-600">Complete reference for all available API endpoints and integration options</p>
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileCode className="mr-2 h-4 w-4" />
                            <span>View API Docs</span>
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white p-4 rounded border border-gray-200">
                            <h4 className="font-medium mb-2">Authentication API</h4>
                            <p className="text-sm text-gray-600 mb-3">Secure authentication for all ChakraShield services.</p>
                            <Button variant="link" className="p-0 h-auto text-india-navyBlue text-sm">View Documentation</Button>
                          </div>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            <h4 className="font-medium mb-2">Analysis Endpoints</h4>
                            <p className="text-sm text-gray-600 mb-3">Access profile analysis and threat detection services.</p>
                            <Button variant="link" className="p-0 h-auto text-india-navyBlue text-sm">View Documentation</Button>
                          </div>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            <h4 className="font-medium mb-2">Reporting API</h4>
                            <p className="text-sm text-gray-600 mb-3">Generate and retrieve security reports programmatically.</p>
                            <Button variant="link" className="p-0 h-auto text-india-navyBlue text-sm">View Documentation</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Development Tools</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <Download className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">SDK Downloads</h4>
                                  <p className="text-sm text-gray-600">Available for Java, Python, Node.js, and .NET</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <FileCode className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Code Samples</h4>
                                  <p className="text-sm text-gray-600">Implementation examples for common use cases</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Shield className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Security Testing Tools</h4>
                                  <p className="text-sm text-gray-600">Tools for testing API integration security</p>
                                </div>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Integration Support</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <Users className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Developer Community</h4>
                                  <p className="text-sm text-gray-600">Connect with other developers implementing ChakraShield</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Integration Guides</h4>
                                  <p className="text-sm text-gray-600">Step-by-step guides for different platforms</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <ExternalLink className="h-5 w-5 text-india-navyBlue mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium">Support Resources</h4>
                                  <p className="text-sm text-gray-600">Technical support for implementation issues</p>
                                </div>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="community" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Resources</CardTitle>
                    <CardDescription>Connect with security experts and fellow users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-india-navyBlue/5 p-5 rounded-lg border border-india-navyBlue/20">
                        <h3 className="text-lg font-medium mb-3">ChakraShield Community Hub</h3>
                        <p className="text-gray-700 mb-4">
                          Join India's largest cybersecurity community focused on protecting our digital infrastructure. 
                          Connect with experts, share insights, and stay updated on the latest threats and solutions.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-india-navyBlue hover:bg-india-navyBlue/80">Join Community</Button>
                          <Button variant="outline" className="border-india-navyBlue/30 text-india-navyBlue">View Discussions</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Forums</CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="mb-3">Specialized discussion forums for security professionals, developers, and administrators.</p>
                            <ul className="space-y-2 text-gray-700">
                              <li>• Threat Intelligence Sharing</li>
                              <li>• Implementation Support</li>
                              <li>• Policy Discussions</li>
                              <li>• Technical Troubleshooting</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">Browse Forums</Button>
                          </CardFooter>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Events Calendar</CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="mb-3">Stay updated on upcoming webinars, conferences, training sessions, and community meetups.</p>
                            <div className="space-y-2">
                              <div className="p-2 bg-gray-50 rounded">
                                <p className="font-medium">National Cybersecurity Summit</p>
                                <p className="text-xs text-gray-600">July 15-17, 2025 • New Delhi</p>
                              </div>
                              <div className="p-2 bg-gray-50 rounded">
                                <p className="font-medium">ChakraShield Technical Workshop</p>
                                <p className="text-xs text-gray-600">August 5, 2025 • Virtual</p>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">View All Events</Button>
                          </CardFooter>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Expert Network</CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p className="mb-3">Connect with certified ChakraShield experts and consultants across India for specialized assistance.</p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-india-navyBlue" />
                                <span>450+ certified experts</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-india-navyBlue" />
                                <span>Verified credentials</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-india-navyBlue" />
                                <span>Specialized expertise directory</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">Find an Expert</Button>
                          </CardFooter>
                        </Card>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-medium mb-3">Research Collaborations</h3>
                        <p className="text-gray-700 mb-4">
                          ChakraShield partners with academic institutions, research organizations, and government agencies to advance 
                          cybersecurity research and development in India.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <h4 className="font-medium mb-2">Current Research Initiatives</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                              <li>Advanced deepfake detection models</li>
                              <li>Cross-platform threat correlation</li>
                              <li>Quantum-resistant authentication</li>
                              <li>Behavioral biometrics for identification</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Collaboration Opportunities</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                              <li>Research grants for academic institutions</li>
                              <li>Industry-academia partnerships</li>
                              <li>Open innovation challenges</li>
                              <li>Internship programs for students</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" className="text-india-navyBlue border-india-navyBlue/30">
                            Explore Research Programs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;

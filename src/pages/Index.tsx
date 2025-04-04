
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Benefits from '@/components/landing/Benefits';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import Guarantee from '@/components/landing/Guarantee';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Offer from '@/components/landing/Offer';
import SocialProof from '@/components/landing/SocialProof';
import Testimonials from '@/components/landing/Testimonials';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <SocialProof />
        <Offer />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

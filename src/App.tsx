/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Metrics from './components/Metrics';
import PremiumServices from './components/PremiumServices';
import Timeline from './components/Timeline';
import Callout from './components/Callout';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-crypto-black text-crypto-white selection:bg-crypto-blue/30 overflow-hidden relative">
      <ParticleBackground />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Hero onOpenContact={() => setIsContactOpen(true)} />
      <WhatWeDo />
      <Metrics />
      <PremiumServices />
      <Timeline />
      <Callout />
      <Testimonials />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}

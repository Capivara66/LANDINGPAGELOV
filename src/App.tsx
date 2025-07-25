import React from 'react';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import WhatYouLearn from './components/WhatYouLearn';
import WhatYouGet from './components/WhatYouGet';
import Testimonials from './components/Testimonials';
import Bonus from './components/Bonus';
import Guarantee from './components/Guarantee';
import Pricing from './components/Pricing';
import OrderForm from './components/OrderForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="font-inter bg-black">
      <Hero />
      <TargetAudience />
      <WhatYouLearn />
      <WhatYouGet />
      <Testimonials />
      <Bonus />
      <Guarantee />
      <Pricing />
      <OrderForm />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;

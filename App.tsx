import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Programs } from '@/sections/Programs';
import { Research } from '@/sections/Research';
import { Facilities } from '@/sections/Facilities';
import { Faculty } from '@/sections/Faculty';
import { NewsEvents } from '@/sections/NewsEvents';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1f]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Research />
        <Facilities />
        <Faculty />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;

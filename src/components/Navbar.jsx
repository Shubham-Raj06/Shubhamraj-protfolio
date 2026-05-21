
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-neoWhite transition-all ${scrolled ? 'shadow-brutal-sm' : ''} border-b-4 border-neoBlack`}>
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex justify-between items-center">
        <a href="#hero" className="font-main font-bold text-2xl tracking-tighter">
          SR<span className="text-neoYellow">.</span>
        </a>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-mono text-sm font-bold tracking-widest uppercase">
          <li><a href="#about" className="hover:text-neoBlue transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-neoBlue transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-neoBlue transition-colors">Projects</a></li>
          <li>
            <a href="#contact" className="ml-4 bg-neoBlack text-neoWhite px-5 py-2 hover:bg-neoBlue hover:-translate-y-1 hover:shadow-brutal-sm transition-all">
              Hire Me &rarr;
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col justify-between w-8 h-6 z-[1000]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-full h-1 bg-neoBlack rounded transition-all ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`}></span>
          <span className={`block w-full h-1 bg-neoBlack rounded transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-1 bg-neoBlack rounded transition-all ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-[80px] left-0 w-full bg-neoWhite flex flex-col border-b-4 border-neoBlack p-6 gap-4 shadow-brutal-xl z-[999] md:hidden">
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block border-b-2 border-neoBlack pb-2 font-mono font-bold uppercase">About</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)} className="block border-b-2 border-neoBlack pb-2 font-mono font-bold uppercase">Experience</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block border-b-2 border-neoBlack pb-2 font-mono font-bold uppercase">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block border-b-2 border-neoBlack pb-2 font-mono font-bold uppercase text-neoBlue">Hire Me &rarr;</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

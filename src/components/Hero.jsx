
const Hero = () => {
  return (
    <section id="hero" className="pt-[140px] pb-[60px] border-b-4 border-neoBlack">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-neoWhite border-2 border-neoBlack shadow-brutal-sm px-4 py-1.5 w-fit font-mono text-sm font-bold rounded-full">
            <span className="w-2.5 h-2.5 bg-neoGreen rounded-full animate-pulse"></span>
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            Shubham<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0A0A0A' }}>Raj</span>
          </h1>

          <div className="flex flex-wrap gap-3">
            <span className="bg-neoYellow border-2 border-neoBlack px-4 py-1.5 rounded-full font-mono text-xs font-bold shadow-[2px_2px_0_#0A0A0A]">Tech & Architecture Core</span>
            <span className="bg-neoBlueLight border-2 border-neoBlack px-4 py-1.5 rounded-full font-mono text-xs font-bold shadow-[2px_2px_0_#0A0A0A]">Growth & Distribution</span>
            <span className="bg-neoRedLight border-2 border-neoBlack px-4 py-1.5 rounded-full font-mono text-xs font-bold shadow-[2px_2px_0_#0A0A0A]">Elite Problem Solver</span>
          </div>

          <p className="text-lg leading-relaxed max-w-lg">
            I am a <strong>results-driven Product manager and software engineer</strong> with expertise in AI who knows both Development and Distribution. I architect scalable systems and build operational frameworks to deploy them successfully.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#" className="bg-neoBlue text-neoWhite border-4 border-neoBlack px-8 py-3 font-bold uppercase tracking-wider shadow-brutal-md hover:translate-y-1 hover:shadow-brutal-sm active:translate-y-2 active:shadow-none transition-all">LinkedIn &rarr;</a>
            <a href="#" className="bg-neoWhite text-neoBlack border-4 border-neoBlack px-8 py-3 font-bold uppercase tracking-wider shadow-brutal-md hover:translate-y-1 hover:shadow-brutal-sm active:translate-y-2 active:shadow-none transition-all">GitHub &rarr;</a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end order-first md:order-last">
           {/* Avatar Placeholder / Frame */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-neoBlack bg-neoYellow shadow-brutal-xl overflow-hidden">
             {/* Note: You will place shubham raj photo .JPG here */}
             <div className="absolute inset-0 bg-neoWhite/20 mix-blend-overlay"></div>
             <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl font-mono opacity-50">IMAGE HERE</div>
           </div>
        </div>

      </div>

      {/* Infinite Marquee */}
      <div className="mt-20 border-y-4 border-neoBlack bg-neoBlack text-neoWhite overflow-hidden py-3 relative flex w-full">
         <div className="animate-marquee whitespace-nowrap flex w-max items-center font-mono font-bold text-sm uppercase tracking-widest">
            <span className="px-10">TEDx Speaker</span><span className="text-neoYellow">✦</span>
            <span className="px-10">Lead Engineer</span><span className="text-neoYellow">✦</span>
            <span className="px-10">Google DevGroups Mentor</span><span className="text-neoYellow">✦</span>
            <span className="px-10">IIT Delhi Ambassador</span><span className="text-neoYellow">✦</span>
            <span className="px-10">IIT Bombay Ambassador</span><span className="text-neoYellow">✦</span>
            <span className="px-10">TEDx Speaker</span><span className="text-neoYellow">✦</span>
            <span className="px-10">Lead Engineer</span><span className="text-neoYellow">✦</span>
            <span className="px-10">Google DevGroups Mentor</span><span className="text-neoYellow">✦</span>
            <span className="px-10">IIT Delhi Ambassador</span><span className="text-neoYellow">✦</span>
            <span className="px-10">IIT Bombay Ambassador</span><span className="text-neoYellow">✦</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, ArrowUpRight, 
  MessageCircle, Phone, Instagram, Facebook, Linkedin,
  Layers, Printer, Sparkles, CheckCircle2, ChevronRight, Sliders, Sun
} from 'lucide-react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
};

const serviceTabs = [
  {
    id: "designing",
    title: "Designing",
    tagline: "Visual Identity & Assets",
    color: "from-cyan-500 to-blue-600",
    accent: "text-cyan-600",
    items: ["Logo Design", "Business Cards", "Visiting Cards", "Banners & Brochures", "Catalogs & Flyers", "Packaging & Menus", "Wedding & Invitation Cards"]
  },
  {
    id: "printing",
    title: "Printing",
    tagline: "Industrial & Large Format",
    color: "from-amber-500 to-orange-600",
    accent: "text-orange-600",
    items: ["Vinyl & Flex Printing", "ACP & Acrylic Boards", "Glow Sign & Metal Boards", "Foam Board & One Way Vision", "Rollup Standees", "Canvas Printing", "Sticker Printing"]
  },
  {
    id: "branding",
    title: "Branding",
    tagline: "Physical & Environmental",
    color: "from-pink-500 to-purple-600",
    accent: "text-pink-600",
    items: ["Shop & Office Branding", "Vehicle Graphics & Wraps", "Product Branding", "Corporate Identity", "Exhibition Stalls"]
  },
  {
    id: "digital",
    title: "Digital Growth",
    tagline: "Performance & Socials",
    color: "from-emerald-500 to-teal-600",
    accent: "text-emerald-600",
    items: ["Social Media Management", "Meta & Google Ads", "SEO & Website Design", "Landing Pages", "WhatsApp & Email Marketing"]
  }
];

const portfolio = [
  { id: 1, title: "Luxe Cosmétiques Packaging", tag: "Design & Packaging", img: "https://images.unsplash.com/photo-1613521140785-e85e427f8002?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Nexus Tech Corporate Signage", tag: "Industrial Printing", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Aura Concept Store Branding", tag: "Environmental Branding", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("designing");
  const [sliderPosition, setSliderPosition] = useState(50);

  const [heroRef, heroInView] = useIntersectionObserver();
  const [interactiveRef, interactiveInView] = useIntersectionObserver();
  const [showcaseRef, showcaseInView] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTabObj = serviceTabs.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0 opacity-[0.035]">
        <span className="text-[22vw] font-black tracking-tighter uppercase text-zinc-900 whitespace-nowrap">
          RAS_CREATIVES
        </span>
      </div>

      {/* BOUNCING COLOR SPLASH ORBS (Light Mode Friendly Pastels/Vibrants) */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/40 via-blue-400/20 to-transparent rounded-full blur-[140px] pointer-events-none animate-[bounce_12s_infinite_ease-in-out]" />
      <div className="absolute top-[35%] -right-[5%] w-[700px] h-[700px] bg-gradient-to-bl from-pink-300/40 via-purple-300/20 to-transparent rounded-full blur-[160px] pointer-events-none animate-[bounce_16s_infinite_ease-in-out_1s]" />
      <div className="absolute top-[65%] -left-[5%] w-[650px] h-[650px] bg-gradient-to-tr from-amber-300/40 via-orange-300/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-[bounce_14s_infinite_ease-in-out_2s]" />
      <div className="absolute bottom-10 right-1/3 w-[600px] h-[600px] bg-gradient-to-t from-emerald-300/40 via-teal-300/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-[bounce_18s_infinite_ease-in-out_1.5s]" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes customBounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.05); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
        }
        .rainbow-gradient {
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 25%, #d97706 50%, #db2777 75%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-zinc-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <div className="flex items-center gap-3 z-50 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 via-amber-500 to-pink-500 flex items-center justify-center font-black text-white text-xl group-hover:scale-105 transition-transform shadow-md shadow-pink-500/20 rounded-xl">R</div>
            <span className="font-bold text-2xl tracking-tighter uppercase text-zinc-900">RAS<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-pink-600">_CREATIVES</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
            <a href="#services" className="text-zinc-600 hover:text-cyan-600 transition-colors">Services</a>
            <a href="#transformation" className="text-zinc-600 hover:text-orange-600 transition-colors">Transformation</a>
            <a href="#portfolio" className="text-zinc-600 hover:text-pink-600 transition-colors">Work</a>
            <div className="h-4 w-px bg-zinc-300"></div>
            <a href="tel:+919321590601" className="px-6 py-2.5 bg-zinc-900 text-white hover:bg-orange-600 transition-all font-semibold flex items-center gap-2 rounded-full shadow-md">
              <Phone className="w-4 h-4" /> Quick Call
            </a>
          </div>

          <button className="md:hidden z-50 text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter hover:text-cyan-600 transition-colors">Services Matrix</a>
          <a href="#transformation" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter hover:text-orange-600 transition-colors">Before & After</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter hover:text-pink-600 transition-colors">Selected Work</a>
          <a href="tel:+919321590601" onClick={() => setMobileMenuOpen(false)} className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-bold text-lg rounded-full flex items-center gap-2">
            Call +91-93215 90601
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10">
        <div 
          ref={heroRef}
          className={`w-full max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 transform ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-600 to-pink-600"></div>
            <span className="uppercase tracking-[0.2em] rainbow-gradient text-sm font-bold">Idea to Reality • Agency & Production</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] text-zinc-900 mb-8">
            Designing<br/>
            <span className="rainbow-gradient">Printing Branding.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mt-16 md:mt-24 border-t border-zinc-200 pt-8">
            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-light leading-relaxed">
              International creative agency power combined with direct industrial manufacturing. No middlemen. Absolute precision.
            </p>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-gradient-to-r from-cyan-600 via-orange-500 to-pink-600 hover:opacity-95 text-white transition-opacity font-bold rounded-full shadow-xl flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" /> Instant WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-COLOR MARQUEE */}
      <div className="py-10 bg-gradient-to-r from-cyan-600 via-amber-500 to-pink-600 text-white overflow-hidden flex whitespace-nowrap rotate-[-2deg] scale-110 relative z-20 shadow-xl">
        <div className="animate-marquee flex gap-12 items-center text-4xl md:text-6xl font-black tracking-tighter uppercase">
          <span>Logo Design</span> <span className="text-white/60">•</span>
          <span>Vinyl & Flex Printing</span> <span className="text-white/60">•</span>
          <span>ACP & Acrylic Boards</span> <span className="text-white/60">•</span>
          <span>Corporate Branding</span> <span className="text-white/60">•</span>
          <span>Digital Ads & SEO</span> <span className="text-white/60">•</span>
        </div>
      </div>

      {/* INTERACTIVE SERVICES MATRIX */}
      <section id="services" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-cyan-600 uppercase tracking-widest text-xs font-bold mb-3 block">Complete Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900">Interactive Service Matrix</h2>
            </div>
            <p className="text-zinc-600 max-w-md text-sm md:text-base">Click through our four core pillars to explore our exhaustive catalog of deliverables.</p>
          </div>

          <div 
            ref={interactiveRef}
            className={`glass-panel p-3 md:p-6 rounded-3xl transition-all duration-1000 ${interactiveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Tabs Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-5 px-6 rounded-2xl text-left transition-all relative overflow-hidden ${activeTab === tab.id ? 'bg-zinc-900 text-white shadow-xl' : 'text-zinc-600 hover:text-zinc-900 hover:bg-black/5'}`}
                >
                  <div className="text-xs uppercase tracking-wider font-mono opacity-60 mb-1">{tab.tagline}</div>
                  <div className="text-xl font-bold">{tab.title}</div>
                  {activeTab === tab.id && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tab.color}`} />
                  )}
                </button>
              ))}
            </div>

            {/* Active Tab Detailed List Display */}
            <div className="p-6 md:p-12 bg-white rounded-2xl border border-zinc-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-8 border-b border-zinc-100 gap-4">
                <div>
                  <h3 className={`text-3xl md:text-4xl font-black mb-2 ${currentTabObj.accent}`}>{currentTabObj.title} Division</h3>
                  <p className="text-zinc-600">High-grade execution tailored for maximum brand impact.</p>
                </div>
                <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 text-sm font-semibold flex items-center gap-2 rounded-full transition-all">
                  Inquire for {currentTabObj.title} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentTabObj.items.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between group hover:border-cyan-500/50 hover:bg-white transition-all">
                    <span className="font-semibold text-zinc-800 group-hover:text-zinc-900">{item}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BEFORE / AFTER TRANSFORMATION SLIDER */}
      <section id="transformation" className="py-32 bg-white/60 backdrop-blur-md border-y border-zinc-200 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pink-600 uppercase tracking-widest text-xs font-bold mb-3 block">Idea To Reality</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-4">The Transformation Standard</h2>
            <p className="text-zinc-600 text-lg">Slide to see how we take rough conceptual layouts and turn them into market-ready premium brand assets.</p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative border border-zinc-200 shadow-2xl aspect-[16/10] select-none">
            {/* AFTER IMAGE */}
            <img 
              src="https://images.unsplash.com/photo-1613521140785-e85e427f8002?auto=format&fit=crop&q=80&w=1200" 
              alt="Finished Luxury Branding"
              className="absolute inset-0 w-full h-full object-cover filter saturate-125"
            />
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-cyan-600 border border-zinc-200 z-10 shadow-sm">
              Finished Reality
            </div>

            {/* BEFORE IMAGE */}
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1613521140785-e85e427f8002?auto=format&fit=crop&q=80&w=1200" 
                alt="Raw Concept Sketch"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-200 brightness-90 max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-amber-600 border border-zinc-200 z-10 shadow-sm">
                Raw Concept Sketch
              </div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-zinc-900 cursor-ew-resize z-20 flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-lg font-bold">
                <Sliders className="w-5 h-5" />
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="portfolio" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-3 block">Archive</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900">Selected Works</h2>
            </div>
            <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 uppercase tracking-widest text-sm font-bold text-pink-600 hover:text-zinc-900 transition-colors">
              Request Full Portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div 
            ref={showcaseRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[420px] transition-all duration-1000 ${showcaseInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
          >
            {portfolio.map((work) => (
              <div key={work.id} className={`group relative overflow-hidden bg-zinc-200 rounded-3xl cursor-pointer ${work.span} shadow-md`}>
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3 inline-block">
                        {work.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{work.title}</h3>
                    </div>
                    <div className="w-12 h-12 bg-white text-zinc-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shrink-0">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASSIVE CTA */}
      <section className="py-48 relative z-10 overflow-hidden bg-white/80 backdrop-blur-md border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter text-zinc-900 mb-12 leading-none rainbow-gradient">
            LET'S TALK.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+919321590601" className="px-10 py-6 bg-zinc-900 text-white font-bold text-lg rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg">
              <Phone className="w-5 h-5 text-pink-400" /> +91-93215 90601
            </a>
            <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="px-10 py-6 glass-panel text-zinc-900 font-bold text-lg rounded-full hover:bg-zinc-100 transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-600" /> WhatsApp Instant
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-300 pt-24 pb-12 border-t border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-pink-500 flex items-center justify-center font-bold text-black rounded-lg">R</div>
                <span className="font-bold text-xl uppercase tracking-tighter text-white">RAS<span className="text-cyan-400">_CREATIVES</span></span>
              </div>
              <p className="text-zinc-400 max-w-sm">
                Designing, Printing, Branding & Digital Marketing. Idea to Reality.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Navigation</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services Matrix</a></li>
                <li><a href="#transformation" className="hover:text-orange-400 transition-colors">Before & After</a></li>
                <li><a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Direct Contact</h4>
              <p className="text-zinc-400 text-sm mb-4">+91-93215 90601</p>
              <div className="flex gap-4">
                <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="tel:+919321590601" className="w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Rashmi (RAS) Creatives. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href="https://wa.me/919321590601" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform z-50">
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
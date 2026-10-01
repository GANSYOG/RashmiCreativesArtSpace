import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight,
  MessageCircle, Phone, MapPin,
  ChevronRight, ChevronLeft, Maximize2
} from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return [ref, isIntersecting] as const;
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

// All 34 images from the folder directly in one unified gallery
const allGalleryPhotos = Array.from({ length: 34 }, (_, i) => ({
  id: i + 1,
  src: `/assets/image${i + 1}.jpeg`,
}));

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("designing");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const [heroRef, heroInView] = useIntersectionObserver();
  const [interactiveRef, interactiveInView] = useIntersectionObserver();
  const [galleryRef, galleryInView] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTabObj = serviceTabs.find(t => t.id === activeTab) || serviceTabs[0];

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % allGalleryPhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">

      {/* BACKGROUND WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0 opacity-[0.04]">
        <span className="text-[14vw] font-black tracking-tighter uppercase bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
          RashmiCreativesArtSpace
        </span>
      </div>

      {/* BOUNCING COLOR SPLASH ORBS */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/40 via-blue-400/20 to-transparent rounded-full blur-[140px] pointer-events-none animate-[bounce_12s_infinite_ease-in-out]" />
      <div className="absolute top-[35%] -right-[5%] w-[700px] h-[700px] bg-gradient-to-bl from-pink-300/40 via-purple-300/20 to-transparent rounded-full blur-[160px] pointer-events-none animate-[bounce_16s_infinite_ease-in-out_1s]" />
      <div className="absolute top-[65%] -left-[5%] w-[650px] h-[650px] bg-gradient-to-tr from-amber-300/40 via-orange-300/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-[bounce_14s_infinite_ease-in-out_2s]" />
      <div className="absolute bottom-10 right-1/3 w-[600px] h-[600px] bg-gradient-to-t from-emerald-300/40 via-teal-300/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-[bounce_18s_infinite_ease-in-out_1.5s]" />

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/85 backdrop-blur-2xl border-b border-zinc-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          <div className="flex items-center gap-3 z-50 group cursor-pointer">
            <img src="/assets/logo.jpg" alt="RashmiCreativesArtSpace Logo" className="w-12 h-12 object-contain rounded-full shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform" />
            <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500">
              RashmiCreatives<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">ArtSpace</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
            <a href="#services" className="text-zinc-600 hover:text-cyan-600 transition-colors">Services</a>
            <a href="#gallery" className="text-zinc-900 font-semibold hover:text-orange-600 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Work Done by Us
            </a>
            <a href="#contact" className="text-zinc-600 hover:text-pink-600 transition-colors">Contact</a>
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
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter hover:text-cyan-600 transition-colors">Services Matrix</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter hover:text-orange-600 transition-colors text-orange-600">Work Done by Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter hover:text-pink-600 transition-colors">Contact Us</a>
          <a href="tel:+919321590601" onClick={() => setMobileMenuOpen(false)} className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-bold text-lg rounded-full flex items-center gap-2 shadow-xl">
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
            <span className="uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-amber-500 to-pink-600 text-sm font-bold">Idea to Reality • Agency & Production</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500">
              Designing
            </span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-amber-500 to-pink-500">
              Printing Branding.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mt-16 md:mt-24 border-t border-zinc-200 pt-8">
            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-light leading-relaxed">
              International creative agency aesthetics combined with direct industrial manufacturing. Turn any concept into tangible reality with zero compromise.
            </p>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <a href="#gallery" className="px-8 py-5 bg-zinc-900 hover:bg-zinc-800 text-white transition-all font-bold rounded-full shadow-xl flex items-center justify-center gap-3">
                View Work Done ({allGalleryPhotos.length} Photos)
              </a>
              <a
                href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20want%20to%20get%20an%20instant%20quote%20for%20a%20design%20and%20printing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-gradient-to-r from-cyan-600 via-orange-500 to-pink-600 hover:opacity-95 text-white transition-opacity font-bold rounded-full shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" /> Instant WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-COLOR MARQUEE */}
      <div className="py-10 bg-gradient-to-r from-cyan-600 via-amber-500 to-pink-600 text-white overflow-hidden flex whitespace-nowrap rotate-[-2deg] scale-110 relative z-20 shadow-xl">
        <div className="flex gap-12 items-center text-4xl md:text-6xl font-black tracking-tighter uppercase" style={{ animation: 'marquee 18s linear infinite' }}>
          <span>Logo Design</span> <span className="text-white/60">•</span>
          <span>Vinyl & Flex Printing</span> <span className="text-white/60">•</span>
          <span>ACP & Acrylic Boards</span> <span className="text-white/60">•</span>
          <span>Corporate Branding</span> <span className="text-white/60">•</span>
          <span>Digital Ads & SEO</span> <span className="text-white/60">•</span>
          <span>Office Graphics</span> <span className="text-white/60">•</span>
          <span>Custom Packaging</span> <span className="text-white/60">•</span>
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
            <p className="text-zinc-600 max-w-md text-sm md:text-base">Explore our core service deliverables for brand creation, printing, and outdoor execution. Click any service to inquire directly.</p>
          </div>

          <div
            ref={interactiveRef}
            className={`bg-white/75 backdrop-blur-xl border border-black/5 shadow-2xl p-3 md:p-6 rounded-3xl transition-all duration-1000 ${interactiveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                <a
                  href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20am%20looking%20for%20*${encodeURIComponent(currentTabObj.title)}*%20services.%20Please%20share%20your%20pricing%20and%20catalog.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-100 hover:bg-orange-50 hover:border-orange-300 border border-zinc-200 text-zinc-900 hover:text-orange-600 text-sm font-semibold flex items-center gap-2 rounded-full transition-all"
                >
                  Inquire for {currentTabObj.title} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentTabObj.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20want%20to%20inquire%20about%20*${encodeURIComponent(item)}*%20(${encodeURIComponent(currentTabObj.title)}).%20Please%20share%20details%20and%20pricing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between group hover:border-orange-500/50 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                  >
                    <span className="font-semibold text-zinc-800 group-hover:text-orange-600 transition-colors">{item}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* WORK DONE BY US / GALLERY - ALL IMAGES IN ONE CLEAN GRID */}
      {/* ======================================================== */}
      <section id="gallery" className="py-28 bg-white/70 backdrop-blur-md border-y border-zinc-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12" ref={galleryRef}>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="px-3.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-200 inline-block mb-3">
                Real Executions
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900">
                Work Done by Us
              </h2>
              <p className="text-zinc-600 text-lg mt-2 max-w-xl">
                Browse our real projects and production work. Click any photo to preview in high resolution.
              </p>
            </div>

            <a
              href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20saw%20your%20work%20in%20the%20Work%20Done%20gallery%20and%20I%20would%20like%20to%20inquire%20about%20getting%20similar%20work%20done."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Quick Inquiry
            </a>
          </div>

          {/* ALL PHOTOS IN ONE CLEAN MASONRY/GRID - NO TEXT CLUTTER */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4.5 transition-all duration-700 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {allGalleryPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={`Work Done ${photo.id}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/95 text-zinc-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-200">
                    <Maximize2 className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10 max-h-[75vh]">
              <img
                src={allGalleryPhotos[activeLightboxIndex].src}
                alt={`Work Done ${allGalleryPhotos[activeLightboxIndex].id}`}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 w-full flex justify-between items-center text-white px-2">
              <span className="text-zinc-400 text-sm">
                Photo {activeLightboxIndex + 1} of {allGalleryPhotos.length}
              </span>

              <a
                href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20am%20interested%20in%20the%20work%20shown%20in%20photo%20%23${activeLightboxIndex + 1}%20from%20your%20Work%20Done%20gallery.%20Please%20share%20rates%20and%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" /> Inquire for This Work on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MASSIVE CTA / CONTACT */}
      <section id="contact" className="py-28 md:py-36 relative z-10 overflow-hidden bg-white/80 backdrop-blur-md border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 uppercase tracking-widest text-xs font-bold mb-3 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-6 leading-none bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500">
              LET'S TALK.
            </h2>
            <p className="text-zinc-600 text-lg">
              Have a custom design, signage, or industrial printing project in mind? Reach out or visit our Malad East facility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="tel:+919321590601" className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg">
                <Phone className="w-5 h-5 text-orange-400" /> Call +91-93215 90601
              </a>
              <a href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20discuss%20a%20new%20project." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20ba59] transition-all flex items-center justify-center gap-3 shadow-lg">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <a href="https://www.instagram.com/rashmi_creatives/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold rounded-full hover:opacity-95 transition-all flex items-center justify-center gap-3 shadow-lg">
                <InstagramIcon className="w-5 h-5" /> @rashmi_creatives
              </a>
            </div>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-orange-300 hover:bg-white transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Our Office & Studio</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Office No.8, Ground Floor , Jai ShivShakti Apt., Triveni Nagar, Beside Central Bank of India, Malad East, Mumbai 400097.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Office+No.8+Ground+Floor+Jai+ShivShakti+Apt+Triveni+Nagar+Beside+Central+Bank+of+India+Malad+East+Mumbai+400097"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5"
              >
                Open Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Connect Card */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-cyan-300 hover:bg-white transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Direct Phone & WhatsApp</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Fastest turnaround for quick inquiries, quotations, and live order tracking updates.
                </p>
                <p className="text-lg font-bold text-zinc-900 mt-3">+91 93215 90601</p>
              </div>
              <a
                href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20want%20to%20inquire%20about%20your%20printing%2C%20designing%2C%20and%20branding%20services%20and%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1.5"
              >
                Start WhatsApp Chat <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Instagram Card */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm flex flex-col justify-between hover:border-pink-300 hover:bg-white transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Instagram Portfolio</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Follow our official handle for live client project reveals, video walkthroughs & design inspiration.
                </p>
                <p className="text-lg font-bold text-pink-600 mt-3">@rashmi_creatives</p>
              </div>
              <a
                href="https://www.instagram.com/rashmi_creatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1.5"
              >
                Visit Profile <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-300 pt-24 pb-12 border-t border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img src="/assets/logo.jpg" alt="RashmiCreativesArtSpace Logo" className="w-12 h-12 rounded-full object-contain bg-white shadow-sm" />
                <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                  RashmiCreatives<span className="text-cyan-400">ArtSpace</span>
                </span>
              </div>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-6">
                Complete Designing, Printing, Branding & Digital Marketing solutions. We turn your raw concepts into tangible, premium market realities.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20have%20an%20inquiry%20regarding%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919321590601"
                  className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all"
                  title="Phone Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/rashmi_creatives/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all"
                  title="Instagram @rashmi_creatives"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Navigation</h4>
              <ul className="space-y-3.5 text-zinc-400 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services Matrix</a></li>
                <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Work Done by Us</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
                <li>
                  <a href="https://www.instagram.com/rashmi_creatives/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1.5 text-pink-400/90 font-medium">
                    <InstagramIcon className="w-3.5 h-3.5" /> Instagram: @rashmi_creatives
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Direct Contact & Address</h4>
              <div className="space-y-4 text-zinc-400 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    Office No.8, Ground Floor , Jai ShivShakti Apt., Triveni Nagar, Beside Central Bank of India, Malad East, Mumbai 400097.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+919321590601" className="hover:text-white transition-colors">+91-93215 90601</a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                  <a href="https://www.instagram.com/rashmi_creatives/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                    @rashmi_creatives
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} RashmiCreativesArtSpace. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20would%20like%20to%20inquire%20about%20your%20design%20and%20printing%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform z-50 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}

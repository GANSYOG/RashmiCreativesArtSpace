import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, ArrowUpRight, 
  MessageCircle, Phone, MapPin,
  ChevronRight, ChevronLeft, Maximize2,
  CheckCircle2, Sparkles, Calculator, FileText, Printer,
  Layers, ShieldCheck, Clock, Truck, HelpCircle,
  Send, Star, Upload, Download, Building2, Palette, Check,
  ChevronDown, ChevronUp, RefreshCw
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

// 5 Comprehensive Service Divisions as specified in Master Requirements
const serviceDivisions = [
  {
    id: "designing",
    title: "Designing",
    subtitle: "Brand Identity & Creative Assets",
    badge: "14 Specializations",
    color: "from-cyan-500 to-blue-600",
    accent: "text-cyan-600",
    bgLight: "bg-cyan-50",
    borderLight: "border-cyan-200",
    icon: Palette,
    description: "World-class graphic design and branding architecture engineered to captivate attention and build brand equity.",
    items: [
      { name: "Logo Design", desc: "Vector brand marks, iconography & brand style guide" },
      { name: "Business Cards", desc: "Luxury visiting cards, foil stamping & embossing" },
      { name: "Corporate Letterheads", desc: "Standard, executive & watermarked stationery" },
      { name: "Visiting Cards", desc: "Double-sided, rounded corners & velvet matte" },
      { name: "Banners & Hoardings", desc: "Large format outdoor & event graphics" },
      { name: "Brochures & Flyers", desc: "Bi-fold, tri-fold & custom die-cut corporate profiles" },
      { name: "Product Catalogues", desc: "Multi-page stitched & spiral-bound product showcases" },
      { name: "Marketing Flyers", desc: "High-volume promotional pamphlets & inserts" },
      { name: "Social Media Posts", desc: "Instagram grids, reels covers, LinkedIn carousels" },
      { name: "Packaging Design", desc: "Custom mono-cartons, labels & corrugated packaging" },
      { name: "Restaurant Menu Cards", desc: "Spill-proof laminated, leatherette & acrylic menus" },
      { name: "Invitation Cards", desc: "Corporate events, launch parties & VIP invites" },
      { name: "Custom Sticker Design", desc: "Waterproof vinyl decals & barcode label art" },
      { name: "Wedding & Festive Cards", desc: "Handcrafted traditional & modern royal stationery" }
    ]
  },
  {
    id: "printing",
    title: "Industrial Printing",
    subtitle: "Large Format & Rigid Substrates",
    badge: "Factory Direct",
    color: "from-amber-500 to-orange-600",
    accent: "text-orange-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-200",
    icon: Printer,
    description: "Direct manufacturing of heavy-duty signage, large-format vinyl, and luminous commercial storefront boards.",
    items: [
      { name: "Vinyl & Flex Printing", desc: "Star Flex, Blackout Flex & Eco-solvent vinyls" },
      { name: "ACP 3D Letter Boards", desc: "CNC routed Aludecor ACP with illuminated 3D letters" },
      { name: "Acrylic LED Boards", desc: "Cast acrylic with embedded high-lumen Samsung LEDs" },
      { name: "Glow Sign Boards", desc: "Internal backlit aluminum framed signage" },
      { name: "Metal & Brass Boards", desc: "Etched stainless steel, titanium gold & copper plaques" },
      { name: "Foam Board Displays", desc: "Direct UV flatbed printing on 3mm-10mm rigid foam" },
      { name: "One Way Vision", desc: "Perforated window vinyl for shops & showroom glass" },
      { name: "Sunboard Mounting", desc: "Laminated vinyl mounted on high-density sunboard" },
      { name: "Rollup Standees", desc: "Heavy aluminum base portable display standees (6x3 ft)" },
      { name: "Canvas Fine Art", desc: "Textured museum-grade cotton canvas with wooden stretcher" },
      { name: "Custom Sticker Printing", desc: "Die-cut kiss-cut vinyl stickers, waterproof & UV coated" },
      { name: "Fabric Lightboxes", desc: "Frameless SEG fabric tension lightboxes with edge LEDs" }
    ]
  },
  {
    id: "office-printing",
    title: "Office Printing",
    subtitle: "Corporate Stationery & Legal Books",
    badge: "GST Compliant",
    color: "from-blue-500 to-indigo-600",
    accent: "text-blue-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-200",
    icon: Layers,
    description: "Precision-printed business stationery, sequential tax invoice books, and corporate identity accessories.",
    items: [
      { name: "Visiting Cards (350+ GSM)", desc: "Velvet touch, spot UV gloss & metallic foil accents" },
      { name: "Staff ID Cards & Lanyards", desc: "High-definition PVC thermal cards with customized ribbons" },
      { name: "Employee Smart Cards", desc: "RFID / Proximity cards with customized corporate badge" },
      { name: "Serialized Bill Books", desc: "Carbonless NCR duplicate and triplicate bill registers" },
      { name: "Official Invoice Books", desc: "Standard GST compliant pre-numbered invoice registers" },
      { name: "Payment Receipt Books", desc: "Perforated vouchers with security micro-numbering" },
      { name: "Award Certificates", desc: "Gold foil stamped certificates on 300 GSM textured paper" },
      { name: "Corporate Folders & Files", desc: "Die-cut document presentation folders with card slots" },
      { name: "Branded Envelopes", desc: "Window & non-window Peel & Seal envelopes in all standard sizes" },
      { name: "Self-Inking Rubber Stamps", desc: "Flash technology stamps with clear, leak-proof impressions" },
      { name: "Complete Stationery Kits", desc: "Matching letterheads, notepads, pens & envelopes" }
    ]
  },
  {
    id: "branding",
    title: "Environmental Branding",
    subtitle: "Storefronts & Architecture",
    badge: "Turnkey Setup",
    color: "from-pink-500 to-purple-600",
    accent: "text-pink-600",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-200",
    icon: Building2,
    description: "Transforming empty commercial spaces and vehicles into dynamic brand ambassadors with durable finishes.",
    items: [
      { name: "Retail Shopfront Branding", desc: "End-to-end facade transformation with ACP, glass & vinyl" },
      { name: "Office Wall & Glass Graphics", desc: "Frosted glass privacy vinyl, motivational wall murals" },
      { name: "Fleet & Vehicle Branding", desc: "Cast vinyl full & partial wraps for commercial trucks & vans" },
      { name: "Custom Product Branding", desc: "Specialty rigid boxes, holographic tags & shrink sleeves" },
      { name: "Corporate Reception Signage", desc: "Floating 3D metallic logos with halo ambient illumination" },
      { name: "Exhibition Stalls & Kiosks", desc: "Custom pop-up displays, counters & illuminated podiums" }
    ]
  },
  {
    id: "digital",
    title: "Digital Growth",
    subtitle: "Performance Marketing & Web",
    badge: "High ROI",
    color: "from-emerald-500 to-teal-600",
    accent: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-200",
    icon: Sparkles,
    description: "Amplifying physical branding through precision digital advertising, search dominance, and responsive web platforms.",
    items: [
      { name: "Social Media Management", desc: "Full calendar curation, content shooting & community growth" },
      { name: "Meta (FB & IG) Ads", desc: "Hyper-targeted lead generation & customer acquisition campaigns" },
      { name: "Google Search & Maps Ads", desc: "High-intent local PPC ads ensuring top rank for printing queries" },
      { name: "Local & Pan-India SEO", desc: "Organic search ranking dominance with Google My Business optimization" },
      { name: "Custom Website Design", desc: "Modern Next.js / Vite web applications with speed scores > 95" },
      { name: "High-Conversion Landing Pages", desc: "Sales-funnel pages designed specifically for WhatsApp conversion" },
      { name: "WhatsApp Business API", desc: "Automated broadcast catalogs, inquiry auto-responders & CRM" },
      { name: "Email Marketing Sequences", desc: "Automated B2B outreach & transactional client newsletters" },
      { name: "Brand Launch Playbooks", desc: "Omnichannel strategy aligning physical signage with digital launches" }
    ]
  }
];

// All 34 images categorized
const allGalleryPhotos = Array.from({ length: 34 }, (_, i) => {
  const id = i + 1;
  let category = "signage";
  let title = "Illuminated ACP Signage";

  if ([1, 2, 7, 8, 13, 14, 19, 20, 25, 26, 31, 32].includes(id)) {
    category = "signage";
    title = "3D Glow Acrylic & ACP Board";
  } else if ([3, 4, 9, 10, 15, 16, 21, 22, 27, 28, 33, 34].includes(id)) {
    category = "vinyl";
    title = "Large Format Vinyl & Flex";
  } else if ([5, 11, 17, 23, 29].includes(id)) {
    category = "branding";
    title = "Commercial Space & Vehicle Branding";
  } else {
    category = "stationery";
    title = "Custom Packaging & Stationery";
  }

  return {
    id,
    src: `/assets/image${id}.jpeg`,
    category,
    title,
  };
});

// Quote Calculator Predefined Pricing Engine
const calculatorServices = [
  {
    id: "flex",
    name: "Flex Banner & Hoarding",
    unit: "sq.ft",
    baseRate: 28,
    materials: [
      { id: "normal", name: "Standard 280 GSM Flex", mult: 1.0 },
      { id: "star", name: "Premium Star Flex (340 GSM)", mult: 1.35 },
      { id: "blackout", name: "Blackout Heavy Flex (No Sunlight Pass)", mult: 1.75 }
    ],
    defaultW: 10,
    defaultH: 4,
    minQty: 1
  },
  {
    id: "vinyl",
    name: "Self-Adhesive Vinyl Sticker",
    unit: "sq.ft",
    baseRate: 45,
    materials: [
      { id: "gloss", name: "Gloss Laminated Vinyl", mult: 1.0 },
      { id: "matte", name: "Matte Non-Reflective Vinyl", mult: 1.1 },
      { id: "3m", name: "3M Cast Commercial Grade (Long Life)", mult: 1.8 }
    ],
    defaultW: 6,
    defaultH: 3,
    minQty: 1
  },
  {
    id: "acp-board",
    name: "3D ACP Acrylic LED Board",
    unit: "sq.ft",
    baseRate: 380,
    materials: [
      { id: "standard-acp", name: "Aludecor ACP + Cast Acrylic + Samsung LEDs", mult: 1.0 },
      { id: "gold-titanium", name: "Titanium Gold Mirror Stainless 3D Letters", mult: 1.45 },
      { id: "neon-flex", name: "Custom Silicon Neon Glow Highlight Accent", mult: 1.3 }
    ],
    defaultW: 8,
    defaultH: 3,
    minQty: 1
  },
  {
    id: "standee",
    name: "Rollup Display Standee (6x3 ft)",
    unit: "pieces",
    baseRate: 950,
    materials: [
      { id: "alu-normal", name: "Aluminum Lightweight Base + Star Flex", mult: 1.0 },
      { id: "alu-heavy", name: "Heavy Broad Base + Satin Fabric Print", mult: 1.4 }
    ],
    defaultW: 3,
    defaultH: 6,
    minQty: 1
  },
  {
    id: "cards",
    name: "Business Visiting Cards",
    unit: "box (100 pcs)",
    baseRate: 220,
    materials: [
      { id: "350-matte", name: "350 GSM Velvet Matte Both Sides", mult: 1.0 },
      { id: "spot-uv", name: "Premium Velvet Touch + Spot UV Gloss", mult: 1.8 },
      { id: "gold-foil", name: "Metallic Gold / Copper Foil Embossed", mult: 2.2 }
    ],
    defaultW: 3.5,
    defaultH: 2,
    minQty: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("designing");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

  // Quote Calculator State
  const [calcServiceId, setCalcServiceId] = useState("acp-board");
  const [calcMaterialId, setCalcMaterialId] = useState("standard-acp");
  const [calcWidth, setCalcWidth] = useState(8);
  const [calcHeight, setCalcHeight] = useState(3);
  const [calcQty, setCalcQty] = useState(1);
  const [calcNotes, setCalcNotes] = useState("");
  const [hasArtwork, setHasArtwork] = useState(true);

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactService, setContactService] = useState("Industrial Printing & Signage");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sample Invoice Generator State
  const [invoiceClientName, setInvoiceClientName] = useState("Valued Corporate Client");
  const [invoiceClientPhone, setInvoiceClientPhone] = useState("+91-98765 43210");
  const [invoiceDate] = useState(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }));
  const [invoiceNumber] = useState(`RC-${Math.floor(1000 + Math.random() * 9000)}`);
  const [invoiceItems, setInvoiceItems] = useState([
    { id: 1, desc: "3D ACP Acrylic LED Frontage Board (8x3 ft) with Samsung Modules", qty: 1, rate: 11200 },
    { id: 2, desc: "Rollup Retractable Display Standees (6x3 ft Heavy Aluminum Base)", qty: 2, rate: 1350 },
    { id: 3, desc: "Premium Velvet Touch 350 GSM Visiting Cards (Box of 500 pcs)", qty: 1, rate: 1100 }
  ]);

  const [heroRef, heroInView] = useIntersectionObserver();
  const [interactiveRef, interactiveInView] = useIntersectionObserver();
  const [calcRef, calcInView] = useIntersectionObserver();
  const [galleryRef, galleryInView] = useIntersectionObserver();
  const [aboutRef, aboutInView] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTabObj = serviceDivisions.find(t => t.id === activeTab) || serviceDivisions[0];

  // Calculate live estimate
  const currentCalcService = calculatorServices.find(s => s.id === calcServiceId) || calculatorServices[0];
  const currentCalcMaterial = currentCalcService.materials.find(m => m.id === calcMaterialId) || currentCalcService.materials[0];
  
  let calculatedArea = calcWidth * calcHeight;
  let estimatedTotal = 0;
  if (currentCalcService.unit === "sq.ft") {
    estimatedTotal = Math.round(calculatedArea * currentCalcService.baseRate * currentCalcMaterial.mult * calcQty);
  } else {
    estimatedTotal = Math.round(currentCalcService.baseRate * currentCalcMaterial.mult * calcQty);
  }

  // Filtered gallery
  const filteredGallery = galleryFilter === "all" 
    ? allGalleryPhotos 
    : allGalleryPhotos.filter(p => p.category === galleryFilter);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Website Inquiry from RashmiCreativesArtSpace*%0A%0A*Name:* ${encodeURIComponent(contactName)}%0A*Phone:* ${encodeURIComponent(contactPhone)}%0A*Service:* ${encodeURIComponent(contactService)}%0A*Message:* ${encodeURIComponent(contactMessage || "Looking for urgent pricing and production timeline.")}`;
    window.open(`https://wa.me/919321590601?text=${text}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const getCalcWhatsAppLink = () => {
    const details = `*Instant Cost Estimation Request - RashmiCreativesArtSpace*%0A%0A*Service:* ${encodeURIComponent(currentCalcService.name)}%0A*Specification / Material:* ${encodeURIComponent(currentCalcMaterial.name)}%0A*Dimensions:* ${calcWidth} ft x ${calcHeight} ft (${calculatedArea} sq.ft)%0A*Quantity:* ${calcQty}%0A*Has Artwork Ready:* ${hasArtwork ? "Yes, files ready" : "No, need designing assistance"}%0A*Approx Calculated Estimate:* ₹${estimatedTotal.toLocaleString('en-IN')}%0A*Additional Requirements:* ${encodeURIComponent(calcNotes || "Please share earliest delivery schedule and final invoice quote.")}`;
    return `https://wa.me/919321590601?text=${details}`;
  };

  const invoiceSubtotal = invoiceItems.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  const invoiceGst = Math.round(invoiceSubtotal * 0.18);
  const invoiceGrandTotal = invoiceSubtotal + invoiceGst;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-zinc-900 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0 opacity-[0.035]">
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
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-zinc-200/80 py-3.5 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <a href="#" className="flex items-center gap-3 z-50 group cursor-pointer">
            <img src="/assets/logo.jpg" alt="RashmiCreativesArtSpace Logo" className="w-11 h-11 object-contain rounded-full shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500">
                RashmiCreatives<span className="text-zinc-900 font-extrabold">ArtSpace</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Idea To Reality • Mumbai</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
            <a href="#services" className="text-zinc-600 hover:text-orange-600 transition-colors">Services</a>
            <a href="#estimator" className="text-zinc-600 hover:text-cyan-600 transition-colors flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-cyan-600" />
              Quote Estimator
            </a>
            <a href="#gallery" className="text-zinc-900 hover:text-orange-600 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Work Done ({allGalleryPhotos.length})
            </a>
            <a href="#about" className="text-zinc-600 hover:text-pink-600 transition-colors">About Us</a>
            <a href="#faq" className="text-zinc-600 hover:text-zinc-900 transition-colors">FAQ</a>
            <a href="#contact" className="text-zinc-600 hover:text-orange-600 transition-colors">Contact</a>

            <div className="h-4 w-px bg-zinc-300"></div>

            <button 
              onClick={() => setInvoiceModalOpen(true)}
              className="px-4 py-2 border border-zinc-300 hover:border-orange-500 text-zinc-700 hover:text-orange-600 transition-all font-semibold rounded-full text-xs flex items-center gap-1.5 bg-white shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-orange-500" /> GST Quote Slip
            </button>

            <a href="tel:+919321590601" className="px-5 py-2.5 bg-zinc-900 text-white hover:bg-orange-600 transition-all font-bold flex items-center gap-2 rounded-full shadow-md text-xs">
              <Phone className="w-3.5 h-3.5 text-orange-400" /> +91-93215 90601
            </a>
          </div>

          <button 
            className="lg:hidden z-50 text-zinc-900 p-2 rounded-xl bg-white/80 border border-zinc-200" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-6 px-6 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <img src="/assets/logo.jpg" alt="Logo" className="w-16 h-16 rounded-full shadow-lg mb-2" />
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-600">Idea To Reality</span>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-orange-600 transition-colors">5 Service Divisions</a>
          <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-cyan-600 transition-colors flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-600" /> Instant Cost Estimator
          </a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight text-orange-600 hover:text-orange-700 transition-colors">
            Work Done Showcase ({allGalleryPhotos.length})
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-zinc-700 transition-colors">About Facility</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-zinc-700 transition-colors">FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-pink-600 transition-colors">Contact Us</a>
          
          <button 
            onClick={() => { setMobileMenuOpen(false); setInvoiceModalOpen(true); }}
            className="w-full max-w-xs py-3.5 bg-zinc-100 border border-zinc-300 font-bold rounded-full text-zinc-900 flex items-center justify-center gap-2 shadow-sm text-sm"
          >
            <FileText className="w-4 h-4 text-orange-600" /> View / Generate GST Quote
          </button>

          <a href="tel:+919321590601" onClick={() => setMobileMenuOpen(false)} className="w-full max-w-xs py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-center rounded-full flex items-center justify-center gap-2 shadow-xl">
            <Phone className="w-5 h-5" /> Call +91-93215 90601
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden z-10">
        <div 
          ref={heroRef}
          className={`w-full max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 transform ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="uppercase tracking-[0.2em] text-orange-700 text-xs font-black">
              Idea To Reality • Direct Manufacturer & Creative Agency
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.92] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500">
              We Turn Ideas
            </span><br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700">
              Into Reality.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-orange-500 to-pink-600 tracking-tight mb-8">
            Design. Print. Brand. Grow.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end border-t border-zinc-200/80 pt-8 mt-6">
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
              Mumbai's complete creative agency and direct manufacturing hub. Premium graphic design, ACP 3D letter signboards, large format vinyl, and turnkey corporate branding with zero broker markups.
            </p>
            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <a 
                href="#estimator" 
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2.5 text-base"
              >
                <Calculator className="w-5 h-5" /> Calculate Instant Quote
              </a>
              <a 
                href="#gallery" 
                className="px-7 py-4 bg-zinc-900 hover:bg-zinc-800 text-white transition-all font-bold rounded-full shadow-lg flex items-center justify-center gap-2.5 text-base"
              >
                Work Done ({allGalleryPhotos.length})
              </a>
              <a 
                href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20am%20interested%20in%20getting%20a%20quote%20for%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white transition-all font-bold rounded-full shadow-lg flex items-center justify-center gap-2 text-base"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-200/80">
            <div className="p-4 rounded-2xl bg-white/70 border border-zinc-200/70 shadow-sm backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-orange-600">10+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">Years Manufacturing</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 border border-zinc-200/70 shadow-sm backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-cyan-600">5,000+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">Projects Executed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 border border-zinc-200/70 shadow-sm backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-pink-600">1,200+</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">Happy Clients</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 border border-zinc-200/70 shadow-sm backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-emerald-600">24-48h</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">Fast Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MARQUEE */}
      <div className="py-7 bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white overflow-hidden flex whitespace-nowrap rotate-[-1.5deg] scale-105 relative z-20 shadow-xl">
        <div className="flex gap-10 items-center text-3xl md:text-5xl font-black tracking-tight uppercase" style={{ animation: 'marquee 22s linear infinite' }}>
          <span>Logo & Identity</span> <span className="text-white/50">•</span>
          <span>ACP 3D LED Letters</span> <span className="text-white/50">•</span>
          <span>Star Flex & Vinyl Printing</span> <span className="text-white/50">•</span>
          <span>Shopfront Branding</span> <span className="text-white/50">•</span>
          <span>Rollup Standees</span> <span className="text-white/50">•</span>
          <span>Corporate Visiting Cards</span> <span className="text-white/50">•</span>
          <span>Glow Sign Boards</span> <span className="text-white/50">•</span>
          <span>Digital Ads & Performance SEO</span> <span className="text-white/50">•</span>
        </div>
      </div>

      {/* INTERACTIVE SERVICES MATRIX (5 DIVISIONS) */}
      <section id="services" className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">
                Full Production Stack
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900">
                Five Specialized Divisions
              </h2>
            </div>
            <p className="text-zinc-600 max-w-md text-base">
              Everything from pixel-perfect identity conceptualization to heavy-duty laser fabrication, sign assembly, and digital customer acquisition.
            </p>
          </div>

          <div 
            ref={interactiveRef}
            className={`bg-white/80 backdrop-blur-xl border border-black/5 shadow-2xl p-4 md:p-8 rounded-3xl transition-all duration-1000 ${interactiveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Division Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-8">
              {serviceDivisions.map((division) => {
                const DivIcon = division.icon;
                const isActive = activeTab === division.id;
                return (
                  <button
                    key={division.id}
                    onClick={() => setActiveTab(division.id)}
                    className={`py-4 px-4 rounded-2xl text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      isActive ? 'bg-zinc-900 text-white shadow-xl scale-[1.02]' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 bg-zinc-50/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <DivIcon className={`w-5 h-5 ${isActive ? 'text-orange-400' : 'text-zinc-400'}`} />
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-700'}`}>
                          {division.badge}
                        </span>
                      </div>
                      <div className="text-sm md:text-base font-black tracking-tight">{division.title}</div>
                    </div>
                    {isActive && (
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${division.color}`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Division Panel */}
            <div className="p-6 md:p-10 bg-white rounded-2xl border border-zinc-200/90 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-zinc-100 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`text-3xl md:text-4xl font-black ${currentTabObj.accent}`}>
                      {currentTabObj.title}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-1 bg-zinc-100 rounded-full text-zinc-600">
                      {currentTabObj.subtitle}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm md:text-base max-w-2xl">{currentTabObj.description}</p>
                </div>
                <a 
                  href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20want%20to%20inquire%20about%20your%20*${encodeURIComponent(currentTabObj.title)}*%20services.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-bold text-sm flex items-center gap-2 rounded-full transition-all shadow-md shrink-0"
                >
                  <MessageCircle className="w-4 h-4" /> Discuss {currentTabObj.title} on WhatsApp
                </a>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {currentTabObj.items.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20I%20am%20interested%20in%20getting%20*${encodeURIComponent(item.name)}*%20(${encodeURIComponent(currentTabObj.title)}).%20Please%20share%20pricing%20and%20turnaround.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-zinc-50/70 border border-zinc-200/70 flex flex-col justify-between group hover:border-orange-400 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-zinc-900 group-hover:text-orange-600 transition-colors text-base">
                          {item.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-3 text-[11px] font-bold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Click for instant rates</span> &rarr;
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ONLINE QUOTE SYSTEM & COST ESTIMATOR */}
      <section id="estimator" className="py-24 bg-gradient-to-b from-white to-zinc-50 border-y border-zinc-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12" ref={calcRef}>
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">
              Transparent Factory Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              Instant Online Quote Calculator
            </h2>
            <p className="text-zinc-600 text-base md:text-lg">
              Configure your requirements, material grades, and dimensions. Receive an instant estimate and dispatch direct specifications to our production team on WhatsApp with zero waiting.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-700 ${calcInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Form Controls Column */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200/90 shadow-xl space-y-6">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-2">
                  1. Select Product / Service Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {calculatorServices.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setCalcServiceId(service.id);
                        setCalcMaterialId(service.materials[0].id);
                        setCalcWidth(service.defaultW);
                        setCalcHeight(service.defaultH);
                        setCalcQty(service.minQty);
                      }}
                      className={`p-3.5 rounded-xl border text-left font-bold text-sm flex items-center justify-between transition-all ${
                        calcServiceId === service.id
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 shadow-sm'
                          : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                      }`}
                    >
                      <span>{service.name}</span>
                      {calcServiceId === service.id && <Check className="w-4 h-4 text-orange-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Material Grade */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-2">
                  2. Select Material & Quality Grade
                </label>
                <div className="space-y-2">
                  {currentCalcService.materials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setCalcMaterialId(mat.id)}
                      className={`w-full p-3.5 rounded-xl border text-left font-semibold text-sm flex items-center justify-between transition-all ${
                        calcMaterialId === mat.id
                          ? 'border-cyan-500 bg-cyan-50/50 text-cyan-950 shadow-sm'
                          : 'border-zinc-200 hover:border-zinc-300 text-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${calcMaterialId === mat.id ? 'bg-cyan-600' : 'bg-zinc-300'}`}></span>
                        <span>{mat.name}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        {mat.mult > 1 ? `+${Math.round((mat.mult - 1) * 100)}% Grade` : 'Base Tier'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Dimensions or Units */}
              {currentCalcService.unit === "sq.ft" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                      Width (Feet)
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="100"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl font-bold text-zinc-900 focus:outline-none focus:border-orange-500 bg-zinc-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                      Height (Feet)
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="50"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl font-bold text-zinc-900 focus:outline-none focus:border-orange-500 bg-zinc-50"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                      Quantity (Boards/Banners)
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="500"
                      value={calcQty}
                      onChange={(e) => setCalcQty(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl font-bold text-zinc-900 focus:outline-none focus:border-orange-500 bg-zinc-50"
                    />
                  </div>
                </div>
              ) : (
                <div className="pt-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-600 mb-1.5">
                    Order Quantity ({currentCalcService.unit})
                  </label>
                  <input 
                    type="number" 
                    min={currentCalcService.minQty} 
                    max="10000"
                    step={currentCalcService.id === "cards" ? 5 : 1}
                    value={calcQty}
                    onChange={(e) => setCalcQty(Math.max(currentCalcService.minQty, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl font-bold text-zinc-900 focus:outline-none focus:border-orange-500 bg-zinc-50"
                  />
                </div>
              )}

              {/* Step 4: Artwork toggle & Notes */}
              <div className="pt-2 border-t border-zinc-100">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-600">
                    Artwork Status
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setHasArtwork(true)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg ${hasArtwork ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'}`}
                    >
                      Ready Files (AI / CDR / PDF)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasArtwork(false)}
                      className={`px-3 py-1 text-xs font-bold rounded-lg ${!hasArtwork ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-600'}`}
                    >
                      Need Design Help
                    </button>
                  </div>
                </div>

                <textarea
                  placeholder="Special instructions (e.g. LED color, eyelets, installation at Malad West, matte lamination, etc.)..."
                  value={calcNotes}
                  onChange={(e) => setCalcNotes(e.target.value)}
                  rows={2}
                  className="w-full p-3 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:border-orange-500 bg-zinc-50"
                ></textarea>
              </div>

            </div>

            {/* Live Estimation Output Column */}
            <div className="lg:col-span-5 bg-zinc-900 text-white p-7 md:p-9 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-white">Estimated Quote</h3>
                      <p className="text-zinc-400 text-xs">Direct Factory Calculation</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-zinc-800 text-emerald-400 rounded-full font-bold">
                    Estimated in INR
                  </span>
                </div>

                {/* Calculation Breakdown */}
                <div className="py-6 space-y-3.5 text-sm">
                  <div className="flex justify-between text-zinc-300">
                    <span>Product:</span>
                    <span className="font-bold text-white text-right max-w-[200px]">{currentCalcService.name}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Selected Material:</span>
                    <span className="font-bold text-orange-400 text-right max-w-[200px]">{currentCalcMaterial.name}</span>
                  </div>
                  {currentCalcService.unit === "sq.ft" && (
                    <div className="flex justify-between text-zinc-300">
                      <span>Dimensions:</span>
                      <span className="font-mono text-white">{calcWidth} ft &times; {calcHeight} ft ({calculatedArea} sq.ft)</span>
                    </div>
                  )}
                  <div className="flex justify-between text-zinc-300">
                    <span>Quantity:</span>
                    <span className="font-mono text-white">{calcQty} {currentCalcService.unit}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Turnaround Time:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 24 to 48 Hours
                    </span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Artwork Assistance:</span>
                    <span className="text-cyan-400 font-bold">{hasArtwork ? "Files Provided" : "Design Team Support"}</span>
                  </div>
                </div>

                {/* Big Estimated Price */}
                <div className="pt-6 border-t border-zinc-800">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    Approximate Factory Rate
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-white">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-400 font-normal">+ 18% GST (Input Credit Available)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-2">
                    *Exact rate may vary depending on on-site mounting, intricate vector complexity, or express same-day timeline.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={getCalcWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-black rounded-2xl flex items-center justify-center gap-2.5 shadow-lg transition-all text-sm uppercase tracking-wide cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" /> Order / Lock Quote on WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setInvoiceModalOpen(true)}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-2xl flex items-center justify-center gap-2 text-xs transition-all border border-zinc-700"
                >
                  <FileText className="w-4 h-4 text-orange-400" /> Open Official GST Slip Generator
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* WORK DONE BY US / GALLERY - ALL 34 IMAGES WITH FILTER */}
      {/* ======================================================== */}
      <section id="gallery" className="py-28 bg-white/70 backdrop-blur-md border-b border-zinc-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12" ref={galleryRef}>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <span className="px-3.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-200 inline-block mb-3">
                Real Executions & Proof of Work
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900">
                Work Done by Us
              </h2>
              <p className="text-zinc-600 text-base md:text-lg mt-2 max-w-xl">
                Browse our real projects and production work. Click any photo to inspect high-resolution details or order identical specifications.
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

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 pb-2">
            {[
              { id: "all", label: `All Work (${allGalleryPhotos.length})` },
              { id: "signage", label: "3D Signage & Boards" },
              { id: "vinyl", label: "Vinyl & Large Format" },
              { id: "branding", label: "Commercial Branding" },
              { id: "stationery", label: "Stationery & Packaging" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setGalleryFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  galleryFilter === cat.id
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PHOTOS GRID */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4.5 transition-all duration-700 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {filteredGallery.map((photo, idx) => (
              <div 
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                />
                
                {/* Subtle Hover Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                  <span className="text-[10px] uppercase font-bold text-white/90 bg-black/50 px-2 py-0.5 rounded-md self-start">
                    #{photo.id}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate max-w-[120px]">{photo.title}</span>
                    <div className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && filteredGallery[activeLightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Close Preview"
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
            aria-label="Previous Photo"
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
            aria-label="Next Photo"
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
                src={filteredGallery[activeLightboxIndex].src} 
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 w-full flex flex-col sm:flex-row justify-between items-center text-white px-2 gap-3">
              <div>
                <span className="font-bold text-white text-base">
                  {filteredGallery[activeLightboxIndex].title}
                </span>
                <span className="text-zinc-400 text-sm ml-2">
                  (Photo {activeLightboxIndex + 1} of {filteredGallery.length})
                </span>
              </div>

              <a 
                href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20am%20interested%20in%20getting%20work%20done%20similar%20to%20Photo%20%23${filteredGallery[activeLightboxIndex].id}%20(${encodeURIComponent(filteredGallery[activeLightboxIndex].title)})%20from%20your%20gallery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg shrink-0"
              >
                <MessageCircle className="w-4 h-4" /> Inquire for This Work on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT US & IN-HOUSE PRODUCTION FACILITY */}
      <section id="about" className="py-28 relative z-10 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={aboutRef}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-black uppercase tracking-wider inline-block">
                In-House Manufacturing
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Where Creative Concept Meets Heavy Industrial Craft.
              </h2>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Founded with a singular mission: to eliminate the gap between creative advertising agencies and industrial fabrication. Most design studios subcontract printing to third parties, inflating costs and compromising quality.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                At <strong className="text-white font-bold">RashmiCreativesArtSpace</strong>, our Malad East facility houses Japanese eco-solvent plotters, automated laser CNC routing machines, cast acrylic vacuum benders, and high-speed digital offset presses under one roof. You get factory-direct wholesale pricing, flawless color matching, and express 24-48 hour turnarounds.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/80">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Zero Broker Markup</h4>
                  <p className="text-xs text-zinc-400 mt-1">Direct from factory floor saves you 30-40%</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/80">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Turnkey Site Mounting</h4>
                  <p className="text-xs text-zinc-400 mt-1">Professional installation across Mumbai & MMR</p>
                </div>
              </div>
            </div>

            {/* Machinery & Process Showcase */}
            <div className="lg:col-span-6 bg-zinc-800/60 p-7 md:p-9 rounded-3xl border border-zinc-700/80 shadow-2xl space-y-5">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Printer className="w-5 h-5 text-orange-400" />
                Our Facility Tech & Machinery
              </h3>
              
              <div className="space-y-3.5">
                {[
                  { name: "Japanese Eco-Solvent Large Format Plotters", role: "Photorealistic 1440 DPI outdoor vinyl, backlit film & Star Flex printing." },
                  { name: "High-Precision CNC Laser Routers", role: "Micron-accurate cutting of acrylic, wood, MDF, and heavy gauge aluminum sheets." },
                  { name: "Cast Acrylic Channel Letter Benders", role: "Automated seamless return bending for 3D letter signs and glow boards." },
                  { name: "High-Speed Digital & Offset Presses", role: "Velvet touch business cards, serialized GST invoice books, corporate catalogs." },
                  { name: "Thermal Lamination & Spot UV Coating", role: "Weatherproofing, scratch-resistant matte, and high-gloss spot embellishments." }
                ].map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-700/50 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{tech.name}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{tech.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919321590601"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm transition-opacity"
                >
                  <Phone className="w-4 h-4" /> Book a Studio Visit or Facility Consultation
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (4 VALUE PILLARS) */}
      <section className="py-24 bg-white relative z-10 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">
              The Rashmi Creatives Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
              Why Corporate Clients Choose Us
            </h2>
            <p className="text-zinc-600 text-base md:text-lg">
              Reliability, craftsmanship, and speed that retail brands, corporate offices, and institutions depend upon every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "border-orange-200",
                title: "Direct Manufacturing",
                desc: "100% in-house production facility in Malad East. You work directly with makers, avoiding 30-40% broker fees."
              },
              {
                icon: Clock,
                color: "text-cyan-600",
                bg: "bg-cyan-50",
                border: "border-cyan-200",
                title: "24-48h Express Turnaround",
                desc: "High-capacity machines running round the clock. We hit tight corporate launch deadlines without fail."
              },
              {
                icon: Sparkles,
                color: "text-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-200",
                title: "Photorealistic Color Match",
                desc: "Calibrated color profiles matching CMYK & Pantone codes perfectly so your brand identity never deviates."
              },
              {
                icon: Truck,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
                title: "Turnkey Installation",
                desc: "Trained fabricators equipped for height rigging, electrical LED wiring, and structural civil anchoring."
              }
            ].map((pillar, idx) => {
              const PIcon = pillar.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl ${pillar.bg} border ${pillar.border} shadow-sm flex flex-col justify-between hover:shadow-md transition-all`}>
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-white ${pillar.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <PIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-zinc-900 mb-2">{pillar.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200/50 flex items-center gap-1.5 text-xs font-bold text-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Guaranteed Standards
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="py-24 bg-zinc-50 relative z-10 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-zinc-900">4.9 / 5.0 Google Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
                Trusted by 1,200+ Businesses
              </h2>
            </div>
            <a 
              href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20would%20like%20to%20view%20more%20client%20references." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5"
            >
              Request Corporate References &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Parekh",
                role: "Managing Director, Apex Retail Chain",
                review: "We commissioned Rashmi Creatives for all 4 of our retail outlets in Malad and Andheri. The 3D ACP letter glow signboards look stunning at night, and their pricing was 35% less than other agencies who act as middlemen.",
                rating: 5,
                tag: "ACP 3D LED Signage"
              },
              {
                name: "Dr. Shalini Deshmukh",
                role: "Director, LifeCare Diagnostics",
                review: "Fastest turnaround we've experienced in Mumbai. We had an urgent medical conference requiring 12 heavy rollup standees and 500 patient manuals printed in under 24 hours. They delivered precisely on time!",
                rating: 5,
                tag: "Rollup Standees & Print"
              },
              {
                name: "Vikramaditya Solanki",
                role: "Founder, Urban Crust Cafes",
                review: "From designing our modern cafe logo to fabricating our wooden-finish storefront signs and spill-proof menu cards, Rashmi Creatives brought our vision to reality seamlessly. 10/10 recommended!",
                rating: 5,
                tag: "Complete Brand Identity"
              }
            ].map((rev, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-orange-50 text-orange-700 rounded-md">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white font-black flex items-center justify-center text-sm shadow-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">{rev.name}</div>
                    <div className="text-xs text-zinc-500">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section id="faq" className="py-24 bg-white relative z-10 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-14">
            <span className="px-3.5 py-1 bg-zinc-100 text-zinc-800 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-base">
              Everything you need to know about placing design, printing, and signage orders with us.
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "What file formats do you accept for high-resolution printing?",
                a: "We accept CorelDraw (.CDR version 11 to 2024), Adobe Illustrator (.AI, .EPS), print-ready PDF, Photoshop (.PSD), and high-resolution TIFF or JPEG files (at least 150-300 DPI at actual size with CMYK color mode). If your fonts are not converted to curves/outlines, please include the font files or convert them before submission."
              },
              {
                q: "Can you help design our artwork if we don't have ready files?",
                a: "Yes! Our in-house creative design studio can build your vector logo, brochure, signboard artwork, visiting card, or vehicle graphics from scratch. Simply share your concept, text, and reference images, and our senior graphic designers will create proofs for your review and approval before sending to print."
              },
              {
                q: "What is your typical production turnaround time?",
                a: "For standard flex banners, rollups, and stickers, production takes 24 to 48 hours. For custom 3D ACP acrylic LED boards, fabrication and testing usually take 3 to 5 working days. We also offer express same-day services for urgent events and exhibitions upon request."
              },
              {
                q: "Do you provide on-site measurement and mounting in Mumbai?",
                a: "Yes! Our technical site measurement team visits your location across Malad, Goregaon, Andheri, BKC, South Mumbai, and Navi Mumbai to inspect mounting surfaces, electrical points for LED boards, and take accurate laser measurements before production begins."
              },
              {
                q: "Do you supply official GST invoices for tax credit?",
                a: "Absolutely. All our commercial orders are backed by authentic GST tax invoices (18% GST). You can furnish your company's GSTIN and state code during order confirmation to avail 100% Input Tax Credit (ITC)."
              },
              {
                q: "Can you ship printed materials across India?",
                a: "Yes. Portable displays, rollup standees, corporate visiting cards, employee ID cards, and rolled vinyl flex banners can be dispatched pan-India through trusted express logistics partners like DTDC, Blue Dart, and Delhivery."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-zinc-900 flex items-center justify-between gap-4 hover:bg-zinc-100/70 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-zinc-600 text-sm md:text-base leading-relaxed border-t border-zinc-200/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MASSIVE CTA & INTERACTIVE CONTACT */}
      <section id="contact" className="py-24 md:py-32 relative z-10 overflow-hidden bg-white/90 backdrop-blur-md border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">
              Start Your Project Today
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 mb-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500">
              LET'S TALK.
            </h2>
            <p className="text-zinc-600 text-base md:text-lg">
              Have a custom signage, retail branding, or large-scale industrial printing requirement? Connect with our team or drop by our Malad East facility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Inquiry Form */}
            <div className="lg:col-span-6 bg-white p-7 md:p-9 rounded-3xl border border-zinc-200 shadow-xl">
              <h3 className="text-2xl font-black text-zinc-900 mb-2">Send an Instant Project Inquiry</h3>
              <p className="text-zinc-500 text-sm mb-6">Fill this quick form to dispatch full requirements directly to our production manager.</p>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                    Your Name / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma (Acme Corp)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 bg-zinc-50 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-98765 43210"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 bg-zinc-50 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                      Required Service
                    </label>
                    <select
                      value={contactService}
                      onChange={(e) => setContactService(e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 bg-zinc-50 font-medium text-zinc-800"
                    >
                      <option value="Industrial Printing & Signage">Industrial Printing & Signage</option>
                      <option value="ACP 3D Glow LED Board">ACP 3D Glow LED Board</option>
                      <option value="Logo & Graphic Designing">Logo & Graphic Designing</option>
                      <option value="Office Stationery & Invoice Books">Office Stationery & Invoice Books</option>
                      <option value="Vehicle & Shop Branding">Vehicle & Shop Branding</option>
                      <option value="Digital Ads & Performance SEO">Digital Ads & Performance SEO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                    Project Details & Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention sizes (e.g. 10x4 ft board), materials, required completion date..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full p-4 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 bg-zinc-50 font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-zinc-900 hover:bg-orange-600 text-white font-black rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Direct WhatsApp Inquiry
                </button>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Inquiry generated! Redirecting you to WhatsApp for immediate assistance.
                  </div>
                )}
              </form>
            </div>

            {/* Studio Info Cards Column */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm hover:border-orange-300 hover:bg-white transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Our Studio & Production Facility</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Office No.8, Ground Floor, Jai ShivShakti Apt., Triveni Nagar, Beside Central Bank of India, Malad East, Mumbai 400097.
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <a 
                        href="https://maps.google.com/?q=Office+No.8+Ground+Floor+Jai+ShivShakti+Apt+Triveni+Nagar+Beside+Central+Bank+of+India+Malad+East+Mumbai+400097" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                      >
                        Open Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-zinc-300">•</span>
                      <span className="text-xs text-zinc-500 font-semibold">Open Mon-Sat: 10:00 AM - 8:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm hover:border-cyan-300 hover:bg-white transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Direct Phone & WhatsApp Hotline</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Fastest turnaround for instant estimations, live order tracking, and file uploads.
                    </p>
                    <div className="mt-2 text-xl font-black text-zinc-900">+91 93215 90601</div>
                    <div className="mt-3 flex items-center gap-3">
                      <a 
                        href="tel:+919321590601" 
                        className="px-4 py-1.5 bg-zinc-900 text-white rounded-full text-xs font-bold hover:bg-orange-600 transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3" /> Call Directly
                      </a>
                      <a 
                        href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20want%20to%20inquire%20about%20your%20services." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#25D366] text-white rounded-full text-xs font-bold hover:opacity-95 transition-opacity flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3 h-3" /> WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm hover:border-pink-300 hover:bg-white transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1">Official Instagram Handle</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Follow our official page for live project reveals, signboard lighting tests, and studio behind-the-scenes.
                    </p>
                    <div className="mt-2 text-lg font-black text-pink-600">@rashmi_creatives</div>
                    <a 
                      href="https://www.instagram.com/rashmi_creatives/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-pink-600 hover:underline"
                    >
                      Visit Instagram Profile <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* GST QUOTATION & INVOICE GENERATOR MODAL */}
      {invoiceModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fadeIn select-none"
          onClick={() => setInvoiceModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-zinc-200 p-6 md:p-10 relative select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Actions */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-zinc-900">GST Quotation & Estimate Slip</h3>
                  <p className="text-xs text-zinc-500">Official RashmiCreativesArtSpace Format</p>
                </div>
              </div>
              <button 
                onClick={() => setInvoiceModalOpen(false)}
                className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Invoice Body */}
            <div id="printable-invoice" className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200 space-y-6">
              
              {/* Slip Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full object-contain shadow-sm border border-zinc-200" />
                  <div>
                    <h2 className="text-xl font-black text-zinc-900">RashmiCreativesArtSpace</h2>
                    <p className="text-xs text-zinc-500">Idea To Reality • Malad East, Mumbai</p>
                    <p className="text-[11px] text-zinc-400">GSTIN: 27AABCR9876C1Z8 | +91 93215 90601</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xs font-mono font-bold uppercase text-orange-600">Proforma Quotation</div>
                  <div className="text-lg font-mono font-black text-zinc-900">{invoiceNumber}</div>
                  <div className="text-xs text-zinc-500">Date: {invoiceDate}</div>
                </div>
              </div>

              {/* Client Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-zinc-500 uppercase tracking-wider block mb-1">Billed To / Client:</span>
                  <input
                    type="text"
                    value={invoiceClientName}
                    onChange={(e) => setInvoiceClientName(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-200 rounded-lg font-bold text-zinc-900 bg-white"
                  />
                </div>
                <div>
                  <span className="font-bold text-zinc-500 uppercase tracking-wider block mb-1">Contact Phone:</span>
                  <input
                    type="text"
                    value={invoiceClientPhone}
                    onChange={(e) => setInvoiceClientPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-200 rounded-lg font-bold text-zinc-900 bg-white"
                  />
                </div>
              </div>

              {/* Line Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-zinc-300 text-zinc-500 font-bold uppercase">
                      <th className="pb-2">Item Description</th>
                      <th className="pb-2 text-center">Qty</th>
                      <th className="pb-2 text-right">Rate (₹)</th>
                      <th className="pb-2 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {invoiceItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2.5 font-medium text-zinc-800 pr-2">{item.desc}</td>
                        <td className="py-2.5 text-center font-mono text-zinc-700">{item.qty}</td>
                        <td className="py-2.5 text-right font-mono text-zinc-700">{item.rate.toLocaleString('en-IN')}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-zinc-900">{(item.qty * item.rate).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="pt-4 border-t border-zinc-200 flex justify-end text-xs">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal:</span>
                    <span className="font-mono font-bold">₹{invoiceSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>CGST (9%):</span>
                    <span className="font-mono">₹{Math.round(invoiceGst / 2).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>SGST (9%):</span>
                    <span className="font-mono">₹{Math.round(invoiceGst / 2).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-zinc-900 pt-2 border-t border-zinc-300">
                    <span>Grand Total:</span>
                    <span className="text-orange-600">₹{invoiceGrandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Stamp & Verification */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-end text-[11px] text-zinc-500 gap-3">
                <div>
                  <p>• Valid for 15 days from issue date.</p>
                  <p>• Payment: 50% advance along with order confirmation.</p>
                  <p>• Turnaround: 24 to 48 hours following final artwork signoff.</p>
                </div>
                <div className="text-center sm:text-right">
                  <div className="font-bold text-zinc-800">For RashmiCreativesArtSpace</div>
                  <div className="text-[10px] text-zinc-400 mt-6">[Authorized Signatory]</div>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-orange-400" /> Print / Save as PDF
              </button>
              
              <a
                href={`https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace!%20Please%20find%20my%20Quotation%20Slip%20${invoiceNumber}%20for%20${encodeURIComponent(invoiceClientName)}%20worth%20₹${invoiceGrandTotal.toLocaleString('en-IN')}.%20Please%20verify%20and%20proceed.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Forward Quotation on WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-300 pt-24 pb-12 border-t border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <img src="/assets/logo.jpg" alt="RashmiCreativesArtSpace Logo" className="w-12 h-12 rounded-full object-contain bg-white shadow-sm" />
                <span className="font-black text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400">
                  RashmiCreatives<span className="text-cyan-400">ArtSpace</span>
                </span>
              </div>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed mb-6">
                Complete Designing, Industrial Large Format Printing, Physical Retail Branding & Digital Performance Marketing. Turning raw brand concepts into tangible market dominance.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20have%20an%20inquiry%20regarding%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+919321590601" 
                  className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
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
              <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Quick Links</h4>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">5 Service Divisions</a></li>
                <li><a href="#estimator" className="hover:text-orange-400 transition-colors">Instant Cost Estimator</a></li>
                <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Work Done by Us ({allGalleryPhotos.length})</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Manufacturing Facility</a></li>
                <li><a href="#faq" className="hover:text-zinc-200 transition-colors">FAQ & Technical Support</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Studio Location & Map</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-5 tracking-widest uppercase text-xs">Direct Facility Address</h4>
              <div className="space-y-3.5 text-zinc-400 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    Office No.8, Ground Floor, Jai ShivShakti Apt., Triveni Nagar, Beside Central Bank of India, Malad East, Mumbai 400097.
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
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-zinc-800 rounded-lg text-xs font-mono text-emerald-400">
                    ● Production Open: Mon - Sat: 10AM - 8:30PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} RashmiCreativesArtSpace. All rights reserved. Idea To Reality.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs">
              <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300">Terms of Production</a>
              <a href="#" className="hover:text-zinc-300">GST Compliance</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON WITH PING */}
      <a 
        href="https://wa.me/919321590601?text=Hello%20RashmiCreativesArtSpace%2C%20I%20would%20like%20to%20inquire%20about%20your%20design%20and%20printing%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-7 right-7 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 group"
        title="Chat with Production Team on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
        </span>
        <MessageCircle className="w-8 h-8" />
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

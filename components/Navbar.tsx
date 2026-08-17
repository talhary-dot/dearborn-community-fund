"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Heart, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Calendar, 
  Award, 
  Palette, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Info,
  Gift
} from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { 
      label: "Programs & Projects", 
      href: "/projects",
      hasDropdown: true,
      subItems: [
        { title: "All Programs", href: "/projects", desc: "Overview of all community initiatives" },
        { title: "Pockets of Perception (POP)", href: "/projects/pockets-of-perception", desc: "Student public art design apprentices" },
        { title: "Youth in Arts Festival", href: "/projects/youth-arts-festival", desc: "400+ student showcase & City-Wide Art Show" },
        { title: "Padzieski Art Gallery", href: "/projects/padzieski-art-gallery", desc: "Contemporary & local exhibitions at FC&PAC" },
        { title: "April Arts Dearborn", href: "/projects/april-arts-dearborn", desc: "Arty Party, Studio Hops & Mural Way" },
        { title: "DIA Inside/Out", href: "/projects/dia-inside-out", desc: "10 Museum replicas across East & West Dearborn" },
        { title: "Community Connections", href: "/projects/community-connections", desc: "Video features & cultural stories" },
      ]
    },
    { label: "Mayor's Arts Awards", href: "/mayors-arts-awards" },
    { label: "Events & Calendar", href: "/calendar" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification / Micro-bar */}
      <div className="bg-slate-900 text-slate-200 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
              <Sparkles className="w-3 h-3 mr-1 inline" /> 2026 Season
            </span>
            <span className="text-slate-300 font-medium truncate">
              POP 2026 Student Team & Mayor’s Arts Awards Nominations are Now Open!
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300 shrink-0 text-xs">
            <a 
              href="tel:313-943-5478" 
              className="flex items-center gap-1 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3" /> (313) 943-5478
            </a>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-amber-400" /> Ford Center
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`${isScrolled ? "glass-nav shadow-sm py-3" : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"} transition-all duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
            <div className="w-11 h-11 shrink-0 relative flex items-center justify-center overflow-hidden">
              <img
                src="/dcf-header-logo.png"
                alt="Dearborn Community Fund Official Logo"
                className="w-11 h-11 object-contain drop-shadow-xs"
                style={{ width: "44px", height: "44px", maxWidth: "44px", maxHeight: "44px" }}
              />
            </div>
            <div className="hidden sm:block shrink-0 border-l border-slate-200 pl-3">
              <div className="text-sm font-extrabold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                Dearborn <span className="text-blue-700">Community Fund</span>
              </div>
              <div className="text-[10px] font-semibold text-slate-600 leading-tight max-w-[210px] truncate">
                Supporting quality of life & culture in Dearborn
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith("/projects"));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProgramsDropdownOpen(true)}
                    onMouseLeave={() => setProgramsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-2.5 py-2 rounded-lg text-xs xl:text-[13px] font-bold whitespace-nowrap flex items-center gap-1 transition-colors ${
                        isActive 
                          ? "text-blue-700 bg-blue-50/80" 
                          : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programsDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {programsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                          <div className="text-xs font-bold text-slate-500 px-3 py-1.5 uppercase tracking-wider">
                            Programs & Initiatives
                          </div>
                          <div className="space-y-1 mt-1">
                            {link.subItems?.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="block px-3 py-2 rounded-xl hover:bg-blue-50/70 transition-colors group"
                              >
                                <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                                  {sub.title}
                                </div>
                                <div className="text-xs text-slate-500 line-clamp-1">
                                  {sub.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-2.5 py-2 rounded-lg text-xs xl:text-[13px] font-bold whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link
              href="/give-online"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-xs font-bold whitespace-nowrap shadow-md shadow-blue-700/20 hover:from-blue-800 hover:to-indigo-800 hover:shadow-lg transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-white/80 text-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/give-online"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 text-white text-xs font-bold shadow-sm whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 fill-white/80" />
              <span>Donate</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                    pathname === link.href
                      ? "text-blue-700 bg-blue-50 font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 text-xs font-medium text-slate-600 hover:text-blue-700"
                      >
                        • {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/give"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 text-white font-bold shadow-md shadow-blue-700/20"
            >
              <Heart className="w-4 h-4 fill-white" />
              Make a Tax-Deductible Donation
            </Link>
            <div className="text-center text-xs text-slate-700 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5" /> Call DCF: (313) 943-5478
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Heart, 
  Palette, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Calendar,
  Award,
  Users
} from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Mission Bar */}
        <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-slate-800 rounded-3xl p-8 mb-16 border border-blue-800/40 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Stay Connected With Dearborn Arts
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Empowering Community Through Creativity
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
                Join our community newsletter to receive timely updates about April Arts Month, POP youth apprentice calls, Padzieski gallery openings, and Mayor’s Arts Awards.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-300">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="text-sm font-medium">
                    Thank you for subscribing! You’ll receive our next arts & events digest.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-sm">
          
          {/* Col 1: Identity & 501c3 */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
                <img
                  src="/dcf-header-logo.png"
                  alt="Dearborn Community Fund"
                  className="w-8 h-8 object-contain"
                  style={{ width: "32px", height: "32px" }}
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Dearborn <span className="text-blue-400">Community Fund</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Established in 2000, the Dearborn Community Fund is a 501(c)(3) nonprofit dedicated to enriching life across Dearborn through creative partnerships in visual arts, theater, music, and recreational community projects.
            </p>

            <div className="pt-2">
              <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
                Tax-Exempt EIN: 501(c)(3) Nonprofit • Donations Fully Tax Deductible
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_METADATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Visit Dearborn Community Fund on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://cdtv.viebit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <span>CDTV Broadcasts</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Programs & Projects */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-amber-400">
              Key Programs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/projects/pockets-of-perception" className="text-slate-400 hover:text-white transition-colors">
                  Pockets of Perception (POP)
                </Link>
              </li>
              <li>
                <Link href="/projects/youth-arts-festival" className="text-slate-400 hover:text-white transition-colors">
                  Youth in Arts Festival
                </Link>
              </li>
              <li>
                <Link href="/projects/padzieski-art-gallery" className="text-slate-400 hover:text-white transition-colors">
                  Padzieski Art Gallery
                </Link>
              </li>
              <li>
                <Link href="/projects/april-arts-dearborn" className="text-slate-400 hover:text-white transition-colors">
                  April Arts Month & Arty Party
                </Link>
              </li>
              <li>
                <Link href="/projects/dia-inside-out" className="text-slate-400 hover:text-white transition-colors">
                  DIA Inside/Out Trail
                </Link>
              </li>
              <li>
                <Link href="/projects/community-connections" className="text-slate-400 hover:text-white transition-colors">
                  Community Connections
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-amber-400">
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/give" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Donate to Funds</span>
                </Link>
              </li>
              <li>
                <Link href="/mayors-arts-awards" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nominate for Awards</span>
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>Volunteer With Us</span>
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Events Calendar</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Mission & History
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Grant Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-amber-400">
              Office & Contact
            </h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Ford Community & Performing Arts Center<br />
                  15801 Michigan Ave.<br />
                  Dearborn, MI 48126
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:313-943-5478" className="hover:text-white transition-colors">
                  (313) 943-5478
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:ewoodyard@dearborn.gov" className="hover:text-white transition-colors truncate">
                  ewoodyard@dearborn.gov
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Executive Director: <strong className="text-slate-200">EmmaJean Woodyard</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Dearborn Community Fund. All rights reserved. Registered 501(c)(3) Nonprofit.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About The Fund
            </Link>
            <Link href="/give" className="hover:text-slate-300 transition-colors">
              Tax Deductible Giving
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { 
  Award, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  UserCheck, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  HandHeart, 
  Trophy,
  Users,
  Printer
} from "lucide-react";
import { AWARD_CATEGORIES, SITE_METADATA } from "@/lib/data";
import NominationForm from "@/components/NominationForm";

export const metadata = {
  title: "Mayor’s Arts Awards | Dearborn Community Fund",
  description:
    "Celebrating excellence in the arts in Dearborn since 1988. Submit your nomination for the 2026 Mayor’s Arts Awards in Studio A at FC&PAC.",
};

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Award className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  HandHeart: <HandHeart className="w-5 h-5" />,
  Award: <Trophy className="w-5 h-5" />,
  Sparkle: <Sparkles className="w-5 h-5" />,
};

export default function MayorsArtsAwardsPage() {
  const honorees2025 = [
    { award: "Artist / Performer Award", name: "Janeen Bodary", role: "Fine Artist & Performer" },
    { award: "Art Educator Award", name: "Niki Cassidy", role: "Inspiring Arts Educator" },
    { award: "Volunteer Award", name: "Karen Holland", role: "Community Volunteer Champion" },
    { award: "Organization Award", name: "Dearborn Fine Arts Club", role: "Arts Advocacy & Exhibitions" },
    { award: "Patron Award", name: "Steven & Faye Adelson", role: "Steven Bernard Jewelers" },
    { award: "Special Recognition", name: "Sunshine Durant", role: "POP Director & Mentor" },
    { award: "2025 Mayor’s Award", name: "Haroutioun Bastajian", role: "Presented by Mayor Abdullah H. Hammoud" },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs & Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Mayor’s Arts Awards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Mayor’s Arts Awards
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            Since 1988, the Mayor’s Arts Awards have acknowledged and encouraged the remarkable cultural contributions made by Dearborn’s most creative, dedicated, and generous leaders.
          </p>
        </div>

        {/* 2026 Event Details Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> 2026 Annual Gala Presentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Join Us for the 2026 Mayor’s Arts Awards
              </h2>
              <p className="text-amber-50 text-sm sm:text-base leading-relaxed">
                The public is warmly invited to attend the awards presentation ceremony and reception honoring Dearborn artists, educators, patrons, and volunteers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl text-white">
                  <Calendar className="w-4 h-4 text-amber-200 mb-1" />
                  <div className="text-xs font-bold">Monday, May 20, 2026</div>
                  <div className="text-[11px] text-amber-100">7:00 PM EST</div>
                </div>
                <div className="bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl text-white">
                  <MapPin className="w-4 h-4 text-amber-200 mb-1" />
                  <div className="text-xs font-bold">Studio A, FC&PAC</div>
                  <div className="text-[11px] text-amber-100">15801 Michigan Ave.</div>
                </div>
                <div className="bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl text-white">
                  <Clock className="w-4 h-4 text-amber-200 mb-1" />
                  <div className="text-xs font-bold">Free & Open to Public</div>
                  <div className="text-[11px] text-amber-100">Reception Follows</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Nomination Deadline
              </div>
              <div className="text-2xl font-black text-rose-600 my-1">
                March 20, 2026
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Nominate an outstanding Dearborn artist, educator, or supporter below.
              </p>
              <a
                href="#nominate-form"
                className="w-full inline-block py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Go to Digital Nomination Form
              </a>
            </div>

          </div>
        </div>

        {/* Award Categories Grid */}
        <div className="space-y-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Recognition Categories
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Seven Prestigious Categories of Excellence
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Nominations are evaluated based on artistic achievement, dedication to community, and educational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARD_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    {iconMap[cat.icon] || <Award className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                {cat.recentWinner && (
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-700">
                    <strong>2025 Recipient:</strong> {cat.recentWinner}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2025 Honorees Hall of Fame */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
              Recent Honorees
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mt-3">
              2025 Mayor’s Arts Awards Honorees
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Presented in Studio A with keynote presentation by Mayor Abdullah H. Hammoud.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {honorees2025.map((h, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-4.5 hover:bg-white/10 transition-all"
              >
                <div className="text-xs font-bold text-amber-400">{h.award}</div>
                <div className="text-base font-bold text-white mt-1">{h.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{h.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 text-center">
            2025 Awards Generously Supported by <strong>Dearborn Federal Savings Bank</strong>, <strong>Ameriprise Financial – Jim Thorpe, CFP, AWMA</strong>, and <strong>Dearborn Dairy Queen on Greenfield</strong>.
          </div>
        </div>

        {/* Digital Nomination Form Section */}
        <div id="nominate-form" className="scroll-mt-24">
          <NominationForm />
        </div>

      </div>
    </div>
  );
}

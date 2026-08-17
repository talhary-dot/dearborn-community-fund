import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  PROGRAMS, 
  DIA_LOCATIONS, 
  SITE_METADATA 
} from "@/lib/data";
import { 
  Palette, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  ExternalLink,
  Mail,
  Phone,
  FileText
} from "lucide-react";
import DiaWalkMap from "@/components/DiaWalkMap";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const isPop = slug === "pockets-of-perception";
  const isDia = slug === "dia-inside-out";
  const isGallery = slug === "padzieski-art-gallery";
  const isYouth = slug === "youth-arts-festival";
  const isAprilArts = slug === "april-arts-dearborn";

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:underline">Programs</Link>
          <span>/</span>
          <span className="text-slate-700">{program.title}</span>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold badge-blue">
              <Sparkles className="w-3.5 h-3.5" /> {program.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {program.title}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {program.shortDescription}
            </p>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              {isPop && (
                <a
                  href="https://docs.google.com/document/d/1tDwLoKJiJGVb5rhktyBKYs1GpMXXcdmW/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all"
                >
                  <span>Download 2026 POP Application (Google Doc)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <Link
                href="/give"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-all"
              >
                <Heart className="w-3.5 h-3.5 fill-white/80" />
                <span>Support This Initiative</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 relative group h-80 sm:h-96">
              <img
                src={program.featuredImage}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-slate-900/70 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                {program.title} • Dearborn Community Fund
              </div>
            </div>
          </div>
        </div>

        {/* Details & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Program Overview & Mission
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {program.fullDescription}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Program Pillars & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* POP Specific Deep Dive */}
            {isPop && (
              <div className="space-y-8">
                {/* 2026 Application Callout */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Now Recruiting Summer 2026 Team
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Pockets of Perception 2026 Summer Design Team
                  </h3>
                  <p className="text-sm font-medium leading-relaxed">
                    POP is open to students attending any Wayne County school who are entering their junior year in fall 2026. Members commit to a three-month apprentice period from mid-June through mid-August.
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://docs.google.com/document/d/1tDwLoKJiJGVb5rhktyBKYs1GpMXXcdmW/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                    >
                      <span>Open POP Application Document</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:communityfund@dearborn.gov?subject=POP%202026%20Application%20Inquiry"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/90 text-slate-900 text-xs font-bold hover:bg-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Program Inquiry</span>
                    </a>
                  </div>

                  <div className="text-xs font-bold pt-2 border-t border-slate-900/10">
                    Application Deadline: April 17, 2026 • Interviews Scheduled 10:00 AM – 12:00 PM
                  </div>
                </div>

                {/* 2024 Mural Dedication Legacy */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    2024 “Colors of Community” Mural Project
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dedicated on July 31 at the Ford Community & Performing Arts Center as a gift to City Recreation. Created by 15 student apprentices under Artist/Teacher Sunshine Durant and Guest Artist/Mentor Daniel Cascardo.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900 mb-2 text-sm">2024 Student Design Team:</div>
                      <div className="text-slate-600 leading-relaxed">
                        Malak Abdulroda, Amina Bazzi, Kole Catris, Addison Cleveland, Steven Durant, Amanda Eldaw, Camilla Gomez, Lily Martinez, Serena Salameh, Ashe Watson, Liliana Wilgen.
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900 mb-2 text-sm">Graduate Mentors & Leadership:</div>
                      <div className="text-slate-600 leading-relaxed">
                        Lauren Boyce, Iliana Sarkisian, Isabela Sierzputowski, Zeinab Zorkot.<br />
                        <strong>Team Director:</strong> Sunshine Durant<br />
                        <strong>Guest Artist:</strong> Daniel Cascardo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DIA Inside Out Map Component */}
            {isDia && <DiaWalkMap />}

            {/* Padzieski Art Gallery Schedule */}
            {isGallery && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Visiting Padzieski Art Gallery
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Located directly across from the Michael A. Guido Theater inside the Ford Community & Performing Arts Center (15801 Michigan Ave, Dearborn, MI).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                    <div className="text-xs font-bold text-blue-900 uppercase">Wed – Fri</div>
                    <div className="text-base font-extrabold text-blue-700 mt-1">12:00 PM – 6:00 PM</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                    <div className="text-xs font-bold text-blue-900 uppercase">Saturday</div>
                    <div className="text-base font-extrabold text-blue-700 mt-1">12:00 PM – 4:00 PM</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <div className="text-xs font-bold text-amber-900 uppercase">Theater Nights</div>
                    <div className="text-base font-extrabold text-amber-700 mt-1">Pre-Show Access</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Info Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Program Information
              </h3>

              {program.details?.location && (
                <div className="flex items-start gap-3 text-xs">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Location:</strong>
                    <span className="text-slate-600">{program.details.location}</span>
                  </div>
                </div>
              )}

              {program.details?.schedule && (
                <div className="flex items-start gap-3 text-xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Schedule:</strong>
                    <span className="text-slate-600">{program.details.schedule}</span>
                  </div>
                </div>
              )}

              {program.details?.targetAudience && (
                <div className="flex items-start gap-3 text-xs">
                  <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Audience / Eligibility:</strong>
                    <span className="text-slate-600">{program.details.targetAudience}</span>
                  </div>
                </div>
              )}

              {program.details?.admission && (
                <div className="flex items-start gap-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Admission / Fee:</strong>
                    <span className="text-slate-600">{program.details.admission}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/give"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-all"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Donate to This Program</span>
                </Link>
              </div>
            </div>

            {/* Other Programs Nav */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Other DCF Programs
              </h4>
              <div className="space-y-1.5">
                {PROGRAMS.filter(p => p.slug !== program.slug).map((other) => (
                  <Link
                    key={other.slug}
                    href={`/projects/${other.slug}`}
                    className="block p-2.5 rounded-xl hover:bg-white hover:shadow-xs transition-all text-xs font-semibold text-slate-700 hover:text-blue-700"
                  >
                    • {other.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

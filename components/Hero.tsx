"use client";

import React from "react";
import Link from "next/link";
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Users, 
  Award, 
  Calendar, 
  CheckCircle,
  MapPin
} from "lucide-react";
import { STATS, SITE_METADATA } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Soft Background Art Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-rose-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold badge-warm mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>501(c)(3) Nonprofit Arts & Community Leadership</span>
          </div>

          {/* Grand Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.15]">
            Where Dearborn’s <br className="hidden sm:inline" />
            <span className="gradient-text-blue">Creativity & Culture</span> <br className="hidden sm:inline" />
            Come Alive
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            From the <strong className="text-slate-900 font-semibold">Pockets of Perception</strong> student mural apprentices to the annual <strong className="text-slate-900 font-semibold">Youth in Arts Festival</strong> and prestigious <strong className="text-slate-900 font-semibold">Mayor’s Arts Awards</strong>, we enrich every corner of Dearborn.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/give"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-base shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Heart className="w-5 h-5 fill-white/80" />
              <span>Make a Tax-Deductible Gift</span>
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-700">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tax-Deductible 501(c)(3)</span>
            <span className="text-slate-300">•</span>
            <span>Headquartered at Ford Community & Performing Arts Center</span>
          </div>

        </div>

        {/* Feature Interactive Cards / Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: POP */}
          <Link
            href="/projects/pockets-of-perception"
            className="glass-card rounded-3xl p-7 hover-lift group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 font-bold">
                <Palette className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  Applications Open
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Pockets of Perception (POP)
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Empowering high school apprentice design teams to collaborate with master artists and fabricate landmark public murals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
              <span>View Apprentice Program</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </Link>

          {/* Card 2: Mayor's Arts Awards */}
          <Link
            href="/mayors-arts-awards"
            className="glass-card rounded-3xl p-7 hover-lift group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  Annual Civic Gala
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Mayor’s Arts Awards
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Celebrating exceptional artists, educators, patrons, volunteers, and organizations advancing cultural vibrancy in Dearborn since 1988.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
              <span>Submit a Nomination</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </Link>

          {/* Card 3: April Arts & Youth Festival */}
          <Link
            href="/projects/youth-arts-festival"
            className="glass-card rounded-3xl p-7 hover-lift group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-5 font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                  400+ Youth Talents
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                Youth in Arts & Padzieski
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Showcasing vocal, instrumental, and visual art from Dearborn Public Schools and Henry Ford College students at FC&PAC.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
              <span>Explore Student Showcase</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </Link>

        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? "sm:pl-6" : ""} text-center sm:text-left`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-700 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

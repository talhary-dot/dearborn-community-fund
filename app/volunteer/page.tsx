import React from "react";
import Link from "next/link";
import { Users, Heart, Sparkles, Smile, ShieldCheck, Phone, Mail } from "lucide-react";
import VolunteerForm from "@/components/VolunteerForm";
import { SITE_METADATA } from "@/lib/data";

export const metadata = {
  title: "Volunteer Opportunities | Dearborn Community Fund",
  description:
    "Join the Dearborn Community Fund volunteer team for the Youth in Arts Festival, Homecoming Festival info booth, student workshops, and theater fundraisers.",
};

export default function VolunteerPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Volunteer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Volunteer With Dearborn Community Fund
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            We depend on passionate community members who share their talents and time to support student workshops, art exhibitions, theater galas, and community festivals.
          </p>
        </div>

        {/* Featured Image & Intro Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Community Team Spirit
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Light, Fulfilling & Community-Centered Work
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most volunteer activities involve welcoming guests to cultural events, assisting young children with hands-on craft projects at the Youth in Arts Festival, staffing the Dearborn Homecoming Festival information booth, and ushering for Saturday Night Alive theater fundraisers.
            </p>
            <div className="pt-2 text-xs text-slate-700">
              High school and college students can receive verified community service hours!
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="https://i0.wp.com/dearborncommunityfund.org/wp-content/uploads/2014/03/dcf-support-team-700.jpg?resize=634%2C272&ssl=1"
                alt="Dearborn Community Fund Volunteers"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Volunteer Sign-up Form */}
        <VolunteerForm />

      </div>
    </div>
  );
}

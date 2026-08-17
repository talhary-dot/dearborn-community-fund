"use client";

import React, { useState } from "react";
import { 
  Users, 
  Send, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  Calendar, 
  Smile, 
  Check 
} from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

export default function VolunteerForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "Weekends & Evenings",
    comments: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const volunteerOptions = [
    {
      id: "youth-arts",
      label: "Youth in Arts Festival",
      desc: "Assist young children with craft workshops, welcoming guest families, and stage directing.",
    },
    {
      id: "homecoming",
      label: "Dearborn Homecoming Festival Booth",
      desc: "Staff the community information booth and distribute event programs.",
    },
    {
      id: "workshops",
      label: "Student Art & Writing Workshops",
      desc: "Provide light assistant work during school break workshops at FC&PAC.",
    },
    {
      id: "saturday-night",
      label: "Saturday Night Alive Theater Gala",
      desc: "Help usher, greet patrons, and coordinate theater lobby fundraisers.",
    },
    {
      id: "pop-mentor",
      label: "POP Apprentice Design Support",
      desc: "Assist master artists and student teams with setup and mural painting.",
    },
    {
      id: "committee",
      label: "DCF Cultural Committee & Planning",
      desc: "Join community planning committees for arts month and fundraising.",
    },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-10 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-400/20 text-blue-300 border border-blue-400/30 mb-3">
            <Users className="w-3.5 h-3.5" /> Community Volunteer Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Share Your Talents & Time with Dearborn
          </h2>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            The Dearborn Community Fund depends on enthusiastic volunteers. Most roles involve light, fulfilling work like assisting children with art projects, greeting guests, and directing participants.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
          
          {/* Volunteer Interests */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>Select Areas of Interest (Choose any):</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {volunteerOptions.map((opt) => {
                const checked = selectedInterests.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleInterest(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 ${
                      checked
                        ? "bg-blue-50/90 border-blue-600 ring-1 ring-blue-600/20 shadow-sm"
                        : "bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-lg mt-0.5 shrink-0 flex items-center justify-center border ${
                      checked ? "bg-blue-700 text-white border-blue-700" : "border-slate-300 bg-white"
                    }`}>
                      {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{opt.label}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{opt.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900">
              Your Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Lin"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(313) 555-0145"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Availability
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="Weekends & Evenings">Weekends & Evenings</option>
                  <option value="Weekday Mornings">Weekday Mornings</option>
                  <option value="Weekday Afternoons">Weekday Afternoons</option>
                  <option value="Flexible / As Needed">Flexible / As Needed</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Comments, Experience or Special Skills (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Tell us about any arts background, student group affiliation, or languages spoken..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700">
              Questions? Email EmmaJean Woodyard at <a href="mailto:ewoodyard@dearborn.gov" className="text-blue-700 font-semibold underline">ewoodyard@dearborn.gov</a> or call 313-943-5478.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Join as Volunteer</span>
                </>
              )}
            </button>
          </div>

        </form>
      ) : (
        <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            Thank You, {formData.name}!
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            Your volunteer interest has been submitted to the Dearborn Community Fund team. EmmaJean Woodyard or our program manager will reach out with upcoming project orientations.
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedInterests([]);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  availability: "Weekends & Evenings",
                  comments: "",
                });
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              Register Another Volunteer
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

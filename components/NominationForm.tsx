"use client";

import React, { useState } from "react";
import { 
  Award, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Info, 
  Printer, 
  User, 
  Mail, 
  FileText, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  HandHeart,
  Palette
} from "lucide-react";
import { AWARD_CATEGORIES, SITE_METADATA } from "@/lib/data";

export default function NominationForm() {
  const [category, setCategory] = useState("Artist / Performer Award");
  const [nomineeName, setNomineeName] = useState("");
  const [nomineeEmail, setNomineeEmail] = useState("");
  const [nomineePhone, setNomineePhone] = useState("");
  const [nomineeOrg, setNomineeOrg] = useState("");
  
  const [nominatorName, setNominatorName] = useState("");
  const [nominatorEmail, setNominatorEmail] = useState("");
  const [nominatorPhone, setNominatorPhone] = useState("");
  
  const [statement, setStatement] = useState("");
  const [accomplishments, setAccomplishments] = useState("");
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [nominationId, setNominationId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setNominationId(`MAA-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 2026 Nominations Open
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Mayor’s Arts Awards Nomination Form
          </h2>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            Presented on Monday, May 20, 2026 at 7:00 PM in Studio A at the Ford Community & Performing Arts Center. Submit your nomination below or email to EmmaJean Woodyard at ewoodyard@dearborn.gov.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">
          
          {/* Step 1: Select Category */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">1</span>
              <span>Select Award Category</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {AWARD_CATEGORIES.filter(c => !c.title.includes("Special")).map((cat) => {
                const isSelected = category === cat.title;
                return (
                  <button
                    key={cat.title}
                    type="button"
                    onClick={() => setCategory(cat.title)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-amber-50/80 border-amber-500 shadow-sm ring-1 ring-amber-500/40"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900">
                        <Award className={`w-4 h-4 ${isSelected ? "text-amber-600" : "text-slate-400"}`} />
                        <span>{cat.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                        {cat.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Nominee Information */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">2</span>
              <span>Nominee Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominee / Organization Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nomineeName}
                  onChange={(e) => setNomineeName(e.target.value)}
                  placeholder="e.g., Janeen Bodary or Dearborn Fine Arts Club"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominee Email (if known)
                </label>
                <input
                  type="email"
                  value={nomineeEmail}
                  onChange={(e) => setNomineeEmail(e.target.value)}
                  placeholder="nominee@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominee Phone Number
                </label>
                <input
                  type="tel"
                  value={nomineePhone}
                  onChange={(e) => setNomineePhone(e.target.value)}
                  placeholder="(313) 555-0199"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nominee Organization / Affiliation / Field
                </label>
                <input
                  type="text"
                  value={nomineeOrg}
                  onChange={(e) => setNomineeOrg(e.target.value)}
                  placeholder="e.g., Ceramic Arts, Dearborn Public Schools Music Dept, Local Theater"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Nomination Narrative & Accomplishments */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">3</span>
              <span>Nomination Narrative & Impact</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Statement of Support & Community Impact <span className="text-rose-500">*</span>
              </label>
              <p className="text-[11px] text-slate-700 mb-2">
                Explain how this nominee has demonstrated excellence, impacted Dearborn’s cultural life, and inspired others.
              </p>
              <textarea
                rows={4}
                required
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Describe the nominee’s creative excellence, leadership, and contribution to Dearborn..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Projects, Exhibitions, or Milestones (Optional)
              </label>
              <textarea
                rows={3}
                value={accomplishments}
                onChange={(e) => setAccomplishments(e.target.value)}
                placeholder="List major exhibitions, awards, volunteer milestones, or student achievements..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Step 4: Nominator Contact Info */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">4</span>
              <span>Your Information (Nominator)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nominatorName}
                  onChange={(e) => setNominatorName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={nominatorEmail}
                  onChange={(e) => setNominatorEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Phone <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={nominatorPhone}
                  onChange={(e) => setNominatorPhone(e.target.value)}
                  placeholder="(313) 555-0100"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submission Notice & Button */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700">
              Nomination Deadline: <strong>March 20, 2026</strong>. Materials will be reviewed by the DCF Selection Committee.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md shadow-amber-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Nomination...</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  <span>Submit Nomination</span>
                </>
              )}
            </button>
          </div>

        </form>
      ) : (
        /* Success Screen */
        <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nomination Successfully Submitted!
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            Thank you for honoring Dearborn’s creative leaders. Your nomination for <strong className="text-slate-900">{nomineeName}</strong> under the <strong className="text-slate-900">{category}</strong> category has been received by EmmaJean Woodyard and the Mayor’s Arts Awards Selection Committee.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Confirmation Code:</span>
              <span className="font-mono font-bold text-slate-900">{nominationId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Nominee:</span>
              <span className="font-bold text-slate-900">{nomineeName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Category:</span>
              <span className="font-bold text-amber-800">{category}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-700">Ceremony Date:</span>
              <span className="font-bold text-slate-900">Monday, May 20, 2026 @ 7:00 PM in Studio A</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Copy</span>
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                setNomineeName("");
                setNomineeEmail("");
                setNomineePhone("");
                setNomineeOrg("");
                setStatement("");
                setAccomplishments("");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <span>Submit Another Nomination</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Heart, Sparkles, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import DonationForm from "@/components/DonationForm";
import { SITE_METADATA } from "@/lib/data";

export const metadata = {
  title: "Give Online | Dearborn Community Fund",
  description:
    "Make a secure, 501(c)(3) tax-deductible donation to the Dearborn Community Fund. Support youth public art, student theater, and gallery programs.",
};

export default function GivePage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Give Online</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Invest in Dearborn’s Cultural Future
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            You can help the Community Fund by providing a donation to fund a specific project or make an unrestricted gift to support our overarching mission to enhance quality of life in Dearborn.
          </p>
        </div>

        {/* Interactive Giving Form Component */}
        <DonationForm />

        {/* Information & FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">501(c)(3) Tax Exemption</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Dearborn Community Fund is a registered 501(c)(3) nonprofit organization. Contributions are tax-deductible to the full extent permissible by law.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Designated Giving</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct your gift specifically to Pockets of Perception (POP), Padzieski Art Gallery, Michael A. Guido Theater, Dearborn Community Chorus, or Youth in Arts.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Donations by Mail or Phone</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prefer to send a check? Mail to: <strong>Dearborn Community Fund, 15801 Michigan Ave, Dearborn, MI 48126</strong> or call Executive Director EmmaJean Woodyard at <strong>(313) 943-5478</strong>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

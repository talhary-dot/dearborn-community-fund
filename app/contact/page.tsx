import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Building, Navigation, ExternalLink, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SITE_METADATA } from "@/lib/data";

export const metadata = {
  title: "Contact Us | Dearborn Community Fund",
  description:
    "Contact the Dearborn Community Fund office at the Ford Community & Performing Arts Center. Phone: 313-943-5478, Address: 15801 Michigan Ave, Dearborn, MI.",
};

export default function ContactPage() {
  const gMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ford Community and Performing Arts Center 15801 Michigan Ave Dearborn MI 48126")}`;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Dearborn Community Fund
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            We’d love to hear from you. Reach out to discuss tax-deductible donations, grant opportunities, committee positions, or general inquiries.
          </p>
        </div>

        {/* Contact Information & Map Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Direct Contact
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-700 font-semibold">Phone Number:</div>
                  <a href="tel:313-943-5478" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                    (313) 943-5478
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-700 font-semibold">Director Email:</div>
                  <a href="mailto:ewoodyard@dearborn.gov" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
                    ewoodyard@dearborn.gov
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-700 font-semibold">General Inquiries:</div>
                  <a href="mailto:communityfund@dearborn.gov" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
                    communityfund@dearborn.gov
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Office & Mailing Address
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="block text-slate-900 text-sm">Dearborn Community Fund</strong>
                  Ford Community & Performing Arts Center (FC&PAC)<br />
                  15801 Michigan Ave.<br />
                  Dearborn, MI 48126
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={gMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}

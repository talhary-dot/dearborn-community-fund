"use client";

import React, { useState } from "react";
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Lock, 
  Sparkles, 
  DollarSign, 
  FileText, 
  Printer, 
  ArrowRight,
  HelpCircle,
  Building,
  Check
} from "lucide-react";
import { DONATION_FUNDS, SITE_METADATA } from "@/lib/data";

export default function DonationForm() {
  const [selectedFund, setSelectedFund] = useState("unrestricted");
  const [amount, setAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [eventDetails, setEventDetails] = useState("");

  // Donor Details
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "MI",
    zip: "",
    country: "United States",
    comments: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const presetAmounts = [25, 50, 100, 250, 500, 1000, 5000];

  const handleAmountClick = (val: number) => {
    setIsCustom(false);
    setAmount(val);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      setTransactionId(`DCF-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const currentFundObj = DONATION_FUNDS.find((f) => f.id === selectedFund) || DONATION_FUNDS[0];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 501(c)(3) Tax-Deductible Contribution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Support Arts, Culture & Community in Dearborn
          </h2>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            Your generous tax-deductible gift empowers young artist apprentices, supports student theater, funds public gallery exhibitions, and preserves cultural programs citywide.
          </p>
        </div>
      </div>

      {!isCompleted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">
          
          {/* Step 1: Designate Your Gift */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">1</span>
                <span>Select Your Donation Designation</span>
              </h3>
              <span className="text-xs text-slate-700">Choose fund or general</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {DONATION_FUNDS.map((fund) => {
                const isSelected = selectedFund === fund.id;
                return (
                  <button
                    key={fund.id}
                    type="button"
                    onClick={() => setSelectedFund(fund.id)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-50/90 border-blue-600 shadow-sm ring-1 ring-blue-600/30"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-slate-900">{fund.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                        {fund.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedFund === "unrestricted" && (
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>General unrestricted donations provide essential flexibility to meet urgent community arts needs.</span>
              </div>
            )}

            {/* Optional event name field */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Event Ticket or Specific Sponsorship Details (Optional):
              </label>
              <input
                type="text"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
                placeholder="e.g., Mayor’s Arts Awards Table, Saturday Night Alive, Memorial Tribute"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Step 2: Choose Amount & Frequency */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">2</span>
                <span>Select Contribution Amount</span>
              </h3>
              
              {/* Frequency Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency("once")}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    frequency === "once" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600"
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    frequency === "monthly" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600"
                  }`}
                >
                  Monthly Sustainer
                </button>
              </div>
            </div>

            {/* Amount Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {presetAmounts.map((preset) => {
                const isSelected = !isCustom && amount === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAmountClick(preset)}
                    className={`py-3 px-2 rounded-2xl text-sm font-bold border transition-all ${
                      isSelected
                        ? "bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20 scale-105"
                        : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    ${preset}
                  </button>
                );
              })}

              {/* Custom Amount Button/Input */}
              <div className="col-span-3 sm:col-span-4 lg:col-span-1">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Custom"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={`w-full py-3 pl-6 pr-2 rounded-2xl text-xs font-bold border transition-all text-center ${
                      isCustom
                        ? "bg-blue-50 border-blue-600 text-blue-900 ring-1 ring-blue-600"
                        : "bg-white border-slate-200 text-slate-800"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Donor Information */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">3</span>
              <span>Donor & Tax Receipt Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  First Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="e.g. Eleanor"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Last Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="e.g. Ford"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (for Tax Receipt) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(313) 555-0123"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Street Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Cultural Way"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  City <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Dearborn"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    State <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none uppercase"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ZIP Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="48126"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Donation Comments or Dedication (Optional):
                </label>
                <textarea
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="In honor of / In memory of / Project preference"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payment & Security Notice */}
          <div className="pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs text-slate-600">
                <div className="font-bold text-slate-900">Secure Payment Processing via PayPal & Major Cards</div>
                <div>You do not need a PayPal account to donate; credit & debit cards are accepted directly.</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-base shadow-lg shadow-blue-700/25 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing Gift...</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Donate ${amount} {frequency === "monthly" ? "/ Month" : "Now"}</span>
                </>
              )}
            </button>
          </div>

        </form>
      ) : (
        /* Completion & Tax Receipt View */
        <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Thank You for Your Generous Support!
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            Your gift of <strong className="text-slate-900">${amount}</strong> to the <strong className="text-slate-900">{currentFundObj.title}</strong> has been successfully received. A confirmation and official 501(c)(3) tax receipt has been emailed to <strong className="text-slate-900">{formData.email}</strong>.
          </p>

          {/* Receipt Summary Card */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left text-xs space-y-2.5">
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Transaction ID:</span>
              <span className="font-mono font-bold text-slate-900">{transactionId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Donor Name:</span>
              <span className="font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Fund Designation:</span>
              <span className="font-bold text-blue-700">{currentFundObj.title}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/80 pb-2">
              <span className="text-slate-700">Gift Amount:</span>
              <span className="font-bold text-emerald-700">${amount} ({frequency === "monthly" ? "Monthly" : "One-Time"})</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-700">Tax Exempt Status:</span>
              <span className="font-bold text-slate-900">501(c)(3) Eligible for Full Tax Deduction</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Receipt</span>
            </button>

            <button
              onClick={() => {
                setIsCompleted(false);
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  address: "",
                  city: "",
                  state: "MI",
                  zip: "",
                  country: "United States",
                  comments: "",
                });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <span>Make Another Contribution</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

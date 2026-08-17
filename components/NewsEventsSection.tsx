"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Tag, 
  ChevronRight, 
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { NEWS_ITEMS, EVENTS, EventItem, NewsItem } from "@/lib/data";

export default function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState<"events" | "news">("events");
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  const handleAddToCalendar = (event: EventItem) => {
    // Generate Google Calendar Link
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description + " - Dearborn Community Fund");
    const location = encodeURIComponent(event.location);
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(gCalUrl, "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tab Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold badge-warm mb-3">
              <CalendarIcon className="w-3.5 h-3.5 text-amber-700" />
              <span>What’s Happening In Dearborn</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Events, Announcements & News
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Mark your calendar for upcoming award galas, youth application deadlines, and gallery exhibitions.
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("events")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "events"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Upcoming Events ({EVENTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "news"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Latest News ({NEWS_ITEMS.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Upcoming Events Grid */}
        {activeTab === "events" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENTS.map((event) => (
                <div
                  key={event.id}
                  className={`rounded-3xl p-6 border transition-all hover-lift flex flex-col justify-between ${
                    event.isFeatured
                      ? "bg-gradient-to-br from-blue-50/80 via-white to-amber-50/40 border-blue-200/80 shadow-md ring-1 ring-blue-500/10"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div>
                    {/* Category & Featured Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {event.category}
                      </span>
                      {event.isFeatured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300">
                          <Sparkles className="w-3 h-3 text-amber-600" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                      {event.title}
                    </h3>

                    {/* Meta info */}
                    <div className="space-y-2 text-xs text-slate-600 mb-4 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 font-semibold text-slate-800">
                        <CalendarIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {event.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleAddToCalendar(event)}
                      className="text-xs font-bold text-slate-700 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                      title="Add to Google Calendar"
                    >
                      <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                      <span>Add to GCal</span>
                    </button>

                    {event.actionUrl && (
                      <Link
                        href={event.actionUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        <span>{event.actionLabel || "View"}</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* View Full Calendar Footer */}
            <div className="text-center pt-8">
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Browse Full Dearborn Cultural Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2: Latest News Grid */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover-lift flex flex-col justify-between group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-white shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-700 mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center text-xs font-bold text-blue-700 group-hover:text-blue-800"
                    >
                      <span>Read Full Story</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ITEMS } from "@/lib/data";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2, Sparkles, Heart } from "lucide-react";

export function generateStaticParams() {
  return NEWS_ITEMS.map((n) => ({
    slug: n.slug,
  }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_ITEMS.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = NEWS_ITEMS.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <Link
          href="/calendar"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All News & Events</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full badge-blue">
              {article.category}
            </span>
            {article.badge && (
              <span className="text-xs font-bold px-3 py-1 rounded-full badge-warm">
                {article.badge}
              </span>
            )}
            <span className="text-xs text-slate-700 font-medium flex items-center gap-1.5 ml-2">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed border-l-4 border-blue-600 pl-4 py-1 italic bg-blue-50/40 rounded-r-xl">
            {article.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 mb-10 max-h-[480px]">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-800 leading-relaxed text-base">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Action box inside article */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-slate-900">Support Dearborn Cultural Initiatives</div>
              <div className="text-xs text-slate-600">Your tax-deductible contribution directly funds youth public art and events.</div>
            </div>
            <Link
              href="/give"
              className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate Now</span>
            </Link>
          </div>
        </div>

        {/* Related News Carousel */}
        <div className="pt-12 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            More Stories & Announcements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherArticles.map((other) => (
              <Link
                key={other.id}
                href={`/news/${other.slug}`}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover-lift group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-700 block mb-1">
                    {other.date}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                </div>
                <div className="text-[11px] font-semibold text-blue-700 flex items-center gap-1 mt-3">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

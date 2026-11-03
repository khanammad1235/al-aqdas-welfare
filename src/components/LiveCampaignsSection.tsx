import { useState } from 'react'
import {
  Flame, Heart, Users, Calendar, ArrowRight, ShieldCheck,
  CheckCircle2, Clock, Globe, Filter
} from 'lucide-react'
import { CAMPAIGNS, type Campaign } from '../data/ngoData'

interface LiveCampaignsSectionProps {
  onDonateToCampaign?: (campaign: Campaign) => void
}

export default function LiveCampaignsSection({ onDonateToCampaign }: LiveCampaignsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Active Missions' },
    { id: 'nutrition', label: 'Food & Nutrition' },
    { id: 'education', label: 'Education & Schools' },
    { id: 'healthcare', label: 'Free Healthcare' },
    { id: 'emergency', label: 'Disaster Contingency' },
  ]

  const filteredCampaigns = selectedCategory === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === selectedCategory)

  return (
    <section className="py-16 sm:py-20 bg-white" id="active-campaigns">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 mb-3">
              <Flame className="w-3.5 h-3.5 text-rose-600 animate-pulse" /> Live Ground Campaigns
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
              Active Missions In The Field
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
              Every initiative is backed by real-time target milestones, direct operational logistics,
              and strict transparency oversight. Track contributions live.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCampaigns.map((camp) => {
            const percentage = Math.min(100, Math.round((camp.raised / camp.goal) * 100))
            const isUrgent = camp.status === 'urgent'

            return (
              <div
                key={camp.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image Container with Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-900/85 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {camp.sdgGoal}
                    </span>
                    {isUrgent && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-rose-600 text-white animate-pulse flex items-center gap-1 shadow-sm">
                        <Flame className="w-3 h-3" /> Urgent Need
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium">
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-emerald-400" /> {camp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {camp.daysLeft} days left
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                      {camp.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {camp.summary}
                    </p>

                    {/* Beneficiary Pill */}
                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5 text-emerald-600" />
                      Target Impact: {camp.beneficiaryTarget}
                    </div>
                  </div>

                  {/* Financial Progress & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        ₹{(camp.raised / 100000).toFixed(2)}L
                        <span className="text-slate-400 font-normal text-xs ml-1 font-sans">
                          raised of ₹{(camp.goal / 100000).toFixed(2)}L
                        </span>
                      </span>
                      <span className="font-mono font-bold text-emerald-700 text-xs bg-emerald-50 px-2 py-0.5 rounded">
                        {percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4">
                      <span>{camp.donorsCount} verified donors</span>
                      <span>80G Tax Deductible</span>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={() => onDonateToCampaign && onDonateToCampaign(camp)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs group-hover:bg-emerald-700"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                      Support This Initiative
                      <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

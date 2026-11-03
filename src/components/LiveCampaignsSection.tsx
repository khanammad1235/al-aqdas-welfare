import { useState } from 'react'
import { Heart, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react'
import { CAMPAIGNS, type Campaign } from '../data/ngoData'

interface LiveCampaignsSectionProps {
  onDonateToCampaign?: (campaign: Campaign) => void
}

export default function LiveCampaignsSection({ onDonateToCampaign }: LiveCampaignsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Causes' },
    { id: 'nutrition', label: 'Food & Nutrition' },
    { id: 'education', label: 'Education & Schools' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'emergency', label: 'Emergency Relief' },
  ]

  const filteredCampaigns = selectedCategory === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === selectedCategory)

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200" id="active-campaigns">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Active Relief Initiatives
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Current Humanitarian Programs
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1 leading-relaxed">
              Every initiative is backed by specific beneficiary targets, real-time tracking,
              and strict transparency oversight.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((camp) => {
            const percentage = Math.min(100, Math.round((camp.raised / camp.goal) * 100))

            return (
              <div
                key={camp.id}
                className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-[11px] font-semibold rounded bg-slate-900/80 text-white backdrop-blur-xs">
                      {camp.beneficiaryTarget}
                    </span>
                  </div>
                  {camp.status === 'urgent' && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-[11px] font-bold rounded bg-amber-600 text-white">
                        Urgent Need
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {camp.location}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 mt-1 leading-snug line-clamp-2">
                      {camp.title}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {camp.summary}
                    </p>
                  </div>

                  {/* Funding Progress Bar */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                      <span className="text-slate-900 font-bold">
                        ₹{(camp.raised / 100000).toFixed(2)}L
                        <span className="text-slate-500 font-normal"> raised</span>
                      </span>
                      <span className="text-slate-600">
                        {percentage}% of ₹{(camp.goal / 100000).toFixed(1)}L
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                      <span>{camp.donorsCount} supporters</span>
                      <span>{camp.daysLeft} days remaining</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onDonateToCampaign && onDonateToCampaign(camp)}
                      className="w-full mt-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current text-emerald-200" />
                      <span>Support This Cause</span>
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

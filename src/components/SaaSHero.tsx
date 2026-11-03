import { useState } from 'react'
import {
  ShieldCheck, Heart, ArrowRight, Award, CheckCircle2,
  FileText, Users, BookOpen, Utensils
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATUTORY_CREDENTIALS } from '../data/ngoData'

interface SaaSHeroProps {
  onOpenDonate: (amount?: number) => void
  onOpenReceipt: () => void
}

export default function SaaSHero({ onOpenDonate, onOpenReceipt }: SaaSHeroProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500)
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')

  const impactPresets = [
    {
      amount: 1000,
      impact: 'Provides 20 hot, nutritious meals to elderly & daily wage earners',
    },
    {
      amount: 2500,
      impact: 'Funds a 25kg monthly dry ration survival kit for a family of 5',
    },
    {
      amount: 5000,
      impact: 'Covers 3 months of English school tuition, books & uniform for 1 child',
    },
    {
      amount: 10000,
      impact: 'Sponsors a free medical camp with diagnostic tests & free medicines',
    },
  ]

  const activePreset = impactPresets.find((p) => p.amount === selectedAmount) || impactPresets[1]

  return (
    <section className="relative bg-slate-50 border-b border-slate-200 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mission & Institutional Credibility */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="truncate">Regd. Public Charitable Trust F-46725 • 80G Tax-Exempt</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 leading-[1.2] sm:leading-[1.18] tracking-tight">
              Bringing Dignity, Education & Lifesaving Relief to Mumbai’s Slums.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Al Aqdas Welfare Association administers accredited English & Urdu high schools,
              daily community kitchens, and free medical camps for marginalized families across South & Central Mumbai.
              Every rupee is audited by independent Chartered Accountants with full public accountability.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenDonate(selectedAmount)}
                className="w-full sm:w-auto justify-center px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-md transition-colors shadow-xs flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current text-emerald-200" />
                <span>Donate Now via UPI / NetBanking</span>
              </button>

              <button
                type="button"
                onClick={onOpenReceipt}
                className="w-full sm:w-auto justify-center px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-sm rounded-md transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download 80G Tax Receipt</span>
              </button>
            </div>
          </div>

          {/* Right Column: Giving Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Make a Direct Contribution
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% goes directly to field programs
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  80G 50% Tax Exemption
                </span>
              </div>

              {/* Giving Frequency */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg mb-5">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`py-2 text-xs font-semibold rounded transition-colors ${
                    frequency === 'one-time'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Donation
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs font-semibold rounded transition-colors ${
                    frequency === 'monthly'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Support
                </button>
              </div>

              {/* Amount Selection Chips */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Select Donation Amount:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {impactPresets.map((preset) => (
                    <button
                      key={preset.amount}
                      type="button"
                      onClick={() => setSelectedAmount(preset.amount)}
                      className={`py-2.5 px-3 rounded-lg border text-left transition-all ${
                        selectedAmount === preset.amount
                          ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <div className="text-sm">₹{preset.amount.toLocaleString('en-IN')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Impact Descriptor */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 mb-5 leading-relaxed">
                <strong className="text-slate-900 block mb-0.5">Your Impact:</strong>
                {activePreset.impact}
              </div>

              {/* Submit CTA */}
              <button
                type="button"
                onClick={() => onOpenDonate(selectedAmount)}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Proceed to Donate ₹{selectedAmount.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3.5 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>UPI, Google Pay, PhonePe, Cards & Bank Transfer</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
